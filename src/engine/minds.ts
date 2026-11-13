/**
 * 细胞的心智层
 * ---------------------------------------------------------------
 * 身体归演化引擎管（代谢、捕食、繁殖这些是物理）；
 * 意志归这里管 —— 每个细胞都挂一个 agent：
 *   · 一份可遗传、可漂移的性格（好奇/好斗/合群/谨慎/贪食）
 *   · 一条短记忆（最近几件要紧事）
 *   · 一个当下的决策（追食 / 猎杀 / 逃命 / 求偶 / 探索 / 守家）
 *
 * 决策有两个来源：
 *   'local' —— 效用函数本地算出，永远可用，零成本；
 *   'llm'   —— 免费 LLM 代理算出来的，带一句它自己的理由。
 * 两者协议完全一样，LLM 只是换了个更会盘算的脑袋。
 */

import type { Agent } from './types';

export type MindAction = 'seek_food' | 'hunt' | 'flee' | 'approach_mate' | 'explore' | 'stay';
export type MindTarget = 'none' | 'food' | 'prey' | 'threat' | 'mate' | 'friend';

export const MIND_ACTIONS: MindAction[] = [
  'seek_food',
  'hunt',
  'flee',
  'approach_mate',
  'explore',
  'stay',
];

export const MIND_TARGETS: MindTarget[] = ['none', 'food', 'prey', 'threat', 'mate', 'friend'];

export const ACTION_ZH: Record<MindAction, string> = {
  seek_food: '觅食',
  hunt: '猎杀',
  flee: '逃命',
  approach_mate: '求偶',
  explore: '探索',
  stay: '守家',
};

export const TARGET_ZH: Record<MindTarget, string> = {
  none: '无',
  food: '食物',
  prey: '猎物',
  threat: '威胁',
  mate: '配偶',
  friend: '同伴',
};

export interface Personality {
  /** 好奇：多往外走、主动尝试新东西 */
  curiosity: number;
  /** 好斗：见猎食性对手就想打 */
  aggression: number;
  /** 合群：喜欢贴着同类与群体 */
  sociability: number;
  /** 谨慎：遇到威胁先撤 */
  caution: number;
  /** 贪食：能量越低越冒险去抢 */
  greed: number;
}

export interface MindDecision {
  action: MindAction;
  target: MindTarget;
  /** 0~1，做这件事的急迫程度 */
  urgency: number;
  /** 0~1，愿不愿意为当下的选择承担风险 */
  courage: number;
  /** 0~1，探索倾向 */
  explore: number;
  /** 0~1，合群倾向 */
  social: number;
  /** 0~1，好斗倾向 */
  aggression: number;
  /** 一句话理由，LLM 自己写的 */
  thought: string;
  source: 'llm' | 'local';
  tick: number;
}

export interface MindState {
  agentId: number;
  personality: Personality;
  /** 最近几件要紧事，最多 4 条 */
  memory: string[];
  decision: MindDecision | null;
  /** 当前意图的到期 tick */
  goalUntil: number;
  lastThinkTick: number;
  /** 上次跑本地策略的时间（与 LLM 调度各记各的，互不干扰） */
  lastLocalTick: number;
  thinkCount: number;
  llmThinkCount: number;
  /** 正在排队等 LLM 思考 */
  pending: boolean;
  lastError?: string;
}

export interface MindContext {
  energy: number;
  energyMax: number;
  age: number;
  generation: number;
  size: number;
  organelles: string[];
  strategyZh: string;
  preyDist: number | null;
  threatDist: number | null;
  friendDist: number | null;
  mateDist: number | null;
  foodDist: number | null;
  nPrey: number;
  nHunter: number;
  nSame: number;
  nFood: number;
  /** 这个个体有没有本事捕食（具攻击性结构或本身就是猎手） */
  canHunt: boolean;
  light: number;
  temp: number;
  nutrient: number;
  sense: number;
}

const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);

export function randomPersonality(): Personality {
  return {
    curiosity: Math.random(),
    aggression: Math.random(),
    sociability: Math.random(),
    caution: Math.random(),
    greed: Math.random(),
  };
}

/** 子代继承父母的性格，但带一点变异 */
export function inheritPersonality(parent: Personality | undefined): Personality {
  if (!parent) return randomPersonality();
  const mut = () => clamp01(parent.curiosity + randn() * 0.12);
  const p = {
    curiosity: clamp01(parent.curiosity + randn() * 0.12),
    aggression: clamp01(parent.aggression + randn() * 0.12),
    sociability: clamp01(parent.sociability + randn() * 0.12),
    caution: clamp01(parent.caution + randn() * 0.12),
    greed: clamp01(parent.greed + randn() * 0.12),
  };
  void mut;
  return p;
}

function randn() {
  return (Math.random() + Math.random() + Math.random() - 1.5) / 1.5;
}

export function createMind(agent: Agent, parent?: MindState): MindState {
  return {
    agentId: agent.id,
    personality: inheritPersonality(parent?.personality),
    memory: parent ? [...parent.memory].slice(-3) : [],
    decision: null,
    goalUntil: 0,
    lastThinkTick: -9999,
    lastLocalTick: -9999,
    thinkCount: 0,
    llmThinkCount: 0,
    pending: false,
  };
}

export function pushMemory(mind: MindState, item: string) {
  mind.memory.push(item);
  if (mind.memory.length > 4) mind.memory.splice(0, mind.memory.length - 4);
}

/* ───────── 本地策略：没有 LLM 也能思考 ───────── */

export function localDecide(ctx: MindContext, p: Personality, tick: number): MindDecision {
  const hunger = 1 - clamp01(ctx.energy / Math.max(40, ctx.energyMax));

  // 1. 有威胁就跑 —— 谨慎与勇气决定跑不跑（确定性判据，便于解释与复现）
  if (ctx.threatDist !== null && ctx.threatDist < ctx.sense * 1.15) {
    const close = ctx.threatDist < ctx.sense * 0.55;
    const urge = p.caution * 1.1 - hunger * 0.45 + (close ? 0.35 : 0);
    if (urge > 0.3) {
      return {
        action: 'flee',
        target: 'threat',
        urgency: clamp01(0.5 + p.caution * 0.4),
        courage: clamp01(0.25 - p.caution * 0.2),
        explore: p.curiosity * 0.3,
        social: p.sociability * 0.4,
        aggression: p.aggression * 0.3,
        thought: '附近有猎人，先撤',
        source: 'local',
        tick,
      };
    }
  }

  // 2. 猎物就在嘴边 —— 好斗的会先下手（能捕食才考虑）
  if (ctx.canHunt && ctx.preyDist !== null && ctx.preyDist < ctx.sense) {
    const eager = p.aggression * 0.7 + hunger * 0.4;
    if (eager > 0.42) {
      return {
        action: 'hunt',
        target: 'prey',
        urgency: clamp01(eager),
        courage: clamp01(p.aggression * 0.8 + 0.2),
        explore: p.curiosity * 0.3,
        social: p.sociability * 0.2,
        aggression: clamp01(p.aggression),
        thought: '猎物在射程内',
        source: 'local',
        tick,
      };
    }
  }

  // 3. 饿了找吃的 —— 贪食决定敢不敢去抢远处的
  if (hunger > 0.42) {
    const far = ctx.foodDist !== null && ctx.foodDist > ctx.sense * 0.6;
    const willing = p.greed > 0.32 || !far;
    if (willing) {
      return {
        action: 'seek_food',
        target: 'food',
        urgency: clamp01(hunger),
        courage: clamp01(p.greed * 0.7 + 0.2),
        explore: p.curiosity * 0.4,
        social: p.sociability * 0.3,
        aggression: p.aggression * 0.35,
        thought: '能量见底，先觅食',
        source: 'local',
        tick,
      };
    }
  }

  // 4. 合群 —— 贴着同伴或群体
  if (p.sociability > 0.55 && ctx.friendDist !== null && ctx.friendDist < ctx.sense * 0.8) {
    return {
      action: 'stay',
      target: 'friend',
      urgency: clamp01(p.sociability * 0.6),
      courage: clamp01(0.5 + p.aggression * 0.2),
      explore: p.curiosity * 0.2,
      social: clamp01(p.sociability),
      aggression: p.aggression * 0.2,
      thought: '同伴就在旁边',
      source: 'local',
      tick,
    };
  }

  // 5. 求偶 —— 状态好才考虑
  if (
    ctx.mateDist !== null &&
    ctx.mateDist < ctx.sense * 0.9 &&
    ctx.energy > ctx.energyMax * 0.55 &&
    p.curiosity > 0.35
  ) {
    return {
      action: 'approach_mate',
      target: 'mate',
      urgency: clamp01(0.35 + p.curiosity * 0.3),
      courage: clamp01(0.4 + p.aggression * 0.3),
      explore: p.curiosity * 0.5,
      social: clamp01(p.sociability * 0.6 + 0.2),
      aggression: p.aggression * 0.25,
      thought: '遇到同类，去靠近',
      source: 'local',
      tick,
    };
  }

  // 6. 没事干 —— 探索
  return {
    action: 'explore',
    target: 'none',
    urgency: clamp01(0.2 + p.curiosity * 0.3),
    courage: clamp01(0.5 + p.aggression * 0.3),
    explore: clamp01(p.curiosity),
    social: p.sociability * 0.5,
    aggression: p.aggression * 0.4,
    thought: '闲下来了，四处看看',
    source: 'local',
    tick,
  };
}

/* ───────── 性格漂移：决策会慢慢改写性格 ───────── */

export function driftPersonality(p: Personality, d: MindDecision) {
  const pull = 0.035;
  const move = (cur: number, target: number) => cur + (target - cur) * pull;
  p.curiosity = clamp01(move(p.curiosity, d.explore));
  p.aggression = clamp01(move(p.aggression, d.aggression));
  p.sociability = clamp01(move(p.sociability, d.social));
  p.caution = clamp01(move(p.caution, d.target === 'threat' ? 1 : d.courage * 0.5));
  p.greed = clamp01(move(p.greed, d.target === 'food' ? 1 : 0.35));
}

/* ───────── 提示词 ───────── */

const SYS_PROMPT =
  '你是一只培养皿里的单细胞生物，靠本能与处境决策。你只能输出一个 JSON 对象，不要任何解释文字。';

function fmtList(items: string[], max = 6): string {
  if (!items.length) return '无';
  return items.slice(0, max).join('·');
}

/** 构造给 LLM 看的「处境卡」—— 尽量短，免费额度才扛得住 */
export function buildObservation(ctx: MindContext, p: Personality, memory: string[]): string {
  const energyPct = Math.round((ctx.energy / Math.max(1, ctx.energyMax)) * 100);
  const dist = (d: number | null) => (d === null ? '—' : `${Math.round(d)}`);
  const lines = [
    `个体｜${ctx.strategyZh}｜第${ctx.generation}代｜年龄${ctx.age}`,
    `能量 ${Math.round(ctx.energy)}/${ctx.energyMax}（${energyPct}%）｜体型 ${ctx.size.toFixed(1)}`,
    `已演化：${fmtList(ctx.organelles)}`,
    `视野(${Math.round(ctx.sense)})：猎物${ctx.nPrey} 猎手${ctx.nHunter} 同类${ctx.nSame} 食物${ctx.nFood}`,
    `距离：猎物${dist(ctx.preyDist)} 威胁${dist(ctx.threatDist)} 同伴${dist(ctx.friendDist)} 配偶${dist(ctx.mateDist)} 食物${dist(ctx.foodDist)}`,
    `环境：光${Math.round(ctx.light * 100)}% 温${Math.round(ctx.temp)}℃ 养分×${ctx.nutrient.toFixed(2)}`,
    `性格：好奇${p.curiosity.toFixed(2)} 好斗${p.aggression.toFixed(2)} 合群${p.sociability.toFixed(2)} 谨慎${p.caution.toFixed(2)} 贪食${p.greed.toFixed(2)}`,
    `近期：${memory.length ? memory.join('；') : '平静无事'}`,
  ];
  return lines.join('\n');
}

export function buildPrompt(obs: string): { role: 'system' | 'user'; content: string }[] {
  return [
    { role: 'system', content: SYS_PROMPT },
    {
      role: 'user',
      content:
        `${obs}\n\n` +
        '选一个行动并说明理由（中文，不超过 18 字）。只能输出这个 JSON：\n' +
        '{"action":"seek_food|hunt|flee|approach_mate|explore|stay",' +
        '"target":"none|food|prey|threat|mate|friend",' +
        '"urgency":0.0,"courage":0.0,"explore":0.0,"social":0.0,"aggression":0.0,' +
        '"thought":"你的理由"}',
    },
  ];
}

/* ───────── 解析 LLM 的回答 ───────── */

export function parseDecision(text: string, tick: number): MindDecision | null {
  if (!text) return null;
  // 去掉 ```json 包裹
  const cleaned = text.replace(/```json/gi, '```').replace(/```/g, '');
  const start = cleaned.indexOf('{');
  const end = cleaned.lastIndexOf('}');
  if (start < 0 || end <= start) return null;
  let obj: Record<string, unknown>;
  try {
    obj = JSON.parse(cleaned.slice(start, end + 1)) as Record<string, unknown>;
  } catch {
    return null;
  }
  const rawAction = String(obj.action ?? '').trim();
  const rawTarget = String(obj.target ?? '').trim();
  const action = (MIND_ACTIONS as string[]).includes(rawAction)
    ? (rawAction as MindAction)
    : 'explore';
  const target = (MIND_TARGETS as string[]).includes(rawTarget)
    ? (rawTarget as MindTarget)
    : 'none';
  const num = (v: unknown, fallback: number) => {
    const n = typeof v === 'number' ? v : parseFloat(String(v));
    return Number.isFinite(n) ? clamp01(n) : fallback;
  };
  let thought = String(obj.thought ?? '').trim();
  if (thought.length > 40) thought = thought.slice(0, 40);
  if (!thought) thought = '（未说明理由）';
  return {
    action,
    target,
    urgency: num(obj.urgency, 0.5),
    courage: num(obj.courage, 0.5),
    explore: num(obj.explore, 0.3),
    social: num(obj.social, 0.3),
    aggression: num(obj.aggression, 0.3),
    thought,
    source: 'llm',
    tick,
  };
}
