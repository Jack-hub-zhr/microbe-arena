/**
 * 生物学图标集
 * ---------------------------------------------------------------
 * 全部是手绘的线性 SVG，替代 Unicode 字形（☀ ⛭ ◉ ✦ …）。
 * 规格统一：16/18px，stroke 1.6，圆头圆角，无填充色 —— 颜色由外部给。
 */

const S = ({ size = 16, children }: { size?: number; children: React.ReactNode }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

/* ── 性状 ── */

export const TRAIT_ICONS: Record<string, React.ReactNode> = {
  // 鞭毛：一条波动的尾
  flagellum: (
    <S>
      <circle cx="7" cy="12" r="4.2" />
      <path d="M11.2 12c2-2.6 3.4.8 5.2-1.4s3 1.4 4.6.2" />
    </S>
  ),
  // 纤毛：四周的细毛
  cilia: (
    <S>
      <circle cx="12" cy="12" r="4.6" />
      <path d="M12 4.6v2.2M12 17.2v2.2M4.6 12h2.2M17.2 12h2.2M6.8 6.8l1.6 1.6M15.6 15.6l1.6 1.6M17.2 6.8l-1.6 1.6M8.4 15.6l-1.6 1.6" />
    </S>
  ),
  // 触手：末端带囊的曲线
  tentacle: (
    <S>
      <circle cx="6" cy="18" r="3.2" />
      <path d="M8.4 15.8c3-1.6 2-6 5.6-6.6 2.4-.4 3.6 1.4 3.4 3" />
      <circle cx="17.6" cy="11" r="1.5" />
    </S>
  ),
  // 伪足：伸出的叶状伪足
  pseudopod: (
    <S>
      <path d="M4 13.5c0-3.6 2.6-6 5.6-6 2.4 0 3.3 1.6 4.7 1.6 1.5 0 2.2-1.4 3.4-1.4 1.4 0 2.3 1.3 2.3 3 0 4.2-3.4 7.3-7.6 7.3-4.4 0-8.4-2-8.4-4.5Z" />
    </S>
  ),
  // 线粒体：内膜嵴
  mitochondria: (
    <S>
      <ellipse cx="12" cy="12" rx="7.6" ry="4.6" transform="rotate(-24 12 12)" />
      <path d="M7.4 14.6c1.6-2.6 3-2.6 4.6 0s3 2.6 4.6 0" />
    </S>
  ),
  // 叶绿体：类囊体堆叠
  chloroplast: (
    <S>
      <ellipse cx="12" cy="12" rx="8" ry="5" transform="rotate(-18 12 12)" />
      <path d="M8.4 12.6h7.2M9.2 10.6h5.6M9.6 14.2h4.4" />
    </S>
  ),
  // 化能合成：热液烟囱
  chemosynthesis: (
    <S>
      <path d="M8.5 20V13c0-3.4 1.4-5.4 3.5-7.2 2.1 1.8 3.5 3.8 3.5 7.2v7" />
      <path d="M10.4 20v-5.2h3.2V20" />
      <path d="M12 3.4V1.4M8.8 5 7.6 3.4M15.2 5l1.2-1.6" />
    </S>
  ),
  // 有氧呼吸：扩散的波
  aerobe: (
    <S>
      <circle cx="9.5" cy="12" r="3.2" />
      <path d="M15 8.6a4.8 4.8 0 0 1 0 6.8M17.8 6.2a8.4 8.4 0 0 1 0 11.6" />
    </S>
  ),
  // 溶酶体：内含水解酶颗粒
  lysosome: (
    <S>
      <circle cx="12" cy="12" r="7.4" />
      <circle cx="10" cy="10.6" r="1.1" />
      <circle cx="13.8" cy="11.4" r="0.9" />
      <circle cx="11.4" cy="14.4" r="1" />
    </S>
  ),
  // 外壳：钙质盾
  shell: (
    <S>
      <path d="M12 3.4 19 6.4v6.1c0 3.6-3 6.5-7 8.1-4-1.6-7-4.5-7-8.1V6.4Z" />
      <path d="M12 7.6v10M8.6 9.6l6.8 4.8M15.4 9.6l-6.8 4.8" />
    </S>
  ),
  // 刺丝泡：放射的刺丝
  toxin: (
    <S>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 4.6v3M12 16.4v3M4.6 12h3M16.4 12h3M6.8 6.8l2.1 2.1M15.1 15.1l2.1 2.1M17.2 6.8l-2.1 2.1M8.9 15.1l-2.1 2.1" />
    </S>
  ),
  // 荚膜：多糖外壳
  capsule: (
    <S>
      <rect x="4.4" y="5.6" width="15.2" height="12.8" rx="4.6" />
      <circle cx="12" cy="12" r="3.4" />
    </S>
  ),
  // 芽孢：内含休眠核
  endospore: (
    <S>
      <ellipse cx="12" cy="12" rx="8" ry="5.4" transform="rotate(-24 12 12)" />
      <ellipse cx="12" cy="12" rx="3" ry="2" transform="rotate(-24 12 12)" />
    </S>
  ),
  // 感应纤毛：触须
  sensor: (
    <S>
      <circle cx="12" cy="12" r="2.4" />
      <path d="M12 9.6V4.4M9.6 12H4.4M14.4 12h5.2M10.2 10.2 6.6 6.6M13.8 13.8l3.6 3.6" />
    </S>
  ),
  // 眼点：感光
  eyespot: (
    <S>
      <path d="M3.4 12s3.6-5.4 8.6-5.4S20.6 12 20.6 12s-3.6 5.4-8.6 5.4S3.4 12 3.4 12Z" />
      <circle cx="12" cy="12" r="2.4" />
    </S>
  ),
  // 磁性体：磁铁与晶体
  magnetosome: (
    <S>
      <path d="M6.6 5.4v6.8a5.4 5.4 0 0 0 10.8 0V5.4" />
      <path d="M6.6 9.4h3.4M14 9.4h3.4" />
    </S>
  ),
  // 黏连蛋白：两细胞相接
  adhesion: (
    <S>
      <circle cx="7.4" cy="12" r="4.4" />
      <circle cx="16.6" cy="12" r="4.4" />
      <path d="M10.6 12h2.8" />
    </S>
  ),
  // 群体感应：中心与卫星
  quorum: (
    <S>
      <circle cx="12" cy="12" r="2.4" />
      <circle cx="12" cy="4.6" r="1.5" />
      <circle cx="18.4" cy="9.3" r="1.5" />
      <circle cx="18.4" cy="14.7" r="1.5" />
      <circle cx="12" cy="19.4" r="1.5" />
      <circle cx="5.6" cy="14.7" r="1.5" />
      <circle cx="5.6" cy="9.3" r="1.5" />
    </S>
  ),
  // 收缩丝：肌球蛋白头部
  myosin: (
    <S>
      <path d="M3.4 15c2.6-5 5.2 5 7.8 0s5.2 5 7.8 0" />
      <circle cx="18.6" cy="8.2" r="2.2" />
    </S>
  ),
  // 减数分裂：一分为四
  meiosis: (
    <S>
      <circle cx="12" cy="12" r="3" />
      <circle cx="5.4" cy="7.6" r="1.7" />
      <circle cx="18.6" cy="7.6" r="1.7" />
      <circle cx="5.4" cy="16.4" r="1.7" />
      <circle cx="18.6" cy="16.4" r="1.7" />
    </S>
  ),
  // 凋亡程序：碎裂
  apoptosis: (
    <S>
      <circle cx="12" cy="12" r="7" strokeDasharray="3.4 2.6" />
      <path d="M8.4 8.4 5.6 5.6M15.6 15.6l2.8 2.8M15.6 8.4l2.8-2.8M8.4 15.6l-2.8 2.8" />
    </S>
  ),

  /* ── 职能 ── */
  'role-core': (
    <S>
      <circle cx="12" cy="12" r="3.4" />
      <circle cx="12" cy="12" r="7.4" strokeDasharray="2 2.6" />
    </S>
  ),
  'role-worker': (
    <S>
      <circle cx="9" cy="12" r="3.6" />
      <path d="M12.6 12h5.8M16 9.6 18.4 12 16 14.4" />
    </S>
  ),
  'role-guard': (
    <S>
      <path d="M12 3.8 18 6.4v5.2c0 3.4-2.6 6-6 7.4-3.4-1.4-6-4-6-7.4V6.4Z" />
      <path d="m9.4 12 1.9 1.9 3.4-3.6" />
    </S>
  ),
  'role-brooder': (
    <S>
      <circle cx="10" cy="12" r="4.6" />
      <circle cx="17.4" cy="12" r="2.4" />
    </S>
  ),
  'role-nurse': (
    <S>
      <circle cx="12" cy="12" r="7.4" />
      <path d="M12 8.6v6.8M8.6 12h6.8" />
    </S>
  ),

  /* ── 地球史事件 ── */
  // 大氧化事件：氧气升腾
  'event-goe': (
    <S>
      <path d="M4 16.4h16M6.4 12.4h11.2M8.6 8.4h6.8" />
      <circle cx="12" cy="5" r="1.8" />
    </S>
  ),
  // 雪球地球：结晶
  'event-snowball': (
    <S>
      <path d="M12 3.4v17.2M4.6 7.6l14.8 8.8M19.4 7.6 4.6 16.4" />
      <path d="M9.6 5.4 12 7.8l2.4-2.4M9.6 18.6l2.4-2.4 2.4 2.4" />
    </S>
  ),
  // 寒武纪爆发：形态骤增
  'event-cambrian': (
    <S>
      <circle cx="12" cy="12" r="2.4" />
      <path d="M12 9.6V4.4M12 14.4v5.2M9.6 12H4.4M14.4 12h5.2" />
      <path d="M10.2 10.2 6.8 6.8M13.8 13.8l3.4 3.4M13.8 10.2l3.4-3.4M10.2 13.8l-3.4 3.4" />
    </S>
  ),

  /* ── 多细胞路线 ── */
  'route-myxomycete': (
    <S>
      <path d="M12 20v-8" />
      <path d="M8 12c0-2.4 1.8-4.4 4-4.4s4 2 4 4.4" />
      <circle cx="12" cy="9.4" r="2.6" />
      <path d="M7.4 20h9.2" />
    </S>
  ),
  'route-volvocine': (
    <S>
      <circle cx="12" cy="12" r="7.4" />
      <circle cx="9.4" cy="10.4" r="1.2" />
      <circle cx="14.6" cy="10.4" r="1.2" />
      <circle cx="9.4" cy="14.6" r="1.2" />
      <circle cx="14.6" cy="14.6" r="1.2" />
      <circle cx="12" cy="12" r="1.4" />
    </S>
  ),
  'route-animal': (
    <S>
      <path d="M3.6 14.4c2-4.4 5-6.6 8.4-6.6s6.4 2.2 8.4 6.6c-2 4.4-5 6.6-8.4 6.6s-6.4-2.2-8.4-6.6Z" />
      <circle cx="12" cy="12.4" r="2.2" />
      <path d="M4.4 18.6 2.2 21M19.6 18.6l2.2 2.4" />
    </S>
  ),
};

export function TraitIcon({
  id,
  size = 16,
  className,
}: {
  id: string;
  size?: number;
  className?: string;
}) {
  const node = TRAIT_ICONS[id];
  if (!node) return null;
  return (
    <span
      className={className}
      style={{ display: 'inline-flex', width: size, height: size, flexShrink: 0 }}
    >
      {node}
    </span>
  );
}
