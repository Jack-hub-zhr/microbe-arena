/**
 * Liquid Glass 材质层
 * ---------------------------------------------------------------
 * 思路来自开源社区的 Liquid Glass 实现（shuding/liquid-glass、
 * deepika-builds/liquid-glass，MIT 协议）：用 Canvas 生成一张位移贴图，
 * 交给 SVG 的 feDisplacementMap，再通过 `backdrop-filter: url(#id)`
 * 让玻璃面板**真正折射**背后的内容，而不是简单糊一层模糊。
 *
 * - Chromium：真实折射 + 边缘色散
 * - Safari / Firefox：自动降级为高保真磨砂玻璃
 *
 * 用法：
 *   const glass = applyLiquidGlass(el, { scale: 70, chroma: 3 });
 *   glass.destroy();          // 卸载滤镜
 */

export interface LiquidGlassOptions {
  /** 位移强度，像素。越大边缘折射越夸张 */
  scale?: number;
  /** 通道色散强度，0 关闭 */
  chroma?: number;
  /** 中性区内缩比例（0~0.5），决定折射带宽度 */
  border?: number;
  /** 面板内侧的额外模糊 */
  blur?: number;
  /** 背后内容的饱和度提升 */
  saturate?: number;
  /** 圆角半径（px），默认读取元素的 border-radius */
  radius?: number | null;
  /** 降级方案的模糊强度 */
  fallbackBlur?: number;
}

export interface LiquidGlassInstance {
  /** 当前浏览器是否支持真正的折射 */
  readonly supported: boolean;
  /** 尺寸变化后重新生成贴图 */
  refresh(): void;
  /** 卸载滤镜与事件监听 */
  destroy(): void;
}

const SVG_NS = 'http://www.w3.org/2000/svg';

let uid = 0;

function supportsFilterUrl(): boolean {
  if (typeof CSS === 'undefined' || !CSS.supports) return false;
  return (
    CSS.supports('backdrop-filter', 'url("#x")') ||
    CSS.supports('-webkit-backdrop-filter', 'url("#x")')
  );
}

function readRadius(el: HTMLElement, fallback: number): number {
  const raw = getComputedStyle(el).borderRadius;
  const first = parseFloat(raw.split(' ')[0]);
  return Number.isFinite(first) ? first : fallback;
}

/**
 * 生成位移贴图：
 * R 通道编码水平位移，G 通道编码垂直位移，128 表示「不位移」。
 * 使用圆角矩形的有符号距离场，只在边缘带内产生位移，
 * 保证面板内部内容依旧清晰可读。
 */
function buildDisplacementMap(
  w: number,
  h: number,
  radius: number,
  border: number,
  strength: number,
): string {
  const canvas = document.createElement('canvas');
  canvas.width = Math.max(1, Math.round(w));
  canvas.height = Math.max(1, Math.round(h));
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  const W = canvas.width;
  const H = canvas.height;
  const r = Math.min(radius, Math.min(W, H) / 2);
  const halfW = W / 2;
  const halfH = H / 2;
  const band = Math.max(2, border * Math.min(W, H));

  const img = ctx.createImageData(W, H);
  const data = img.data;

  const smoothstep = (e0: number, e1: number, x: number) => {
    const t = Math.max(0, Math.min(1, (x - e0) / (e1 - e0 || 1)));
    return t * t * (3 - 2 * t);
  };

  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const px = x + 0.5;
      const py = y + 0.5;

      // 圆角矩形 SDF
      const qx = Math.abs(px - halfW) - (halfW - r);
      const qy = Math.abs(py - halfH) - (halfH - r);
      const outside = Math.hypot(Math.max(qx, 0), Math.max(qy, 0));
      const inside = Math.min(Math.max(qx, qy), 0);
      const sdf = outside + inside - r;

      // 边缘带权重：越靠近轮廓越强
      const t = 1 - smoothstep(0, band, Math.abs(sdf));

      // SDF 梯度（指向外侧）
      let gx = 0;
      let gy = 0;
      if (qx > qy) gx = px < halfW ? -1 : 1;
      else gy = py < halfH ? -1 : 1;

      const disp = t * strength;
      const i = (y * W + x) * 4;
      data[i] = Math.max(0, Math.min(255, 128 + gx * disp));
      data[i + 1] = Math.max(0, Math.min(255, 128 + gy * disp));
      data[i + 2] = 128;
      data[i + 3] = 255;
    }
  }

  ctx.putImageData(img, 0, 0);
  return canvas.toDataURL('image/png');
}

function buildFilter(
  id: string,
  mapHref: string,
  scale: number,
  chroma: number,
): SVGFilterElement {
  const filter = document.createElementNS(SVG_NS, 'filter');
  filter.setAttribute('id', id);
  filter.setAttribute('x', '-10%');
  filter.setAttribute('y', '-10%');
  filter.setAttribute('width', '120%');
  filter.setAttribute('height', '120%');
  filter.setAttribute('color-interpolation-filters', 'sRGB');

  const feImage = document.createElementNS(SVG_NS, 'feImage');
  feImage.setAttribute('href', mapHref);
  feImage.setAttributeNS('http://www.w3.org/1999/xlink', 'href', mapHref);
  feImage.setAttribute('result', 'map');
  filter.appendChild(feImage);

  const displacement = (
    inChannel: 'R' | 'G' | 'B',
    scaleValue: number,
    result: string,
  ) => {
    const node = document.createElementNS(SVG_NS, 'feDisplacementMap');
    node.setAttribute('in', 'SourceGraphic');
    node.setAttribute('in2', 'map');
    node.setAttribute('scale', String(scaleValue));
    node.setAttribute('xChannelSelector', inChannel);
    node.setAttribute('yChannelSelector', 'G');
    node.setAttribute('result', result);
    return node;
  };

  if (chroma > 0) {
    // 三次不同强度的位移，逐通道隔离后叠加 → 边缘出现棱镜色散
    filter.appendChild(displacement('R', scale * (1 + chroma / 100), 'dR'));
    const isolate = (src: string, channel: 'R' | 'G' | 'B', out: string) => {
      const cm = document.createElementNS(SVG_NS, 'feColorMatrix');
      cm.setAttribute('in', src);
      cm.setAttribute('type', 'matrix');
      const row = (keep: boolean) =>
        keep ? '1 0 0 0 0' : '0 0 0 0 0';
      const rows = [row(channel === 'R'), row(channel === 'G'), row(channel === 'B'), '0 0 0 1 0'];
      cm.setAttribute('values', rows.join(' '));
      cm.setAttribute('result', out);
      return cm;
    };
    filter.appendChild(isolate('dR', 'R', 'cR'));
    filter.appendChild(displacement('G', scale, 'dG'));
    filter.appendChild(isolate('dG', 'G', 'cG'));
    filter.appendChild(displacement('B', scale * (1 - chroma / 100), 'dB'));
    filter.appendChild(isolate('dB', 'B', 'cB'));

    const blend1 = document.createElementNS(SVG_NS, 'feBlend');
    blend1.setAttribute('in', 'cR');
    blend1.setAttribute('in2', 'cG');
    blend1.setAttribute('mode', 'screen');
    blend1.setAttribute('result', 'cRG');
    filter.appendChild(blend1);

    const blend2 = document.createElementNS(SVG_NS, 'feBlend');
    blend2.setAttribute('in', 'cRG');
    blend2.setAttribute('in2', 'cB');
    blend2.setAttribute('mode', 'screen');
    filter.appendChild(blend2);
  } else {
    filter.appendChild(displacement('R', scale, 'disp'));
  }

  return filter;
}

/**
 * 给一个元素装上 Liquid Glass 材质。
 * 返回的实例必须手动 destroy，否则会残留 SVG 滤镜节点。
 */
export function applyLiquidGlass(
  el: HTMLElement,
  options: LiquidGlassOptions = {},
): LiquidGlassInstance {
  const {
    scale = 70,
    chroma = 0,
    border = 0.12,
    blur = 2,
    saturate = 1.45,
    radius = null,
    fallbackBlur = 18,
  } = options;

  const supported = supportsFilterUrl();
  const id = `liquid-glass-${++uid}`;

  let svg: SVGSVGElement | null = null;
  let filter: SVGFilterElement | null = null;
  let ro: ResizeObserver | null = null;

  const style = el.style as CSSStyleDeclaration & { webkitBackdropFilter?: string };
  const fallback = () => {
    const value = `blur(${fallbackBlur}px) saturate(${saturate})`;
    style.backdropFilter = value;
    style.webkitBackdropFilter = value;
  };
  const applyBackdrop = () => {
    const value = `url("#${id}") blur(${blur}px) saturate(${saturate})`;
    style.backdropFilter = value;
    style.webkitBackdropFilter = value;
    // 某些环境虽然声明支持 url()，实际渲染仍会整条失效 —— 校验后回落
    const applied = getComputedStyle(el).backdropFilter || '';
    if (!applied.includes('url(')) {
      fallback();
      el.dataset.liquidGlass = 'fallback';
    }
  };

  if (supported) {
    svg = document.createElementNS(SVG_NS, 'svg');
    svg.setAttribute('width', '0');
    svg.setAttribute('height', '0');
    svg.setAttribute('aria-hidden', 'true');
    svg.style.cssText = 'position:fixed;pointer-events:none;left:0;top:0;opacity:0;';
    const defs = document.createElementNS(SVG_NS, 'defs');
    svg.appendChild(defs);
    document.body.appendChild(svg);

    const rebuild = () => {
      const rect = el.getBoundingClientRect();
      if (rect.width < 2 || rect.height < 2) return;
      const r = radius ?? readRadius(el, 24);
      const href = buildDisplacementMap(
        rect.width,
        rect.height,
        r,
        border,
        Math.max(4, Math.min(255, scale)) / 255,
      );
      if (!href) return;
      if (filter) filter.remove();
      filter = buildFilter(id, href, scale, chroma);
      defs.appendChild(filter);
      applyBackdrop();
    };

    rebuild();
    let timer = 0;
    ro = new ResizeObserver(() => {
      clearTimeout(timer);
      timer = window.setTimeout(() => rebuild(), 120);
    });
    ro.observe(el);
  } else {
    // 降级：高保真磨砂玻璃
    const value = `blur(${fallbackBlur}px) saturate(${saturate})`;
    style.backdropFilter = value;
    style.webkitBackdropFilter = value;
    el.dataset.liquidGlass = 'fallback';
  }

  return {
    supported,
    refresh() {
      if (svg && filter) {
        const rect = el.getBoundingClientRect();
        const r = radius ?? readRadius(el, 24);
        const href = buildDisplacementMap(
          rect.width,
          rect.height,
          r,
          border,
          Math.max(4, Math.min(255, scale)) / 255,
        );
        if (href) {
              filter.remove();
          filter = buildFilter(id, href, scale, chroma);
          svg.querySelector('defs')?.appendChild(filter);
        }
      }
    },
    destroy() {
      ro?.disconnect();
      ro = null;
      filter?.remove();
      svg?.remove();
      style.backdropFilter = '';
      style.webkitBackdropFilter = '';
    },
  };
}

/** 当前浏览器是否支持真正的液态折射 */
export const liquidGlassSupported = supportsFilterUrl();
