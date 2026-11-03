/**
 * 开场介绍页
 * 用户打开站点时先看到这里，而不是直接掉进培养皿。
 */
import { useEffect, useState } from 'react';
import { GlassPanel, GlassButton } from './ui/Glass';
import {
  IconCells,
  IconFeed,
  IconMutate,
  IconPlague,
  IconSpark,
  IconSmite,
  IconSun,
  IconDroplet,
  IconTrophy,
} from './Icons';

interface Props {
  onEnter: () => void;
  lang: 'zh' | 'en';
}

const COPY = {
  zh: {
    eyebrow: 'PETRI ARENA · 演化沙盒',
    title: '微生物进化大赛',
    sub: '一个培养皿，一群原始单细胞，和一只看不见的手。在几十万个世代里，看它们如何从争抢营养，走向分工协作。',
    enter: '进入培养皿',
    enterHint: '也可以先看看玩法 ↓',
    cards: [
      {
        icon: <IconSun size={18} />,
        title: '光合者',
        body: '长出叶绿体，在光照下把光变成能量。它们是整张食物网的地基。',
        color: '#a2db3c',
      },
      {
        icon: <IconDroplet size={18} />,
        title: '分解者',
        body: '拥有溶酶体，把尸体碎屑还原成培养基养分。生态循环从这里闭合。',
        color: '#c084fc',
      },
      {
        icon: <IconTrophy size={18} />,
        title: '猎手',
        body: '毒素与外壳武装到牙齿。它们会捕食弱者，也会同类相食。',
        color: '#ff8b3d',
      },
      {
        icon: <IconCells size={18} />,
        title: '多细胞体',
        body: '黏连蛋白把个体粘成团体，长期演化后长出核心、守卫、繁殖体等职能。',
        color: '#2cc9ff',
      },
    ],
    steps: [
      { icon: <IconFeed size={15} />, text: '投喂' },
      { icon: <IconMutate size={15} />, text: '点化' },
      { icon: <IconSmite size={15} />, text: '天罚' },
      { icon: <IconPlague size={15} />, text: '瘟疫' },
    ],
    footer: '拖动旋转 · 滚轮缩放 · 点击生物查看基因组',
  },
  en: {
    eyebrow: 'PETRI ARENA · EVOLUTION SANDBOX',
    title: 'Microbe Evolution Arena',
    sub: 'One petri dish, a crowd of primitive cells, and an unseen hand. Watch them fight over nutrients — then learn to cooperate.',
    enter: 'Enter the dish',
    enterHint: 'or read the rules below ↓',
    cards: [
      {
        icon: <IconSun size={18} />,
        title: 'Phototrophs',
        body: 'They grow chloroplasts and turn light into energy — the bedrock of the whole food web.',
        color: '#a2db3c',
      },
      {
        icon: <IconDroplet size={18} />,
        title: 'Decomposers',
        body: 'Lysosomes break corpses back into nutrients. This is where the cycle closes.',
        color: '#c084fc',
      },
      {
        icon: <IconTrophy size={18} />,
        title: 'Hunters',
        body: 'Armed with toxin and shell. They devour the weak — and sometimes their own kind.',
        color: '#ff8b3d',
      },
      {
        icon: <IconCells size={18} />,
        title: 'Multicellularity',
        body: 'Adhesin glues cells into colonies that evolve cores, guards and brooders over time.',
        color: '#2cc9ff',
      },
    ],
    steps: [
      { icon: <IconFeed size={15} />, text: 'Feed' },
      { icon: <IconMutate size={15} />, text: 'Bless' },
      { icon: <IconSmite size={15} />, text: 'Smite' },
      { icon: <IconPlague size={15} />, text: 'Plague' },
    ],
    footer: 'Drag to orbit · Scroll to zoom · Click a cell to inspect',
  },
};

export default function Intro({ onEnter, lang }: Props) {
  const t = COPY[lang];
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    // 兜底：主线程繁忙时 rAF 可能迟迟不来，用定时器保证内容一定出现
    const timer = window.setTimeout(() => setReady(true), 500);
    return () => {
      cancelAnimationFrame(id);
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto scroll-thin">
      {/* 不透明底幕：进入沙盒前完全遮住背后的三维培养皿 */}
      <div className="absolute inset-0 bg-[#04070a]/95 backdrop-blur-2xl" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(120% 80% at 50% 0%, rgba(44,201,255,.10), transparent 55%), radial-gradient(90% 70% at 50% 100%, rgba(162,219,60,.08), transparent 60%)',
        }}
      />
      <div className="aurora" />

      {/* 背景里漂浮的微生物剪影 */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[
          { x: '12%', y: '22%', s: 46, d: 0, c: '#a2db3c' },
          { x: '84%', y: '18%', s: 62, d: 1.6, c: '#2cc9ff' },
          { x: '78%', y: '74%', s: 38, d: 2.8, c: '#c084fc' },
          { x: '18%', y: '78%', s: 54, d: 0.9, c: '#ff8b3d' },
          { x: '50%', y: '12%', s: 30, d: 3.4, c: '#e8c46a' },
          { x: '92%', y: '46%', s: 26, d: 1.2, c: '#ffffff' },
          { x: '6%', y: '52%', s: 22, d: 2.2, c: '#ffffff' },
        ].map((b, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              left: b.x,
              top: b.y,
              width: b.s,
              height: b.s,
              background: `radial-gradient(circle at 34% 30%, ${b.c}, transparent 70%)`,
              opacity: 0.32,
              animationDelay: `${b.d}s`,
              animationDuration: `${4 + (i % 4)}s`,
              filter: 'blur(0.5px)',
            }}
          />
        ))}
      </div>

      <div
        className="relative z-10 w-full max-w-[860px] px-5 py-10 md:py-16 transition-[transform,opacity] duration-500"
        style={{
          opacity: ready ? 1 : 0,
          transform: ready ? 'translateY(0)' : 'translateY(18px)',
        }}
      >
        <div className="text-center">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#a2db3c] animate-pulse" />
            <span className="label-xs text-[#2cc9ff]/80">{t.eyebrow}</span>
          </div>

          <h1
            className="text-[34px] md:text-[52px] font-semibold leading-[1.08] tracking-tight"
            style={{
              background:
                'linear-gradient(120deg, #ffffff 8%, #a8e6ff 38%, #d7f5a0 62%, #ffc9ef 88%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            {t.title}
          </h1>

          <p className="mt-4 mx-auto max-w-[560px] text-[13px] md:text-[14.5px] leading-relaxed text-white/58">
            {t.sub}
          </p>
        </div>

        {/* 玩法四件套 */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {t.steps.map((s) => (
            <span
              key={s.text}
              className="glass capsule-btn h-9 px-3.5 flex items-center gap-1.5 text-[11px] text-white/62"
            >
              {s.icon}
              {s.text}
            </span>
          ))}
        </div>

        {/* 生态位卡片 */}
        <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {t.cards.map((c, i) => (
            <GlassPanel
              key={c.title}
              className="p-4"
              radius={24}
              glass={false}
              style={{
                background: `linear-gradient(165deg, ${c.color}1f, rgba(9,20,22,.55))`,
                border: `1px solid ${c.color}33`,
                boxShadow: `0 14px 36px -18px ${c.color}, inset 0 1px 0 rgba(255,255,255,.3)`,
                animation: `glass-pop .6s cubic-bezier(.22,1,.36,1) ${0.12 + i * 0.09}s both`,
                transformOrigin: '50% 120%',
              }}
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center mb-2.5"
                style={{
                  background: `${c.color}22`,
                  border: `1px solid ${c.color}55`,
                  color: c.color,
                  boxShadow: `0 0 18px -4px ${c.color}`,
                }}
              >
                {c.icon}
              </div>
              <div className="text-[13px] font-medium text-white/88">{c.title}</div>
              <div className="mt-1.5 text-[11px] leading-relaxed text-white/45">{c.body}</div>
            </GlassPanel>
          ))}
        </div>

        <div className="mt-9 flex flex-col items-center gap-3">
          <GlassButton
            size="lg"
            onClick={onEnter}
            color="#2cc9ff"
            className="!h-12 !px-7 text-[14px] font-medium tracking-wide shadow-[0_10px_40px_-12px_rgba(44,201,255,.7)]"
          >
            <IconSpark size={16} />
            {t.enter}
          </GlassButton>
          <span className="text-[10px] text-white/28">{t.enterHint}</span>
        </div>

        <p className="mt-8 text-center text-[10px] text-white/22 font-mono">{t.footer}</p>
      </div>
    </div>
  );
}
