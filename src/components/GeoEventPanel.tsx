/**
 * 地球史面板
 * ---------------------------------------------------------------
 * 地球上真实发生过的重大事件，按年代排好，用户可以自己挑一个直接实施。
 * 每一项都会真的改变演化规则或种群（效果由 Simulation.applyGeoEvent 执行）。
 */
import { useState } from 'react';
import { GEO_EVENTS, GEO_CATEGORIES, formatEra } from '../engine/geoEvents';
import type { Simulation } from '../engine/Simulation';
import { TraitIcon } from './TraitIcons';
import { cx } from './ui/Glass';

export default function GeoEventPanel({
  engine,
  lang,
  onFire,
}: {
  engine: Simulation;
  lang: 'zh' | 'en';
  onFire: (title: string, detail: string, hue: string) => void;
}) {
  const [pending, setPending] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('全部');

  const list = GEO_EVENTS.filter((e) => filter === '全部' || e.category === filter);

  const fire = (id: string, zh: string, hue: string) => {
    setPending(id);
    const res = engine.applyGeoEvent(id);
    setPending(null);
    if (res.ok) onFire(zh, res.message, hue);
  };

  return (
    <div className="space-y-4 pt-1">
      <div className="glass-soft rounded-2xl px-3.5 py-3">
        <div className="flex items-baseline justify-between">
          <span className="label-xs text-white/40">
            {lang === 'zh' ? '地球史大事件' : 'MASS EVENTS IN EARTH HISTORY'}
          </span>
          <span className="num text-[13px] text-[#d9a441]">
            {engine.geoEventsTriggered.size}
            <span className="text-white/25 text-[10px]">/{GEO_EVENTS.length}</span>
          </span>
        </div>
        <p className="mt-1.5 text-[10.5px] leading-relaxed text-white/42">
          {lang === 'zh'
            ? '每一件都是地球上真实发生过的重大事件。选一个直接实施 —— 它会真的改变演化规则和种群，而不只是弹一条提示。'
            : 'Every entry really happened on Earth. Pick one to enact — it changes the simulation itself, not just the log.'}
        </p>
      </div>

      {/* 分类筛选 */}
      <div className="flex flex-wrap gap-1.5">
        {['全部', ...GEO_CATEGORIES].map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={cx(
              'capsule-btn h-7 px-2.5 text-[10px] border transition-colors',
              filter === c
                ? 'border-[#d9a441]/50 text-[#d9a441] bg-[#d9a441]/12'
                : 'border-white/10 text-white/45 hover:text-white/80',
            )}
          >
            {c}
          </button>
        ))}
      </div>

      {/* 事件列表（按年代从新到旧） */}
      <div className="space-y-1.5">
        {[...list]
          .sort((a, b) => a.eraMa - b.eraMa)
          .map((e) => {
            const fired = engine.geoEventsTriggered.has(e.id);
            const busy = pending === e.id;
            return (
              <div
                key={e.id}
                className="rounded-xl px-2.5 py-2 transition-colors"
                style={{
                  background: fired ? `${e.hue}12` : 'transparent',
                  border: `1px solid ${fired ? `${e.hue}38` : 'rgba(239,233,222,.07)'}`,
                }}
              >
                <div className="flex items-start gap-2.5">
                  <span
                    className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-[7px]"
                    style={{
                      color: e.hue,
                      background: `${e.hue}14`,
                      border: `1px solid ${e.hue}30`,
                    }}
                  >
                    <TraitIcon id={e.icon} size={14} />
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-[12px] text-white/88">{e.zh}</span>
                      <span className="text-[9.5px] text-white/28 num">
                        {formatEra(e.eraMa)}
                      </span>
                      <span className="ml-auto text-[9px] text-white/26">{e.category}</span>
                    </div>
                    <p className="mt-1 text-[10.5px] leading-relaxed text-white/45">
                      {e.realZh}
                    </p>
                    <p className="mt-1 text-[10.5px] leading-relaxed" style={{ color: `${e.hue}dd` }}>
                      ▸ {e.effectZh}
                    </p>
                  </div>
                </div>

                <div className="mt-2 flex items-center gap-2 pl-[38px]">
                  <button
                    disabled={busy}
                    onClick={() => fire(e.id, e.zh, e.hue)}
                    className={cx(
                      'capsule-btn h-7 px-3 text-[10px] border transition-colors',
                      fired
                        ? 'border-white/12 text-white/40 hover:text-white/70'
                        : 'border-[#d9a441]/45 text-[#d9a441] hover:bg-[#d9a441]/12',
                    )}
                  >
                    {busy
                      ? lang === 'zh'
                        ? '正在发生…'
                        : 'happening…'
                      : fired
                        ? lang === 'zh'
                          ? '再次实施'
                          : 'replay'
                        : lang === 'zh'
                          ? '实施这个事件'
                          : 'enact'}
                  </button>
                  {fired && (
                    <span
                      className="text-[9.5px] px-1.5 rounded-[4px]"
                      style={{ background: `${e.hue}1c`, color: e.hue }}
                    >
                      {lang === 'zh' ? '已发生' : 'happened'}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
