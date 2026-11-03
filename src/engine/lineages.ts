/**
 * 真实演化谱系数据层
 * ---------------------------------------------------------------
 * 这里的每一项都对应地球上真实发生过的演化创新：
 * 有真实存在的代表生物、有大致的起源年代、有明确的演化支系与前置关系。
 *
 * 引擎（Simulation）不硬编码任何具体细胞器，而是读取本文件里的
 * 修正系数与标记位来计算机制，因此新增一项演化创新 = 在这里加一条数据。
 *
 * 年代单位 Ma = 百万年前（million years ago）。
 */

export type OrganelleId =
  // 运动与取食
  | 'flagellum'
  | 'cilia'
  | 'tentacle'
  | 'pseudopod'
  // 能量代谢
  | 'mitochondria'
  | 'chloroplast'
  | 'chemosynthesis'
  | 'aerobe'
  | 'lysosome'
  // 防御与生存
  | 'shell'
  | 'toxin'
  | 'capsule'
  | 'endospore'
  // 感知与定向
  | 'sensor'
  | 'eyespot'
  | 'magnetosome'
  // 社会与多细胞
  | 'adhesion'
  | 'quorum'
  | 'myosin'
  | 'meiosis'
  | 'apoptosis';

/** 演化支系 */
export type Branch =
  | '细菌'
  | '古菌'
  | '内共生'
  | '真核'
  | '多细胞起源'
  | '动物'
  | '植物'
  | '真菌';

/** 数值修正：乘数类默认 1，加算类默认 0 */
export interface TraitMods {
  /** 游速乘数 */
  speed: number;
  /** 感知半径乘数 */
  sense: number;
  /** 攻击力乘数 */
  attack: number;
  /** 防御力乘数 */
  defense: number;
  /** 基础代谢乘数（>1 更耗能） */
  upkeep: number;
  /** 产能效率乘数（光合 / 化能 / 有氧呼吸） */
  energyGain: number;
  /** 进食效率乘数 */
  foodGain: number;
  /** 进食半径加成 */
  eatRange: number;
  /** 攻击距离加成 */
  attackRange: number;
  /** 体型乘数 */
  size: number;
}

export const BASE_MODS: TraitMods = {
  speed: 1,
  sense: 1,
  attack: 1,
  defense: 1,
  upkeep: 1,
  energyGain: 1,
  foodGain: 1,
  eatRange: 0,
  attackRange: 0,
  size: 1,
};

/** 需要在引擎里特殊处理的机制标记 */
export interface TraitFlags {
  photosynthesis?: boolean;
  chemosynthesis?: boolean;
  digestion?: boolean;
  adhesion?: boolean;
  dormancy?: boolean;
  phototaxis?: boolean;
  magnetotaxis?: boolean;
  /** 吞噬式进食：可以吃掉比自己大的食物 */
  engulf?: boolean;
  quorum?: boolean;
  meiosis?: boolean;
  apoptosis?: boolean;
  tentacle?: boolean;
  /** 冲刺：周期性爆发加速 */
  dash?: boolean;
}

export interface TraitDef {
  id: OrganelleId;
  zh: string;
  en: string;
  icon: string;
  hue: string;
  /** 机制说明（在沙盒里它到底带来什么） */
  descZh: string;
  descEn: string;
  /** 地球上真实存在的代表生物 */
  realZh: string;
  realEn: string;
  /** 起源年代（百万年前） */
  eraMa: number;
  branch: Branch;
  /** 前置：必须先演化出这些，才有机会再突变成这一项 */
  prereq?: OrganelleId[];
  mods?: Partial<TraitMods>;
  flags?: TraitFlags;
  /** 真实历史上这一项的意义 */
  noteZh: string;
  noteEn: string;
}

export const TRAITS: Record<OrganelleId, TraitDef> = {
  /* ───────── 运动与取食 ───────── */
  flagellum: {
    id: 'flagellum',
    zh: '鞭毛',
    en: 'Flagellum',
    icon: '〰',
    hue: '#7dd3fc',
    descZh: '游动速度 ×1.45',
    descEn: 'Swim speed x1.45',
    realZh: '大肠杆菌的旋转鞭毛',
    realEn: 'The rotary flagellum of E. coli',
    eraMa: 3500,
    branch: '细菌',
    mods: { speed: 1.45 },
    noteZh: '地球上最早的运动器官，让细菌能逆着浓度梯度游动。',
    noteEn: 'The earliest locomotion organ: lets bacteria swim against gradients.',
  },
  cilia: {
    id: 'cilia',
    zh: '纤毛',
    en: 'Cilia',
    icon: '≋',
    hue: '#a5f3fc',
    descZh: '转向更灵活，感知 ×1.3',
    descEn: 'Finer steering, sense x1.3',
    realZh: '草履虫周围成千上万根纤毛',
    realEn: 'Thousands of cilia ringing a Paramecium',
    eraMa: 1000,
    branch: '真核',
    prereq: ['flagellum'],
    mods: { speed: 1.12, sense: 1.3 },
    noteZh: '真核细胞用纤毛做精密运动，这也是动物胚胎「旋转细胞」的原语。',
    noteEn: 'Eukaryotic cilia power precise motion — the same primitive used by animal embryos.',
  },
  tentacle: {
    id: 'tentacle',
    zh: '触手',
    en: 'Tentacle',
    icon: '⌇',
    hue: '#ff8b3d',
    descZh: '攻击距离 +40%，攻击 ×1.25，但能耗 ×1.2',
    descEn: 'Attack range +40, attack x1.25, upkeep x1.2',
    realZh: '水母与海葵的刺细胞触手',
    realEn: 'Tentacles bearing cnidocytes in jellyfish and anemones',
    eraMa: 600,
    branch: '动物',
    prereq: ['toxin'],
    mods: { attack: 1.25, attackRange: 40, upkeep: 1.2 },
    flags: { tentacle: true },
    noteZh: '刺胞动物的「真身」武器：不用靠近，先把毒素射出去。',
    noteEn: 'Cnidarians brought ranged weaponry: strike first, from a distance.',
  },
  pseudopod: {
    id: 'pseudopod',
    zh: '伪足',
    en: 'Pseudopod',
    icon: '☁',
    hue: '#c4b5fd',
    descZh: '可以吞下比自己更大的食物，游速 ×0.8',
    descEn: 'Can engulf food larger than itself, speed x0.8',
    realZh: '变形虫伸出的伪足',
    realEn: 'The flowing pseudopods of an amoeba',
    eraMa: 1200,
    branch: '真核',
    prereq: ['mitochondria'],
    mods: { speed: 0.8, eatRange: 10 },
    flags: { engulf: true },
    noteZh: '吞噬式进食：真核细胞第一次把固体食物整个包进体内。',
    noteEn: 'Phagocytosis: eukaryotes began engulfing solid food whole.',
  },

  /* ───────── 能量代谢 ───────── */
  mitochondria: {
    id: 'mitochondria',
    zh: '线粒体',
    en: 'Mitochondria',
    icon: '◈',
    hue: '#fb923c',
    descZh: '基础能耗 ×0.65',
    descEn: 'Energy upkeep x0.65',
    realZh: '被 α-变形菌吞下后没被消化的古菌',
    realEn: 'An archaeon spared inside an alpha-proteobacterium',
    eraMa: 1800,
    branch: '内共生',
    mods: { upkeep: 0.65 },
    noteZh: '真核细胞的发动机，本身就是一场没有硝烟的内共生战争。',
    noteEn: 'The eukaryote engine — itself the survivor of an ancient takeover.',
  },
  chloroplast: {
    id: 'chloroplast',
    zh: '叶绿体',
    en: 'Chloroplast',
    icon: '☀',
    hue: '#a2db3c',
    descZh: '光照下持续产能',
    descEn: 'Photosynthesis in light',
    realZh: '被真核细胞吞下的蓝细菌',
    realEn: 'A cyanobacterium adopted by a eukaryotic cell',
    eraMa: 1550,
    branch: '内共生',
    mods: { energyGain: 1 },
    flags: { photosynthesis: true },
    noteZh: '生命第一次自己制造氧气 —— 地球大气从此改写。',
    noteEn: 'Life began making its own oxygen, rewriting the atmosphere.',
  },
  chemosynthesis: {
    id: 'chemosynthesis',
    zh: '化能合成酶',
    en: 'Chemosynthesis',
    icon: '⛭',
    hue: '#f97316',
    descZh: '不依赖光照也能产能，但代谢代价更高',
    descEn: 'Energy without light, at a higher metabolic cost',
    realZh: '深海热液喷口的硫氧化细菌',
    realEn: 'Sulfur-oxidising bacteria at deep-sea vents',
    eraMa: 3500,
    branch: '细菌',
    mods: { energyGain: 1, upkeep: 1.3 },
    flags: { chemosynthesis: true },
    noteZh: '地球上最早的生命根本不靠阳光，靠热液里的硫活。',
    noteEn: 'The earliest life never needed sunlight — it ate sulfur from vents.',
  },
  aerobe: {
    id: 'aerobe',
    zh: '有氧呼吸器',
    en: 'Aerobic respiratory chain',
    icon: '◉',
    hue: '#38bdf8',
    descZh: '产能效率 ×1.55',
    descEn: 'Energy yield x1.55',
    realZh: '在大氧化事件后扩张的需氧细菌',
    realEn: 'Aerobic bacteria that expanded after the Great Oxidation',
    eraMa: 2400,
    branch: '细菌',
    prereq: ['mitochondria'],
    mods: { energyGain: 1.55 },
    noteZh: '氧气从毒气变成燃料 —— 一次彻底的生态位翻转。',
    noteEn: 'Oxygen flipped from poison to fuel — a total reversal of the niche.',
  },
  lysosome: {
    id: 'lysosome',
    zh: '溶酶体',
    en: 'Lysosome',
    icon: '✦',
    hue: '#c084fc',
    descZh: '分解尸体碎屑，收益 ×2.5 并还原养分',
    descEn: 'Digest corpses x2.5 and return nutrients',
    realZh: '真核细胞内的消化车间',
    realEn: 'The digestive organelles of eukaryotic cells',
    eraMa: 1500,
    branch: '真核',
    prereq: ['mitochondria'],
    mods: { foodGain: 1 },
    flags: { digestion: true },
    noteZh: '有了消化腔，尸体才第一次能变成下一代的养分。',
    noteEn: 'With digestion, a corpse can finally become the next generation.',
  },

  /* ───────── 防御与生存 ───────── */
  shell: {
    id: 'shell',
    zh: '外壳',
    en: 'Shell',
    icon: '⛨',
    hue: '#cbd5e1',
    descZh: '防御力 ×1.9',
    descEn: 'Defense x1.9',
    realZh: '有孔虫与三叶虫的钙质外骨骼',
    realEn: 'Calcified skeletons of foraminifera and trilobites',
    eraMa: 550,
    branch: '动物',
    mods: { defense: 1.9 },
    noteZh: '第一副硬壳，把「被吃掉」变成了「大概率不会」。',
    noteEn: 'The first armour: being eaten became merely unlikely.',
  },
  toxin: {
    id: 'toxin',
    zh: '刺丝泡',
    en: 'Cnidocyte',
    icon: '☠',
    hue: '#ff8b3d',
    descZh: '攻击力 ×1.8',
    descEn: 'Attack x1.8',
    realZh: '水母刺细胞里的刺丝囊',
    realEn: 'Nematocysts inside jellyfish cnidocytes',
    eraMa: 600,
    branch: '动物',
    mods: { attack: 1.8 },
    noteZh: '毒刺让刺胞动物成为海洋最早的有效捕食者。',
    noteEn: 'Stinging cells made cnidarians the ocean’s first efficient predators.',
  },
  capsule: {
    id: 'capsule',
    zh: '荚膜',
    en: 'Capsule',
    icon: '◍',
    hue: '#94a3b8',
    descZh: '防御 ×1.4，被吞食概率下降',
    descEn: 'Defense x1.4, resists being swallowed',
    realZh: '肺炎链球菌的荚膜',
    realEn: 'The capsule of Streptococcus pneumoniae',
    eraMa: 2000,
    branch: '细菌',
    mods: { defense: 1.4, upkeep: 1.08 },
    noteZh: '一层多糖外衣，既挡抗体也是生物膜的底座。',
    noteEn: 'A sugar coat that shields cells — and anchors the biofilm.',
  },
  endospore: {
    id: 'endospore',
    zh: '芽孢',
    en: 'Endospore',
    icon: '◉',
    hue: '#facc15',
    descZh: '能量耗尽时进入休眠，免受天罚与瘟疫',
    descEn: 'Dormant when exhausted; survives smite and plague',
    realZh: '芽孢杆菌内部那颗耐热核',
    realEn: 'The heat-proof core inside a Bacillus cell',
    eraMa: 2500,
    branch: '细菌',
    flags: { dormancy: true },
    noteZh: '地球上最硬核的生存策略：睡上百万年再醒。',
    noteEn: 'The toughest survival trick on Earth: sleep for a million years.',
  },

  /* ───────── 感知与定向 ───────── */
  sensor: {
    id: 'sensor',
    zh: '感应纤毛',
    en: 'Sensor cilia',
    icon: '⌖',
    hue: '#93c5fd',
    descZh: '感知范围 ×1.6',
    descEn: 'Sense range x1.6',
    realZh: '纤毛虫的化学感受纤毛',
    realEn: 'Chemoreceptive cilia of ciliates',
    eraMa: 1000,
    branch: '真核',
    prereq: ['cilia'],
    mods: { sense: 1.6 },
    noteZh: '有了感官，趋性行为才成为可能。',
    noteEn: 'With senses, taxis — moving toward or away — become possible.',
  },
  eyespot: {
    id: 'eyespot',
    zh: '眼点',
    en: 'Eyespot',
    icon: '◐',
    hue: '#e879f9',
    descZh: '朝最亮的方向游动',
    descEn: 'Swims toward the brightest light',
    realZh: '团藻表面的感光眼点',
    realEn: 'The light-sensitive eyespot of Volvox',
    eraMa: 800,
    branch: '植物',
    prereq: ['cilia'],
    flags: { phototaxis: true },
    noteZh: '单细胞就能「看」光 —— 趋光性是多细胞形态学的第一步。',
    noteEn: 'A single cell that can see light — the first step toward multicellular form.',
  },
  magnetosome: {
    id: 'magnetosome',
    zh: '磁性体',
    en: 'Magnetosome',
    icon: '⌾',
    hue: '#f87171',
    descZh: '缓慢迁移到培养皿中层',
    descEn: 'Slowly drifts to the mid layer of the dish',
    realZh: '磁性细菌体内的磁铁矿结晶链',
    realEn: 'Chains of magnetite crystals inside magnetotactic bacteria',
    eraMa: 3000,
    branch: '细菌',
    flags: { magnetotaxis: true },
    noteZh: '能感知地磁场的细菌 —— 它们连「上」和「下」都分得清。',
    noteEn: 'Bacteria that read Earth’s magnetic field — they know up from down.',
  },

  /* ───────── 社会与多细胞 ───────── */
  adhesion: {
    id: 'adhesion',
    zh: '黏连蛋白',
    en: 'Adhesin',
    icon: '⬡',
    hue: '#2cc9ff',
    descZh: '可以聚合成多细胞体',
    descEn: 'Enables multicellularity',
    realZh: '团藻细胞表面的糖蛋白连接',
    realEn: 'Glycoprotein junctions between Volvox cells',
    eraMa: 900,
    branch: '多细胞起源',
    mods: { upkeep: 1.1 },
    flags: { adhesion: true },
    noteZh: '多细胞生命的第一步，往往只是一颗细胞愿意牵着另一颗细胞。',
    noteEn: 'The first step to multicellularity: one cell holding on to another.',
  },
  quorum: {
    id: 'quorum',
    zh: '群体感应',
    en: 'Quorum sensing',
    icon: '⌘',
    hue: '#38bdf8',
    descZh: '群体共享能量的效率 ×1.8，感知半径 ×1.3',
    descEn: 'Colony energy sharing x1.8, sense x1.3',
    realZh: '费氏弧菌的「分子投票」',
    realEn: 'The molecular vote of Vibrio fischeri',
    eraMa: 500,
    branch: '细菌',
    prereq: ['adhesion'],
    mods: { sense: 1.3 },
    flags: { quorum: true },
    noteZh: '细胞开始「数数」：只有人多时才行动。这是社会性的语言。',
    noteEn: 'Cells learned to count themselves — the grammar of society.',
  },
  myosin: {
    id: 'myosin',
    zh: '收缩丝',
    en: 'Myosin filament',
    icon: '⟿',
    hue: '#f472b6',
    descZh: '速度 ×1.35，能耗 ×1.3',
    descEn: 'Speed x1.35, upkeep x1.3',
    realZh: '肌球蛋白构成的肌小节',
    realEn: 'Myosin filaments in the sarcomere',
    eraMa: 700,
    branch: '真核',
    prereq: ['mitochondria'],
    mods: { speed: 1.35, upkeep: 1.3 },
    flags: { dash: true },
    noteZh: '能主动收缩的纤维 —— 从此细胞可以真正地「动」起来。',
    noteEn: 'Contractile fibre: from here on, cells could really move.',
  },
  meiosis: {
    id: 'meiosis',
    zh: '减数分裂',
    en: 'Meiosis',
    icon: '⧉',
    hue: '#a78bfa',
    descZh: '子代基因来自双亲重组，变异速度大幅提升',
    descEn: 'Offspring genes recombine from two parents — faster adaptation',
    realZh: '真核生物的减数分裂与配子',
    realEn: 'Meiosis and gametes in eukaryotes',
    eraMa: 1000,
    branch: '真核',
    prereq: ['mitochondria'],
    flags: { meiosis: true },
    noteZh: '有性生殖让基因在每一代都重新洗牌，演化速度从此翻倍。',
    noteEn: 'Sex reshuffles the deck every generation, doubling evolutionary speed.',
  },
  apoptosis: {
    id: 'apoptosis',
    zh: '凋亡程序',
    en: 'Apoptosis',
    icon: '☬',
    hue: '#fb7185',
    descZh: '群体成员可牺牲自己，把能量交给群体',
    descEn: 'Members can sacrifice themselves for the colony',
    realZh: '多细胞生物的受控细胞死亡',
    realEn: 'Programmed cell death in multicellular organisms',
    eraMa: 1000,
    branch: '多细胞起源',
    prereq: ['adhesion'],
    flags: { apoptosis: true },
    noteZh: '群体学会「牺牲部分成员」—— 合作的另一面。',
    noteEn: 'Colonies learned to sacrifice members: the other side of cooperation.',
  },
};

export const TRAIT_IDS = Object.keys(TRAITS) as OrganelleId[];

/* ───────── 真实世界的多细胞化路线 ───────── */

export type MulticellularRoute = 'myxomycete' | 'volvocine' | 'animal';

export interface RouteDef {
  id: MulticellularRoute;
  zh: string;
  en: string;
  icon: string;
  hue: string;
  /** 真实代表生物 */
  realZh: string;
  realEn: string;
  eraMa: number;
  /** 达成该路线所必需的能力 */
  requires: OrganelleId[];
  /** 真实历史上这条路线长什么样 */
  descZh: string;
  descEn: string;
  /** 达成后的实际机制收益 */
  perkZh: string;
  perkEn: string;
}

export const ROUTES: Record<MulticellularRoute, RouteDef> = {
  myxomycete: {
    id: 'myxomycete',
    zh: '粘菌路线',
    en: 'Myxomycete route',
    icon: '☂',
    hue: '#fbbf24',
    realZh: '黄色黏球菌（Myxococcus xanthus）',
    realEn: 'Myxococcus xanthus',
    eraMa: 900,
    requires: ['adhesion', 'quorum'],
    descZh:
      '饥饿时，单细胞细菌聚成蠕动的菌毯，靠群体感应协调行动；资源耗尽后，群体长出子实体，分化出耐旱休眠孢子。',
    descEn:
      'When starved, single cells form a coordinated crawling mat; when food runs out the colony builds a fruiting body of dormant spores.',
    perkZh: '群体可在资源耗尽时形成子实体并播撒孢子，重新播种培养皿',
    perkEn: 'Builds fruiting bodies that broadcast spores back into the dish',
  },
  volvocine: {
    id: 'volvocine',
    zh: '团藻路线',
    en: 'Volvocine route',
    icon: '◎',
    hue: '#34d399',
    realZh: '团藻（Volvox）',
    realEn: 'Volvox',
    eraMa: 800,
    requires: ['adhesion', 'eyespot'],
    descZh:
      '数百个细胞嵌在果胶基质里形成空心球体，外层细胞负责游动，内层少数细胞专职生殖；群体整体转向光。',
    descEn:
      'Hundreds of cells in a hollow sphere: the outer shell swims, a few inner cells do nothing but reproduce; the sphere steers toward light.',
    perkZh: '群体整体游动与趋光，体内出现「体细胞 / 生殖细胞」分工',
    perkEn: 'The colony swims as one body toward light, with germ-soma division',
  },
  animal: {
    id: 'animal',
    zh: '动物路线',
    en: 'Animal route',
    icon: '✦',
    hue: '#f472b6',
    realZh: '领鞭毛虫 → 海绵',
    realEn: 'Choanoflagellate → sponge',
    eraMa: 600,
    requires: ['adhesion', 'tentacle'],
    descZh:
      '细胞之间出现电信号传导与集体迁移，群体像一只会变形的大生物一样整体移动。',
    descEn:
      'Cells coordinate by electrical signals and migrate collectively: the colony moves like one large, deforming animal.',
    perkZh: '群体获得神经样信号与集体迁移，能整体躲开捕食者',
    perkEn: 'Neural-like signalling and collective migration; the colony dodges predators as one',
  },
};

export const ROUTE_IDS = Object.keys(ROUTES) as MulticellularRoute[];

/* ───────── 地球史事件 ───────── */

export type EarthEventId = 'goe' | 'snowball' | 'cambrian';

export interface EarthEventDef {
  id: EarthEventId;
  zh: string;
  en: string;
  icon: string;
  hue: string;
  eraMa: number;
  descZh: string;
  descEn: string;
}

export const EARTH_EVENTS: Record<EarthEventId, EarthEventDef> = {
  goe: {
    id: 'goe',
    zh: '大氧化事件',
    en: 'Great Oxidation Event',
    icon: '☁',
    hue: '#e8c46a',
    eraMa: 2400,
    descZh:
      '产氧光合铺开，氧气第一次在大气里积累。对当时的厌氧生命来说这是一场毒气浩劫，而呼吸氧气的细胞从此统治地球。',
    descEn:
      'Oxygenic photosynthesis floods the air. For anaerobic life it is a toxic catastrophe; for aerobes it is the beginning of dominance.',
  },
  snowball: {
    id: 'snowball',
    zh: '雪球地球',
    en: 'Snowball Earth',
    icon: '❄',
    hue: '#7dd3fc',
    eraMa: 700,
    descZh:
      '成冰纪把整个地球冻成一个白色的球。代谢放缓、食物锐减，能形成芽孢的谱系成为唯一的幸存者。',
    descEn:
      'An ice age freezes the planet white. Metabolism slows, food vanishes, and only spore-formers survive.',
  },
  cambrian: {
    id: 'cambrian',
    zh: '寒武纪爆发',
    en: 'Cambrian Explosion',
    icon: '✺',
    hue: '#c084fc',
    eraMa: 541,
    descZh:
      '多细胞生命一旦跨过那道门槛，身体蓝图就在极短时间内集中涌现 —— 触手、外骨骼、眼睛、消化腔同时登场。',
    descEn:
      'Once multicellularity clears the threshold, body plans arrive all at once: tentacles, skeletons, eyes, guts.',
  },
};
