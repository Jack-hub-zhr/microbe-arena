/**
 * 地球史大事件目录
 * ---------------------------------------------------------------
 * 每一项都是地球上真实发生过的重大事件，附真实年代与真实后果，
 * 并在沙盒里对应一个**具体的引擎效果**（不是装饰，是真的会改变演化）。
 *
 * 引擎实现在 Simulation.applyGeoEvent() 里按 id 分派。
 */

export type GeoCategory = '宇宙' | '地质' | '气候' | '生命' | '灾变' | '现在';

export interface GeoEventDef {
  id: string;
  zh: string;
  en: string;
  /** 距今年代（百万年前） */
  eraMa: number;
  icon: string;
  hue: string;
  category: GeoCategory;
  /** 真实世界：这件事到底发生了什么 */
  realZh: string;
  /** 沙盒里：点下去会发生什么 */
  effectZh: string;
}

export const GEO_EVENTS: GeoEventDef[] = [
  {
    id: 'bigbang',
    zh: '大爆炸',
    en: 'Big Bang',
    eraMa: 13800,
    icon: 'event-burst',
    hue: '#e8c46a',
    category: '宇宙',
    realZh:
      '138 亿年前，空间、时间与能量从一点中诞生。宇宙最初是纯粹的高能等离子体，随后冷却出第一批氢、氦与锂。',
    effectZh: '把整个沙盒归零：清空所有生物与历史，回到时间起点重新接种。',
  },
  {
    id: 'hadean',
    zh: '冥古宙的闷热',
    en: 'Hadean hell',
    eraMa: 4000,
    icon: 'event-magma',
    hue: '#e2663f',
    category: '地质',
    realZh:
      '地球是一颗刚诞生的岩浆球，表面被熔岩覆盖，海洋尚未形成，大气以二氧化碳与水蒸气为主。',
    effectZh: '温度锁死到极热 600 tick：代谢与养分消耗同步暴涨，活得快的死得也快。',
  },
  {
    id: 'luca',
    zh: '第一次生命',
    en: 'LUCA',
    eraMa: 3800,
    icon: 'event-cell',
    hue: '#84b96b',
    category: '生命',
    realZh:
      '最后共同祖先：地球生命共同的起点，一个能自我复制、能代谢的原始细胞。',
    effectZh: '推倒重来，重新接种 200 个一模一样的原始单细胞。',
  },
  {
    id: 'greatoxidation',
    zh: '大氧化事件',
    en: 'Great Oxidation Event',
    eraMa: 2400,
    icon: 'event-goe',
    hue: '#d9a441',
    category: '气候',
    realZh:
      '产氧光合铺开，氧气第一次在大气中积累。对当时绝大多数厌氧生物而言，这是一场毒气浩劫。',
    effectZh: '62% 的厌氧生物当场死亡；氧气浓度永久上升，有氧呼吸从此占优。',
  },
  {
    id: 'eukaryote',
    zh: '真核细胞的诞生',
    en: 'Eukaryogenesis',
    eraMa: 1800,
    icon: 'event-cell',
    hue: '#c9762e',
    category: '生命',
    realZh:
      '一个古菌吞下一枚 α-变形菌却没有消化它 —— 内共生由此开始，线粒体诞生，真核细胞出现。',
    effectZh: '所有个体获得线粒体（能耗骤降 35%），并首次具备吞噬能力，分解者开始分化。',
  },
  {
    id: 'snowball',
    zh: '雪球地球',
    en: 'Snowball Earth',
    eraMa: 720,
    icon: 'event-snowball',
    hue: '#7fa8bd',
    category: '气候',
    realZh:
      '成冰纪把整个地球冻成一个白色的球，冰盖一直延伸到赤道，海洋表面结冰数百米。',
    effectZh: '气温骤降 420 tick：食物锐减、代谢变慢，只有能形成芽孢的谱系能活下来。',
  },
  {
    id: 'cambrian',
    zh: '寒武纪爆发',
    en: 'Cambrian Explosion',
    eraMa: 541,
    icon: 'event-cambrian',
    hue: '#c08a9e',
    category: '生命',
    realZh:
      '几乎所有现代动物门类在两千万年内集中登场：眼睛、外骨骼、捕食、颌、肠道同时出现。',
    effectZh: '突变率暴涨 2.5 倍并持续 320 tick —— 身体蓝图在极短时间内集中涌现。',
  },
  {
    id: 'ordovician',
    zh: '奥陶纪末大灭绝',
    en: 'End-Ordovician extinction',
    eraMa: 444,
    icon: 'event-impact',
    hue: '#8d99a6',
    category: '灾变',
    realZh:
      '冈瓦纳大陆漂向南极引发急剧冰期，60% 的海洋生物在寒冷中消失，是五次大灭绝中第一次。',
    effectZh: '60% 个体死亡，海洋与浅水生态位被清空。',
  },
  {
    id: 'landplants',
    zh: '陆地植物登陆',
    en: 'Land plants',
    eraMa: 470,
    icon: 'chloroplast',
    hue: '#84b96b',
    category: '生命',
    realZh:
      '苔藓类祖先爬上陆地，开始在土壤中生长并制造土壤，改变了大气中的氧气含量。',
    effectZh: '光合者大量涌现，有机养分供给显著上升。',
  },
  {
    id: 'insects',
    zh: '昆虫辐射',
    en: 'Insect radiation',
    eraMa: 400,
    icon: 'event-insect',
    hue: '#b5652e',
    category: '生命',
    realZh:
      '植物与含氧空气让昆虫得以小型化并爆发式多样化，成为地球上最成功的类群之一。',
    effectZh: '全体体型缩小、繁殖加快，数量激增但个体更脆弱。',
  },
  {
    id: 'forests',
    zh: '巨型蕨类森林',
    en: 'Coal forests',
    eraMa: 380,
    icon: 'event-tree',
    hue: '#5aa89b',
    category: '地质',
    realZh:
      '鳞木与树蕨长成数十米高的森林，埋下的残骸经亿万年高压高温变成了今天的煤。',
    effectZh: '有机养分供给翻倍，同时气温略降 —— 大量碳被埋进地下。',
  },
  {
    id: 'tetrapods',
    zh: '鱼类登陆',
    en: 'Tetrapods on land',
    eraMa: 380,
    icon: 'flagellum',
    hue: '#4fb3c4',
    category: '生命',
    realZh: '提塔利克鱼用鳍状肢撑起身体，成为四足动物的祖先。',
    effectZh: '猎手体型上限提高 15%，捕食能力整体上移一个台阶。',
  },
  {
    id: 'pangaea',
    zh: '冈瓦纳大陆分裂',
    en: 'Pangaea breakup',
    eraMa: 175,
    icon: 'event-pangaea',
    hue: '#a89b83',
    category: '地质',
    realZh:
      '超大陆裂成南北两块，大陆漂移让基因流中断 —— 隔离正是物种形成的引擎。',
    effectZh: '群体分裂成两个互不往来的族群，各自独立演化。',
  },
  {
    id: 'dinosaurs',
    zh: '恐龙时代',
    en: 'Age of Dinosaurs',
    eraMa: 230,
    icon: 'event-dinosaur',
    hue: '#e2663f',
    category: '生命',
    realZh: '三叠纪末大灭绝让恐龙接管陆地，随后统治了一亿六千万年。',
    effectZh: '全体获得鳞甲（防御 ×1.5），猎手体型上限再提高 25%。',
  },
  {
    id: 'permian',
    zh: '二叠纪末大灭绝',
    en: 'Great Dying',
    eraMa: 252,
    icon: 'event-impact',
    hue: '#8d3b3b',
    category: '灾变',
    realZh:
      '西伯利亚暗色岩浆活动持续数十万年，海洋酸化缺氧，96% 的海洋物种与 70% 的陆生脊椎动物消失。',
    effectZh: '96% 个体死亡 —— 生态位几乎清空，这是五次大灭绝中最惨烈的一次。',
  },
  {
    id: 'cretaceous',
    zh: '白垩纪末撞击',
    en: 'Chicxulub impact',
    eraMa: 66,
    icon: 'event-impact',
    hue: '#b5652e',
    category: '灾变',
    realZh:
      '一颗直径 10 公里的小行星撞进今天的尤卡坦半岛，尘埃遮蔽阳光数年，全球生态链断裂。',
    effectZh: '90% 个体死亡，大型猎手优先覆灭。',
  },
  {
    id: 'mammals',
    zh: '哺乳动物辐射',
    en: 'Mammal radiation',
    eraMa: 66,
    icon: 'event-mammal',
    hue: '#c08a9e',
    category: '生命',
    realZh:
      '恐龙退场后，空出的生态位被小型哺乳动物迅速填满，体型与多样性都大幅上升。',
    effectZh: '猎手被小型哺乳替代（体型上限下调），分解者因尸体暴增而繁盛。',
  },
  {
    id: 'iceage',
    zh: '第四纪冰期',
    en: 'Quaternary ice age',
    eraMa: 2.6,
    icon: 'event-snowball',
    hue: '#7fa8bd',
    category: '气候',
    realZh:
      '冰盖反复进退，冰期与间冰期轮替，人类就是在最近一次间冰期里出现的。',
    effectZh: '气温持续下降 800 tick：代谢变慢，而个体趋向大型化。',
  },
  {
    id: 'anthropocene',
    zh: '人类世',
    en: 'Anthropocene',
    eraMa: 0.01,
    icon: 'event-human',
    hue: '#d9a441',
    category: '现在',
    realZh:
      '人类活动把大气碳、二氧化碳与氮循环推到了 30 万年来的最高点，物种迁移速率创下纪录。',
    effectZh: '养分供给翻倍，环境全面可控 —— 但也就到此为止了。',
  },
];

export const GEO_EVENT_MAP: Record<string, GeoEventDef> = Object.fromEntries(
  GEO_EVENTS.map((e) => [e.id, e]),
);

export const GEO_CATEGORIES: GeoCategory[] = ['宇宙', '地质', '气候', '生命', '灾变', '现在'];

/** 把「百万年前」格式化成人类读的年代 */
export function formatEra(ma: number): string {
  if (ma >= 1000) {
    const by = ma / 1000;
    return `${by % 1 === 0 ? by : by.toFixed(1)} 十亿年前`;
  }
  if (ma >= 1) return `${ma} 百万年前`;
  return `${Math.round(ma * 10000)} 万年前`;
}
