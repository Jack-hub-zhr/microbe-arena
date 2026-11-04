/**
 * 演化路线面板
 * ---------------------------------------------------------------
 * 左侧是「真实世界」的演化谱系树：每一项都是地球上真实发生过的创新，
 * 按支系与年代排列；右侧是三条真实的多细胞化路线与地球史事件。
 */
import { useMemo, useState } from 'react';
import {
  EARTH_EVENTS,
  ROUTES,
  ROUTE_IDS,
  TRAITS,
  TRAIT_IDS,
  type Branch,
  type MulticellularRoute,
  type OrganelleId,
} from '../engine/lineages';
import type { Simulation } from '../engine/Simulation';
import { cx } from './ui/Glass';
import { TraitIcon } from './TraitIcons';

const BRANCH_ORDER: Branch[] = [
  '细菌',
  '古菌',
  '内共生',
  '真核',
  '多细胞起源',
  '动物',
  '植物',
  '真菌',
];

function formatEra(ma: number): string {
  if (ma >= 1000) return `${(ma / 1000).toFixed(1)} 十亿年前`;
  return `${ma} 百万年前`;
}

export default function LineageTree({
  engine,
  lang,
}: {
  engine: Simulation;
  lang: 'zh' | 'en';
}) {
  const [selected, setSelected] = useState<OrganelleId | null>(null);
  const [routeSel, setRouteSel] = useState<MulticellularRoute | null>(null);

  const byBranch = useMemo(() => {
    const map = new Map<Branch, OrganelleId[]>();
    for (const id of TRAIT_IDS) {
      const b = TRAITS[id].branch;
      if (!map.has(b)) map.set(b, []);
      map.get(b)!.push(id);
    }
    for (const [, list] of map) list.sort((a, b) => TRAITS[b].eraMa - TRAITS[a].eraMa);
    return BRANCH_ORDER.filter((b) => map.has(b)).map((b) => [b, map.get(b)!] as const);
  }, []);

  const total = TRAIT_IDS.length;
  const found = engine.seenOrganelles.size;

  return (
    <div className="space-y-5 pt-1">
      {/* 进度 */}
      <div className="glass-soft rounded-xl px-3.5 py-3">
        <div className="flex items-baseline justify-between mb-1.5">
          <span className="label-xs text-white/40">
            {lang === 'zh' ? '已发现的演化创新' : 'DISCOVERED INNOVATIONS'}
          </span>
          <span className="num text-[15px] text-[#a2db3c]">
            {found}
            <span className="text-white/25 text-[11px]">/{total}</span>
          </span>
        </div>
        <div className="h-1.5 rounded-full bg-white/8 overflow-hidden">
          <div
            className="h-full rounded-full transition-[width] duration-700"
            style={{
              width: `${(found / total) * 100}%`,
              background: 'var(--accent)',
              
            }}
          />
        </div>
        <p className="mt-2 text-[10px] leading-relaxed text-white/35">
          {lang === 'zh'
            ? '每一项都对应地球上真实发生过的演化创新，拥有真实存在的代表生物与起源年代。'
            : 'Every entry is a real evolutionary innovation with a real organism behind it.'}
        </p>
      </div>

      {/* 三条多细胞化路线 */}
      <div>
        <div className="label-xs text-white/38 mb-2">
          {lang === 'zh' ? '真实的多细胞化路线' : 'REAL MULTICELLULAR ROUTES'}
        </div>
        <div className="space-y-2">
          {ROUTE_IDS.map((id) => {
            const r = ROUTES[id];
            const achieved = engine.seenRoutes.has(id);
            const active = routeSel === id;
            return (
              <button
                key={id}
                onClick={() => setRouteSel(active ? null : id)}
                className="w-full text-left rounded-xl px-3 py-2.5 transition-all duration-300"
                style={{
                  background: achieved ? `${r.hue}18` : 'rgba(255,255,255,.03)',
                  border: `1px solid ${achieved ? `${r.hue}55` : 'rgba(255,255,255,.08)'}`,
                  boxShadow: achieved ? `0 6px 22px -12px ${r.hue}` : 'none',
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-[15px]" style={{ color: achieved ? r.hue : 'rgba(255,255,255,.3)' }}>
                    <TraitIcon id={r.icon} size={15} />
                  </span>
                  <span
                    className={cx('text-[12px]', achieved ? 'text-white/90' : 'text-white/40')}
                  >
                    {lang === 'zh' ? r.zh : r.en}
                  </span>
                  <span className="flex-1" />
                  <span
                    className="text-[9.5px] px-1.5 rounded-[4px]"
                    style={{
                      background: achieved ? `${r.hue}25` : 'rgba(255,255,255,.05)',
                      color: achieved ? r.hue : 'rgba(255,255,255,.3)',
                    }}
                  >
                    {achieved
                      ? lang === 'zh'
                        ? '已达成'
                        : 'REACHED'
                      : lang === 'zh'
                        ? '未达成'
                        : 'LOCKED'}
                  </span>
                </div>
                <div className="mt-1 text-[10px] text-white/32">
                  {lang === 'zh' ? r.realZh : r.realEn} · {formatEra(r.eraMa)}
                </div>
                {active && (
                  <div className="mt-2 space-y-1.5 text-[10.5px] leading-relaxed">
                    <p className="text-white/55">{lang === 'zh' ? r.descZh : r.descEn}</p>
                    <p style={{ color: `${r.hue}dd` }}>
                      ▸ {lang === 'zh' ? r.perkZh : r.perkEn}
                    </p>
                    <p className="text-white/35">
                      {lang === 'zh' ? '需要：' : 'Requires: '}
                      {r.requires.map((x) => TRAITS[x].zh).join(' + ')}
                    </p>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 地球史事件 */}
      <div>
        <div className="label-xs text-white/38 mb-2">
          {lang === 'zh' ? '地球史大事件' : 'MASS EVENTS IN EARTH HISTORY'}
        </div>
        <div className="space-y-1.5">
          {Object.values(EARTH_EVENTS).map((e) => {
            const hit = engine.seenEarthEvents.has(e.id);
            return (
              <div
                key={e.id}
                className="flex items-start gap-2.5 px-2.5 py-2 rounded-xl"
                style={{
                  background: hit ? `${e.hue}12` : 'transparent',
                  opacity: hit ? 1 : 0.38,
                }}
              >
                <span className="text-[14px] mt-px" style={{ color: hit ? e.hue : 'rgba(255,255,255,.35)' }}>
                  <TraitIcon id={e.icon} size={14} />
                </span>
                <div className="min-w-0">
                  <div className="flex items-baseline gap-2">
                    <span className={cx('text-[11.5px]', hit ? 'text-white/88' : 'text-white/45')}>
                      {lang === 'zh' ? e.zh : e.en}
                    </span>
                    <span className="text-[9px] text-white/28 num">{formatEra(e.eraMa)}</span>
                  </div>
                  {hit && (
                    <div className="text-[10px] text-white/42 leading-relaxed mt-0.5">
                      {lang === 'zh' ? e.descZh : e.descEn}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 谱系树 */}
      <div>
        <div className="label-xs text-white/38 mb-2">
          {lang === 'zh' ? '演化谱系树' : 'LINEAGE TREE'}
        </div>
        <div className="space-y-4">
          {byBranch.map(([branch, list]) => (
            <div key={branch}>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-1 h-1 rounded-full bg-white/30" />
                <span className="text-[10.5px] text-white/50">{branch}</span>
                <span className="flex-1 h-px bg-white/8" />
              </div>
              <div className="space-y-1 pl-3 border-l border-white/8">
                {list.map((id) => {
                  const t = TRAITS[id];
                  const got = engine.seenOrganelles.has(id);
                  const active = selected === id;
                  return (
                    <button
                      key={id}
                      onClick={() => setSelected(active ? null : id)}
                      className="w-full text-left rounded-xl px-2 py-1.5 transition-all duration-200 hover:bg-white/4"
                      style={{
                        background: active ? `${t.hue}16` : undefined,
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className="w-6 h-6 rounded-full flex items-center justify-center text-[12px] shrink-0"
                          style={{
                            border: `1px solid ${got ? `${t.hue}66` : 'rgba(255,255,255,.12)'}`,
                            background: got ? `${t.hue}1c` : 'transparent',
                            color: got ? t.hue : 'rgba(255,255,255,.3)',
                          }}
                        >
                          {got ? <TraitIcon id={t.icon} size={13} /> : <span className="text-[11px]">?</span>}
                        </span>
                        <span className={cx('text-[11.5px]', got ? 'text-white/85' : 'text-white/38')}>
                          {lang === 'zh' ? t.zh : t.en}
                        </span>
                        <span className="flex-1" />
                        <span className="text-[9px] text-white/26 num">{formatEra(t.eraMa)}</span>
                      </div>
                      {active && (
                        <div className="mt-1.5 pl-8 space-y-1">
                          <p className="text-[10.5px] text-white/55 leading-relaxed">
                            {lang === 'zh' ? t.descZh : t.descEn}
                          </p>
                          <p className="text-[10px] text-white/40">
                            <span className="text-white/55">
                              {lang === 'zh' ? '现实原型：' : 'Real organism: '}
                            </span>
                            {lang === 'zh' ? t.realZh : t.realEn}
                          </p>
                          <p className="text-[10px] text-white/32 leading-relaxed">
                            {lang === 'zh' ? t.noteZh : t.noteEn}
                          </p>
                          {t.prereq && t.prereq.length > 0 && (
                            <p className="text-[9.5px] text-white/28">
                              {lang === 'zh' ? '前置：' : 'Requires: '}
                              {t.prereq.map((x) => TRAITS[x].zh).join(' + ')}
                            </p>
                          )}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
