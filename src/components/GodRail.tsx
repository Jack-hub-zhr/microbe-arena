/**
 * 「上帝之手」工具栏
 * ---------------------------------------------------------------
 * 折叠时只是一颗胶囊按钮；展开时工具列从按钮下方生长出来。
 * 与环境控制面板同处一条纵向流式布局中，
 * 因此两者永远不会互相遮挡（旧版在 1280×720 下会被环境面板压住「瘟疫」按钮）。
 */
import { useRef, useState } from 'react';
import { cx, useLiquidGlass, usePopReveal } from './ui/Glass';
import {
  IconAlien,
  IconEye,
  IconFeed,
  IconMutate,
  IconPlague,
  IconSmite,
  IconSpark,
} from './Icons';
import type { ToolId } from './Petri3D';

export interface ToolDef {
  id: ToolId | 'alien' | 'plague';
  label: string;
  labelEn: string;
  hint: string;
  hintEn: string;
  color: string;
  icon: React.ReactNode;
  instant?: boolean;
}

export const TOOLS: ToolDef[] = [
  {
    id: 'inspect',
    label: '观察',
    labelEn: 'Inspect',
    hint: '点击任意生物，查看它的基因组',
    hintEn: 'Click any organism to view its genome',
    color: '#2cc9ff',
    icon: <IconEye size={15} />,
  },
  {
    id: 'feed',
    label: '投喂',
    labelEn: 'Feed',
    hint: '点击培养皿，在该处撒下食物',
    hintEn: 'Click the dish to scatter food there',
    color: '#a2db3c',
    icon: <IconFeed size={15} />,
  },
  {
    id: 'smite',
    label: '天罚',
    labelEn: 'Smite',
    hint: '点击培养皿，毁灭半径内的生命',
    hintEn: 'Click the dish to destroy life in a radius',
    color: '#ff8b3d',
    icon: <IconSmite size={15} />,
  },
  {
    id: 'mutate',
    label: '点化',
    labelEn: 'Bless',
    hint: '点击生物附近，强制它突变出新细胞器',
    hintEn: 'Click near a cell to force a new organelle',
    color: '#c77dff',
    icon: <IconMutate size={15} />,
  },
  {
    id: 'alien',
    label: '入侵',
    labelEn: 'Aliens',
    hint: '投放一批携带未知基因的外来物种',
    hintEn: 'Release alien species with unknown genes',
    color: '#4dd0e1',
    icon: <IconAlien size={15} />,
    instant: true,
  },
  {
    id: 'plague',
    label: '瘟疫',
    labelEn: 'Plague',
    hint: '随机夺走约 40% 的生命',
    hintEn: 'Randomly take ~40% of all life',
    color: '#ff5b5b',
    icon: <IconPlague size={15} />,
    instant: true,
  },
];

interface Props {
  tool: ToolId;
  onSelect: (t: ToolDef) => void;
  lang: 'zh' | 'en';
  onActiveRect?: (rect: DOMRect | null) => void;
}

export default function GodRail({ tool, onSelect, lang, onActiveRect }: Props) {
  const [open, setOpen] = useState(true);
  const railRef = useRef<HTMLDivElement>(null);
  const columnRef = useRef<HTMLDivElement>(null);
  useLiquidGlass(columnRef, { scale: 46, border: 0.14, blur: 1, saturate: 1.5 }, open);
  usePopReveal(columnRef, open);
  const toolRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  return (
    <div ref={railRef} className="pointer-events-auto flex flex-col items-start gap-2">
      {/* 折叠 / 展开的胶囊开关 */}
      <button
        onClick={() => setOpen((o) => !o)}
        className={cx(
          'glass capsule-btn h-9 pl-3 pr-3.5 flex items-center gap-2 text-[10px] tracking-wider',
          open ? 'text-white/85' : 'text-white/55',
        )}
        title={lang === 'zh' ? '上帝之手' : 'Hand of God'}
      >
        <IconSpark size={13} />
        <span className="label-xs">{lang === 'zh' ? '上帝之手' : 'GOD HAND'}</span>
        <span
          className={cx(
            'w-1.5 h-1.5 rounded-full transition-all duration-300',
            open ? 'bg-[#c77dff] rotate-0' : 'bg-white/25 -rotate-90',
          )}
        />
      </button>

      {/* 工具列：从开关按钮向下生长 */}
      <div
        ref={columnRef}
        className={cx(
          'glass capsule flex flex-col gap-1 p-1.5 overflow-hidden',
          open ? 'pop-in' : 'pop-out pointer-events-none',
        )}
        style={{
          transformOrigin: '12px 0px',
          maxHeight: open ? 420 : 0,
          opacity: open ? 1 : 0,
          paddingLeft: open ? 6 : 0,
          paddingRight: open ? 6 : 0,
          paddingTop: open ? 6 : 0,
          paddingBottom: open ? 6 : 0,
          transition: 'max-height .42s cubic-bezier(.22,1,.36,1), opacity .28s ease, padding .42s cubic-bezier(.22,1,.36,1)',
        }}
      >
        {TOOLS.map((t) => {
          const active = !t.instant && tool === t.id;
          return (
            <button
              key={t.id}
              ref={(el) => {
                toolRefs.current[t.id] = el;
              }}
              onClick={() => {
                onSelect(t);
                // 只在用户真正点击之后才把提示气泡贴到按钮旁
                const el = toolRefs.current[t.id];
                if (el) onActiveRect?.(el.getBoundingClientRect());
              }}
              title={lang === 'zh' ? t.hint : t.hintEn}
              className={cx(
                'capsule-btn relative w-10 h-10 flex flex-col items-center justify-center gap-0.5 shrink-0',
                active ? '' : 'text-white/58 hover:text-white',
              )}
              style={
                active
                  ? {
                      color: t.color,
                      background: `linear-gradient(180deg, ${t.color}33, ${t.color}12)`,
                      boxShadow: `inset 0 0 0 1px ${t.color}55, 0 0 18px -4px ${t.color}`,
                    }
                  : undefined
              }
            >
              {t.icon}
              <span className="text-[8px] leading-none">
                {lang === 'zh' ? t.label : t.labelEn}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
