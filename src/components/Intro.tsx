/**
 * 开场介绍页
 * ---------------------------------------------------------------
 * 版式刻意不居中：文案压左侧，右侧把真正的培养皿露出来。
 * 生态位不再排成四张等宽图标卡，而是一份不等宽的「检索表」。
 */
import { useEffect, useState } from 'react';
import { GlassButton } from './ui/Glass';
import { TraitIcon } from './TraitIcons';
import { IconCells, IconDroplet, IconSun, IconTrophy } from './Icons';

interface Props {
  onEnter: () => void;
  lang: 'zh' | 'en';
}

const COPY = {
  zh: {
    eyebrow: '演化沙盒 · 第 1 号培养皿',
    title: '在玻璃皿里，\n看细胞长成生态',
    lede: '200 个相同的原始单细胞被接种进一只培养皿。你可以投喂、点化、降下瘟疫，也可以什么都不做，看它们自己走完从争抢营养到分工协作的整段路。',
    enter: '进入培养皿',
    note: '也可以先看玩法',
    modes: '投喂 · 点化 · 天罚 · 瘟疫 · 入侵',
    label: {
      id: 'PL-01',
      title: '培养皿 · 实时演化',
      rows: [
        { k: '生态位', v: '光合 / 化能 / 分解 / 共生 / 猎手' },
        { k: '演化创新', v: '21 项 · 各有真实代表生物' },
        { k: '多细胞', v: '三条真实路线 · 功能分化' },
        { k: '智能体', v: '每个细胞一个 · LLM 代为决策' },
      ],
    },
    cards: [
      {
        icon: <IconSun size={15} />,
        title: '光合者',
        body: '长出叶绿体，在光照下把光变成能量。它们是整张食物网的地基。',
        color: '#84b96b',
      },
      {
        icon: <IconDroplet size={15} />,
        title: '分解者',
        body: '拥有溶酶体，把尸体碎屑还原成培养基养分。生态循环在这里闭合。',
        color: '#d4748e',
      },
      {
        icon: <IconTrophy size={15} />,
        title: '猎手',
        body: '毒素与外壳武装到牙齿。它们会捕食弱者，也会同类相食。',
        color: '#e2663f',
      },
      {
        icon: <IconCells size={15} />,
        title: '多细胞体',
        body: '黏连蛋白把个体粘成团体，长期演化后长出核心、守卫、繁殖体等职能。',
        color: '#4fb3c4',
      },
    ],
    footer: '拖动旋转 · 滚轮缩放 · 点击生物查看基因组',
  },
  en: {
    eyebrow: 'EVOLUTION SANDBOX · PLATE 01',
    title: 'A colony of cells,\ngrowing into an ecosystem',
    lede: 'Two hundred identical primitive cells are inoculated into one dish. Feed them, bless them, strike them with plague — or do nothing and watch them walk the whole road from competing for nutrients to cooperating.',
    enter: 'Enter the dish',
    note: 'or read the rules first',
    modes: 'Feed · Bless · Smite · Plague · Aliens',
    label: {
      id: 'PL-01',
      title: 'Petri dish · live evolution',
      rows: [
        { k: 'Niches', v: 'Photo / Chemo / Decomposer / Symbiote / Hunter' },
        { k: 'Innovations', v: '21, each with a real organism behind it' },
        { k: 'Multicellular', v: 'Three real routes, with cell specialisation' },
        { k: 'Agents', v: 'One per cell · decided by an LLM' },
      ],
    },
    cards: [
      {
        icon: <IconSun size={15} />,
        title: 'Phototrophs',
        body: 'They grow chloroplasts and turn light into energy — the bedrock of the food web.',
        color: '#84b96b',
      },
      {
        icon: <IconDroplet size={15} />,
        title: 'Decomposers',
        body: 'Lysosomes break corpses back into nutrients. The cycle closes here.',
        color: '#d4748e',
      },
      {
        icon: <IconTrophy size={15} />,
        title: 'Hunters',
        body: 'Armed with toxin and shell. They devour the weak, and sometimes their own kind.',
        color: '#e2663f',
      },
      {
        icon: <IconCells size={15} />,
        title: 'Multicellularity',
        body: 'Adhesin glues cells into colonies that evolve cores, guards and brooders over time.',
        color: '#4fb3c4',
      },
    ],
    footer: 'Drag to orbit · Scroll to zoom · Click a cell to inspect',
  },
};

export default function Intro({ onEnter, lang }: Props) {
  const t = COPY[lang];
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    const timer = window.setTimeout(() => setReady(true), 500);
    return () => {
      cancelAnimationFrame(id);
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50">
      {/* 遮罩：左侧压暗，右侧留给真正的培养皿 */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(101deg, rgba(14,13,11,.975) 0%, rgba(14,13,11,.95) 38%, rgba(14,13,11,.72) 55%, rgba(14,13,11,.12) 74%, rgba(14,13,11,.05) 100%)',
        }}
      />

      <div
        className="relative h-full w-full overflow-y-auto scroll-thin"
        style={{ pointerEvents: 'none' }}
      >
        <div className="min-h-full w-full max-w-[1240px] mx-auto px-6 md:px-10 py-14 md:py-20 flex flex-col">
          {/* ── 顶部：品牌 + 语言无关的操作模式行 ── */}
          <div
            className="flex items-center justify-between gap-4 transition-all duration-500"
            style={{
              opacity: ready ? 1 : 0,
              transform: ready ? 'none' : 'translateY(-8px)',
            }}
          >
            <div className="flex items-baseline gap-3">
              <span className="display text-[15px] text-[#efe9de] tracking-tight">
                Petri Arena
              </span>
              <span className="label-xs text-[#857f74]">{t.eyebrow}</span>
            </div>
            <span className="label-xs text-[#857f74] hidden md:inline">{t.modes}</span>
          </div>

          {/* ── 主区：左文案 / 右培养皿 ── */}
          <div className="flex-1 grid md:grid-cols-[minmax(0,1fr)_minmax(0,0.72fr)] gap-8 items-center py-10 md:py-0">
            <div
              className="max-w-[560px] transition-all duration-500"
              style={{
                opacity: ready ? 1 : 0,
                transform: ready ? 'none' : 'translateY(14px)',
              }}
            >
              <h1
                className="display whitespace-pre-line text-[31px] md:text-[44px] leading-[1.1] text-[#efe9de]"
                style={{ letterSpacing: '-0.018em' }}
              >
                {t.title}
              </h1>

              <p className="mt-5 max-w-[46ch] text-[13.5px] leading-[1.75] text-[#aaa398]">
                {t.lede}
              </p>

              <div className="mt-8 flex items-center gap-4" style={{ pointerEvents: 'auto' }}>
                <GlassButton
                  size="lg"
                  onClick={onEnter}
                  color="#d9a441"
                  className="!h-11 !px-6 text-[13px] font-medium !rounded-[8px]"
                >
                  {t.enter}
                </GlassButton>
                <span className="text-[11px] text-[#857f74]">{t.note}</span>
              </div>

              {/* 生态位检索表：不等宽的行，不是四张等宽图标卡 */}
              <dl className="mt-11 border-t border-[#efe9de]/10 max-w-[520px]">
                {t.cards.map((c, i) => (
                  <div
                    key={c.title}
                    className="group flex items-start gap-3.5 py-3 border-b border-[#efe9de]/[0.07] transition-colors"
                    style={{ marginLeft: i % 2 ? 26 : 0 }}
                  >
                    <span
                      className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-[6px]"
                      style={{
                        color: c.color,
                        background: `${c.color}14`,
                        border: `1px solid ${c.color}30`,
                      }}
                    >
                      {c.icon}
                    </span>
                    <div className="min-w-0">
                      <dt className="text-[12.5px] text-[#efe9de]">{c.title}</dt>
                      <dd className="mt-0.5 text-[11.5px] leading-[1.65] text-[#857f74]">
                        {c.body}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>

            {/* 右侧留白：真正的培养皿就露在这里 */}
            <div className="hidden md:block" aria-hidden />
          </div>

          {/* ── 底部：标本标签 ── */}
          <div
            className="flex items-end justify-between gap-6 border-t border-[#efe9de]/10 pt-4 transition-all duration-500"
            style={{
              opacity: ready ? 1 : 0,
              transform: ready ? 'none' : 'translateY(10px)',
            }}
          >
            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-1.5 flex-1 max-w-[720px]">
              {t.label.rows.map((r) => (
                <div key={r.k} className="flex items-baseline gap-2">
                  <dt className="label-xs text-[#857f74] shrink-0">{r.k}</dt>
                  <dd className="text-[11.5px] text-[#aaa398] truncate">{r.v}</dd>
                </div>
              ))}
            </dl>
            <div className="hidden lg:block text-right">
              <div className="label-xs text-[#d9a441]">{t.label.id}</div>
              <div className="text-[11.5px] text-[#857f74] mt-0.5">{t.label.title}</div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between gap-4">
            <span className="text-[10.5px] text-[#6d675e] font-mono">{t.footer}</span>
            <span className="flex items-center gap-2 text-[10.5px] text-[#6d675e]">
              <TraitIcon id="flagellum" size={13} />
              <TraitIcon id="chloroplast" size={13} />
              <TraitIcon id="adhesion" size={13} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
