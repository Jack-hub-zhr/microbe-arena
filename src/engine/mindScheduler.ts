/**
 * 智能体调度器
 * ---------------------------------------------------------------
 * 免费 LLM 的额度是稀缺资源（一分钟几十次），而培养皿里有几百个细胞。
 * 所以这里做三件事：
 *
 *  1. 限流 —— 令牌桶按 RPM 放行，超了直接不发请求；
 *  2. 排队 —— 按「有多该动脑子」给细胞打分：饿了的、被追的、刚变异的优先；
 *  3. 兜底 —— 接口挂了、超时、解析不出来，立刻退回本地策略，
 *     并把当前 provider 降级、重新探测下一个免费接口。
 *
 * 调度器不直接依赖 Simulation，只认 MindHost 接口，方便单测。
 */

import {
  chat,
  discoverProvider,
  fetchFreeModels,
  ProviderError,
  type ChatMessage,
  type ChatResult,
  type ProviderId,
  type ProviderKeys,
  type ProviderModel,
  type ProviderSpec,
} from './llmProviders';
import {
  buildObservation,
  buildPrompt,
  driftPersonality,
  localDecide,
  parseDecision,
  type MindContext,
  type MindDecision,
  type MindState,
} from './minds';
import type { Agent } from './types';

export interface MindHost {
  readonly tick: number;
  aliveAgents(): Agent[];
  getMind(id: number): MindState | undefined;
  observe(agent: Agent): MindContext;
  onDecision(agent: Agent, d: MindDecision): void;
  onMemory(agent: Agent, text: string): void;
}

export interface FeedEntry {
  key: number;
  tick: number;
  agentId: number;
  action: MindDecision['action'];
  target: MindDecision['target'];
  thought: string;
  source: MindDecision['source'];
  hue: number;
}

export type SchedulerStatus = 'off' | 'probing' | 'ready' | 'degraded' | 'unavailable';

export interface SchedulerStats {
  status: SchedulerStatus;
  providerLabel: string;
  modelLabel: string;
  providerId: ProviderId | null;
  rpmLimit: number;
  rpmUsed: number;
  queue: number;
  completed: number;
  failed: number;
  /** 因接口限流被挡下的次数 */
  throttled: number;
  /** 已被 LLM 亲自决策过的个体数 */
  llmAgents: number;
  /** 当前存活个体数 */
  population: number;
  /** 冷却剩余秒数 */
  cooldownLeft: number;
  llmCalls: number;
  tokens: number;
  avgLatencyMs: number;
  lastError: string | null;
  probeNote: string;
}

export type Transport = (
  spec: ProviderSpec,
  model: ProviderModel,
  messages: ChatMessage[],
  key: string | undefined,
) => Promise<ChatResult>;

let feedSeq = 0;

export class MindScheduler {
  host: MindHost | null = null;

  /** 总开关 */
  enabled = false;
  /** LLM 决策对转向的影响力 0~1（0 = 完全听基因的） */
  influence = 0.55;
  /** 每分钟最多发多少请求 */
  rpmLimit = 18;
  /** 同一个体至少隔多少 tick 才再想一次 */
  minThinkGap = 10;
  /** 同时在途的请求数 */
  maxInflight = 2;

  keys: ProviderKeys = {};
  provider: ProviderSpec | null = null;
  model: ProviderModel | null = null;
  status: SchedulerStatus = 'off';
  lastError: string | null = null;
  probeNote = '';

  completed = 0;
  failed = 0;
  /** 因接口限流而被挡下的请求数 */
  throttled = 0;
  llmCalls = 0;
  tokens = 0;
  feed: FeedEntry[] = [];
  /** 已经被 LLM 亲自决策过的个体 —— 「有多少个细胞真正开过脑」 */
  readonly llmAgents = new Set<number>();
  /** 此刻正在等 LLM 回话的个体（渲染层用它们做高亮） */
  readonly pendingIds = new Set<number>();

  /** 限流冷却：这段时间内一个请求都不发 */
  cooldownUntil = 0;
  /** 已因限流自动降速过几次 */
  throttleEvents = 0;

  /** 注入式传输层：测试里可以换成假模型 */
  transport: Transport | null = null;

  private requestTimes: number[] = [];
  private latencies: number[] = [];
  private inflight = 0;
  private abort: AbortController | null = null;
  private discovering = false;

  constructor(host?: MindHost) {
    if (host) this.host = host;
  }

  setHost(host: MindHost) {
    this.host = host;
  }

  /* ───────── 自动找免费接口 ───────── */

  async discover(only: ProviderId | 'auto' = 'auto'): Promise<boolean> {
    if (this.discovering) return false;
    this.discovering = true;
    this.status = 'probing';
    this.probeNote = '正在探测…';
    this.abort?.abort();
    this.abort = new AbortController();
    try {
      const report = await discoverProvider(this.keys, {
        only,
        signal: this.abort.signal,
        onProgress: (id, note) => {
          this.probeNote = `${id}：${note}`;
        },
      });
      if (report.winner) {
        this.provider = report.winner.spec;
        this.model = report.winner.model;
        this.status = 'ready';
        this.lastError = null;
        this.probeNote = `${report.winner.spec.zh} · ${report.winner.model.id} · ${report.winner.latencyMs}ms`;
        // 额度上限跟着接口走，但不超过用户设定的上限
        this.rpmLimit = Math.min(this.rpmLimit, report.winner.spec.rpm);
        return true;
      }
      this.status = 'unavailable';
      this.probeNote = report.tried.map((t) => `${t.id}: ${t.note}`).join(' | ').slice(0, 160);
      this.lastError = '没有找到可用的免费接口';
      return false;
    } catch (err) {
      this.status = 'unavailable';
      this.lastError = err instanceof Error ? err.message : '探测失败';
      return false;
    } finally {
      this.discovering = false;
    }
  }

  /** 换一个接口（用户手动指定） */
  async useProvider(id: ProviderId, modelId?: string) {
    const spec = PROVIDERS_BY_ID[id];
    if (!spec) return false;
    this.provider = spec;
    this.model = { id: modelId ?? spec.fallbackModel.id, zh: modelId ?? spec.fallbackModel.zh, en: modelId ?? spec.fallbackModel.en };
    this.status = 'ready';
    this.probeNote = `${spec.zh} · ${this.model.id}`;
    this.lastError = null;
    return true;
  }

  /** 拉取某接口当前的免费模型列表（OpenRouter / Pollinations 支持） */
  async listModels(id: ProviderId): Promise<ProviderModel[]> {
    const spec = PROVIDERS_BY_ID[id];
    if (!spec) return [];
    return fetchFreeModels(spec, this.keys[id]);
  }

  setKey(id: ProviderId, key: string) {
    this.keys = { ...this.keys, [id]: key.trim() || undefined };
  }

  /* ───────── 每帧驱动 ───────── */

  pump() {
    const host = this.host;
    if (!host || !this.enabled) return;
    if (!this.provider || !this.model) return;
    if (this.status !== 'ready' && this.status !== 'degraded') return;
    if (this.inflight >= this.maxInflight) return;
    if (Date.now() < this.cooldownUntil) return;
    if (!this.takeToken()) return;

    const cand = this.pickCandidate();
    if (!cand) return;

    const mind = host.getMind(cand.id);
    if (!mind) return;

    mind.pending = true;
    this.pendingIds.add(cand.id);
    this.inflight++;

    const ctx = host.observe(cand);
    const obs = buildObservation(ctx, mind.personality, mind.memory);
    const messages = buildPrompt(obs);
    const spec = this.provider;
    const model = this.model;
    const key = this.keys[spec.id];

    const run = this.transport
      ? this.transport(spec, model, messages, key)
      : chat(spec, model.id, messages, key, { timeoutMs: 18_000, maxTokens: 220 });

    void run
      .then((res) => {
        this.inflight--;
        mind.pending = false;
        this.pendingIds.delete(cand.id);
        this.llmCalls++;
        this.tokens += res.tokens;
        this.latencies.push(res.latencyMs);
        if (this.latencies.length > 40) this.latencies.shift();

        const parsed = parseDecision(res.text, host.tick);
        if (!parsed) {
          this.failed++;
          this.lastError = '回答无法解析成决策';
          this.fallback(mind, ctx);
          return;
        }
        this.completed++;
        this.llmAgents.add(cand.id);
        mind.decision = parsed;
        mind.thinkCount++;
        mind.llmThinkCount++;
        mind.lastThinkTick = host.tick;
        mind.goalUntil = host.tick + 26;
        driftPersonality(mind.personality, parsed);
        host.onDecision(cand, parsed);
        this.pushFeed(cand, parsed);
        if (this.status === 'degraded') this.status = 'ready';
      })
      .catch((err: unknown) => {
        this.inflight--;
        mind.pending = false;
        this.pendingIds.delete(cand.id);
        const msg = err instanceof Error ? err.message : String(err);
        this.fallback(mind, ctx);

        if (err instanceof ProviderError && err.rateLimited) {
          // 额度用尽：不换源，而是降速 + 冷却，否则会把配额彻底打爆
          this.throttled++;
          this.throttleEvents++;
          this.lastError = `接口限流，已自动降速到 ${this.rpmLimit}/分钟`;
          this.rpmLimit = Math.max(3, Math.floor(this.rpmLimit * 0.5));
          this.cooldownUntil = Date.now() + 25_000;
          this.status = 'degraded';
          return;
        }

        this.failed++;
        this.lastError = msg.slice(0, 120);
        // 接口彻底不通 → 降级并立刻找下一个
        if (err instanceof ProviderError && err.unreachable) {
          this.status = 'degraded';
          void this.discover('auto');
        }
      });
  }

  /** LLM 失败时的兜底：本地策略顶上，agent 不会哑掉 */
  private fallback(mind: MindState, ctx: MindContext) {
    const d = localDecide(ctx, mind.personality, this.host?.tick ?? 0);
    mind.decision = d;
    mind.thinkCount++;
    mind.lastThinkTick = this.host?.tick ?? 0;
    driftPersonality(mind.personality, d);
  }

  private takeToken(): boolean {
    const now = Date.now();
    this.requestTimes = this.requestTimes.filter((t) => now - t < 60_000);
    if (this.requestTimes.length >= this.rpmLimit) return false;
    this.requestTimes.push(now);
    return true;
  }

  /** 选下一个该动脑子的细胞 */
  private pickCandidate(): Agent | null {
    const host = this.host;
    if (!host) return null;
    const agents = host.aliveAgents();
    let best: Agent | null = null;
    let bestScore = -Infinity;
    for (const a of agents) {
      const mind = host.getMind(a.id);
      if (!mind || mind.pending) continue;
      if (host.tick - mind.lastThinkTick < this.minThinkGap) continue;
      // 便宜的打分：不查网格，只看自身状态
      let score = 100 - Math.min(100, a.energy);
      score += Math.min(a.generation, 30);
      if (a.age < 12) score += 18;
      if (a.alien) score += 12;
      score += Math.random() * 14;
      if (score > bestScore) {
        bestScore = score;
        best = a;
      }
    }
    return best;
  }

  private pushFeed(agent: Agent, d: MindDecision) {
    this.feed.unshift({
      key: ++feedSeq,
      tick: d.tick,
      agentId: agent.id,
      action: d.action,
      target: d.target,
      thought: d.thought,
      source: d.source,
      hue: agent.genome.hue,
    });
    if (this.feed.length > 60) this.feed.length = 60;
  }

  noteMemory(agent: Agent, text: string) {
    const mind = this.host?.getMind(agent.id);
    if (!mind) return;
    mind.memory.push(text);
    if (mind.memory.length > 4) mind.memory.splice(0, mind.memory.length - 4);
  }

  stats(): SchedulerStats {
    const now = Date.now();
    const rpmUsed = this.requestTimes.filter((t) => now - t < 60_000).length;
    // 用中位数：首个请求的冷启动不会把平均延迟拉成一个吓人的数字
    let avg = 0;
    if (this.latencies.length) {
      const sorted = [...this.latencies].sort((a, b) => a - b);
      avg = Math.round(sorted[Math.floor(sorted.length / 2)]);
    }
    return {
      status: this.status,
      providerLabel: this.provider?.zh ?? '未选择',
      modelLabel: this.model?.id ?? '—',
      providerId: this.provider?.id ?? null,
      rpmLimit: this.rpmLimit,
      rpmUsed,
      queue: this.inflight,
      completed: this.completed,
      failed: this.failed,
      throttled: this.throttled,
      llmAgents: this.llmAgents.size,
      population: this.host?.aliveAgents().length ?? 0,
      cooldownLeft: Math.max(0, Math.round((this.cooldownUntil - Date.now()) / 1000)),
      llmCalls: this.llmCalls,
      tokens: this.tokens,
      avgLatencyMs: avg,
      lastError: this.lastError,
      probeNote: this.probeNote,
    };
  }

  reset() {
    this.completed = 0;
    this.failed = 0;
    this.throttled = 0;
    this.llmAgents.clear();
    this.throttleEvents = 0;
    this.cooldownUntil = 0;
    this.llmCalls = 0;
    this.tokens = 0;
    this.feed = [];
    this.requestTimes = [];
    this.latencies = [];
    this.lastError = null;
  }
}

const PROVIDERS_BY_ID: Record<ProviderId, ProviderSpec> = {} as Record<ProviderId, ProviderSpec>;
import { PROVIDERS } from './llmProviders';
for (const p of PROVIDERS) PROVIDERS_BY_ID[p.id] = p;
