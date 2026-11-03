/**
 * Liquid Glass 材质与「从触发点生长」的弹出层
 */
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
  type RefObject,
} from 'react';
import { applyLiquidGlass, type LiquidGlassOptions } from '../../lib/liquid-glass';

export const cx = (...parts: (string | false | null | undefined)[]) =>
  parts.filter(Boolean).join(' ');

const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));

/** 给容器挂上液态玻璃材质 */
export function useLiquidGlass(
  ref: RefObject<HTMLElement>,
  options: LiquidGlassOptions = {},
  enabled = true,
) {
  const optsRef = useRef(options);
  optsRef.current = options;

  useEffect(() => {
    if (!enabled || !ref.current) return;
    const glass = applyLiquidGlass(ref.current, optsRef.current);
    return () => glass.destroy();
  }, [ref, enabled]);
}

/** 玻璃面板：自带材质与高光描边 */
export function GlassPanel({
  children,
  className,
  tone = 'default',
  glass = true,
  radius = 26,
  style,
}: {
  children: ReactNode;
  className?: string;
  tone?: 'default' | 'strong' | 'soft';
  glass?: boolean;
  radius?: number;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useLiquidGlass(ref, { scale: 56, border: 0.11, blur: 1.2, saturate: 1.45 }, glass);

  return (
    <div
      ref={ref}
      className={cx(
        glass && 'glass',
        tone === 'strong' && 'glass-strong',
        tone === 'soft' && 'glass-soft',
        className,
      )}
      style={{ borderRadius: radius, ...style }}
    >
      {children}
    </div>
  );
}

/** 胶囊按钮 */
export function GlassButton({
  children,
  onClick,
  active,
  color,
  className,
  title,
  disabled,
  size = 'md',
  glass = true,
  type = 'button',
}: {
  children: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  active?: boolean;
  color?: string;
  className?: string;
  title?: string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  glass?: boolean;
  type?: 'button' | 'submit';
}) {
  const ref = useRef<HTMLButtonElement>(null);
  useLiquidGlass(
    ref,
    { scale: 44, border: 0.16, blur: 1, saturate: 1.5 },
    glass && !active,
  );

  const dims =
    size === 'sm'
      ? 'h-8 px-3 text-[10px]'
      : size === 'lg'
        ? 'h-12 px-5 text-[13px]'
        : 'h-10 px-4 text-[11px]';

  return (
    <button
      ref={ref}
      type={type}
      title={title}
      disabled={disabled}
      onClick={onClick}
      className={cx(
        'capsule-btn relative select-none',
        dims,
        glass && 'glass',
        !glass && 'border border-white/10 bg-white/[0.04]',
        active
          ? 'text-white'
          : 'text-white/70 hover:text-white',
        disabled && 'opacity-40 pointer-events-none',
        className,
      )}
      style={
        active
          ? {
              color,
              borderColor: `${color}66`,
              background: `linear-gradient(180deg, ${color}33, ${color}12)`,
              boxShadow: `0 0 0 1px ${color}40, 0 6px 22px -8px ${color}, inset 0 1px 0 rgba(255,255,255,.45)`,
            }
          : undefined
      }
    >
      {children}
    </button>
  );
}

/**
 * 「从按钮长出来」的展开动效。
 *
 * 这里刻意做了一个兜底：浏览器繁忙时 CSS 动画可能长时间停在 pending 状态，
 * 元素会被钉在关键帧的起点（scale(.22) / opacity:0）而永远「长不出来」。
 * 因此在动画启动 320ms 后检查一次：如果动画确实没有推进，
 * 就摘掉动画类，让元素直接呈现展开态 —— 面板永远可见。
 */
export function usePopReveal(
  ref: RefObject<HTMLElement>,
  open: boolean,
  delay = 320,
) {
  useEffect(() => {
    if (!open) return;
    const id = window.setTimeout(() => {
      const el = ref.current;
      if (!el) return;
      const stuck = el.getAnimations().some((a) => {
        const name = (a as CSSAnimation).animationName ?? '';
        if (name !== 'glass-pop') return false;
        const t = a.currentTime;
        if (t === null) return true;
        const ms = typeof t === 'number' ? t : 0;
        return ms < 40;
      });
      if (stuck) {
        el.classList.remove('pop-in');
        el.style.opacity = '1';
        el.style.transform = 'none';
      }
    }, delay);
    return () => window.clearTimeout(id);
  }, [ref, open, delay]);
}

export type Placement = 'right' | 'below' | 'above' | 'left';

/**
 * 从触发按钮「长出来」的弹出层。
 * transform-origin 由触发按钮中心计算，
 * 因此展开动画的视觉起点永远是用户刚刚点击的那个按钮。
 */
export function Popover({
  open,
  anchor,
  placement = 'below',
  offset = 10,
  className,
  children,
  onClose,
  glassOptions,
  maxWidth,
}: {
  open: boolean;
  anchor: DOMRect | null;
  placement?: Placement;
  offset?: number;
  className?: string;
  children: ReactNode;
  onClose?: () => void;
  glassOptions?: LiquidGlassOptions;
  maxWidth?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<CSSProperties>({ opacity: 0, visibility: 'hidden' });
  const [mounted, setMounted] = useState(false);

  useLiquidGlass(ref, glassOptions ?? { scale: 64, border: 0.1, blur: 1.4, saturate: 1.5 }, open);
  usePopReveal(ref, open);

  // 展开位置只在「打开 / 锚点变化」时计算一次。
  // 注意：children 绝不能进依赖数组 —— 它每次渲染都是新对象，
  // 放进依赖里会导致 setStyle → 重渲染 → children 变化 → 再 setStyle 的死循环。
  useLayoutEffect(() => {
    if (!open || !ref.current || !anchor) return;

    const measure = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      let left: number;
      let top: number;
      switch (placement) {
        case 'right':
          left = anchor.right + offset;
          top = anchor.top + anchor.height / 2 - r.height / 2;
          break;
        case 'left':
          left = anchor.left - r.width - offset;
          top = anchor.top + anchor.height / 2 - r.height / 2;
          break;
        case 'above':
          left = anchor.left + anchor.width / 2 - r.width / 2;
          top = anchor.top - r.height - offset;
          break;
        default:
          left = anchor.left + anchor.width / 2 - r.width / 2;
          top = anchor.bottom + offset;
      }

      left = clamp(left, 10, Math.max(10, vw - r.width - 10));
      top = clamp(top, 10, Math.max(10, vh - r.height - 10));

      const originX = clamp(anchor.left + anchor.width / 2 - left, -40, r.width + 40);
      const originY = clamp(anchor.top + anchor.height / 2 - top, -40, r.height + 40);

      setStyle((prev) => {
        const next = {
          left,
          top,
          maxWidth,
          transformOrigin: `${originX}px ${originY}px`,
          opacity: 1,
          visibility: 'visible' as const,
        };
        // 数值没变就不重渲染，避免无谓的提交
        if (
          prev.left === next.left &&
          prev.top === next.top &&
          prev.transformOrigin === next.transformOrigin &&
          prev.visibility === next.visibility
        ) {
          return prev;
        }
        return next;
      });
      setMounted(true);
    };

    measure();
    const ro = new ResizeObserver(() => measure());
    if (ref.current) ro.observe(ref.current);
    return () => ro.disconnect();
  }, [open, anchor, placement, offset, maxWidth]);

  // 点击外部 / ESC 关闭
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      const t = e.target as Node;
      if (ref.current?.contains(t)) return;
      if ((e.target as HTMLElement)?.closest?.('[data-pop-anchor]')) return;
      onClose?.();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose?.();
    };
    window.addEventListener('pointerdown', onDown);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  if (!open && !mounted) return null;

  return (
    <div
      ref={ref}
      className={cx('glass fixed z-50', open ? 'pop-in' : 'pop-out', className)}
      style={style}
      onAnimationEnd={() => {
        if (!open) {
          setMounted(false);
          setStyle((s) => ({ ...s, opacity: 0, visibility: 'hidden' }));
        }
      }}
    >
      {children}
    </div>
  );
}
