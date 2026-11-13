/**
 * 免费 LLM 接口目录 + 浏览器端自动探测
 * ---------------------------------------------------------------
 * agent 要「自己想」，就得起一个 LLM。这里摆出当前真实可用的免费接口，
 * 并让程序在浏览器里挨个试：谁先通就用谁，不通就换下一个，
 * 最后落到「全部不可用」—— 沙盒本身永远照常跑。
 *
 * 实测（浏览器直连，2026-11）：
 *  · Pollinations —— 完全免 key，CORS 全开，匿名层挂 GPT-OSS 20B  → 首选
 *  · OpenRouter   —— 需 key，CORS 全开，官方有 /models 接口可列免费模型
 *  · Groq         —— 需 key，免费额度 30 RPM
 *  · Gemini       —— 需 key，免费层 15 RPM，官方支持浏览器调用
 *
 * 「自己找免费 API」在这里是字面意思：模型列表也是运行时现拉的，
 * 不是写死在代码里的常量。
 */

export type ProviderId = 'pollinations' | 'openrouter' | 'groq' | 'gemini';

export interface ProviderModel {
  id: string;
  zh: string;
  en: string;
}

export interface ProviderSpec {
  id: ProviderId;
  zh: string;
  en: string;
  kind: 'openai' | 'gemini';
  endpoint: string;
  /** 兜底模型（拉不到动态列表时用） */
  fallbackModel: ProviderModel;
  keyless: boolean;
  /** 可选令牌：免密也能用，填了额度更高 */
  optionalKey?: boolean;
  /** 该源建议的每分钟请求上限，调度器据此限流 */
  rpm: number;
  /** 是否支持在浏览器里直接 fetch（CORS） */
  cors: boolean;
  /** 能否在运行时拉取「当前可用的免费模型」列表 */
  listModels: boolean;
  keyLabelZh: string;
  tierZh: string;
  tierEn: string;
  noteZh: string;
  noteEn: string;
}

export const PROVIDERS: ProviderSpec[] = [
  {
    id: 'pollinations',
    zh: 'Pollinations',
    en: 'Pollinations',
    kind: 'openai',
    endpoint: 'https://text.pollinations.ai/openai/chat/completions',
    fallbackModel: { id: 'openai-fast', zh: 'GPT-OSS 20B（免密）', en: 'GPT-OSS 20B (keyless)' },
    keyless: true,
    optionalKey: true,
    rpm: 10,
    cors: true,
    listModels: true,
    keyLabelZh: '可选令牌（ pollinations.ai 申请，提高限额）',
    tierZh: '免 key · 匿名额度有限',
    tierEn: 'No key · limited anonymous tier',
    noteZh: '完全免密，开箱即用。匿名层额度很紧，被限流时会自动降速。',
    noteEn: 'Fully keyless. Anonymous tier is tight; auto-throttles when limited.',
  },
  {
    id: 'openrouter',
    zh: 'OpenRouter',
    en: 'OpenRouter',
    kind: 'openai',
    endpoint: 'https://openrouter.ai/api/v1/chat/completions',
    fallbackModel: {
      id: 'meta-llama/llama-3.3-70b-instruct:free',
      zh: 'Llama 3.3 70B 免费版',
      en: 'Llama 3.3 70B free',
    },
    keyless: false,
    rpm: 20,
    cors: true,
    listModels: true,
    keyLabelZh: 'OpenRouter API Key（sk-or-…）',
    tierZh: '需 key · :free 模型不限量',
    tierEn: 'Key required · :free models',
    noteZh: '模型列表运行时现拉，自动挑带 :free 后缀的免费模型。',
    noteEn: 'Model list is fetched live; :free models are picked automatically.',
  },
  {
    id: 'groq',
    zh: 'Groq',
    en: 'Groq',
    kind: 'openai',
    endpoint: 'https://api.groq.com/openai/v1/chat/completions',
    fallbackModel: {
      id: 'llama-3.3-70b-versatile',
      zh: 'Llama 3.3 70B',
      en: 'Llama 3.3 70B',
    },
    keyless: false,
    rpm: 30,
    cors: true,
    listModels: false,
    keyLabelZh: 'Groq API Key（gsk_…）',
    tierZh: '需 key · 免费 30 RPM',
    tierEn: 'Key required · 30 RPM free',
    noteZh: '自建推理集群，免费额度 30 次/分钟，延迟最低。',
    noteEn: 'Self-hosted inference, 30 RPM free tier, lowest latency.',
  },
  {
    id: 'gemini',
    zh: 'Google Gemini',
    en: 'Google Gemini',
    kind: 'gemini',
    endpoint: 'https://generativelanguage.googleapis.com/v1beta/models',
    fallbackModel: { id: 'gemini-2.0-flash', zh: 'Gemini 2.0 Flash', en: 'Gemini 2.0 Flash' },
    keyless: false,
    rpm: 15,
    cors: true,
    listModels: false,
    keyLabelZh: 'Google AI Studio Key（AIza…）',
    tierZh: '需 key · 免费 15 RPM',
    tierEn: 'Key required · 15 RPM free',
    noteZh: 'Google AI Studio 免费层，官方支持浏览器直连。',
    noteEn: 'Google AI Studio free tier, officially browser-safe.',
  },
];

export interface ProviderKeys {
  openrouter?: string;
  groq?: string;
  gemini?: string;
  pollinations?: string;
}

export interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface ChatResult {
  text: string;
  tokens: number;
  latencyMs: number;
}

export class ProviderError extends Error {
  /** true 表示「这个源根本没通」，可以立刻换下一个 */
  unreachable: boolean;
  /** true 表示「额度用尽 / 被限流」，应当降速而不是换源 */
  rateLimited: boolean;
  constructor(message: string, unreachable = false, rateLimited = false) {
    super(message);
    this.name = 'ProviderError';
    this.unreachable = unreachable;
    this.rateLimited = rateLimited;
  }
}

/* ───────── 动态模型列表：运行时现拉「免费」的那批 ───────── */

const MODEL_LIST_URL: Partial<Record<ProviderId, string>> = {
  pollinations: 'https://text.pollinations.ai/models',
  openrouter: 'https://openrouter.ai/api/v1/models',
};

/** 拉取当前可用的免费模型；失败就返回空数组（调用方回退到兜底模型） */
export async function fetchFreeModels(
  spec: ProviderSpec,
  key: string | undefined,
  signal?: AbortSignal,
): Promise<ProviderModel[]> {
  const url = MODEL_LIST_URL[spec.id];
  if (!url) return [];
  try {
    const res = await fetch(url, {
      signal,
      headers: key ? { Authorization: `Bearer ${key}` } : undefined,
    });
    if (!res.ok) return [];
    const json = await res.json();

    if (spec.id === 'pollinations') {
      const arr = Array.isArray(json) ? json : (json.data ?? []);
      return arr
        .filter((m: { name?: string }) => typeof m.name === 'string')
        .map((m: { name: string; description?: string }) => ({
          id: m.name,
          zh: m.description ? m.description.slice(0, 30) : m.name,
          en: m.description ? m.description.slice(0, 30) : m.name,
        }));
    }

    // OpenRouter：只收 :free 结尾的模型
    const arr = Array.isArray(json?.data) ? json.data : [];
    return arr
      .filter((m: { id?: string }) => typeof m.id === 'string' && m.id.endsWith(':free'))
      .map((m: { id: string; name?: string }) => ({
        id: m.id,
        zh: m.name ?? m.id,
        en: m.name ?? m.id,
      }));
  } catch {
    return [];
  }
}

/* ───────── 请求构造 / 解析 ───────── */

function buildOpenAIRequest(
  spec: ProviderSpec,
  model: string,
  messages: ChatMessage[],
  key: string | undefined,
  maxTokens: number,
): { url: string; headers: Record<string, string>; body: string } {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  if (key && spec.id !== 'pollinations') headers.Authorization = `Bearer ${key}`;

  const body: Record<string, unknown> = {
    model,
    messages,
    temperature: 0.6,
    max_tokens: maxTokens,
    stream: false,
  };
  // OpenRouter / Groq 支持强制 JSON 输出
  if (spec.id !== 'pollinations') body.response_format = { type: 'json_object' };
  if (spec.id === 'pollinations' && key) body.referrer = 'microbe-arena';

  // Pollinations 的令牌走 query 参数（浏览器不能自定义 Referer 头）
  const url =
    spec.id === 'pollinations' && key
      ? `${spec.endpoint}?token=${encodeURIComponent(key)}`
      : spec.endpoint;
  return { url, headers, body: JSON.stringify(body) };
}

function buildGeminiRequest(
  spec: ProviderSpec,
  model: string,
  messages: ChatMessage[],
  key: string | undefined,
  maxTokens: number,
): { url: string; headers: Record<string, string>; body: string } {
  const prompt = messages.map((m) => `${m.role === 'system' ? '系统' : m.role}：${m.content}`).join('\n\n');
  const url = `${spec.endpoint}/${model}:generateContent?key=${encodeURIComponent(key ?? '')}`;
  return {
    url,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.6,
        maxOutputTokens: maxTokens,
        responseMimeType: 'application/json',
      },
    }),
  };
}

export function buildRequest(
  spec: ProviderSpec,
  model: string,
  messages: ChatMessage[],
  key: string | undefined,
  maxTokens: number,
) {
  return spec.kind === 'gemini'
    ? buildGeminiRequest(spec, model, messages, key, maxTokens)
    : buildOpenAIRequest(spec, model, messages, key, maxTokens);
}

export function parseResponse(spec: ProviderSpec, json: unknown): string {
  if (spec.kind === 'gemini') {
    const j = json as {
      candidates?: { content?: { parts?: { text?: string }[] } }[];
    };
    const parts = j?.candidates?.[0]?.content?.parts ?? [];
    return parts.map((p) => p.text ?? '').join('');
  }
  const j = json as {
    choices?: { message?: { content?: string } }[];
    error?: { message?: string };
  };
  if (j?.error?.message) throw new ProviderError(j.error.message);
  return j?.choices?.[0]?.message?.content ?? '';
}

export function countTokens(json: unknown): number {
  const j = json as { usage?: { total_tokens?: number } };
  return j?.usage?.total_tokens ?? 0;
}

/* ───────── 实际调用 ───────── */

export async function chat(
  spec: ProviderSpec,
  model: string,
  messages: ChatMessage[],
  key: string | undefined,
  opts: { signal?: AbortSignal; timeoutMs?: number; maxTokens?: number } = {},
): Promise<ChatResult> {
  const timeoutMs = opts.timeoutMs ?? 20_000;
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeoutMs);
  const onAbort = () => ctrl.abort();
  opts.signal?.addEventListener('abort', onAbort);

  const t0 = performance.now();
  try {
    const { url, headers, body } = buildRequest(spec, model, messages, key, opts.maxTokens ?? 220);
    let res: Response;
    try {
      res = await fetch(url, { method: 'POST', headers, body, signal: ctrl.signal });
    } catch (err) {
      // fetch 抛错在浏览器里通常意味着 CORS / 网络 / 被拦截
      const msg = err instanceof Error ? err.message : String(err);
      throw new ProviderError(`网络或 CORS 失败：${msg}`, true);
    }
    const latencyMs = Math.round(performance.now() - t0);
    if (!res.ok) {
      const txt = await res.text().catch(() => '');
      if (res.status === 402 || res.status === 429) {
        throw new ProviderError(
          `额度用尽或被限流（HTTP ${res.status}）：${txt.slice(0, 100) || 'no body'}`,
          false,
          true,
        );
      }
      throw new ProviderError(`HTTP ${res.status} ${txt.slice(0, 120)}`);
    }
    const json = await res.json();
    const text = parseResponse(spec, json).trim();
    if (!text) throw new ProviderError('响应为空');
    return { text, tokens: countTokens(json), latencyMs };
  } finally {
    clearTimeout(timer);
    opts.signal?.removeEventListener('abort', onAbort);
  }
}

/* ───────── 自动探测：挨个试，谁先通用谁 ───────── */

export interface ProbeOutcome {
  spec: ProviderSpec;
  model: ProviderModel;
  latencyMs: number;
}

export interface DiscoverReport {
  winner: ProbeOutcome | null;
  tried: { id: ProviderId; ok: boolean; note: string }[];
}

/**
 * 按优先级探测可用接口。
 * 免密源优先 —— 这样用户什么都不配也能直接玩。
 */
export async function discoverProvider(
  keys: ProviderKeys,
  opts: {
    only?: ProviderId | 'auto';
    onProgress?: (id: ProviderId, note: string) => void;
    signal?: AbortSignal;
  } = {},
): Promise<DiscoverReport> {
  const tried: DiscoverReport['tried'] = [];
  const order =
    opts.only && opts.only !== 'auto'
      ? PROVIDERS.filter((p) => p.id === opts.only)
      : [...PROVIDERS].sort((a, b) => Number(b.keyless) - Number(a.keyless));

  for (const spec of order) {
    const key = keys[spec.id];
    if (!spec.keyless && !key) {
      tried.push({ id: spec.id, ok: false, note: '未提供 key' });
      opts.onProgress?.(spec.id, '跳过：需要 API key');
      continue;
    }
    opts.onProgress?.(spec.id, '探测中…');
    try {
      const models = await fetchFreeModels(spec, key, opts.signal);
      const model = models[0] ?? spec.fallbackModel;
      const res = await chat(
        spec,
        model.id,
        [{ role: 'user', content: '只回复两个字：可以' }],
        key,
        { timeoutMs: 12_000, maxTokens: 16, signal: opts.signal },
      );
      tried.push({ id: spec.id, ok: true, note: `${res.latencyMs}ms` });
      return {
        winner: { spec, model, latencyMs: res.latencyMs },
        tried,
      };
    } catch (err) {
      const note = err instanceof Error ? err.message.slice(0, 90) : '未知错误';
      tried.push({ id: spec.id, ok: false, note });
      opts.onProgress?.(spec.id, `不可用：${note}`);
    }
  }
  return { winner: null, tried };
}
