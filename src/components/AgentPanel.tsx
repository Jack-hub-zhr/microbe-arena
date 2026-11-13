/**
 * 智能体面板
 * ---------------------------------------------------------------
 * 每个细胞背后都挂着一个 agent：这个面板是它们的总控台。
 *  · 自动寻找免费 LLM 接口 —— 免密的先上，不通就换下一个
 *  · 限流与排队 —— 免费额度很紧，得省着花
 *  · 看 agent 们最近都在想什么，以及某个个体的性格与记忆
 */
import { useEffect, useMemo, useRef, useState } from 'react';
import { cx } from './ui/Glass';
import { IconAgent, IconCheck, IconRefresh, IconSearch } from './Icons';
import { PROVIDERS, type ProviderId } from '../engine/llmProviders';
import { ACTION_ZH, TARGET_ZH } from '../engine/minds';
import type { Simulation } from '../engine/Simulation';
import type { Agent } from '../engine/types';

interface Props {
  engine: Simulation;
  lang: 'zh' | 'en';
  selected: Agent | null;
}

const KEY_STORE = 'petri-arena.agent-keys';

function loadKeys(): Record<string, string> {
  try {
    return JSON.parse(localStorage.getItem(KEY_STORE) ?? '{}') as Record<string, string>;
  } catch {
    return {};
  }
}

function saveKeys(k: Record<string, string>) {
  try {
    localStorage.setItem(KEY_STORE, JSON.stringify(k));
  } catch {
    /* 隐私模式下写不了，忽略 */
  }
}

function Slider({
  value,
  min,
  max,
  step = 1,
  onChange,
  color,
}: {
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (v: number) => void;
  color: string;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <input
      type="range"
      className="slider"
      min={min}
      max={max}
      step={step}
      value={value}
      style={{ ['--track-c' as string]: color, ['--pct' as string]: `${pct}%` }}
      onChange={(e) => onChange(Number(e.target.value))}
    />
  );
}

const PERSONALITY_ZH: { k: keyof typeof P_KEYS; label: string; color: string }[] = [];
const P_KEYS = {
  curiosity: 0,
  aggression: 0,
  sociability: 0,
  caution: 0,
  greed: 0,
} as const;

PERSONALITY_ZH.push(
  { k: 'curiosity', label: '好奇', color: '#7dd3fc' },
  { k: 'aggression', label: '好斗', color: '#ff8b3d' },
  { k: 'sociability', label: '合群', color: '#84b96b' },
  { k: 'caution', label: '谨慎', color: '#d4748e' },
  { k: 'greed', label: '贪食', color: '#d9a441' },
);

export default function AgentPanel({ engine, lang, selected }: Props) {
  const sch = engine.scheduler;
  const [, force] = useState(0);
  const [showProviders, setShowProviders] = useState(false);
  const [keys, setKeys] = useState<Record<string, string>>(loadKeys);
  const [busy, setBusy] = useState(false);
  const probed = useRef(false);

  // 面板每 900ms 自刷新一次，把调度器的状态显示出来
  useEffect(() => {
    const id = setInterval(() => force((v) => v + 1), 900);
    return () => clearInterval(id);
  }, []);

  // 首次打开面板就自动去找一个能用的免费接口
  useEffect(() => {
    if (probed.current) return;
    probed.current = true;
    const stored = loadKeys();
    for (const [k, v] of Object.entries(stored)) {
      if (v) sch.setKey(k as ProviderId, v);
    }
    if (!sch.provider) {
      setBusy(true);
      void sch.discover('auto').finally(() => setBusy(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const stats = sch.stats();

  const selectedMind = selected ? engine.getMind(selected.id) : undefined;

  const feed = useMemo(() => sch.feed.slice(0, 24), [sch.feed, stats.completed]);

  const setKey = (id: ProviderId, v: string) => {
    const next = { ...keys, [id]: v };
    setKeys(next);
    saveKeys(next);
    sch.setKey(id, v);
  };

  const probe = async (only: ProviderId | 'auto') => {
    setBusy(true);
    await sch.discover(only);
    setBusy(false);
    force((v) => v + 1);
  };

  return (
    <div className="space-y-5 pt-1">
      {/* ── 总开关 ── */}
      <div className="flex items-center gap-3">
        <button
          data-agent-toggle
          onClick={() => {
            sch.enabled = !sch.enabled;
            if (sch.enabled && !sch.provider) void probe('auto');
            force((v) => v + 1);
          }}
          className={cx(
            'shrink-0 w-[46px] h-[26px] rounded-full relative transition-all duration-300',
            sch.enabled ? 'bg-[#a2db3c]/30' : 'bg-white/10',
          )}
          style={{
            boxShadow: sch.enabled ? 'inset 0 0 0 1px rgba(162,219,60,.6)' : 'inset 0 0 0 1px rgba(255,255,255,.14)',
          }}
          title={lang === 'zh' ? '启用 LLM 智能体' : 'Enable LLM agents'}
        >
          <span
            className="absolute top-[3px] w-5 h-5 rounded-full transition-all duration-300"
            style={{
              left: sch.enabled ? 23 : 3,
              background: sch.enabled ? '#a2db3c' : 'rgba(255,255,255,.35)',
            }}
          />
        </button>
        <div className="min-w-0 flex-1">
          <div className="text-[12px] text-white/85">
            {lang === 'zh' ? 'LLM 智能体' : 'LLM agents'}
          </div>
          <div className="text-[10px] text-white/38 leading-relaxed">
            {lang === 'zh'
              ? '每个细胞背后都有一个 agent；开着的这段时间里，LLM 替其中一部分做决定'
              : 'Every cell has an agent; while on, the LLM decides for some of them'}
          </div>
        </div>
      </div>

      {/* ── 接口发现 ── */}
      <div>
        <div className="label-xs text-white/40 mb-2">
          {lang === 'zh' ? '免费接口' : 'FREE API'}
        </div>

        <div className="rounded-[14px] border border-white/8 bg-white/[0.03] p-3 space-y-2">
          <div className="flex items-center gap-2">
            <span
              className={cx(
                'w-1.5 h-1.5 rounded-full shrink-0',
                stats.status === 'ready'
                  ? 'bg-[#a2db3c]'
                  : stats.status === 'probing'
                    ? 'bg-[#e8c46a] animate-pulse'
                    : stats.status === 'degraded'
                      ? 'bg-[#ff8b3d]'
                      : 'bg-white/25',
              )}
            />
            <span className="text-[11.5px] text-white/80 truncate">
              {stats.status === 'ready' || stats.status === 'degraded'
                ? stats.providerLabel
                : stats.status === 'probing'
                  ? lang === 'zh'
                    ? '正在探测…'
                    : 'Probing…'
                  : lang === 'zh'
                    ? '尚未找到接口'
                    : 'No provider yet'}
            </span>
            <span className="flex-1" />
            <button
              onClick={() => void probe('auto')}
              className="capsule-btn h-6 px-2 text-[10px] text-white/50 hover:text-white/85 flex items-center gap-1"
              title={lang === 'zh' ? '重新寻找可用接口' : 'Re-scan providers'}
            >
              <IconRefresh size={11} className={busy ? 'animate-spin' : ''} />
              {lang === 'zh' ? '重新探测' : 'Rescan'}
            </button>
          </div>

          {stats.providerId && (
            <div className="flex items-center gap-2 text-[10px] text-white/42">
              <span className="num truncate">{stats.modelLabel}</span>
              <span className="flex-1" />
              <span className="num">
                {lang === 'zh' ? '额度' : 'quota'} {stats.rpmUsed}/{stats.rpmLimit}/min
                {stats.throttled > 0 && (
                  <span className="text-[#e8c46a] ml-1">
                    ({lang === 'zh' ? `限流 ${stats.throttled} 次` : `throttled ${stats.throttled}×`})
                  </span>
                )}
              </span>
            </div>
          )}

          {stats.lastError && (
            <div className="text-[9.5px] text-[#e79b8c] leading-relaxed break-words">
              {stats.lastError}
            </div>
          )}

          {stats.cooldownLeft > 0 && (
            <div className="text-[9.5px] text-[#e8c46a] leading-relaxed">
              {lang === 'zh'
                ? `免费额度被限流，${stats.cooldownLeft} 秒后再试（已自动降到 ${stats.rpmLimit} 次/分钟）`
                : `Rate limited. Retrying in ${stats.cooldownLeft}s (throttled to ${stats.rpmLimit}/min)`}
            </div>
          )}

          <button
            onClick={() => setShowProviders((s) => !s)}
            className="w-full text-[10px] text-white/35 hover:text-white/70 flex items-center gap-1.5 pt-0.5"
          >
            <IconSearch size={11} />
            {lang === 'zh' ? '换一个接口 / 填自己的 key' : 'Pick another provider / add a key'}
          </button>

          {showProviders && (
            <div className="space-y-2 pt-1.5 border-t border-white/8">
              {PROVIDERS.map((p) => {
                const active = stats.providerId === p.id;
                return (
                  <div
                    key={p.id}
                    className={cx(
                      'rounded-[10px] border p-2.5 transition-colors',
                      active ? 'border-[#a2db3c]/45 bg-[#a2db3c]/8' : 'border-white/8',
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => void probe(p.id)}
                        className={cx(
                          'text-[11px] flex-1 text-left truncate',
                          active ? 'text-white/90' : 'text-white/62 hover:text-white/85',
                        )}
                      >
                        {p.zh}
                        {active && <IconCheck size={10} className="inline ml-1" />}
                      </button>
                      <span className="text-[9px] text-white/30 shrink-0">{p.tierZh}</span>
                    </div>
                    <p className="text-[9.5px] text-white/30 leading-relaxed mt-0.5">
                      {p.noteZh}
                    </p>
                    {(!p.keyless || p.optionalKey) && (
                      <input
                        type="password"
                        value={keys[p.id] ?? ''}
                        placeholder={p.keyLabelZh}
                        onChange={(e) => setKey(p.id, e.target.value)}
                        className="mt-1.5 w-full bg-white/5 border border-white/10 rounded-[8px] px-2 py-1 text-[10px] text-white/80 placeholder:text-white/22 outline-none focus:border-[#d9a441]/50"
                      />
                    )}
                  </div>
                );
              })}
              <p className="text-[9px] text-white/24 leading-relaxed">
                {lang === 'zh'
                  ? 'key 只存在你自己的浏览器里，不会上传到任何服务器。'
                  : 'Keys stay in your browser and are never uploaded.'}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* ── 调度参数 ── */}
      <div>
        <div className="label-xs text-white/40 mb-2">
          {lang === 'zh' ? '调度参数' : 'SCHEDULING'}
        </div>
        <div className="space-y-2.5">
          <div>
            <div className="flex justify-between text-[10px] text-white/50 mb-0.5">
              <span>{lang === 'zh' ? '意志影响力' : 'Influence'}</span>
              <span className="num text-white/40">{Math.round(sch.influence * 100)}%</span>
            </div>
            <Slider
              value={Math.round(sch.influence * 100)}
              min={0}
              max={100}
              color="#a2db3c"
              onChange={(v) => {
                sch.influence = v / 100;
              }}
            />
            <div className="text-[9px] text-white/24 mt-0.5">
              {lang === 'zh'
                ? '0 = 完全听基因的；越高越听 agent 的'
                : '0 = follow genes only; higher follows the agent'}
            </div>
          </div>

          <div>
            <div className="flex justify-between text-[10px] text-white/50 mb-0.5">
              <span>{lang === 'zh' ? '每分钟请求上限' : 'Requests / min'}</span>
              <span className="num text-white/40">{sch.rpmLimit}</span>
            </div>
            <Slider
              value={sch.rpmLimit}
              min={4}
              max={60}
              color="#e8c46a"
              onChange={(v) => {
                sch.rpmLimit = v;
              }}
            />
          </div>

          <div>
            <div className="flex justify-between text-[10px] text-white/50 mb-0.5">
              <span>{lang === 'zh' ? '单体思考间隔' : 'Think gap (ticks)'}</span>
              <span className="num text-white/40">{sch.minThinkGap}</span>
            </div>
            <Slider
              value={sch.minThinkGap}
              min={2}
              max={60}
              color="#7dd3fc"
              onChange={(v) => {
                sch.minThinkGap = v;
              }}
            />
            <div className="text-[9px] text-white/24 mt-0.5">
              {lang === 'zh'
                ? '间隔越大越省额度，agent 越迟钝'
                : 'Longer gap saves quota, agents think less often'}
            </div>
          </div>
        </div>
      </div>

      {/* ── 统计 ── */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
        {[
          { k: lang === 'zh' ? '已完成思考' : 'Decisions', v: stats.completed, c: '#a2db3c' },
          {
            k: lang === 'zh' ? 'LLM 决策过的个体' : 'Agents decided by LLM',
            v: `${stats.llmAgents}/${stats.population}`,
            c: '#7dd3fc',
          },
          { k: lang === 'zh' ? '被限流' : 'Throttled', v: stats.throttled, c: '#e8c46a' },
          { k: lang === 'zh' ? '平均延迟' : 'Latency', v: `${stats.avgLatencyMs}ms`, c: '#d9a441' },
          { k: lang === 'zh' ? '消耗 token' : 'Tokens', v: stats.tokens.toLocaleString(), c: '#7c8fb8' },
        ].map((s) => (
          <div key={s.k}>
            <div className="text-[9.5px] text-white/38">{s.k}</div>
            <div className="num text-[17px] font-semibold leading-tight" style={{ color: s.c }}>
              {s.v}
            </div>
          </div>
        ))}
      </div>

      {/* ── 决策流 ── */}
      <div>
        <div className="label-xs text-white/40 mb-2">
          {lang === 'zh' ? 'agent 的想法' : 'AGENT THOUGHTS'}
        </div>
        <div className="space-y-1 max-h-[220px] overflow-y-auto scroll-thin pr-0.5">
          {feed.length === 0 && (
            <div className="text-[10.5px] text-white/28 leading-relaxed">
              {lang === 'zh'
                ? '还没有 agent 做出决定。打开上面的开关，或等本地策略先跑起来。'
                : 'No decisions yet. Turn the switch on, or wait for the local policy.'}
            </div>
          )}
          {feed.map((f) => (
            <div
              key={f.key}
              className="flex items-start gap-2 px-2 py-1.5 rounded-[10px] hover:bg-white/4 transition-colors"
            >
              <span
                className="w-2 h-2 rounded-full shrink-0 mt-1"
                style={{ background: `hsl(${f.hue}, 78%, 62%)` }}
              />
              <span className="num text-[10px] text-white/40 shrink-0 mt-px">#{f.agentId}</span>
              <span className="text-[10.5px] text-white/72 shrink-0 mt-px">
                {ACTION_ZH[f.action]}
                {f.target !== 'none' && (
                  <span className="text-white/40"> → {TARGET_ZH[f.target]}</span>
                )}
              </span>
              <span className="text-[10px] text-white/42 flex-1 leading-relaxed">「{f.thought}」</span>
              <span
                className={cx(
                  'text-[8.5px] px-1 rounded-[4px] shrink-0 mt-px',
                  f.source === 'llm'
                    ? 'bg-[#7dd3fc]/16 text-[#9fdcf7]'
                    : 'bg-white/6 text-white/28',
                )}
              >
                {f.source === 'llm' ? 'LLM' : lang === 'zh' ? '本地' : 'local'}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── 选中个体的心智 ── */}
      {selected && selectedMind && (
        <>
          <div className="h-px bg-white/8" />
          <div>
            <div className="label-xs text-white/40 mb-2">
              {lang === 'zh' ? `个体 #${selected.id} 的心智` : `MIND OF #${selected.id}`}
            </div>

            <div className="space-y-1.5">
              {PERSONALITY_ZH.map((p) => {
                const v = selectedMind.personality[p.k];
                return (
                  <div key={p.k} className="flex items-center gap-2 text-[10.5px]">
                    <span className="text-white/50 w-8 shrink-0">{p.label}</span>
                    <span className="flex-1 h-1.5 rounded-full bg-white/8 overflow-hidden">
                      <span
                        className="block h-full rounded-full transition-[width] duration-500"
                        style={{ width: `${v * 100}%`, background: p.color }}
                      />
                    </span>
                    <span className="num text-white/40 w-7 text-right">{v.toFixed(2)}</span>
                  </div>
                );
              })}
            </div>

            {selectedMind.decision && (
              <div className="mt-3 rounded-[10px] border border-white/8 bg-white/[0.03] px-2.5 py-2">
                <div className="flex items-center gap-2 text-[10.5px]">
                  <IconAgent size={12} className="text-[#a2db3c]" />
                  <span className="text-white/78">
                    {ACTION_ZH[selectedMind.decision.action]}
                    {selectedMind.decision.target !== 'none' &&
                      ` → ${TARGET_ZH[selectedMind.decision.target]}`}
                  </span>
                  <span className="flex-1" />
                  <span className="text-[9px] text-white/28">
                    {selectedMind.decision.source === 'llm' ? 'LLM' : lang === 'zh' ? '本地' : 'local'}
                  </span>
                </div>
                <p className="text-[10.5px] text-white/50 mt-1 leading-relaxed">
                  「{selectedMind.decision.thought}」
                </p>
              </div>
            )}

            {selectedMind.memory.length > 0 && (
              <div className="mt-2.5">
                <div className="text-[9.5px] text-white/32 mb-1">
                  {lang === 'zh' ? '记忆' : 'MEMORY'}
                </div>
                <div className="space-y-0.5">
                  {selectedMind.memory.map((m, i) => (
                    <div key={i} className="text-[10px] text-white/42">
                      · {m}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-2.5 flex gap-3 text-[9.5px] text-white/32 num">
              <span>
                {lang === 'zh' ? '思考' : 'thinks'} {selectedMind.thinkCount}
              </span>
              <span>
                LLM {selectedMind.llmThinkCount}
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
