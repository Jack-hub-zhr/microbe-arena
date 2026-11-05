/**
 * 数据抽屉（可折叠面板）
 * ---------------------------------------------------------------
 * 收起时它只是一颗贴在屏幕右缘的胶囊按钮；
 * 展开时抽屉的 transform-origin 会被设置成「用户刚刚点击的那个按钮」，
 * 因此面板看上去是从按钮里长出来的，而不是从屏幕右侧滑进来。
 */
import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import { EcologyPie } from './EcologyPie';
import { cx, useLiquidGlass, usePopReveal } from './ui/Glass';
import {
  IconBook,
  IconCells,
  IconChart,
  IconClose,
  IconScroll,
  IconSpark,
  IconTrophy,
} from './Icons';
import LineageTree from './LineageTree';
import { TraitIcon } from './TraitIcons';
import {
  CELL_ROLES,
  ORGANELLES,
  ORGANELLE_IDS,
  STRATEGIES,
  STRATEGY_IDS,
} from '../engine/Simulation';
import type { OrganelleId } from '../engine/lineages';
import type { Simulation } from '../engine/Simulation';
import type { Agent, Strategy } from '../engine/types';

export type DrawerTab = 'ecology' | 'lineage' | 'ranks' | 'codex' | 'chronicle' | 'cell';

interface Props {
  open: boolean;
  tab: DrawerTab;
  triggerRect: DOMRect | null;
  onTab: (t: DrawerTab) => void;
  onClose: () => void;
  engine: Simulation;
  lang: 'zh' | 'en';
  selected: Agent | null;
}

const TABS: { id: DrawerTab; icon: ReactNode; zh: string; en: string }[] = [
  { id: 'ecology', icon: <IconChart size={14} />, zh: '生态', en: 'Eco' },
  { id: 'lineage', icon: <IconSpark size={14} />, zh: '演化', en: 'Tree' },
  { id: 'ranks', icon: <IconTrophy size={14} />, zh: '榜单', en: 'Ranks' },
  { id: 'codex', icon: <IconBook size={14} />, zh: '图鉴', en: 'Codex' },
  { id: 'chronicle', icon: <IconScroll size={14} />, zh: '编年', en: 'Log' },
  { id: 'cell', icon: <IconCells size={14} />, zh: '个体', en: 'Cell' },
];

export default function StatsDrawer({
  open,
  tab,
  triggerRect,
  onTab,
  onClose,
  engine,
  lang,
  selected,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({ opacity: 0, visibility: 'hidden' });
  const [mounted, setMounted] = useState(false);

  useLiquidGlass(ref, { scale: 58, border: 0.09, blur: 1.6, saturate: 1.45 }, open);
  usePopReveal(ref, open);

  useLayoutEffect(() => {
    if (!open || !ref.current) return;

    const measure = () => {
      const el = ref.current;
      if (!el) return;
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      const width = Math.min(356, vw - 24);
      const right = 12;
      const left = vw - right - width;
      const top = 62; // 让开顶栏
      const height = Math.max(240, Math.min(vh - top - 18, 720));

      // 触发按钮通常在抽屉左侧，展开原点落在按钮中心
      const ox = triggerRect ? triggerRect.left + triggerRect.width / 2 - left : -40;
      const oy = triggerRect ? triggerRect.top + triggerRect.height / 2 - top : height / 2;
      const transformOrigin = `${Math.max(-60, Math.min(width + 60, ox))}px ${Math.max(-60, Math.min(height + 60, oy))}px`;

      setStyle((prev) => {
        if (
          prev.left === left &&
          prev.top === top &&
          prev.width === width &&
          prev.height === height &&
          prev.transformOrigin === transformOrigin
        ) {
          return prev;
        }
        return { left, top, width, height, transformOrigin, opacity: 1, visibility: 'visible' };
      });
      setMounted(true);
    };

    measure();
    const ro = new ResizeObserver(() => measure());
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, [open, triggerRect]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open && !mounted) return null;

  return (
    <aside
      ref={ref}
      className={cx(
        'glass glass-strong fixed z-40 flex flex-col overflow-hidden rounded-[20px]',
        open ? 'pop-in' : 'pop-out',
      )}
      style={style}
      onAnimationEnd={() => {
        if (!open) {
          setMounted(false);
          setStyle((s) => ({ ...s, opacity: 0, visibility: 'hidden' }));
        }
      }}
    >
      {/* 顶部：标签页 */}
      <div className="flex items-center gap-1 px-3 pt-3 pb-2 shrink-0">
        <div className="flex-1 flex items-center gap-0.5 p-1 rounded-[8px] bg-white/[0.045] border border-white/8">
          {TABS.map((t) => {
            const active = tab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => onTab(t.id)}
                title={lang === 'zh' ? t.zh : t.en}
                className={cx(
                  'relative flex-1 h-8 rounded-full flex items-center justify-center gap-1 transition-all duration-300',
                  active ? 'text-white' : 'text-white/40 hover:text-white/75',
                )}
                style={
                  active
                    ? {
                        background: 'rgba(217,164,65,.16)',
                        boxShadow: 'inset 0 0 0 1px rgba(217,164,65,.42)',
                      }
                    : undefined
                }
              >
                {t.icon}
                <span className="text-[10px] hidden sm:inline">
                  {lang === 'zh' ? t.zh : t.en}
                </span>
              </button>
            );
          })}
        </div>
        <button
          onClick={onClose}
          className="w-8 h-8 rounded-full flex items-center justify-center text-white/40 hover:text-white/80 hover:bg-white/8 transition-colors shrink-0"
          title="Close"
        >
          <IconClose size={14} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto scroll-thin px-4 pb-4">
        {tab === 'ecology' && <EcologyTab engine={engine} lang={lang} />}
        {tab === 'lineage' && <LineageTree engine={engine} lang={lang} />}
        {tab === 'ranks' && <RanksTab engine={engine} lang={lang} />}
        {tab === 'codex' && <CodexTab engine={engine} lang={lang} />}
        {tab === 'chronicle' && <ChronicleTab engine={engine} lang={lang} />}
        {tab === 'cell' && <CellTab agent={selected} engine={engine} lang={lang} />}
      </div>
    </aside>
  );
}

/* ───────── 生态构成 ───────── */

function EcologyTab({ engine, lang }: { engine: Simulation; lang: 'zh' | 'en' }) {
  const comp = engine.composition();
  const counts = engine.compositionCounts();
  const roles = new Map<string, number>();
  for (const a of engine.agents) {
    if (!a.alive || !a.role) continue;
    roles.set(a.role, (roles.get(a.role) ?? 0) + 1);
  }

  return (
    <div className="space-y-5 pt-1">
      <div className="flex justify-center py-2">
        <EcologyPie composition={comp} counts={counts} size={148} thickness={17} showLegend={false} />
      </div>

      <div className="space-y-1.5">
        {STRATEGY_IDS.map((id) => {
          const meta = STRATEGIES[id];
          const v = comp[id] ?? 0;
          return (
            <div key={id} className="flex items-center gap-2 text-[11px]">
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ background: meta.color }}
              />
              <span className="text-white/68 w-[68px] shrink-0">
                {lang === 'zh' ? meta.zh : meta.en}
              </span>
              <span className="flex-1 h-1.5 rounded-full bg-white/8 overflow-hidden">
                <span
                  className="block h-full rounded-full transition-[width] duration-700 ease-out"
                  style={{
                    width: `${Math.max(0, v * 100)}%`,
                    background: `linear-gradient(90deg, ${meta.color}, ${meta.color}66)`,
                    boxShadow: '0 1px 2px rgba(0,0,0,.35)',
                  }}
                />
              </span>
              <span className="num text-white/42 w-10 text-right">{(v * 100).toFixed(1)}%</span>
              <span className="num text-white/28 w-8 text-right">{counts[id] ?? 0}</span>
            </div>
          );
        })}
      </div>

      <div className="h-px bg-white/8" />

      <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
        {[
          { k: lang === 'zh' ? '存活生物' : 'Alive', v: engine.agents.filter((a) => a.alive).length, c: '#a2db3c' },
          { k: lang === 'zh' ? '多细胞群体' : 'Colonies', v: engine.colonies.size, c: '#4fb3c4' },
          { k: lang === 'zh' ? '累计捕食' : 'Total kills', v: engine.totalKills, c: '#ff8b3d' },
          { k: lang === 'zh' ? '其中食同族' : 'Cannibalism', v: engine.totalCannibalKills, c: '#ff3d6e' },
          { k: lang === 'zh' ? '累计新生' : 'Births', v: engine.totalBirths, c: '#e8c46a' },
          { k: lang === 'zh' ? '养分浓度' : 'Nutrient', v: `×${engine.nutrient.toFixed(2)}`, c: '#b5652e' },
        ].map((s) => (
          <div key={s.k}>
            <div className="text-[9.5px] text-white/38">{s.k}</div>
            <div className="num text-[17px] font-semibold leading-tight" style={{ color: s.c }}>
              {typeof s.v === 'number' ? s.v.toLocaleString() : s.v}
            </div>
          </div>
        ))}
      </div>

      {roles.size > 0 && (
        <>
          <div className="h-px bg-white/8" />
          <div>
            <div className="label-xs text-white/40 mb-2">
              {lang === 'zh' ? '细胞职能分化' : 'CELL SPECIALISATION'}
            </div>
            <div className="space-y-1">
              {[...roles.entries()].map(([role, n]) => {
                const meta = CELL_ROLES[role as keyof typeof CELL_ROLES];
                return (
                  <div key={role} className="flex items-center gap-2 text-[11px]">
                    <span className="w-4 flex justify-center" style={{ color: meta.color }}>
                      <TraitIcon id={meta.icon} size={13} />
                    </span>
                    <span className="text-white/66">
                      {lang === 'zh' ? meta.zh : meta.en}
                    </span>
                    <span className="flex-1" />
                    <span className="num text-white/45">{n}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

/* ───────── 榜单 ───────── */

function RanksTab({ engine, lang }: { engine: Simulation; lang: 'zh' | 'en' }) {
  const alive = engine.agents.filter((a) => a.alive);
  const top = [...alive].sort((a, b) => b.kills - a.kills).slice(0, 8);
  const cannibals = [...alive]
    .filter((a) => a.cannibalKills > 0)
    .sort((a, b) => b.cannibalKills - a.cannibalKills)
    .slice(0, 5);

  return (
    <div className="space-y-5 pt-1">
      <div>
        <div className="label-xs text-white/40 mb-2">
          {lang === 'zh' ? '猎杀排行榜' : 'KILL LEADERBOARD'}
        </div>
        <div className="space-y-1">
          {top.map((a, i) => (
            <div key={a.id} className="flex items-center gap-2 px-2 py-1.5 rounded-xl hover:bg-white/5">
              <span className="num text-[10px] text-white/28 w-3">{i + 1}</span>
              <span
                className="w-2.5 h-2.5 rounded-full shrink-0"
                style={{ background: `hsl(${a.genome.hue}, 78%, 62%)` }}
              />
              <span className="num text-[11.5px] text-white/82">#{a.id}</span>
              <span className="text-[10px] text-white/42 truncate">
                {lang === 'zh' ? STRATEGIES[a.strategy].zh : STRATEGIES[a.strategy].en}
                {a.role ? ` · ${lang === 'zh' ? CELL_ROLES[a.role].zh : CELL_ROLES[a.role].en}` : ''}
              </span>
              <span className="flex-1" />
              {a.cannibalKills > 0 && (
                <span className="text-[9px] px-1.5 rounded-[4px] bg-[#d2604f]/18 text-[#e79b8c] border border-[#d2604f]/32">
                  {lang === 'zh' ? `食同族 ${a.cannibalKills}` : `cannibal ${a.cannibalKills}`}
                </span>
              )}
              <span className="num text-[11px] text-[#ff8b3d]">{a.kills}</span>
            </div>
          ))}
          {top.length === 0 && (
            <div className="text-[10.5px] text-white/28 px-2 py-1">
              {lang === 'zh' ? '还没有生物完成猎杀' : 'No kills yet'}
            </div>
          )}
        </div>
      </div>

      <div className="h-px bg-white/8" />

      <div>
        <div className="label-xs text-white/40 mb-2">
          {lang === 'zh' ? '食同族记录' : 'CANNIBALISM'}
        </div>
        <div className="space-y-1">
          {cannibals.map((a) => (
            <div key={a.id} className="flex items-center gap-2 px-2 py-1.5 rounded-xl">
              <span className="text-[12px] w-4 text-center text-[#ff3d6e]">☠</span>
              <span className="num text-[11.5px] text-white/82">#{a.id}</span>
              <span className="text-[10px] text-white/42">
                {lang === 'zh' ? '吞噬同族' : 'devoured its own kind'}
              </span>
              <span className="flex-1" />
              <span className="num text-[11px] text-[#ff3d6e]">×{a.cannibalKills}</span>
            </div>
          ))}
          {cannibals.length === 0 && (
            <div className="text-[10.5px] text-white/28 px-2 py-1">
              {lang === 'zh' ? '尚未发生同类相食' : 'No cannibalism yet — push two hunters together'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ───────── 图鉴 ───────── */

function CodexTab({ engine, lang }: { engine: Simulation; lang: 'zh' | 'en' }) {
  const [openId, setOpenId] = useState<OrganelleId | null>(null);
  return (
    <div className="space-y-1 pt-1">
      <div className="label-xs text-white/40 mb-2">
        {lang === 'zh' ? '演化创新图鉴' : 'INNOVATION CODEX'} · {engine.seenOrganelles.size}/
        {ORGANELLE_IDS.length}
      </div>
      {ORGANELLE_IDS.map((id) => {
        const meta = ORGANELLES[id];
        const found = engine.seenOrganelles.has(id);
        const open = openId === id;
        return (
          <button
            key={id}
            onClick={() => setOpenId(open ? null : id)}
            className="w-full text-left flex items-start gap-2.5 px-2.5 py-2 rounded-xl transition-colors hover:bg-white/4"
            style={{
              background: found ? `${meta.hue}12` : 'transparent',
              opacity: found ? 1 : 0.36,
            }}
          >
            <span
              className="w-7 h-7 rounded-full flex items-center justify-center text-[13px] shrink-0 mt-px"
              style={{
                border: `1px solid ${found ? `${meta.hue}66` : 'rgba(255,255,255,.15)'}`,
                color: found ? meta.hue : 'rgba(255,255,255,.4)',
                background: found ? `${meta.hue}18` : 'transparent',
              }}
            >
              {found ? <TraitIcon id={meta.icon} size={13} /> : <span className="text-[11px]">?</span>}
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-2">
                <span className="text-[12px] text-white/85">{lang === 'zh' ? meta.zh : meta.en}</span>
                <span className="text-[9px] text-white/26 num">
                  {meta.eraMa >= 1000
                    ? `${(meta.eraMa / 1000).toFixed(1)}Ga`
                    : `${meta.eraMa}Ma`}
                </span>
              </div>
              <div className="text-[10px] text-white/34 truncate">
                {found
                  ? lang === 'zh'
                    ? meta.realZh
                    : meta.realEn
                  : lang === 'zh'
                    ? '未进化'
                    : 'Not evolved'}
              </div>
              {open && (
                <div className="mt-1.5 space-y-1">
                  <p className="text-[10.5px] text-white/58 leading-relaxed">
                    {lang === 'zh' ? meta.descZh : meta.descEn}
                  </p>
                  <p className="text-[10px] text-white/38 leading-relaxed">
                    {lang === 'zh' ? meta.noteZh : meta.noteEn}
                  </p>
                  <p className="text-[9.5px] text-white/26">
                    {lang === 'zh' ? '支系：' : 'Branch: '}
                    {meta.branch}
                  </p>
                </div>
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}

/* ───────── 编年史 ───────── */

const EVENT_COLOR: Record<string, string> = {
  organelle: '#a2db3c',
  colony: '#4fb3c4',
  milestone: '#e8c46a',
  extinction: '#ff5b5b',
  apex: '#ff8b3d',
  god: '#c08a9e',
  cannibal: '#ff3d6e',
  differentiate: '#c9a227',
  earth: '#e8c46a',
  route: '#34d399',
};

function ChronicleTab({ engine, lang }: { engine: Simulation; lang: 'zh' | 'en' }) {
  return (
    <div className="pt-1">
      <div className="label-xs text-white/40 mb-2">
        {lang === 'zh' ? '进化编年史' : 'CHRONICLE'}
      </div>
      <div className="space-y-1.5">
        {engine.events.map((e, i) => (
          <div key={`${e.tick}-${i}`} className="flex gap-2 text-[11px] leading-relaxed event-in">
            <span
              className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
              style={{ background: EVENT_COLOR[e.type] ?? '#8fa' }}
            />
            <div>
              <span className="num text-white/26 mr-1.5">[{e.tick}]</span>
              <span className="text-white/72">{lang === 'zh' ? e.zh : e.en}</span>
            </div>
          </div>
        ))}
        {engine.events.length === 0 && (
          <div className="text-[10.5px] text-white/28">{lang === 'zh' ? '暂无记录' : 'No entries yet'}</div>
        )}
      </div>
    </div>
  );
}

/* ───────── 个体详情 ───────── */

function CellTab({
  agent,
  engine,
  lang,
}: {
  agent: Agent | null;
  engine: Simulation;
  lang: 'zh' | 'en';
}) {
  if (!agent) {
    return (
      <div className="pt-6 text-center text-[11px] text-white/32">
        {lang === 'zh' ? '点击培养皿里的任意生物查看它的基因组' : 'Click any organism to inspect its genome'}
      </div>
    );
  }
  const strategy = STRATEGIES[agent.strategy];
  const role = agent.role ? CELL_ROLES[agent.role] : null;
  const colonySize = engine.colonySize(agent.colonyId);
  const bars: { k: string; v: number; max: number; c: string }[] = [
    { k: lang === 'zh' ? '攻击' : 'Attack', v: engine.attackOf(agent), max: 20, c: '#ff8b3d' },
    { k: lang === 'zh' ? '防御' : 'Defense', v: engine.defenseOf(agent), max: 20, c: '#4fb3c4' },
    { k: lang === 'zh' ? '速度' : 'Speed', v: engine.speedOf(agent), max: 4, c: '#a2db3c' },
    { k: lang === 'zh' ? '感知' : 'Sense', v: engine.senseOf(agent), max: 260, c: '#e8c46a' },
  ];

  return (
    <div className="pt-1 space-y-4">
      <div className="flex items-center gap-3">
        <span
          className="w-10 h-10 rounded-full shrink-0"
          style={{
            background: `radial-gradient(circle at 34% 30%, hsl(${agent.genome.hue},78%,64%), hsl(${agent.genome.hue},70%,32%))`,
            boxShadow: '0 1px 2px rgba(0,0,0,.4)',
          }}
        />
        <div className="min-w-0">
          <div className="num text-[15px] text-white/90">#{agent.id}</div>
          <div className="flex items-center gap-1.5 flex-wrap">
            <span
              className="text-[10px] px-1.5 rounded-[4px]"
              style={{ background: `${strategy.color}22`, color: strategy.color }}
            >
              {lang === 'zh' ? strategy.zh : strategy.en}
            </span>
            {role && (
              <span
                className="text-[10px] px-1.5 rounded-[4px]"
                style={{ background: `${role.color}22`, color: role.color }}
              >
                <TraitIcon id={role.icon} size={11} /> {lang === 'zh' ? role.zh : role.en}
              </span>
            )}
          </div>
        </div>
      </div>

      {role && (
        <div
          className="text-[10.5px] leading-relaxed px-2.5 py-2 rounded-xl"
          style={{ background: `${role.color}12`, color: `${role.color}dd` }}
        >
          {lang === 'zh' ? role.descZh : role.descEn}
        </div>
      )}

      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
        {[
          { k: lang === 'zh' ? '世代' : 'Gen', v: agent.generation },
          { k: lang === 'zh' ? '能量' : 'Energy', v: Math.round(agent.energy) },
          { k: lang === 'zh' ? '猎杀' : 'Kills', v: agent.kills },
          { k: lang === 'zh' ? '食同族' : 'Cannibal', v: agent.cannibalKills },
          { k: lang === 'zh' ? '子代' : 'Offspring', v: agent.children },
          { k: lang === 'zh' ? '年龄' : 'Age', v: agent.age },
        ].map((s) => (
          <div key={s.k}>
            <div className="text-[9.5px] text-white/36">{s.k}</div>
            <div className="num text-[15px] text-white/85">{s.v}</div>
          </div>
        ))}
      </div>

      <div className="space-y-1.5">
        {bars.map((b) => (
          <div key={b.k} className="flex items-center gap-2 text-[10.5px]">
            <span className="text-white/45 w-10 shrink-0">{b.k}</span>
            <span className="flex-1 h-1.5 rounded-full bg-white/8 overflow-hidden">
              <span
                className="block h-full rounded-full transition-[width] duration-500"
                style={{
                  width: `${Math.min(100, (b.v / b.max) * 100)}%`,
                  background: b.c,
  
                }}
              />
            </span>
            <span className="num text-white/40 w-9 text-right">{b.v.toFixed(1)}</span>
          </div>
        ))}
      </div>

      {colonySize > 0 && (
        <div className="text-[10.5px] text-[#4fb3c4] bg-[#4fb3c4]/12 px-2.5 py-2 rounded-xl">
          {lang === 'zh'
            ? `隶属多细胞聚合体 · ${colonySize} 个细胞协同中`
            : `Member of a colony · ${colonySize} cells cooperating`}
        </div>
      )}

      <div>
        <div className="label-xs text-white/40 mb-1.5">
          {lang === 'zh' ? '细胞器' : 'ORGANELLES'}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {agent.genome.organelles.length === 0 && (
            <span className="text-[10.5px] text-white/32">
              {lang === 'zh' ? '原始细胞，尚无细胞器' : 'Primitive cell, no organelles'}
            </span>
          )}
          {agent.genome.organelles.map((o) => {
            const meta = ORGANELLES[o];
            return (
              <span
                key={o}
                title={lang === 'zh' ? meta.realZh : meta.realEn}
                className="text-[10px] px-2 py-1 rounded-full"
                style={{ background: `${meta.hue}1c`, color: meta.hue, border: `1px solid ${meta.hue}38` }}
              >
                <TraitIcon id={meta.icon} size={11} /> {lang === 'zh' ? meta.zh : meta.en}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export type { Strategy };
