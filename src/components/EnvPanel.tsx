/**
 * 环境控制面板
 * 可折叠；展开时从胶囊按钮下方生长，光照 / 温度 / 养分三条滑杆。
 */
import { useRef, useState } from 'react';
import { cx, usePopReveal } from './ui/Glass';
import { IconDroplet, IconSun, IconThermometer } from './Icons';
import type { Simulation } from '../engine/Simulation';

interface Props {
  engine: Simulation;
  lang: 'zh' | 'en';
  refresh: () => void;
}

function Slider({
  value,
  min,
  max,
  onChange,
  color,
}: {
  value: number;
  min: number;
  max: number;
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
      value={Math.round(value)}
      style={{ ['--track-c' as string]: color, ['--pct' as string]: `${pct}%` }}
      onChange={(e) => onChange(Number(e.target.value))}
    />
  );
}

export default function EnvPanel({ engine, lang, refresh }: Props) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  usePopReveal(panelRef, open);
  const isDay = engine.light > 0.45;

  return (
    <div className="pointer-events-auto flex flex-col items-start gap-2">
      <button
        onClick={() => setOpen((o) => !o)}
        className={cx(
          'glass capsule-btn h-9 pl-3 pr-3.5 flex items-center gap-2 text-[10px] tracking-wider',
          open ? 'text-white/85' : 'text-white/55',
        )}
        title={lang === 'zh' ? '环境控制' : 'Environment'}
      >
        <IconSun size={13} />
        <span className="label-xs">{lang === 'zh' ? '环境控制' : 'ENVIRONMENT'}</span>
        <span
          className={cx(
            'w-1.5 h-1.5 rounded-full transition-all duration-300',
            open ? 'bg-[#e8c46a] rotate-0' : 'bg-white/25 -rotate-90',
          )}
        />
      </button>

      <div
        ref={panelRef}
        className={cx(
          'glass rounded-[14px] overflow-hidden',
          open ? 'pop-in' : 'pop-out pointer-events-none',
        )}
        style={{
          transformOrigin: '12px 0px',
          maxHeight: open ? 320 : 0,
          opacity: open ? 1 : 0,
          transition:
            'max-height .42s cubic-bezier(.22,1,.36,1), opacity .28s ease, padding .42s cubic-bezier(.22,1,.36,1)',
          padding: open ? '14px 16px' : '0 16px',
        }}
      >
        <div className="w-[196px] space-y-3">
          <div className="flex items-center justify-between">
            <span className="label-xs text-white/38">
              {lang === 'zh' ? '环境控制' : 'ENVIRONMENT'}
            </span>
            <span
              className={cx(
                'flex items-center gap-1 text-[10px]',
                isDay ? 'text-[#e8c46a]' : 'text-[#7c8fb8]',
              )}
            >
              <IconSun size={10} />
              {isDay ? (lang === 'zh' ? '白昼' : 'Day') : lang === 'zh' ? '黑夜' : 'Night'}{' '}
              {(engine.light * 100).toFixed(0)}%
            </span>
          </div>

          {/* 光照 */}
          <div>
            <div className="flex justify-between items-center text-[10px] text-white/50 mb-0.5">
              <span className="flex items-center gap-1">
                <IconSun size={10} />
                {lang === 'zh' ? '光照' : 'Light'}
              </span>
              <button
                onClick={() => {
                  engine.lightOverride =
                    engine.lightOverride === null ? engine.light : null;
                  refresh();
                }}
                className={cx(
                  'px-1.5 rounded-[4px] text-[9px] border transition-colors',
                  engine.lightOverride === null
                    ? 'border-[#2cc9ff]/45 text-[#2cc9ff]'
                    : 'border-white/15 text-white/40',
                )}
              >
                {lang === 'zh' ? '昼夜循环' : 'Auto'}
              </button>
            </div>
            <Slider
              value={Math.round((engine.lightOverride ?? engine.light) * 100)}
              min={0}
              max={100}
              color="#e8c46a"
              onChange={(v) => {
                engine.lightOverride = v / 100;
              }}
            />
          </div>

          {/* 温度 */}
          <div>
            <div className="flex justify-between items-center text-[10px] text-white/50 mb-0.5">
              <span className="flex items-center gap-1">
                <IconThermometer size={10} />
                {lang === 'zh' ? '温度' : 'Temp'}
              </span>
              <span className="num text-white/40">
                {engine.temperature < 0.33
                  ? lang === 'zh'
                    ? '寒冷'
                    : 'cold'
                  : engine.temperature > 0.66
                    ? lang === 'zh'
                      ? '炎热'
                      : 'hot'
                    : ''}{' '}
                {(engine.temperature * 40).toFixed(0)}°C
              </span>
            </div>
            <Slider
              value={Math.round(engine.temperature * 100)}
              min={0}
              max={100}
              color="#ff8b3d"
              onChange={(v) => {
                engine.temperature = v / 100;
              }}
            />
          </div>

          {/* 养分 */}
          <div>
            <div className="flex justify-between items-center text-[10px] text-white/50 mb-0.5">
              <span className="flex items-center gap-1">
                <IconDroplet size={10} />
                {lang === 'zh' ? '养分' : 'Nutrient'}
              </span>
              <span className="num text-white/40">×{engine.nutrient.toFixed(2)}</span>
            </div>
            <Slider
              value={Math.round(engine.nutrient * 100)}
              min={35}
              max={240}
              color="#a2db3c"
              onChange={(v) => {
                engine.nutrient = v / 100;
              }}
            />
            <div className="text-[9px] text-white/26 leading-relaxed mt-1">
              {lang === 'zh'
                ? '分解者会把尸体碎屑还原成养分'
                : 'Decomposers convert corpses back into nutrients'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
