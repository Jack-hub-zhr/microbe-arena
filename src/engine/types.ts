/**
 * 微生物进化大赛 — 核心类型定义
 * ---------------------------------------------------------------
 * 引擎（Simulation.ts）、谱系数据（lineages.ts）、渲染层（Petri3D.tsx）、
 * UI 层共享这一份契约。
 */
import type { OrganelleId, MulticellularRoute } from './lineages';

export type { OrganelleId, MulticellularRoute };

/** 生态位：决定一个细胞在食物网中的角色 */
export type Strategy =
  | 'photosynthesizer' // 光合者
  | 'chemotroph' // 化能者
  | 'decomposer' // 分解者
  | 'symbiote' // 共生体
  | 'hunter' // 猎手
  | 'gatherer'; // 采集者

/** 多细胞体内部的职能分化 */
export type CellRole =
  | 'core' // 核心细胞：代谢中枢
  | 'worker' // 采集工：搬运养分
  | 'guard' // 守卫细胞：抵御入侵者
  | 'brooder' // 繁殖体：补充成员
  | 'nurse'; // 养护细胞：修复同伴

export interface Genome {
  hue: number;
  size: number;
  maxSpeed: number;
  sense: number;
  aggression: number;
  efficiency: number;
  organelles: OrganelleId[];
}

export interface Agent {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  genome: Genome;
  energy: number;
  age: number;
  generation: number;
  kills: number;
  /** 吞噬同类的次数 */
  cannibalKills: number;
  children: number;
  colonyId: number | null;
  /** 仅多细胞体成员拥有职能 */
  role: CellRole | null;
  strategy: Strategy;
  wander: number;
  alive: boolean;
  /** 受击/进食的闪光，用于渲染 */
  flash: number;
  /** 最近一次进食/受击的时间戳，用于渲染特效 */
  lastFeedTick: number;
  /** 芽孢休眠中：不可被天罚 / 瘟疫杀死 */
  dormant: boolean;
  /** 外星入侵物种：有专属视觉标识，肉眼可辨 */
  alien: boolean;
  /** 消化剩余 tick：刚进食完的猎手需要消化，不能立刻再次捕杀 */
  digest: number;
  /** 思维余晖：刚做完决定（或正在等 LLM）的细胞会发光 */
  thinkGlow: number;
}

export interface Food {
  x: number;
  y: number;
  energy: number;
  hue: number;
  /** organic = 培养基本养分；detritus = 尸体碎屑，只有分解者能高效利用 */
  kind: 'organic' | 'detritus';
  /** 出生时刻，用于做碎屑陈旧渐变 */
  born: number;
  /** 本 tick 已被吃掉，等待统一清理 */
  dead: boolean;
}

export interface Colony {
  id: number;
  memberIds: Set<number>;
  hue: number;
  born: number;
  /** 每 60 tick 增长 1，代表群体经历的「世代轮次」 */
  rounds: number;
  /** 成员职能表 */
  roles: Map<number, CellRole>;
  /** 群体共享的能量池 */
  energyPool: number;
  /** 是否已完成首次功能分化 */
  differentiated: boolean;
  /** 建团时的平均世代，用于计算群体演化代数 */
  foundedGeneration: number;
  /** 群体整体战绩 */
  totalKills: number;
  /** 已达成的真实多细胞化路线 */
  route: MulticellularRoute | null;
  /** 路线达成时间 */
  routeBorn: number;
  /** 粘菌路线的子实体成熟度 0~1 */
  fruiting: number;
  /** 群体整体游动方向（团藻 / 动物路线） */
  swarmX: number;
  swarmY: number;
}

export interface HistoryPoint {
  tick: number;
  population: number;
  avgGeneration: number;
  colonies: number;
  organelleRate: number;
  topKills: number;
  /** 各生态位占比快照 */
  composition: Record<Strategy, number>;
}

export type EventType =
  | 'organelle'
  | 'colony'
  | 'milestone'
  | 'extinction'
  | 'apex'
  | 'god'
  | 'cannibal'
  | 'differentiate'
  | 'earth'
  | 'route';

export interface SimEvent {
  tick: number;
  type: EventType;
  zh: string;
  en: string;
}

/** 渲染层可以消费的瞬时特效（由引擎在事件发生时产生） */
export interface SimEffect {
  type: 'feed' | 'smite' | 'mutate' | 'cannibal' | 'plague' | 'alien' | 'spore' | 'earth';
  x: number;
  y: number;
  tick: number;
}

export interface SimConfig {
  radius: number;
  initialCount: number;
  maxPopulation: number;
  foodPerTick: number;
  mutationRate: number;
}
