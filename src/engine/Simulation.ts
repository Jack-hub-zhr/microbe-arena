/**
 * 微生物进化大赛 — 演化引擎
 * ---------------------------------------------------------------
 * 引擎不硬编码任何具体细胞器：所有机制都从 `lineages.ts` 的真实演化谱系里读取，
 * 因此每出现一项新的演化创新，它的真实历史（代表生物、起源年代、演化支系）
 * 都会自动进入图鉴。
 *
 * 三条真实的多细胞化路线：
 *   粘菌路线（群体感应 + 黏连）→ 子实体与孢子播撒
 *   团藻路线（眼点 + 减数分裂）→ 群体整体趋光与体/生殖细胞分工
 *   动物路线（触手 + 群体感应）→ 神经样信号与集体迁移
 *
 * 以及三件真实发生在地球上的大事：
 *   大氧化事件 / 雪球地球 / 寒武纪爆发
 */

import { GEO_EVENT_MAP } from './geoEvents';
import {
  createMind,
  localDecide,
  type MindContext,
  type MindDecision,
  type MindState,
} from './minds';
import { MindScheduler, type MindHost } from './mindScheduler';
import type {
  Agent,
  CellRole,
  Colony,
  EventType,
  Food,
  Genome,
  HistoryPoint,
  SimConfig,
  SimEffect,
  SimEvent,
  Strategy,
} from './types';
import {
  BASE_MODS,
  EARTH_EVENTS,
  ROUTES,
  ROUTE_IDS,
  TRAITS,
  TRAIT_IDS,
  type EarthEventId,
  type MulticellularRoute,
  type OrganelleId,
  type TraitFlags,
  type TraitMods,
} from './lineages';

/* ────────────────────────── 常量表 ────────────────────────── */

export { TRAITS, TRAIT_IDS, ROUTES, ROUTE_IDS, EARTH_EVENTS };
export type { OrganelleId, MulticellularRoute, EarthEventId };

/** 兼容旧名：图鉴用的细胞器表 */
export const ORGANELLES = TRAITS;
export const ORGANELLE_IDS = TRAIT_IDS;

export const STRATEGIES: Record<
  Strategy,
  { zh: string; en: string; color: string; icon: string }
> = {
  photosynthesizer: { zh: '光合者', en: 'Phototroph', color: '#84b96b', icon: 'chloroplast' },
  chemotroph: { zh: '化能者', en: 'Chemotroph', color: '#b5652e', icon: 'chemosynthesis' },
  decomposer: { zh: '分解者', en: 'Decomposer', color: '#d4748e', icon: 'lysosome' },
  symbiote: { zh: '共生体', en: 'Symbiote', color: '#4fb3c4', icon: 'adhesion' },
  hunter: { zh: '猎手', en: 'Hunter', color: '#e2663f', icon: 'toxin' },
  gatherer: { zh: '采集者', en: 'Gatherer', color: '#d6c48f', icon: 'flagellum' },
};

export const STRATEGY_IDS = Object.keys(STRATEGIES) as Strategy[];

export const CELL_ROLES: Record<
  CellRole,
  { zh: string; en: string; icon: string; color: string; descZh: string; descEn: string }
> = {
  core: {
    zh: '核心细胞',
    en: 'Core cell',
    icon: 'role-core',
    color: '#c9a227',
    descZh: '群体代谢中枢：产能最高、行动最慢，向同伴输送能量',
    descEn: 'Metabolic hub: highest output, slowest, shares energy with the colony',
  },
  worker: {
    zh: '采集工',
    en: 'Worker',
    icon: 'role-worker',
    color: '#84b96b',
    descZh: '四处采集养分，把食物搬回群体共享',
    descEn: 'Forages widely and ferries nutrients back to the colony',
  },
  guard: {
    zh: '守卫细胞',
    en: 'Guard',
    icon: 'role-guard',
    color: '#e2663f',
    descZh: '富含毒素与外壳，死守群体边界并猎杀入侵者',
    descEn: 'Toxin-laced defenders that hold the colony perimeter',
  },
  brooder: {
    zh: '繁殖体',
    en: 'Brooder',
    icon: 'role-brooder',
    color: '#4fb3c4',
    descZh: '繁殖阈值更低，持续补充群体的新成员',
    descEn: 'Lower breeding threshold, continuously replenishes the colony',
  },
  nurse: {
    zh: '养护细胞',
    en: 'Nurse',
    icon: 'role-nurse',
    color: '#d6c48f',
    descZh: '从共享能量池抽取能量，修复受伤的同伴',
    descEn: 'Draws from the shared pool to heal wounded mates',
  },
};

export const ROLE_IDS = Object.keys(CELL_ROLES) as CellRole[];

/** 职能对各项数值的修正系数 */
const ROLE_MODS: Record<
  CellRole,
  {
    speed: number;
    size: number;
    defense: number;
    attack: number;
    food: number;
    energy: number;
    breed: number;
    share: number;
  }
> = {
  core: { speed: 0.55, size: 1.35, defense: 1.25, attack: 1.0, food: 0.8, energy: 1.35, breed: 1.3, share: 0.3 },
  worker: { speed: 1.4, size: 0.95, defense: 0.9, attack: 1.0, food: 1.55, energy: 1.0, breed: 1.0, share: 0.9 },
  guard: { speed: 0.85, size: 1.1, defense: 2.0, attack: 1.6, food: 0.9, energy: 1.0, breed: 1.2, share: 0.2 },
  brooder: { speed: 0.95, size: 1.05, defense: 1.0, attack: 1.05, food: 1.1, energy: 1.15, breed: 0.6, share: 0.25 },
  nurse: { speed: 1.0, size: 0.9, defense: 0.95, attack: 0.9, food: 1.0, energy: 1.1, breed: 1.1, share: 0.55 },
};

/* ────────────────────────── 工具 ────────────────────────── */

const rand = (a: number, b: number) => a + Math.random() * (b - a);
const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));
const dist = (ax: number, ay: number, bx: number, by: number) => Math.hypot(ax - bx, ay - by);

/** 存活个体数（供事件效果按比例取样） */
function aliveCount(sim: Simulation): number {
  let n = 0;
  for (const a of sim.agents) if (a.alive) n++;
  return n;
}

/** 均匀网格空间索引：把 O(n·m) 的邻域搜索降到近似 O(n) */
class SpatialGrid {
  readonly cell: number;
  readonly cols: number;
  readonly rows: number;
  private buckets: Agent[][];

  constructor(radius: number, cell: number) {
    this.cell = cell;
    const span = radius * 2 + cell * 4;
    this.cols = Math.ceil(span / cell);
    this.rows = this.cols;
    this.buckets = new Array(this.cols * this.rows);
    for (let i = 0; i < this.buckets.length; i++) this.buckets[i] = [];
  }

  clear() {
    for (let i = 0; i < this.buckets.length; i++) if (this.buckets[i].length) this.buckets[i].length = 0;
  }

  insert(a: Agent) {
    const cx = clamp(Math.floor((a.x + this.cols * this.cell * 0.5) / this.cell), 0, this.cols - 1);
    const cy = clamp(Math.floor((a.y + this.rows * this.cell * 0.5) / this.cell), 0, this.rows - 1);
    this.buckets[cy * this.cols + cx].push(a);
  }

  near(x: number, y: number): Agent[] {
    const cx = clamp(Math.floor((x + this.cols * this.cell * 0.5) / this.cell), 0, this.cols - 1);
    const cy = clamp(Math.floor((y + this.rows * this.cell * 0.5) / this.cell), 0, this.rows - 1);
    const out: Agent[] = [];
    for (let dy = -1; dy <= 1; dy++) {
      const yy = cy + dy;
      if (yy < 0 || yy >= this.rows) continue;
      for (let dx = -1; dx <= 1; dx++) {
        const xx = cx + dx;
        if (xx < 0 || xx >= this.cols) continue;
        const b = this.buckets[yy * this.cols + xx];
        for (let i = 0; i < b.length; i++) out.push(b[i]);
      }
    }
    return out;
  }
}

/** 食物空间索引：细胞只需在邻域内寻找最近的养分 */
class FoodGrid {
  readonly cell: number;
  readonly cols: number;
  readonly rows: number;
  private slots: Food[][];

  constructor(radius: number, cell: number) {
    this.cell = cell;
    const span = radius * 2 + cell * 4;
    this.cols = Math.ceil(span / cell);
    this.rows = this.cols;
    this.slots = new Array(this.cols * this.rows);
    for (let i = 0; i < this.slots.length; i++) this.slots[i] = [];
  }

  clear() {
    for (let i = 0; i < this.slots.length; i++) if (this.slots[i].length) this.slots[i].length = 0;
  }

  insert(f: Food) {
    const cx = clamp(Math.floor((f.x + this.cols * this.cell * 0.5) / this.cell), 0, this.cols - 1);
    const cy = clamp(Math.floor((f.y + this.rows * this.cell * 0.5) / this.cell), 0, this.rows - 1);
    this.slots[cy * this.cols + cx].push(f);
  }

  near(x: number, y: number): Food[] {
    const cx = clamp(Math.floor((x + this.cols * this.cell * 0.5) / this.cell), 0, this.cols - 1);
    const cy = clamp(Math.floor((y + this.rows * this.cell * 0.5) / this.cell), 0, this.rows - 1);
    const out: Food[] = [];
    for (let dy = -1; dy <= 1; dy++) {
      const yy = cy + dy;
      if (yy < 0 || yy >= this.rows) continue;
      for (let dx = -1; dx <= 1; dx++) {
        const xx = cx + dx;
        if (xx < 0 || xx >= this.cols) continue;
        const b = this.slots[yy * this.cols + xx];
        for (let i = 0; i < b.length; i++) out.push(b[i]);
      }
    }
    return out;
  }
}

/* ────────────────────────── 引擎 ────────────────────────── */

let agentSeq = 1;
let colonySeq = 1;

interface TraitBundle {
  mods: TraitMods;
  flags: TraitFlags;
}

export class Simulation {
  agents: Agent[] = [];
  food: Food[] = [];
  colonies = new Map<number, Colony>();
  events: SimEvent[] = [];
  history: HistoryPoint[] = [];

  /** 供渲染层消费的瞬时特效队列 */
  effects: SimEffect[] = [];
  /** id -> 个体的索引，避免 O(n²) 的 find 调用 */
  private byId = new Map<number, Agent>();
  /** 基因型 -> 机制系数缓存（基因型对象换新即失效） */
  private modCache = new Map<Genome, TraitBundle>();

  tick = 0;
  config: SimConfig;

  seenOrganelles = new Set<OrganelleId>();
  seenMilestones = new Set<number>();
  seenRoles = new Set<CellRole>();
  /** 已经发生过的地球史事件 */
  seenEarthEvents = new Set<EarthEventId>();
  /** 已经达成过的多细胞路线 */
  seenRoutes = new Set<MulticellularRoute>();

  totalBirths = 0;
  totalDeaths = 0;
  totalKills = 0;
  totalCannibalKills = 0;
  apexId: number | null = null;

  /** 昼夜光照强度 0~1 */
  light = 0.8;
  lightOverride: number | null = null;
  /** 培养基养分浓度，分解者会把它推高 */
  nutrient = 1;
  temperature = 0.5;
  /** 大气含氧量：大氧化事件后上升，有氧呼吸的效率优势来自这里 */
  oxygen = 0;
  /** 剩余冰期 tick（雪球地球） */
  glacial = 0;
  /** 剩余寒武纪爆发 tick（突变率激增） */
  cambrian = 0;
  /** 已由用户触发的地球史事件 */
  geoEventsTriggered = new Set<string>();
  /** 环境改写：由地球史事件施加，带到期 tick */
  private tempLock: { value: number; until: number } | null = null;
  private mutationBoost = 1;
  private mutationBoostUntil = 0;
  private nutrientMul = 1;
  private nutrientMulUntil = 0;
  private sizeScale = 1;

  /** 上一次发生「食同族」的 tick，用于渲染提示 */
  lastCannibalTick = -999;
  /** 上一次播报「食同族」的 tick，避免编年史刷屏 */
  private lastCannibalLogTick: number | null = null;
  /** 「首个多细胞聚合体」里程碑只播报一次 */
  colonyEventDone = false;
  /** 上一次把 agent 的决策写进编年史的 tick */
  private lastMindLogTick: number | null = null;

  private agentGrid: SpatialGrid;
  private foodGrid: FoodGrid;

  /* ───────── 心智层：每个细胞都挂一个 agent ───────── */

  /** id -> 该细胞的心智状态（性格 / 记忆 / 当前决策） */
  readonly mindStates = new Map<number, MindState>();
  /** LLM 调度器：负责找免费接口、限流、排队、兜底 */
  readonly scheduler = new MindScheduler();

  constructor(config?: Partial<SimConfig>) {
    this.config = {
      radius: 900,
      initialCount: 200,
      maxPopulation: 550,
      foodPerTick: 6.2,
      mutationRate: 0.75,
      ...config,
    };
    this.agentGrid = new SpatialGrid(this.config.radius, 60);
    this.foodGrid = new FoodGrid(this.config.radius, 220);
    this.scheduler.setHost(this as unknown as MindHost);
    this.reset();
  }

  /* ───────── 生命周期 ───────── */

  reset() {
    this.agents = [];
    this.food = [];
    this.colonies.clear();
    this.events = [];
    this.history = [];
    this.effects = [];
    this.byId.clear();
    this.modCache.clear();
    this.mindStates.clear();
    this.tick = 0;
    this.seenOrganelles.clear();
    this.seenMilestones.clear();
    this.seenRoles.clear();
    this.seenEarthEvents.clear();
    this.seenRoutes.clear();
    this.totalBirths = 0;
    this.totalDeaths = 0;
    this.totalKills = 0;
    this.totalCannibalKills = 0;
    this.apexId = null;
    this.colonyEventDone = false;
    this.nutrient = 1;
    this.light = 0.8;
    this.lightOverride = null;
    this.temperature = 0.5;
    this.oxygen = 0;
    this.glacial = 0;
    this.cambrian = 0;

    const base: Genome = {
      hue: 0,
      size: rand(3.2, 4.2),
      maxSpeed: rand(0.9, 1.3),
      sense: rand(55, 80),
      aggression: rand(0.15, 0.45),
      efficiency: rand(0.4, 0.6),
      organelles: [],
    };
    // 三条创始谱系：颜色可辨，同时同谱系内仍能聚合成多细胞体
    const rootHue = rand(0, 360);
    const lineages = [0, 0.33, 0.66].map((f) => (rootHue + f * 360 + rand(-9, 9) + 360) % 360);
    for (let i = 0; i < this.config.initialCount; i++) {
      const hue = (lineages[i % lineages.length] + rand(-9, 9) + 360) % 360;
      this.agents.push(this.spawnFrom({ ...base, hue, organelles: [] }, undefined, true));
    }
    for (let i = 0; i < 260; i++) this.spawnFood();
    this.log(
      'milestone',
      `培养皿接种完成：${this.config.initialCount} 个原始单细胞生物，分属三条创始谱系`,
      `Inoculated: ${this.config.initialCount} primitive cells from three founder lineages`,
    );
  }

  /* ───────── 几何 / 位置 ───────── */

  get innerRadius() {
    return this.config.radius - 16;
  }

  /** 把任意坐标夹紧到皿内 —— 这是「食物不会撒出培养皿」的保证 */
  clampToDish(x: number, y: number, margin = 12): { x: number; y: number } {
    const limit = this.innerRadius - margin;
    const d = Math.hypot(x, y);
    if (d <= limit) return { x, y };
    const k = limit / (d || 1);
    return { x: x * k, y: y * k };
  }

  randomPos(margin = 30): { x: number; y: number } {
    const a = rand(0, Math.PI * 2);
    const r = Math.sqrt(Math.random()) * (this.innerRadius - margin);
    return { x: Math.cos(a) * r, y: Math.sin(a) * r };
  }

  /* ───────── 生成 ───────── */

  spawnFrom(genome: Genome, parent?: Agent, scattered = false): Agent {
    const p = scattered || !parent ? this.randomPos() : { x: parent.x + rand(-14, 14), y: parent.y + rand(-14, 14) };
    const scaled = { ...genome, size: clamp(genome.size * this.sizeScale, 2.4, 9) };
    const agent: Agent = {
      id: agentSeq++,
      x: p.x,
      y: p.y,
      vx: rand(-1, 1),
      vy: rand(-1, 1),
      genome: scaled,
      energy: parent ? parent.energy * 0.45 : rand(50, 70),
      age: 0,
      generation: parent ? parent.generation + 1 : 0,
      kills: 0,
      cannibalKills: 0,
      children: 0,
      colonyId: parent?.colonyId ?? null,
      role: parent?.role ?? null,
      strategy: deriveStrategy(scaled),
      wander: rand(0, Math.PI * 2),
      alive: true,
      flash: 0,
      lastFeedTick: -999,
      dormant: false,
      alien: false,
      digest: 0,
      thinkGlow: 0,
    };
    this.byId.set(agent.id, agent);
    // 新生个体继承父母的性格（带变异），并立刻做一次本地决策
    const mind = createMind(agent, parent ? this.mindStates.get(parent.id) : undefined);
    this.mindStates.set(agent.id, mind);
    return agent;
  }

  agentById(id: number): Agent | undefined {
    return this.byId.get(id);
  }

  spawnFood(x?: number, y?: number, energy?: number, hue?: number, kind: 'organic' | 'detritus' = 'organic') {
    let px: number;
    let py: number;
    if (x === undefined || y === undefined) {
      const p = this.randomPos(24);
      px = p.x;
      py = p.y;
    } else {
      const p = this.clampToDish(x, y, 18);
      px = p.x;
      py = p.y;
    }
    this.food.push({
      x: px,
      y: py,
      energy: energy ?? rand(8, 18),
      hue: hue ?? (kind === 'detritus' ? rand(18, 42) : rand(90, 160)),
      kind,
      born: this.tick,
      dead: false,
    });
  }

  log(type: EventType, zh: string, en: string) {
    this.events.unshift({ tick: this.tick, type, zh, en });
    if (this.events.length > 60) this.events.pop();
  }

  /* ───────── 上帝之手 ───────── */

  godFeed(x: number, y: number) {
    const anchor = this.clampToDish(x, y, 40);
    for (let i = 0; i < 35; i++) {
      const a = rand(0, Math.PI * 2);
      const d = Math.sqrt(Math.random()) * 70;
      this.spawnFood(anchor.x + Math.cos(a) * d, anchor.y + Math.sin(a) * d, rand(10, 22));
    }
    this.effects.push({ type: 'feed', x: anchor.x, y: anchor.y, tick: this.tick });
    this.log('god', '上帝撒下了丰盛的食物', 'God scattered abundant food');
  }

  godSmite(x: number, y: number, radius = 110) {
    let killed = 0;
    for (const a of this.agents) {
      if (!a.alive || a.dormant) continue;
      if (dist(a.x, a.y, x, y) < radius) {
        a.alive = false;
        a.energy = 0;
        killed++;
        this.totalDeaths++;
        this.spawnFood(a.x, a.y, a.genome.size * 5, a.genome.hue, 'detritus');
        if (a.colonyId !== null) this.colonies.get(a.colonyId)?.memberIds.delete(a.id);
      }
    }
    this.log('god', `天罚降临：${killed} 个生物化为养分`, `Divine smite: ${killed} organisms returned to nutrients`);
  }

  godMutate(x: number, y: number, radius = 150) {
    let target: Agent | null = null;
    let best = radius;
    for (const a of this.agents) {
      if (!a.alive) continue;
      const d = dist(a.x, a.y, x, y);
      if (d < best) {
        best = d;
        target = a;
      }
    }
    if (!target) return;
    const missing = eligibleTraits(target.genome);
    if (missing.length) {
      const pick = missing[Math.floor(Math.random() * missing.length)];
      target.genome.organelles.push(pick);
      target.strategy = deriveStrategy(target.genome);
      target.flash = 1;
      this.seenOrganelles.add(pick);
      const meta = TRAITS[pick];
      this.effects.push({ type: 'mutate', x: target.x, y: target.y, tick: this.tick });
      this.log(
        'god',
        `上帝之手触碰了 #${target.id}，它立刻长出了「${meta.zh}」`,
        `God touched #${target.id} — it instantly grew a ${meta.en}`,
      );
    } else {
      target.genome.size = clamp(target.genome.size * 1.3, 2.4, 9);
      this.log('god', `上帝之手让 #${target.id} 的体型暴涨`, `God made #${target.id} grow larger`);
    }
  }

  godPlague(rate = 0.4) {
    const alive = this.agents.filter((a) => a.alive && !a.dormant);
    let dead = 0;
    for (const a of alive) {
      if (Math.random() < rate) {
        a.alive = false;
        a.energy = 0;
        dead++;
        this.totalDeaths++;
        this.spawnFood(a.x, a.y, a.genome.size * 5, a.genome.hue, 'detritus');
        if (a.colonyId !== null) this.colonies.get(a.colonyId)?.memberIds.delete(a.id);
      }
    }
    this.effects.push({ type: 'plague', x: 0, y: 0, tick: this.tick });
    this.log(
      'god',
      `瘟疫席卷培养皿：${dead} 个生物死亡，幸存者将占据空出的生态位`,
      `Plague: ${dead} died; survivors inherit the empty niches`,
    );
  }

  godAliens(count = 18) {
    const hue = rand(0, 360);
    for (let i = 0; i < count; i++) {
      const genome: Genome = {
        hue: hue + rand(-10, 10),
        size: rand(3, 6),
        maxSpeed: rand(0.8, 1.6),
        sense: rand(50, 100),
        aggression: rand(0.1, 0.9),
        efficiency: rand(0.35, 0.7),
        organelles: [],
      };
      if (Math.random() < 0.6) {
        const pick = TRAIT_IDS[Math.floor(Math.random() * TRAIT_IDS.length)];
        genome.organelles.push(pick);
        this.seenOrganelles.add(pick);
      }
      const spawn = this.spawnFrom(genome, undefined, true);
      spawn.alien = true;
      spawn.genome.hue = 186; // 固定成青绿，一眼能和三条创始谱系区分开
      this.agents.push(spawn);
      this.totalBirths++;
    }
    this.effects.push({ type: 'alien', x: 0, y: 0, tick: this.tick });
    this.log(
      'god',
      `天外入侵：${count} 个携带未知基因的外来物种被投放到培养皿`,
      `Alien invasion: ${count} foreigners with unknown genes released`,
    );
  }

  /* ───────── 机制系数 ───────── */

  /** 汇总一个基因型的全部机制修正与标记（带缓存） */
  bundle(genome: Genome): TraitBundle {
    const cached = this.modCache.get(genome);
    if (cached) return cached;
    const mods: TraitMods = { ...BASE_MODS };
    const flags: TraitFlags = {};
    for (const id of genome.organelles) {
      const def = TRAITS[id];
      if (!def) continue;
      // 乘数类修正连乘，加算类（攻击距离 / 进食半径）相加
      if (def.mods) {
        for (const key of Object.keys(def.mods) as (keyof TraitMods)[]) {
          const value = def.mods[key] as number;
          if (key === 'eatRange' || key === 'attackRange') {
            mods[key] = (mods[key] as number) + value;
          } else {
            mods[key] = (mods[key] as number) * value;
          }
        }
      }
      if (def.flags) Object.assign(flags, def.flags);
    }
    const bundle: TraitBundle = { mods, flags };
    this.modCache.set(genome, bundle);
    return bundle;
  }

  roleMods(a: Agent) {
    return a.role ? ROLE_MODS[a.role] : null;
  }

  /** 当前生效的养分供给倍率（森林 / 人类世等事件会改写它） */
  get nutrientMultiplier() {
    return this.tick < this.nutrientMulUntil ? this.nutrientMul : 1;
  }

  /** 当前生效的突变率倍率 */
  get mutationMultiplier() {
    return this.tick < this.mutationBoostUntil ? this.mutationBoost : 1;
  }

  /** 有效温度：冰期或地球史事件可以强制改写 */
  get effectiveTemperature() {
    if (this.tempLock && this.tick < this.tempLock.until) return this.tempLock.value;
    return this.glacial > 0 ? this.temperature * 0.3 : this.temperature;
  }

  speedOf(a: Agent) {
    const { mods } = this.bundle(a.genome);
    let v = a.genome.maxSpeed;
    v *= Math.sqrt(4 / a.genome.size);
    v *= 0.75 + this.effectiveTemperature * 0.5;
    v *= mods.speed;
    if (a.colonyId !== null) v *= 0.75;
    const m = this.roleMods(a);
    if (m) v *= m.speed;
    return v;
  }

  senseOf(a: Agent) {
    const { mods } = this.bundle(a.genome);
    let s = a.genome.sense * mods.sense;
    if (a.colonyId !== null) s *= 1.15;
    return s;
  }

  attackOf(a: Agent) {
    const { mods } = this.bundle(a.genome);
    let v = a.genome.size * (0.6 + a.genome.aggression);
    v *= mods.attack;
    if (a.genome.organelles.includes('toxin')) v *= 1.0; // 毒素倍率已并入 TRAITS
    const m = this.roleMods(a);
    if (m) v *= m.attack;
    return v;
  }

  defenseOf(a: Agent) {
    const { mods } = this.bundle(a.genome);
    let v = a.genome.size * mods.defense;
    const m = this.roleMods(a);
    if (m) v *= m.defense;
    return v;
  }

  upkeepOf(a: Agent) {
    const { mods } = this.bundle(a.genome);
    let v = 0.055 + a.genome.size * 0.012 + a.genome.maxSpeed * 0.02;
    v *= mods.upkeep;
    v *= 0.7 + this.effectiveTemperature * 0.8;
    const m = this.roleMods(a);
    if (m) v /= m.energy;
    return v;
  }

  /** 攻击距离：触手等器官让猎手可以隔空出手 */
  attackRangeOf(a: Agent) {
    return this.bundle(a.genome).mods.attackRange;
  }

  /** 进食半径 */
  eatRangeOf(a: Agent) {
    const { mods } = this.bundle(a.genome);
    return a.genome.size + 5 + (a.colonyId !== null ? 8 : 0) + mods.eatRange;
  }

  /**
   * 捕食评分。返回 > 0 表示 predator 可以吃掉 prey。
   * 常规捕食需要攻击力 > 防御力 ×1.22；「食同族」允许猎手吞食较小的同类。
   */
  preyScore(predator: Agent, prey: Agent): number {
    if (predator.colonyId !== null && predator.colonyId === prey.colonyId) return 0;
    const atk = this.attackOf(predator);
    const def = this.defenseOf(prey);
    if (atk > def * 1.22 && predator.genome.size >= prey.genome.size * 0.97) return 1;
    if (predator.strategy === 'hunter' && prey.strategy === 'hunter' && atk > def * 0.85) {
      const armed = predator.genome.organelles.includes('toxin');
      const sizeGate = armed ? 0.99 : 1.01;
      if (predator.genome.size > prey.genome.size * sizeGate) return 0.85;
    }
    return 0;
  }

  /* ───────── 主循环 ───────── */

  step() {
    this.tick++;

    // 光照：昼夜循环或手动覆盖
    this.light = this.lightOverride ?? clamp(0.55 + 0.45 * Math.cos(this.tick * 0.0015), 0.02, 1);

    // 冰期与寒武纪的倒计时
    if (this.glacial > 0) this.glacial--;
    if (this.cambrian > 0) this.cambrian--;

    // 培养基养分：分解者把碎屑转化为养分，养分又催生更多有机物
    this.nutrient = clamp(this.nutrient, 0.35, 2.4);

    // 投放有机养分
    if (this.food.length < 520) {
      const boost = this.tick < this.nutrientMulUntil ? this.nutrientMul : 1;
      let budget =
        this.config.foodPerTick * (0.5 + 0.5 * this.nutrient) * boost * (this.glacial > 0 ? 0.45 : 1);
      while (budget > 0) {
        if (Math.random() < budget) this.spawnFood();
        budget -= 1;
      }
    }

    const alive = this.agents.filter((a) => a.alive);
    const pop = alive.length;

    // 重建空间索引
    this.agentGrid.clear();
    for (const a of alive) this.agentGrid.insert(a);
    this.foodGrid.clear();
    for (const f of this.food) this.foodGrid.insert(f);

    /* ── 1. 感知 / 转向 / 移动 / 代谢 ── */
    for (const a of alive) {
      a.age++;
      // 真正分化出分工（或走出多细胞路线）的群体才算「共生体」，
      // 随机黏在一起的细胞团还不算真正的协作；离开群体后身份也要还回来
      if (a.colonyId !== null && a.genome.organelles.includes('adhesion')) {
        const col = this.colonies.get(a.colonyId);
        if (col && (col.differentiated || col.route)) a.strategy = 'symbiote';
        else if (a.strategy === 'symbiote') a.strategy = deriveStrategy(a.genome);
      } else if (a.strategy === 'symbiote') {
        a.strategy = deriveStrategy(a.genome);
      }
      const genome = a.genome;
      const { mods, flags } = this.bundle(genome);
      const sense = this.senseOf(a);
      const speed = this.speedOf(a);

      let prey: Agent | null = null;
      let preyDist = Infinity;
      let preyScore = 0;
      let rival: Agent | null = null;
      let rivalDist = Infinity;
      let friend: Agent | null = null;
      let friendDist = Infinity;

      for (const b of this.agentGrid.near(a.x, a.y)) {
        if (b === a || !b.alive) continue;
        const d = dist(a.x, a.y, b.x, b.y);
        const reach = sense + this.attackRangeOf(a);
        if (d > reach) continue;

        const score = this.preyScore(a, b);
        if (score > 0) {
          const hungry = 1 - clamp(a.energy / 90, 0, 1);
          const effective = score < 1 ? score + hungry * 0.14 : score;
          if (effective > preyScore || (effective === preyScore && d < preyDist)) {
            prey = b;
            preyDist = d;
            preyScore = effective;
          }
        } else if (b.strategy === 'hunter' && a.strategy === 'hunter' && d < rivalDist) {
          rival = b;
          rivalDist = d;
        }

        if (
          genome.organelles.includes('adhesion') &&
          b.genome.organelles.includes('adhesion') &&
          Math.abs(b.genome.hue - genome.hue) < 34 &&
          a.colonyId === null &&
          b.colonyId === null &&
          d < friendDist
        ) {
          friend = b;
          friendDist = d;
        }
      }

      /* ── 心智层：agent 感知威胁与配偶，并把自己的意志加进转向 ──
         只有「智能体模式」打开时才有开销；关闭时引擎行为与从前完全一致。 */
      const mindInfluence = this.scheduler.enabled ? this.scheduler.influence : 0;
      let mindDecision: MindDecision | null = null;
      let threat: Agent | null = null;
      let threatDist = Infinity;
      let mate: Agent | null = null;
      let mateDist = Infinity;
      if (mindInfluence > 0) {
        const mind = this.mindStates.get(a.id);
        if (mind) {
          // 没有 LLM 决策、或本地决策已过时，就用本地策略顶上（永远不让 agent 哑掉）
          const cur = mind.decision;
          const staleLocal =
            !cur || (cur.source === 'local' && this.tick - mind.lastLocalTick >= 14);
          const staleLlm = !!cur && cur.source === 'llm' && this.tick > mind.goalUntil;
          if (staleLocal || staleLlm) {
            mind.decision = localDecide(this.observe(a), mind.personality, this.tick);
            mind.lastLocalTick = this.tick;
            mind.thinkCount++;
          }
          mindDecision = mind.decision;
          const reach2 = sense * 1.35 + 24;
          for (const b of this.agentGrid.near(a.x, a.y)) {
            if (b === a || !b.alive) continue;
            const d = dist(a.x, a.y, b.x, b.y);
            if (d > reach2) continue;
            if (b.strategy === 'hunter') {
              if (a.strategy !== 'hunter' && d < threatDist) {
                threat = b;
                threatDist = d;
              }
            } else if (
              a.strategy !== 'hunter' &&
              b.strategy === a.strategy &&
              Math.abs(b.genome.hue - a.genome.hue) < 42
            ) {
              if (d < mateDist) {
                mate = b;
                mateDist = d;
              }
            }
          }
        }
      }

      // 朝向目标
      let dx = 0;
      let dy = 0;

      if (prey) {
        const w = preyScore >= 1 ? 2.2 : 1.9;
        dx += ((prey.x - a.x) / (preyDist + 1)) * w;
        dy += ((prey.y - a.y) / (preyDist + 1)) * w;
      } else if (rival && a.strategy === 'hunter') {
        const hunger = 1 - clamp(a.energy / 120, 0, 1);
        dx += ((rival.x - a.x) / (rivalDist + 1)) * (0.9 + hunger * 1.1);
        dy += ((rival.y - a.y) / (rivalDist + 1)) * (0.9 + hunger * 1.1);
      } else {
        const food = this.nearestFood(a.x, a.y, sense);
        if (food) {
          const d = food.d;
          const gain = 0.8 + (1 - clamp(a.energy / 120, 0, 1));
          dx += ((food.item.x - a.x) / (d + 1)) * gain;
          dy += ((food.item.y - a.y) / (d + 1)) * gain;
        }
      }

      // 趋光性：眼点让细胞朝最亮的方向游
      if (flags.phototaxis) {
        const t = this.light;
        dx += 0.55 * t;
        dy += 0.55 * t;
      }

      // 磁性定向：缓慢向培养皿中层迁移
      if (flags.magnetotaxis) {
        const r = Math.hypot(a.x, a.y) || 1;
        const target = this.innerRadius * 0.55;
        const pull = (target - r) * 0.0016;
        dx += (a.x / r) * pull * 60;
        dy += (a.y / r) * pull * 60;
      }

      if (friend) {
        dx += ((friend.x - a.x) / (friendDist + 1)) * 1.1;
        dy += ((friend.y - a.y) / (friendDist + 1)) * 1.1;
      }

      // 群体向心力 / 离心力
      if (a.colonyId !== null) {
        const colony = this.colonies.get(a.colonyId);
        if (colony) {
          const c = this.colonyCenter(colony);
          const d = dist(c.x, c.y, a.x, a.y) + 1;
          if (d > 26) {
            dx += ((c.x - a.x) / d) * 1.4;
            dy += ((c.y - a.y) / d) * 1.4;
          } else {
            dx -= ((c.x - a.x) / d) * 0.5;
            dy -= ((c.y - a.y) / d) * 0.5;
          }
        }
      }

      // 守卫细胞守在群体边界
      if (a.role === 'guard' && a.colonyId !== null) {
        const colony = this.colonies.get(a.colonyId);
        if (colony) {
          const c = this.colonyCenter(colony);
          const d = dist(c.x, c.y, a.x, a.y) + 1;
          const want = 26 + colony.memberIds.size * 1.6;
          if (d < want) {
            dx -= ((c.x - a.x) / d) * 1.2;
            dy -= ((c.y - a.y) / d) * 1.2;
          }
        }
      }

      a.wander += rand(-0.35, 0.35);
      dx += Math.cos(a.wander) * 0.45;
      dy += Math.sin(a.wander) * 0.45;

      /* ── agent 的意志叠在基因之上 ──
         agent 决定「先顾哪头」，基因决定「顾不顾得上」。
         影响力由玩家调节：调 0 就退回纯基因演化。 */
      if (mindDecision && mindInfluence > 0) {
        const d = mindDecision;
        const k = mindInfluence;

        // 逃命：远离最近的猎人
        if (threat && (d.target === 'threat' || d.action === 'flee')) {
          this.onMemory(a, '被猎手逼近');
          const w = (2.1 + d.urgency * 2.8) * k * (0.35 + d.courage * 0.65);
          dx -= ((threat.x - a.x) / (threatDist + 1)) * w;
          dy -= ((threat.y - a.y) / (threatDist + 1)) * w;
        }
        // 猎杀：扑向猎物
        if (prey && (d.target === 'prey' || d.action === 'hunt')) {
          const w = (1.8 + d.aggression * 2.4) * k;
          dx += ((prey.x - a.x) / (preyDist + 1)) * w;
          dy += ((prey.y - a.y) / (preyDist + 1)) * w;
        }
        // 觅食：扑向最近的有机物
        if (d.target === 'food' || d.action === 'seek_food') {
          const f = this.nearestFood(a.x, a.y, sense * 1.4);
          if (f) {
            const w = (1.5 + d.urgency * 1.9) * k;
            dx += ((f.item.x - a.x) / (f.d + 1)) * w;
            dy += ((f.item.y - a.y) / (f.d + 1)) * w;
          }
        }
        // 求偶：靠近同类
        if (mate && (d.target === 'mate' || d.action === 'approach_mate')) {
          const w = 1.5 * k;
          dx += ((mate.x - a.x) / (mateDist + 1)) * w;
          dy += ((mate.y - a.y) / (mateDist + 1)) * w;
        }
        // 合群：贴住同伴
        if (friend && d.social > 0.42 && (d.target === 'friend' || d.action === 'stay')) {
          const w = 1.25 * d.social * k;
          dx += ((friend.x - a.x) / (friendDist + 1)) * w;
          dy += ((friend.y - a.y) / (friendDist + 1)) * w;
        }
        // 探索：朝侧向漂移，离开拥挤区
        if (d.explore > 0.34) {
          const side = a.wander + (d.explore > 0.68 ? Math.PI * 0.5 : -Math.PI * 0.5);
          dx += Math.cos(side) * d.explore * 1.05 * k;
          dy += Math.sin(side) * d.explore * 1.05 * k;
        }
      }

      const mag = Math.hypot(dx, dy) || 1;
      a.vx = a.vx * 0.82 + (dx / mag) * speed * 0.18;
      a.vy = a.vy * 0.82 + (dy / mag) * speed * 0.18;
      a.x += a.vx * speed * 2.2;
      a.y += a.vy * speed * 2.2;

      // 壁面反弹（细胞不会离开培养皿）
      const r = Math.hypot(a.x, a.y);
      if (r > this.innerRadius - 12) {
        const k = (this.innerRadius - 12) / r;
        a.x *= k;
        a.y *= k;
        a.vx *= -0.5;
        a.vy *= -0.5;
      }

      /* ── 代谢 ── */
      a.energy -= this.upkeepOf(a);

      // 光合产能：叶绿体把光变成能量
      if (flags.photosynthesis) a.energy += 0.42 * this.light * mods.energyGain;

      // 化能产能：不依赖光照，靠氧化无机物活着 —— 夜里是主力
      if (flags.chemosynthesis) {
        a.energy += (0.12 + 0.07 * (1 - this.light)) * mods.energyGain;
        // 同时拥有光合与化能的细胞随昼夜切换主生态位（只在两者之间切换，不动猎手）
        if (flags.photosynthesis && a.strategy === 'photosynthesizer') {
          a.strategy = this.light > 0.42 ? 'photosynthesizer' : 'chemotroph';
        }
      }

      // 有氧呼吸：只有在氧气充足的年代才有优势
      if (a.genome.organelles.includes('aerobe')) {
        a.energy += 0.16 * this.oxygen * mods.energyGain;
      }

      if (a.colonyId !== null) {
        const colony = this.colonies.get(a.colonyId);
        if (colony) {
          a.energy += 0.03 * colony.memberIds.size;
          if (a.role === 'core' && colony.energyPool > 0) {
            const give = Math.min(colony.energyPool, 0.06);
            colony.energyPool -= give;
            a.energy += give;
          }
        }
      }

      // 芽孢休眠：能量见底时进入休眠状态，免受天罚 / 瘟疫
      if (flags.dormancy && a.energy < 6 && !a.dormant) {
        a.dormant = true;
        a.energy = 0;
      } else if (a.dormant && a.energy > 14) {
        a.dormant = false;
      }

      a.flash *= 0.9;
      a.thinkGlow *= 0.94;
    }

    /* ── 2. 进食 ── */
    for (const a of alive) {
      if (!a.alive || a.dormant) continue;
      const { mods, flags } = this.bundle(a.genome);
      const radius = this.eatRangeOf(a);
      let best: Food | null = null;
      let bestD = radius;
      for (const f of this.foodGrid.near(a.x, a.y)) {
        if (f.dead) continue;
        const d = dist(f.x, f.y, a.x, a.y);
        if (d < bestD) {
          bestD = d;
          best = f;
        }
      }
      if (!best) continue;

      const f = best;
      const roleM = this.roleMods(a);
      const foodMul = mods.foodGain * (roleM ? roleM.food : 1);
      const isDecomposer = flags.digestion;

      let gain = f.energy * a.genome.efficiency * foodMul;
      if (f.kind === 'detritus') {
        // 只有分解者能高效利用尸体碎屑，并把其中一部分还原为培养基养分
        if (isDecomposer) {
          gain *= 2.6;
          this.nutrient = clamp(this.nutrient + f.energy * 0.018, 0.35, 2.4);
        } else {
          gain *= 0.45;
        }
      } else if (isDecomposer) {
        gain *= 0.8;
      }

      a.energy += gain;
      a.flash = 1;
      a.lastFeedTick = this.tick;
      this.onMemory(a, '吃到食物');

      // 采集工把一部分收成存入群体共享池（群体感应让共享更高效）
      if (a.colonyId !== null && roleM && roleM.share > 0) {
        const colony = this.colonies.get(a.colonyId);
        if (colony) {
          const boost = a.genome.organelles.includes('quorum') ? 1.8 : 1;
          colony.energyPool = Math.min(120, colony.energyPool + gain * roleM.share * 0.25 * boost);
        }
      }

      f.dead = true;
    }
    if (this.food.some((f) => f.dead)) this.food = this.food.filter((f) => !f.dead);

    /* ── 3. 捕食（含食同族与触手远攻） ── */
    // 猎物稀少时捕食更容易失败 —— 洛特卡-沃尔泰拉式的自然调节，
    // 避免种群顶到上限后无限churn（捕食数无界增长）
    let preyCount = 0;
    for (const a of alive) if (a.strategy !== 'hunter') preyCount++;
    const scarcity = clamp(1 - preyCount / Math.max(8, alive.length * 0.18), 0, 0.85);

    const killed = new Set<number>();
    for (const a of alive) {
      if (!a.alive || killed.has(a.id)) continue;
      if (a.digest > 0) continue; // 还在消化，捕食失败
      const reach = this.attackRangeOf(a);
      for (const b of this.agentGrid.near(a.x, a.y)) {
        if (!b.alive || killed.has(b.id) || b.id === a.id) continue;
        const d = dist(a.x, a.y, b.x, b.y);
        if (d > a.genome.size + b.genome.size + 3 + reach) continue;
        const score = this.preyScore(a, b);
        if (score > 0) {
          if (Math.random() >= scarcity) {
            this.kill(a, b, killed, score < 1);
            break;
          }
          continue;
        }
        const reverse = this.preyScore(b, a);
        if (reverse > 0) {
          if (Math.random() >= scarcity) {
            this.kill(b, a, killed, reverse < 1);
            break;
          }
          continue;
        }
        const nx = (b.x - a.x) / (d + 0.01);
        const ny = (b.y - a.y) / (d + 0.01);
        a.vx -= nx * 0.6;
        a.vy -= ny * 0.6;
        b.vx += nx * 0.6;
        b.vy += ny * 0.6;
        a.energy -= 0.3;
        b.energy -= 0.3;
      }
    }

    /* ── 4. 养护细胞：消耗共享能量池治疗同伴 ── */
    for (const a of alive) {
      if (!a.alive || a.role !== 'nurse' || a.colonyId === null) continue;
      const colony = this.colonies.get(a.colonyId);
      if (!colony || colony.energyPool <= 1) continue;
      for (const b of this.agentGrid.near(a.x, a.y)) {
        if (!b.alive || b.colonyId !== a.colonyId || b === a) continue;
        if (b.energy > 110) continue;
        const give = Math.min(colony.energyPool, 1.6);
        colony.energyPool -= give;
        b.energy += give;
        b.flash = 0.6;
        break;
      }
    }

    /* ── 5. 多细胞聚合成团 ── */
    for (const a of alive) {
      if (!a.alive || a.colonyId !== null) continue;
      if (!a.genome.organelles.includes('adhesion')) continue;
      for (const b of this.agentGrid.near(a.x, a.y)) {
        if (!b.alive || b.colonyId !== null || b.id === a.id) continue;
        if (!b.genome.organelles.includes('adhesion')) continue;
        if (Math.abs(b.genome.hue - a.genome.hue) > 25) continue;
        if (dist(a.x, a.y, b.x, b.y) > 24) continue;

        const colony: Colony = {
          id: colonySeq++,
          memberIds: new Set([a.id, b.id]),
          hue: a.genome.hue,
          born: this.tick,
          rounds: 0,
          roles: new Map(),
          energyPool: 0,
          differentiated: false,
          foundedGeneration: Math.max(a.generation, b.generation),
          totalKills: 0,
          route: null,
          routeBorn: 0,
          fruiting: 0,
          swarmX: 0,
          swarmY: 0,
        };
        this.colonies.set(colony.id, colony);
        a.colonyId = colony.id;
        b.colonyId = colony.id;
        if (!this.colonyEventDone) {
          this.colonyEventDone = true;
          this.log(
            'colony',
            '里程碑：首个多细胞聚合体诞生！细胞们开始协同合作',
            'Milestone: the first multicellular colony is born — cells now cooperate',
          );
        }
        break;
      }
    }

    // 吸收游离细胞进团
    for (const colony of this.colonies.values()) {
      const c = this.colonyCenter(colony);
      for (const a of alive) {
        if (!a.alive || a.colonyId !== null) continue;
        if (!a.genome.organelles.includes('adhesion')) continue;
        if (Math.abs(a.genome.hue - colony.hue) > 34) continue;
        if (dist(a.x, a.y, c.x, c.y) < 40 + colony.memberIds.size * 4 && colony.memberIds.size < 14) {
          colony.memberIds.add(a.id);
          a.colonyId = colony.id;
        }
      }
    }

    /* ── 6. 功能分化与多细胞路线 ── */
    this.updateColonyDifferentiation();
    this.updateColonyRoutes();

    /* ── 7. 繁殖（含减数分裂的基因重组） ── */
    for (const a of alive) {
      if (!a.alive) continue;
      const roleM = this.roleMods(a);
      const threshold = (100 + a.genome.size * 8) * (roleM ? roleM.breed : 1);
      const overCap = pop + this.totalBirths - this.totalDeaths >= this.config.maxPopulation;
      if (a.energy > threshold && !overCap) {
        const childGenome = this.reproduceGenome(a);
        const child = this.spawnFrom(childGenome, a);
        // 子代不自动继承群体身份 —— 只有真正被群体接纳才算成员
        child.colonyId = null;
        child.role = null;
        a.energy *= 0.55;
        a.children++;
        this.totalBirths++;
        this.agents.push(child);

        const gained = childGenome.organelles.find((o) => !a.genome.organelles.includes(o));
        if (gained) {
          if (!this.seenOrganelles.has(gained)) {
            this.seenOrganelles.add(gained);
            const meta = TRAITS[gained];
            this.log(
              'organelle',
              `进化突破！#${child.id} 在繁殖中突变出「${meta.zh}」—— ${meta.descZh}`,
              `Breakthrough! #${child.id} mutated a ${meta.en} — ${meta.descEn}`,
            );
          }
        }

        if (a.colonyId !== null) {
          const colony = this.colonies.get(a.colonyId);
          if (colony && colony.memberIds.size < 14 && childGenome.organelles.includes('adhesion')) {
            child.colonyId = colony.id;
            colony.memberIds.add(child.id);
            child.role = a.role;
            if (a.role) colony.roles.set(child.id, a.role);
          }
        }
      }
    }

    /* ── 8. 死亡结算 → 尸体碎屑（分解者的食物） ── */
    for (const a of this.agents) {
      if (!a.alive) continue;
      if (a.dormant) continue;
      if (a.energy <= 0 || a.age > 2600) {
        // 凋亡程序：群体成员可以主动牺牲自己，把能量交给群体
        const hasApoptosis = a.genome.organelles.includes('apoptosis');
        if (hasApoptosis && a.colonyId !== null && a.energy <= 0) {
          const colony = this.colonies.get(a.colonyId);
          if (colony) {
            colony.energyPool = Math.min(120, colony.energyPool + 18);
            this.log(
              'differentiate',
              `细胞 #${a.id} 启动凋亡程序，把最后的能量留给了群体`,
              `Cell #${a.id} triggered apoptosis, surrendering its energy to the colony`,
            );
          }
        }
        a.alive = false;
        a.energy = 0;
        this.totalDeaths++;
        this.spawnFood(a.x, a.y, a.genome.size * 6, a.genome.hue, 'detritus');
        if (a.colonyId !== null) {
          const colony = this.colonies.get(a.colonyId);
          colony?.memberIds.delete(a.id);
          colony?.roles.delete(a.id);
        }
      }
    }

    /* ── 9. 群体收尾 ── */
    for (const [id, colony] of this.colonies) {
      if (colony.memberIds.size < 3) {
        for (const mid of colony.memberIds) {
          const m = this.byId.get(mid);
          if (m) {
            m.colonyId = null;
            m.role = null;
          }
        }
        colony.memberIds.clear();
        this.colonies.delete(id);
      }
    }

    // 不变量清理：群体没了，职能也该跟着消失
    for (const a of this.agents) {
      if (!a.alive) continue;
      if (a.colonyId === null) {
        a.role = null;
      } else if (!this.colonies.has(a.colonyId)) {
        a.colonyId = null;
        a.role = null;
      }
    }

    if (this.agents.length > 4000) this.agents = this.agents.filter((a) => a.alive);

    /* ── 10. 地球史事件 ── */
    this.updateEarthEvents();

    /* ── 11. 统计快照 ── */
    if (this.tick % 10 === 0) {
      const living = this.agents.filter((a) => a.alive);
      const p = living.length;
      const avgGen = p ? living.reduce((s, a) => s + a.generation, 0) / p : 0;
      const withOrganelle = living.filter((a) => a.genome.organelles.length > 0).length;
      const topKills = living.reduce((m, a) => Math.max(m, a.kills), 0);

      this.history.push({
        tick: this.tick,
        population: p,
        avgGeneration: avgGen,
        colonies: this.colonies.size,
        organelleRate: p ? withOrganelle / p : 0,
        topKills,
        composition: this.composition(),
      });
      if (this.history.length > 400) this.history.shift();

      for (const milestone of [100, 500, 1000, 2500, 5000, 10000]) {
        if (this.tick >= milestone && !this.seenMilestones.has(milestone)) {
          this.seenMilestones.add(milestone);
          this.log(
            'milestone',
            `第 ${milestone} 代际时刻：种群 ${p}，平均世代 ${avgGen.toFixed(1)}，细胞器普及率 ${((p ? withOrganelle / p : 0) * 100).toFixed(0)}%`,
            `Tick ${milestone}: population ${p}, avg generation ${avgGen.toFixed(1)}, organelle adoption ${((p ? withOrganelle / p : 0) * 100).toFixed(0)}%`,
          );
        }
      }

      const apex = living.reduce<Agent | null>(
        (best, a) => (a.kills >= 3 && (!best || a.kills > best.kills) ? a : best),
        null,
      );
      if (apex && apex.id !== this.apexId) {
        this.apexId = apex.id;
        const s = STRATEGIES[apex.strategy];
        this.log(
          'apex',
          `新的顶级掠食者登基：#${apex.id}（${s.zh}，猎杀 ${apex.kills}，第 ${apex.generation} 代）`,
          `New apex predator: #${apex.id} (${s.en}, ${apex.kills} kills, gen ${apex.generation})`,
        );
      }

      if (p === 0) this.log('extinction', '大灭绝：培养皿中所有生命已消亡', 'Extinction: all life in the dish has perished');
    }
  }

  /* ───────── 繁殖：有性生殖的基因重组 ───────── */

  /**
   * 若亲本拥有减数分裂，子代的基因来自双亲重组 —— 这会显著加快演化速度，
   * 也让「有性生殖」在沙盒里成为一个真正有价值的性状。
   */
  private reproduceGenome(parent: Agent): Genome {
    const base = mutateGenome(parent.genome, this.effectiveMutationRate());
    if (!parent.genome.organelles.includes('meiosis')) return base;

    // 找一个同生态位的配偶，做一次基因重组
    const mates = this.agents.filter(
      (a) => a.alive && a.id !== parent.id && a.strategy === parent.strategy,
    );
    if (!mates.length) return base;
    const mate = mates[Math.floor(Math.random() * mates.length)];
    const m = mate.genome;

    const pick = <T>(a: T, b: T) => (Math.random() < 0.5 ? a : b);
    const recombined: Genome = {
      hue: pick(base.hue, m.hue),
      size: pick(base.size, m.size),
      maxSpeed: pick(base.maxSpeed, m.maxSpeed),
      sense: pick(base.sense, m.sense),
      aggression: pick(base.aggression, m.aggression),
      efficiency: pick(base.efficiency, m.efficiency),
      organelles: pick(base.organelles, m.organelles).slice(),
    };
    // 重组后按前置链正确过滤：只有在依赖项都保留的前提下，性状才被留下
    recombined.organelles = filterByPrereqs(recombined.organelles);
    return recombined;
  }

  private effectiveMutationRate() {
    const boost = this.tick < this.mutationBoostUntil ? this.mutationBoost : 1;
    return this.config.mutationRate * boost * (this.cambrian > 0 ? 2.5 : 1);
  }

  /* ───────── 多细胞路线 ───────── */

  /**
   * 多细胞体的三条真实路线。达成条件完全对应真实历史上的必要条件：
   *  粘菌：黏连 + 群体感应
   *  团藻：黏连 + 眼点 + 减数分裂
   *  动物：黏连 + 触手 + 群体感应
   */
  private updateColonyRoutes() {
    for (const colony of this.colonies.values()) {
      const members = [...colony.memberIds]
        .map((id) => this.byId.get(id))
        .filter((a): a is Agent => Boolean(a && a.alive));
      if (members.length < 4) continue;

      const organs = new Set<OrganelleId>();
      for (const m of members) for (const o of m.genome.organelles) organs.add(o);

      if (!colony.route) {
        for (const routeId of ROUTE_IDS) {
          const route = ROUTES[routeId];
          if (!route.requires.every((r) => organs.has(r))) continue;
          colony.route = routeId;
          colony.routeBorn = this.tick;
          this.seenRoutes.add(routeId);
          const c = this.colonyCenter(colony);
          this.effects.push({ type: 'earth', x: c.x, y: c.y, tick: this.tick });
          this.log(
            'route',
            `演化里程碑：多细胞体走出「${route.zh}」—— ${route.perkZh}（现实原型：${route.realZh}）`,
            `Milestone: the colony follows the ${route.en} — ${route.perkEn} (real analogue: ${route.realEn})`,
          );
          break;
        }
      }

      // 路线带来的实际行为
      if (colony.route === 'myxomycete') {
        // 资源匮乏时长出子实体，成熟后播撒孢子
        const scarce = colony.energyPool < 10 || this.food.length < 60;
        colony.fruiting = clamp(colony.fruiting + (scarce ? 0.006 : -0.002), 0, 1);
        const popNow = this.agents.filter((a) => a.alive).length;
        const canSeed =
          members.length >= 6 && popNow < this.config.maxPopulation * 0.55;
        if (colony.fruiting >= 1 && canSeed) {
          colony.fruiting = 0.4;
          const c = this.colonyCenter(colony);
          const spores = 5;
          for (let i = 0; i < spores; i++) {
            const a = rand(0, Math.PI * 2);
            const d = rand(30, 120);
            const g: Genome = { ...members[0].genome, organelles: [...members[0].genome.organelles] };
            const spore = this.spawnFrom(g, undefined, true);
            spore.x = c.x + Math.cos(a) * d;
            spore.y = c.y + Math.sin(a) * d;
            spore.colonyId = null;
            this.agents.push(spore);
            this.totalBirths++;
          }
          this.effects.push({ type: 'spore', x: c.x, y: c.y, tick: this.tick });
          this.log(
            'route',
            '子实体成熟：粘菌群落播撒了休眠孢子',
            'Fruiting body matured: the myxomycete colony released spores',
          );
        } else if (colony.fruiting >= 1) {
          // 培养皿已经饱和，子实体暂缓成熟
          colony.fruiting = 0.92;
        }
      } else if (colony.route === 'volvocine') {
        // 群体整体趋光游动
        colony.swarmX = 0.6;
        colony.swarmY = 0.6;
      } else if (colony.route === 'animal') {
        // 集体迁移：躲开最近的猎手
        let threat: Agent | null = null;
        let td = Infinity;
        for (const m of members) {
          for (const o of this.agentGrid.near(m.x, m.y)) {
            if (!o.alive || o.strategy !== 'hunter' || o.colonyId === colony.id) continue;
            const d = dist(o.x, o.y, m.x, m.y);
            if (d < td) {
              td = d;
              threat = o;
            }
          }
        }
        if (threat && td < 260) {
          const c = this.colonyCenter(colony);
          const d = dist(c.x, c.y, threat.x, threat.y) || 1;
          colony.swarmX = ((c.x - threat.x) / d) * 0.9;
          colony.swarmY = ((c.y - threat.y) / d) * 0.9;
        } else {
          colony.swarmX *= 0.96;
          colony.swarmY *= 0.96;
        }
      }
    }
  }

  /* ───────── 地球史事件：用户可自行选择并实施 ───────── */

  /**
   * 施加一个地球史事件。每个事件都会真的改变演化规则或种群，
   * 而不是只弹一条提示。
   */
  applyGeoEvent(id: string, opts: { silent?: boolean } = {}): { ok: boolean; message: string } {
    const def = GEO_EVENT_MAP[id];
    if (!def) return { ok: false, message: '未知事件' };

    const before = this.agents.filter((a) => a.alive).length;
    let message = '';

    switch (id) {
      case 'bigbang':
      case 'luca':
        this.reInoculate();
        message = `时间归零：重新接种 ${this.config.initialCount} 个原始单细胞`;
        break;

      case 'hadean':
        this.tempLock = { value: 0.95, until: this.tick + 600 };
        message = '地表熔化：600 tick 内代谢与养分消耗同步暴涨';
        break;

      case 'greatoxidation':
        message = this.applyGreatOxidation();
        break;

      case 'eukaryote':
        for (const a of this.agents) {
          if (!a.alive) continue;
          if (!a.genome.organelles.includes('mitochondria') && a.genome.organelles.length < 7) {
            a.genome.organelles.push('mitochondria');
            a.strategy = deriveStrategy(a.genome);
          }
        }
        message = '内共生完成：全体获得线粒体，能耗下降 35%';
        break;

      case 'snowball':
        message = this.applySnowball();
        break;

      case 'cambrian':
        this.mutationBoost = 2.5;
        this.mutationBoostUntil = this.tick + 320;
        message = '突变率 ×2.5 持续 320 tick：身体蓝图集中涌现';
        break;

      case 'ordovician':
        message = `奥陶纪末冰期：${this.massDeath(0.6)} 个体被寒冷清除`;
        break;

      case 'landplants': {
        let n = 0;
        for (const a of this.agents) {
          if (!a.alive || n > aliveCount(this) * 0.6) continue;
          if (!a.genome.organelles.includes('chloroplast') && a.genome.organelles.length < 7) {
            a.genome.organelles.push('chloroplast');
            a.strategy = deriveStrategy(a.genome);
            n++;
          }
        }
        this.nutrientMul = 1.6;
        this.nutrientMulUntil = this.tick + 900;
        message = `${n} 个体获得叶绿体，有机养分供给上升`;
        break;
      }

      case 'insects':
        for (const a of this.agents) {
          if (!a.alive) continue;
          a.genome.size = clamp(a.genome.size * 0.82, 2.4, 9);
        }
        this.mutationBoost = 1.5;
        this.mutationBoostUntil = this.tick + 500;
        message = '体型小型化 + 变异加快：数量激增但个体更脆弱';
        break;

      case 'forests':
        this.nutrientMul = 2;
        this.nutrientMulUntil = this.tick + 900;
        this.tempLock = { value: 0.36, until: this.tick + 900 };
        message = '巨型蕨类森林：养分供给 ×2，气温略降';
        break;

      case 'tetrapods':
        this.sizeScale = 1.15;
        for (const a of this.agents) {
          if (!a.alive) continue;
          a.genome.size = clamp(a.genome.size * 1.15, 2.4, 9);
        }
        message = '四足登陆：全体体型上调 15%，捕食能力上移';
        break;

      case 'pangaea': {
        // 群体一分为二：把一半个体挪到对侧并改变色相，从此互不来往
        const alive = this.agents.filter((a) => a.alive);
        const half = alive.slice(Math.floor(alive.length / 2));
        for (const a of half) {
          a.x = -a.x * 0.85 - rand(20, 160);
          a.y = -a.y * 0.85 - rand(20, 160);
          a.genome.hue = (a.genome.hue + 62) % 360;
          if (a.colonyId !== null) {
            this.colonies.get(a.colonyId)?.memberIds.delete(a.id);
            a.colonyId = null;
            a.role = null;
          }
        }
        message = `冈瓦纳分裂：${half.length} 个体被隔离到另一半皿区`;
        break;
      }

      case 'dinosaurs':
        for (const a of this.agents) {
          if (!a.alive) continue;
          if (!a.genome.organelles.includes('shell') && a.genome.organelles.length < 7) {
            a.genome.organelles.push('shell');
            a.strategy = deriveStrategy(a.genome);
          }
          a.genome.size = clamp(a.genome.size * 1.12, 2.4, 9);
        }
        this.sizeScale = 1.25;
        message = '鳞甲普及（防御 ×1.5），体型上限再上调 25%';
        break;

      case 'permian':
        message = `二叠纪末：${this.massDeath(0.96)} 个体死亡 —— 生态位几乎清空`;
        break;

      case 'cretaceous': {
        const killed = this.massDeath(0.9, (a) => a.genome.size > 5.5 ? 1.6 : 1);
        message = `希克苏鲁伯撞击：${killed} 个体死亡，大型猎手优先覆灭`;
        break;
      }

      case 'mammals':
        for (const a of this.agents) {
          if (!a.alive) continue;
          a.genome.size = clamp(a.genome.size * 0.8, 2.4, 9);
        }
        this.sizeScale = 0.85;
        let n = 0;
        for (const a of this.agents) {
          if (!a.alive || n > 60) continue;
          if (!a.genome.organelles.includes('lysosome') && a.genome.organelles.length < 7) {
            a.genome.organelles.push('lysosome');
            a.strategy = deriveStrategy(a.genome);
            n++;
          }
        }
        message = `猎手被小型哺乳替代（体型上限下调），${n} 个体获得溶酶体`;
        break;

      case 'iceage':
        this.tempLock = { value: 0.2, until: this.tick + 800 };
        for (const a of this.agents) {
          if (!a.alive) continue;
          a.genome.size = clamp(a.genome.size * 1.18, 2.4, 9);
        }
        this.sizeScale = 1.18;
        message = '冰期降临：800 tick 持续低温，物种趋向大型化';
        break;

      case 'anthropocene':
        this.nutrientMul = 2;
        this.nutrientMulUntil = Number.MAX_SAFE_INTEGER;
        this.tempLock = null;
        this.glacial = 0;
        message = '养分供给 ×2，环境全面可控 —— 演化交到人类手里';
        break;

      default:
        return { ok: false, message: '该事件尚未实现' };
    }

    this.geoEventsTriggered.add(id);
    const after = this.agents.filter((a) => a.alive).length;

    if (!opts.silent) {
      this.log(
        'earth',
        `【${def.zh}】${def.effectZh} —— ${message}（种群 ${before} → ${after}）`,
        `[${def.en}] ${def.effectZh} — ${message}`,
      );
      this.effects.push({ type: 'earth', x: 0, y: 0, tick: this.tick });
    }
    return { ok: true, message };
  }

  /** 重新接种（对外）：清空种群与历史，但保留时间轴与事件流 */
  reInoculatePublic() {
    this.reInoculate();
  }

  /** 重新接种：清空种群与历史，但保留时间轴与事件流 */
  private reInoculate() {
    this.agents = [];
    this.food = [];
    this.colonies.clear();
    this.byId.clear();
    this.totalBirths = 0;
    this.totalDeaths = 0;
    this.totalKills = 0;
    this.totalCannibalKills = 0;
    this.apexId = null;
    this.nutrient = 1;
    this.sizeScale = 1;
    this.tempLock = null;
    this.glacial = 0;
    const base: Genome = {
      hue: rand(0, 360),
      size: rand(3.2, 4.2),
      maxSpeed: rand(0.9, 1.3),
      sense: rand(55, 80),
      aggression: rand(0.15, 0.45),
      efficiency: rand(0.4, 0.6),
      organelles: [],
    };
    const rootHue = rand(0, 360);
    const lineages = [0, 0.33, 0.66].map((f) => (rootHue + f * 360 + rand(-9, 9) + 360) % 360);
    for (let i = 0; i < this.config.initialCount; i++) {
      const hue = (lineages[i % lineages.length] + rand(-9, 9) + 360) % 360;
      this.agents.push(this.spawnFrom({ ...base, hue, organelles: [] }, undefined, true));
    }
    for (let i = 0; i < 260; i++) this.spawnFood();
  }

  /** 一次性杀死比例的个体，并留下尸体碎屑 */
  private massDeath(fraction: number, weight?: (a: Agent) => number): number {
    const alive = this.agents.filter((a) => a.alive);
    let killed = 0;
    for (const a of alive) {
      const p = Math.min(1, fraction * (weight ? weight(a) : 1));
      if (Math.random() < p) {
        a.alive = false;
        a.energy = 0;
        killed++;
        this.totalDeaths++;
        this.spawnFood(a.x, a.y, a.genome.size * 5, a.genome.hue, 'detritus');
        if (a.colonyId !== null) {
          const col = this.colonies.get(a.colonyId);
          col?.memberIds.delete(a.id);
          col?.roles.delete(a.id);
        }
      }
    }
    return killed;
  }

  private applyGreatOxidation(): string {
    let killed = 0;
    for (const a of this.agents) {
      if (!a.alive) continue;
      const anaerobic = !a.genome.organelles.includes('aerobe') && !a.genome.organelles.includes('mitochondria');
      if (anaerobic && Math.random() < 0.62) {
        a.alive = false;
        a.energy = 0;
        killed++;
        this.totalDeaths++;
        this.spawnFood(a.x, a.y, a.genome.size * 5, a.genome.hue, 'detritus');
        if (a.colonyId !== null) this.colonies.get(a.colonyId)?.memberIds.delete(a.id);
      }
    }
    this.oxygen = 1;
    return `${killed} 个厌氧生物在毒气中灭绝，氧气浓度永久上升`;
  }

  private applySnowball(): string {
    this.glacial = 420;
    let killed = 0;
    for (const a of this.agents) {
      if (!a.alive) continue;
      const spores = a.genome.organelles.includes('endospore');
      if (!spores && Math.random() < 0.42) {
        a.alive = false;
        a.energy = 0;
        killed++;
        this.totalDeaths++;
        this.spawnFood(a.x, a.y, a.genome.size * 4, a.genome.hue, 'detritus');
        if (a.colonyId !== null) this.colonies.get(a.colonyId)?.memberIds.delete(a.id);
      } else if (spores) {
        a.dormant = true;
        a.energy = 0;
      }
    }
    return `${killed} 个细胞冻毙，能形成芽孢的谱系进入休眠`;
  }

  /* ───────── 地球史事件 ───────── */

  /**
   * 三件真实发生过的事，按演化进度自然触发：
   *  · 大氧化事件：产氧光合铺开 → 厌氧生命大规模死亡，有氧呼吸从此占优
   *  · 雪球地球：全球冰封 → 代谢放缓，只有能形成芽孢的谱系活下来
   *  · 寒武纪爆发：多细胞路线达成 → 突变率激增，身体蓝图集中涌现
   */
  private updateEarthEvents() {
    // ── 大氧化事件 ──
    if (!this.seenEarthEvents.has('goe')) {
      const alive = this.agents.filter((a) => a.alive);
      const photo = alive.filter((a) => a.genome.organelles.includes('chloroplast')).length;
      const frac = alive.length ? photo / alive.length : 0;
      if ((frac >= 0.1 && alive.length >= 40 && this.tick > 260) || this.tick > 2400) {
        this.applyGeoEvent('greatoxidation', { silent: true });
        this.seenEarthEvents.add('goe');
        const def = EARTH_EVENTS.goe;
        this.log(
          'earth',
          `【${def.zh}】${def.descZh}`,
          `[${def.en}] ${def.descEn}`,
        );
      }
    }

    // ── 雪球地球 ──
    if (!this.seenEarthEvents.has('snowball') && this.seenEarthEvents.has('goe')) {
      const alive = this.agents.filter((a) => a.alive);
      if ((this.tick > 1400 && alive.length >= 120) || this.tick > 3200) {
        this.applyGeoEvent('snowball', { silent: true });
        this.seenEarthEvents.add('snowball');
        const def = EARTH_EVENTS.snowball;
        this.log(
          'earth',
          `【${def.zh}】${def.descZh}`,
          `[${def.en}] ${def.descEn}`,
        );
      }
    }

    // ── 寒武纪爆发 ──
    if (!this.seenEarthEvents.has('cambrian') && (this.seenRoutes.size > 0 || this.tick > 4200)) {
      this.seenEarthEvents.add('cambrian');
      this.applyGeoEvent('cambrian', { silent: true });
      this.effects.push({ type: 'earth', x: 0, y: 0, tick: this.tick });
      const def = EARTH_EVENTS.cambrian;
      this.log(
        'earth',
        `【${def.zh}】${def.descZh}`,
        `[${def.en}] ${def.descEn}`,
      );
    }
  }

  /* ───────── 功能分化 ───────── */

  private updateColonyDifferentiation() {
    for (const colony of this.colonies.values()) {
      if (this.tick - colony.born >= 60) colony.rounds = Math.floor((this.tick - colony.born) / 60);

      const members = [...colony.memberIds]
        .map((id) => this.byId.get(id))
        .filter((a): a is Agent => Boolean(a && a.alive));

      if (members.length < 3) {
        for (const m of members) m.role = null;
        colony.roles.clear();
        colony.differentiated = false;
        continue;
      }

      if (!colony.differentiated) {
        if (colony.rounds < 1 || members.length < 4) continue;
        this.assignRoles(colony, members);
        colony.differentiated = true;
        const names = [...colony.roles.values()].map((r) => CELL_ROLES[r].zh);
        this.log(
          'differentiate',
          `多细胞体完成功能分化：${names.join('、')} —— 细胞们不再各干各的`,
          `Multicellular differentiation: ${[...colony.roles.values()].map((r) => CELL_ROLES[r].en).join(', ')} — cells now specialise`,
        );
      } else {
        const aliveRoles = new Set(members.map((m) => m.role).filter(Boolean) as CellRole[]);
        if (aliveRoles.size <= 1 && colony.rounds >= 1) {
          this.assignRoles(colony, members);
        }
      }
    }
  }

  /** 依据基因特质与群体需求，为成员分配职能 */
  private assignRoles(colony: Colony, members: Agent[]) {
    colony.roles.clear();
    for (const m of members) m.role = null;

    const score = (a: Agent, role: CellRole) => {
      const g = a.genome;
      let s = Math.random() * 0.6;
      switch (role) {
        case 'core':
          s += (g.organelles.includes('chloroplast') ? 2.4 : 0) + g.efficiency * 1.4 - g.aggression * 0.8;
          break;
        case 'guard':
          s +=
            (g.organelles.includes('toxin') ? 2.2 : 0) +
            (g.organelles.includes('shell') ? 1.6 : 0) +
            (g.organelles.includes('tentacle') ? 1.2 : 0) +
            g.aggression * 1.6;
          break;
        case 'brooder':
          s += g.efficiency * 1.5 + (g.organelles.includes('mitochondria') ? 1.1 : 0) - g.aggression;
          break;
        case 'nurse':
          s += (g.organelles.includes('sensor') ? 1.5 : 0) + g.efficiency * 1.2 - g.size * 0.08;
          break;
        case 'worker':
          s += (g.organelles.includes('flagellum') ? 1.6 : 0) + g.maxSpeed * 0.8 - g.aggression;
          break;
      }
      return s;
    };

    const size = members.length;
    const quota: Record<CellRole, number> = {
      core: size >= 6 ? 1 : 0,
      nurse: size >= 5 ? 1 : 0,
      guard: size >= 4 ? 1 : 0,
      brooder: size >= 4 ? 1 : 0,
      worker: Math.max(1, size - 3),
    };
    if (size < 6) quota.core = 1;

    const taken = new Set<number>();
    for (const role of ROLE_IDS) {
      const want = quota[role];
      if (want <= 0) continue;
      const candidates = members.filter((m) => !taken.has(m.id)).sort((a, b) => score(b, role) - score(a, role));
      for (let i = 0; i < want && i < candidates.length; i++) {
        const c = candidates[i];
        c.role = role;
        taken.add(c.id);
        colony.roles.set(c.id, role);
        this.seenRoles.add(role);
      }
    }
    for (const m of members) {
      if (!taken.has(m.id)) {
        m.role = 'worker';
        colony.roles.set(m.id, 'worker');
        this.seenRoles.add('worker');
      }
    }
  }

  /* ───────── 辅助 ───────── */

  private nearestFood(x: number, y: number, maxDist: number): { item: Food; d: number } | null {
    let best: Food | null = null;
    let bestD = maxDist;
    for (const f of this.foodGrid.near(x, y)) {
      if (f.dead) continue;
      const d = dist(f.x, f.y, x, y);
      if (d < bestD) {
        bestD = d;
        best = f;
      }
    }
    return best ? { item: best, d: bestD } : null;
  }

  colonySize(id: number | null) {
    return id === null ? 0 : (this.colonies.get(id)?.memberIds.size ?? 0);
  }

  colonyCenter(colony: Colony) {
    let sx = 0;
    let sy = 0;
    let n = 0;
    for (const id of colony.memberIds) {
      const m = this.byId.get(id);
      if (m && m.alive) {
        sx += m.x;
        sy += m.y;
        n++;
      }
    }
    return n ? { x: sx / n, y: sy / n } : { x: 0, y: 0 };
  }

  /** 各生态位占比（用于实时圆饼图） */
  composition(): Record<Strategy, number> {
    const out = { photosynthesizer: 0, chemotroph: 0, decomposer: 0, symbiote: 0, hunter: 0, gatherer: 0 };
    let total = 0;
    for (const a of this.agents) {
      if (!a.alive) continue;
      out[a.strategy]++;
      total++;
    }
    if (total > 0) {
      for (const k of STRATEGY_IDS) out[k] = out[k] / total;
    }
    return out;
  }

  /** 绝对数量（用于饼图 tooltip） */
  compositionCounts(): Record<Strategy, number> {
    const out = { photosynthesizer: 0, chemotroph: 0, decomposer: 0, symbiote: 0, hunter: 0, gatherer: 0 };
    for (const a of this.agents) {
      if (a.alive) out[a.strategy]++;
    }
    return out;
  }

  kill(killer: Agent, victim: Agent, killed: Set<number>, cannibal: boolean) {
    const victimEnergy = victim.energy;
    victim.alive = false;
    victim.energy = 0;
    killed.add(victim.id);
    killer.energy += victimEnergy * 0.45 * killer.genome.efficiency + victim.genome.size * 2.4;
    killer.energy = Math.min(killer.energy, 400);
    killer.kills++;
    killer.flash = 1;
    this.onMemory(killer, `吃掉 #${victim.id}`);
    killer.digest = 14; // 捕食后进入消化期，防止无休止的杀戮循环
    // 捕食会反哺体型：大个头的猎手更容易吃掉猎物与同类
    killer.genome.size = clamp(killer.genome.size + 0.06, 2.4, 9);
    this.totalKills++;
    this.totalDeaths++;

    this.spawnFood(victim.x, victim.y, victim.genome.size * 5, victim.genome.hue, 'detritus');

    if (cannibal) {
      killer.cannibalKills++;
      this.totalCannibalKills++;
      this.lastCannibalTick = this.tick;
      this.effects.push({ type: 'cannibal', x: victim.x, y: victim.y, tick: this.tick });
      // 同一段时间内只播报一次，免得编年史被同类相食刷屏
      if (this.tick - (this.lastCannibalLogTick ?? -999) > 60) {
        this.lastCannibalLogTick = this.tick;
        this.log(
          'cannibal',
          `食同族：猎手 #${killer.id} 吞噬了同族 #${victim.id}`,
          `Cannibalism: hunter #${killer.id} devoured its own kind #${victim.id}`,
        );
      }
    }

    if (victim.colonyId !== null) {
      const colony = this.colonies.get(victim.colonyId);
      colony?.memberIds.delete(victim.id);
      colony?.roles.delete(victim.id);
    }
  }

  /* ───────── 心智层接口（实现 MindHost） ───────── */

  aliveAgents(): Agent[] {
    return this.agents.filter((a) => a.alive);
  }

  getMind(id: number): MindState | undefined {
    return this.mindStates.get(id);
  }

  /** 给 agent 拍一张「处境卡」：它此刻看得见什么 */
  observe(agent: Agent): MindContext {
    const sense = this.senseOf(agent);
    let preyDist: number | null = null;
    let threatDist: number | null = null;
    let friendDist: number | null = null;
    let mateDist: number | null = null;
    let foodDist: number | null = null;
    let nPrey = 0;
    let nHunter = 0;
    let nSame = 0;
    let nFood = 0;

    for (const b of this.agentGrid.near(agent.x, agent.y)) {
      if (b === agent || !b.alive) continue;
      const d = dist(agent.x, agent.y, b.x, b.y);
      if (d > sense * 1.3) continue;
      if (b.strategy === 'hunter') {
        nHunter++;
        if (agent.strategy !== 'hunter' && (threatDist === null || d < threatDist)) threatDist = d;
      } else if (b.strategy === agent.strategy) {
        nSame++;
        if (Math.abs(b.genome.hue - agent.genome.hue) < 42) {
          if (mateDist === null || d < mateDist) mateDist = d;
          if (friendDist === null || d < friendDist) friendDist = d;
        }
      } else {
        nPrey++;
        if (preyDist === null || d < preyDist) preyDist = d;
      }
    }

    for (const item of this.foodGrid.near(agent.x, agent.y)) {
      if (item.dead) continue;
      const d = dist(agent.x, agent.y, item.x, item.y);
      if (d > sense * 1.5) continue;
      nFood++;
      if (foodDist === null || d < foodDist) foodDist = d;
    }

    return {
      energy: agent.energy,
      energyMax: 120,
      age: agent.age,
      generation: agent.generation,
      size: agent.genome.size,
      organelles: agent.genome.organelles.map((o) => ORGANELLES[o]?.zh ?? o),
      strategyZh: STRATEGIES[agent.strategy].zh,
      preyDist,
      threatDist,
      friendDist,
      mateDist,
      foodDist,
      nPrey,
      nHunter,
      nSame,
      nFood,
      canHunt:
        agent.strategy === 'hunter' ||
        agent.genome.organelles.includes('toxin') ||
        agent.genome.organelles.includes('pseudopod'),
      light: this.light,
      temp: 8 + this.temperature * 34,
      nutrient: this.nutrient,
      sense,
    };
  }

  /** agent 做出决策后的回调：偶尔写进编年史，让「灵光一现」被看见 */
  onDecision(agent: Agent, d: MindDecision) {
    const mind = this.mindStates.get(agent.id);
    if (mind) mind.decision = d;
    // 思维余晖：让「刚刚开过脑」的细胞在培养皿里被一眼看见
    agent.thinkGlow = 1;
    if (d.source !== 'llm') return;
    if (d.action !== 'flee' && d.action !== 'hunt' && d.action !== 'approach_mate') return;
    if (this.tick - (this.lastMindLogTick ?? -999) < 140) return;
    this.lastMindLogTick = this.tick;
    this.log(
      'milestone',
      `个体 #${agent.id} 的心智做出决定：${
        d.action === 'flee' ? '逃命' : d.action === 'hunt' ? '猎杀' : '求偶'
      }（${d.thought}）`,
      `Agent #${agent.id} decided: ${d.action} (${d.thought})`,
    );
  }

  /** agent 的记忆写入 */
  onMemory(agent: Agent, text: string) {
    this.scheduler.noteMemory(agent, text);
  }

  /** 此刻正在等 LLM 回话的个体（渲染层高亮用） */
  get thinkingIds(): ReadonlySet<number> {
    return this.scheduler.pendingIds;
  }

  /** 由渲染循环每帧驱动一次：够额度就派一个 agent 去思考 */
  pumpMinds() {
    if (!this.scheduler.enabled) return;
    this.scheduler.pump();
  }

  /** 取出并清空特效队列，供渲染层消费 */
  consumeEffects(): SimEffect[] {
    if (!this.effects.length) return [];
    const out = this.effects;
    this.effects = [];
    return out;
  }

  fastForward(ticks: number, stopOnEvent = false) {
    const before = this.events.length;
    let done = 0;
    for (; done < ticks; done++) {
      this.step();
      if ((stopOnEvent && this.events.length > before) || this.agents.every((a) => !a.alive)) break;
    }
    return done;
  }
}

/* ────────────────────────── 纯函数 ────────────────────────── */

export function deriveStrategy(genome: Genome): Strategy {
  const has = (o: OrganelleId) => genome.organelles.includes(o);
  // 一个细胞只能占据一个主生态位：按「最具辨识度」的特征排序
  // 猎手最先判定：攻击性或武装让它成为捕食者
  if (genome.aggression > 0.38 || has('toxin') || has('tentacle')) return 'hunter';
  // 分解能力是很强的身份标志 —— 有溶酶体就是分解者
  if (has('lysosome')) return 'decomposer';
  if (has('chloroplast')) return 'photosynthesizer';
  if (has('chemosynthesis')) return 'chemotroph';
  return 'gatherer';
}

/** 当前基因型还能突变出的新性状（必须先满足前置关系） */
export function eligibleTraits(genome: Genome): OrganelleId[] {
  return TRAIT_IDS.filter((id) => {
    if (genome.organelles.includes(id)) return false;
    const prereq = TRAITS[id].prereq;
    if (!prereq) return true;
    return prereq.every((p) => genome.organelles.includes(p));
  });
}

/** 按前置链过滤性状列表：依赖项必须先被保留 */
export function filterByPrereqs(list: OrganelleId[]): OrganelleId[] {
  const kept = new Set<OrganelleId>();
  for (let pass = 0; pass < 4; pass++) {
    let changed = false;
    for (const id of list) {
      if (kept.has(id)) continue;
      const prereq = TRAITS[id].prereq;
      if (!prereq || prereq.every((p) => kept.has(p))) {
        kept.add(id);
        changed = true;
      }
    }
    if (!changed) break;
  }
  return list.filter((id) => kept.has(id));
}

/**
 * 基因突变。
 *
 * 这里刻意让演化「有方向感」：
 *  · 获得新性状时，倾向选择能解锁更多后续演化的性状（像真实的选择压）；
 *  · 丢失性状时不会把依赖链拆断 —— 丢了线粒体，溶酶体也一起消失。
 * 这样「触手 → 刺丝泡」「黏连 → 群体感应 → 多细胞路线」这类
 * 真实历史路径才能在沙盒里被一步步走出来。
 */
export function mutateGenome(genome: Genome, rate: number): Genome {
  const next: Genome = {
    hue: (genome.hue + rand(-14, 14) + 360) % 360,
    size: clamp(genome.size + rand(-0.35, 0.45), 2.4, 9),
    maxSpeed: clamp(genome.maxSpeed + rand(-0.15, 0.15), 0.4, 3.2),
    sense: clamp(genome.sense + rand(-8, 8), 30, 220),
    aggression: clamp(genome.aggression + rand(-0.08, 0.08), 0, 1),
    efficiency: clamp(genome.efficiency + rand(-0.05, 0.05), 0.2, 0.95),
    organelles: [...genome.organelles],
  };

  const pool = eligibleTraits(next);
  if (Math.random() < rate * 0.52 && next.organelles.length < 7 && pool.length) {
    next.organelles.push(pickWeighted(pool, next.organelles));
  } else if (Math.random() < rate * 0.005 && next.organelles.length > 1) {
    // 丢失一个性状：如果还有性状依赖它，一并失去（依赖链不会断裂）
    const victim = next.organelles[Math.floor(Math.random() * next.organelles.length)];
    next.organelles = cascadeDrop(next.organelles, victim);
  }
  return next;
}

/**
 * 权重：能解锁越多后续演化的性状越容易被选中；
 * 能打通一条真实多细胞化路线的性状（黏连、群体感应、眼点、触手）
 * 也会被显著加权 —— 这正是真实世界里「打开新方向」的性状所受到的偏好。
 */
function pickWeighted(pool: OrganelleId[], current: OrganelleId[]): OrganelleId {
  const weights = pool.map((id) => {
    const unlocks = TRAIT_IDS.filter((t) => TRAITS[t].prereq?.includes(id)).length;
    const depended = TRAIT_IDS.filter(
      (t) => TRAITS[t].prereq?.includes(id) && current.includes(t),
    ).length;
    const opensRoute = ROUTE_IDS.filter((r) => ROUTES[r].requires.includes(id)).length;
    const lateBranch = TRAITS[id].branch === '真核' || TRAITS[id].branch === '多细胞起源' ? 2.0 : 0;
    return 1 + unlocks * 1.8 + depended * 3.2 + opensRoute * 4.2 + lateBranch;
  });
  const total = weights.reduce((a, b) => a + b, 0);
  let r = Math.random() * total;
  for (let i = 0; i < pool.length; i++) {
    r -= weights[i];
    if (r <= 0) return pool[i];
  }
  return pool[pool.length - 1];
}

/** 丢掉 victim 时，连带丢掉所有依赖它的性状 */
function cascadeDrop(list: OrganelleId[], victim: OrganelleId): OrganelleId[] {
  const dropped = new Set<OrganelleId>([victim]);
  let changed = true;
  while (changed) {
    changed = false;
    for (const id of list) {
      if (dropped.has(id)) continue;
      const prereq = TRAITS[id].prereq;
      if (prereq && prereq.some((p) => dropped.has(p))) {
        dropped.add(id);
        changed = true;
      }
    }
  }
  const out = list.filter((id) => !dropped.has(id));
  return out.length ? out : [victim];
}
