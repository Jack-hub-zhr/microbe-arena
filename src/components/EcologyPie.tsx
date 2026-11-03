/**
 * 生态构成实时圆饼图
 * ---------------------------------------------------------------
 * 用 stroke-dasharray 实现圆环分段，比例变化时平滑过渡，
 * 因此它是真的「实时跳动」而不是每帧重绘。
 */
import { useMemo } from 'react';
import { STRATEGIES, STRATEGY_IDS } from '../engine/Simulation';
import type { Strategy } from '../engine/types';

export function EcologyPie({
  composition,
  counts,
  size = 104,
  thickness = 13,
  showLegend = false,
  showTotal = true,
}: {
  composition: Record<Strategy, number>;
  counts?: Record<Strategy, number>;
  size?: number;
  thickness?: number;
  showLegend?: boolean;
  showTotal?: boolean;
}) {
  const r = (size - thickness) / 2;
  const C = 2 * Math.PI * r;

  const segments = useMemo(() => {
    let acc = 0;
    return STRATEGY_IDS.map((id) => {
      const v = Math.max(0, composition[id] ?? 0);
      const seg = {
        id,
        value: v,
        dash: v * C,
        offset: -acc * C,
        color: STRATEGIES[id].color,
        label: STRATEGIES[id].zh,
        icon: STRATEGIES[id].icon,
      };
      acc += v;
      return seg;
    });
  }, [composition, C]);

  const total = counts
    ? Object.values(counts).reduce((a, b) => a + b, 0)
    : Math.round((composition.photosynthesizer ?? 0) * 0) + totalFromComposition(composition);

  return (
    <div className="flex flex-col items-center gap-2.5">
      <div className="relative" style={{ width: size, height: size }}>
        {/* 底环 */}
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke="rgba(255,255,255,0.07)"
            strokeWidth={thickness}
          />
        </svg>

        {/* 分段 */}
        <svg width={size} height={size} className="-rotate-90 absolute inset-0">
          {segments.map((s) =>
            s.value <= 0.0001 ? null : (
              <circle
                key={s.id}
                cx={size / 2}
                cy={size / 2}
                r={r}
                fill="none"
                stroke={s.color}
                strokeWidth={thickness}
                strokeLinecap="butt"
                strokeDasharray={`${s.dash} ${Math.max(0, C - s.dash)}`}
                strokeDashoffset={s.offset}
                style={{
                  transition: 'stroke-dasharray 640ms cubic-bezier(.22,1,.36,1), stroke-dashoffset 640ms cubic-bezier(.22,1,.36,1)',
                  filter: `drop-shadow(0 0 5px ${s.color}88)`,
                }}
              />
            ),
          )}
        </svg>

        {/* 中心 */}
        {showTotal && (
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="num text-[19px] font-semibold leading-none text-white/92">
              {total}
            </span>
            <span className="label-xs text-white/35 mt-1">个体</span>
          </div>
        )}

        {/* 实时脉冲环 */}
        <div className="absolute inset-0 rounded-full border border-white/10 animate-ping pointer-events-none [animation-duration:2.8s]" />
      </div>

      {showLegend && (
        <div className="w-full space-y-1">
          {segments.map((s) => (
            <div key={s.id} className="flex items-center gap-2 text-[11px]">
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ background: s.color, boxShadow: `0 0 8px ${s.color}` }}
              />
              <span className="text-white/70">{s.label}</span>
              <span className="flex-1" />
              <span className="num text-white/45">{(s.value * 100).toFixed(1)}%</span>
              {counts && (
                <span className="num text-white/30 w-8 text-right">{counts[s.id] ?? 0}</span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function totalFromComposition(c: Record<Strategy, number>) {
  // 只有比例没有绝对数量时，用「光合者占比」反推一个平滑的等效总数不可靠，
  // 因此此处返回 0，调用方应传入 counts。
  void c;
  return 0;
}
