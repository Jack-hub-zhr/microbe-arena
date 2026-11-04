/**
 * 微生物进化大赛 —— 应用外壳
 * ---------------------------------------------------------------
 * 版面要点：
 *  · 开场先显示介绍页（Intro），点「进入培养皿」才进入沙盒；
 *  · 左侧「上帝之手」与「环境控制」同处一条纵向流式布局，永不互相遮挡；
 *  · 右侧收起的胶囊按钮里直接嵌着实时圆饼图，点它会从按钮处展开数据抽屉；
 *  · 面板展开动画的 transform-origin 指向用户刚刚点击的那个按钮。
 */
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Petri3D, { type ToolId } from './components/Petri3D';
import Intro from './components/Intro';
import StatsDrawer, { type DrawerTab } from './components/StatsDrawer';
import GodRail, { type ToolDef } from './components/GodRail';
import EnvPanel from './components/EnvPanel';
import { EcologyPie } from './components/EcologyPie';
import { cx } from './components/ui/Glass';
import {
  IconBook,
  IconChart,
  IconForward,
  IconGlobe,
  IconPause,
  IconPlay,
  IconReset,
  IconScroll,
  IconSkip,
  IconSpark,
  IconTrophy,
} from './components/Icons';
import { Simulation, STRATEGIES } from './engine/Simulation';
import type { Agent } from './engine/types';

const SPEEDS = [1, 5, 20, 100];

export default function App() {
  const engineRef = useRef<Simulation | null>(null);
  if (!engineRef.current) engineRef.current = new Simulation({ initialCount: 200 });
  const engine = engineRef.current;

  const [lang, setLang] = useState<'zh' | 'en'>('zh');
  const [started, setStarted] = useState(false);
  const [running, setRunning] = useState(true);
  const [speed, setSpeed] = useState(5);
  const [tool, setTool] = useState<ToolId>('inspect');
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [tick, setTick] = useState(0);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerTab, setDrawerTab] = useState<DrawerTab>('ecology');
  const [drawerTrigger, setDrawerTrigger] = useState<DOMRect | null>(null);

  const [toolHintRect, setToolHintRect] = useState<DOMRect | null>(null);
  const [hintTool, setHintTool] = useState<ToolDef | null>(null);

  const toolRef = useRef<ToolId>('inspect');
  toolRef.current = tool;


  /* ── 演化主循环 ── */
  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    const loop = () => {
      raf = requestAnimationFrame(loop);
      const now = performance.now();
      const dt = now - last;
      last = now;
      if (!running) return;
      // 按请求倍率推进，但给每一帧留出 8ms 预算，保证界面始终跟手
      const budget = now + 8;
      let n = 0;
      while (n < speed && performance.now() < budget) {
        engine.step();
        n++;
      }
      void dt;
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [engine, running, speed]);

  /* ── UI 轮询（4Hz），用于实时统计与圆饼图 ── */
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 240);
    return () => clearInterval(id);
  }, []);

  const alive = useMemo(
    () => engine.agents.filter((a) => a.alive),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [engine, tick],
  );
  const composition = useMemo(() => engine.composition(), [engine, tick]);
  const counts = useMemo(() => engine.compositionCounts(), [engine, tick]);
  const maxGen = useMemo(
    () => alive.reduce((m, a) => Math.max(m, a.generation), 0),
    [alive],
  );
  /** 当前所处的「地球年代」 */
  const { eraLabel, eraColor } = useMemo(() => {
    if (engine.seenEarthEvents.has('cambrian'))
      return {
        eraLabel: lang === 'zh' ? '寒武纪' : 'CAMBRIAN',
        eraColor: '#d4748e',
      };
    if (engine.seenEarthEvents.has('snowball'))
      return { eraLabel: lang === 'zh' ? '雪球地球' : 'SNOWBALL', eraColor: '#7dd3fc' };
    if (engine.seenEarthEvents.has('goe'))
      return { eraLabel: lang === 'zh' ? '大氧化' : 'GOE', eraColor: '#d9a441' };
    return { eraLabel: lang === 'zh' ? '前寒武纪' : 'PRECAMBRIAN', eraColor: '#8fa3a0' };
  }, [engine, engine.seenEarthEvents.size, lang]);

  const selected: Agent | null = useMemo(
    () => (selectedId === null ? null : (engine.agentById(selectedId) ?? null)),
    [engine, selectedId, tick],
  );

  const openDrawer = useCallback((tab: DrawerTab, rect: DOMRect) => {
    setDrawerTab(tab);
    setDrawerTrigger(rect);
    setDrawerOpen(true);
  }, []);

  const onToolSelect = useCallback(
    (t: ToolDef) => {
      setHintTool(t);
      if (t.id === 'alien') {
        engine.godAliens(18);
        setTick((v) => v + 1);
        return;
      }
      if (t.id === 'plague') {
        engine.godPlague(0.4);
        setTick((v) => v + 1);
        return;
      }
      setTool(t.id as ToolId);
    },
    [engine],
  );

  const fastForward = useCallback(
    (ticks: number, stopOnEvent: boolean) => {
      setRunning(false);
      setTimeout(() => {
        engine.fastForward(ticks, stopOnEvent);
        setTick((v) => v + 1);
        setRunning(true);
      }, 30);
    },
    [engine],
  );

  const reset = useCallback(() => {
    setRunning(false);
    setSelectedId(null);
    setTimeout(() => {
      engine.reset();
      setTick((v) => v + 1);
      setRunning(true);
    }, 20);
  }, [engine]);


  return (
    <div className="h-screen w-screen overflow-hidden relative bg-[#100f0d] text-[#efe9de] select-none">
      <div className="bench" />

      <Petri3D
        engine={engine}
        toolRef={toolRef}
        selectedId={selectedId}
        onSelect={setSelectedId}
      />

      {/* ═══════════ HUD（介绍页期间隐藏） ═══════════ */}
      <div
        className={cx(
          'transition-opacity duration-700',
          started ? 'opacity-100' : 'opacity-0 [&_*]:pointer-events-none',
        )}
      >
      <header className="absolute top-0 left-0 right-0 flex items-start gap-2.5 px-4 pt-3.5 pointer-events-none z-20">
        {/* 品牌 */}
        <div className="pointer-events-auto glass capsule h-11 pl-3 pr-4 flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-full border border-[#4fb3c4]/50 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#84b96b] animate-pulse" />
          </div>
          <div className="leading-none">
            <h1 className="text-[13px] font-semibold tracking-wide">
              {lang === 'zh' ? '微生物进化大赛' : 'Microbe Evolution Arena'}
            </h1>
            <span className="label-xs text-[#4fb3c4]/65">PETRI ARENA</span>
          </div>
        </div>

        <div className="flex-1" />

        {/* 状态 */}
        <div className="pointer-events-auto glass capsule h-11 px-4 flex items-center gap-4 text-[11px] num text-white/55 max-md:hidden">
          <span>
            {lang === 'zh' ? '世代时刻' : 'Tick'}{' '}
            <b className="text-[#4fb3c4]">{engine.tick.toLocaleString()}</b>
          </span>
          <span>
            {lang === 'zh' ? '最高世代' : 'Max Gen'}{' '}
            <b className="text-[#4fb3c4]">{maxGen}</b>
          </span>
          <span>
            {lang === 'zh' ? '存活' : 'Alive'}{' '}
            <b className="text-[#84b96b]">{alive.length}</b>
          </span>
          <span className="flex items-center gap-1.5">
            <span
              className={cx(
                'w-1.5 h-1.5 rounded-full',
                running ? 'bg-[#84b96b] animate-pulse' : 'bg-white/30',
              )}
            />
            {running ? `${lang === 'zh' ? '运行中' : 'LIVE'} ×${speed}` : lang === 'zh' ? '已暂停' : 'PAUSED'}
          </span>
          <span
            className="px-1.5 rounded-[4px] border text-[10px]"
            style={{
              borderColor: `${eraColor}55`,
              color: eraColor,
              background: `${eraColor}14`,
            }}
            title={lang === 'zh' ? '当前地球年代' : 'Current era'}
          >
            {eraLabel}
          </span>
        </div>

        <button
          onClick={() => setLang((l) => (l === 'zh' ? 'en' : 'zh'))}
          className="pointer-events-auto glass capsule-btn w-10 h-10 text-white/70 hover:text-white"
          title="Language"
        >
          <IconGlobe size={15} />
        </button>
      </header>

      {/* ═══════════ 左侧：上帝之手 + 环境控制 ═══════════ */}
      <div
        className="absolute left-4 top-[76px] bottom-4 w-[230px] flex flex-col justify-start gap-3 overflow-y-auto scroll-thin pointer-events-none z-20"
        style={{ scrollbarWidth: 'none' }}
      >
        <GodRail tool={tool} onSelect={onToolSelect} lang={lang} onActiveRect={setToolHintRect} />
        <EnvPanel engine={engine} lang={lang} refresh={() => setTick((v) => v + 1)} />
      </div>

      {/* 工具提示气泡：贴着刚刚点击的那个工具按钮 */}
      {toolHintRect && hintTool && (
        <div
          className="tooltip-bubble fixed z-30 pointer-events-none glass rounded-[10px] px-3 py-1.5 text-[10.5px] text-white/72 max-w-[220px] leading-relaxed"
          style={{
            left: toolHintRect.right + 12,
            top: toolHintRect.top + toolHintRect.height / 2,
            transform: 'translateY(-50%)',
            borderColor: `${hintTool.color}38`,
          }}
        >
          {lang === 'zh' ? hintTool.hint : hintTool.hintEn}
        </div>
      )}

      {/* ═══════════ 右侧：收起的胶囊触发器（内含实时圆饼图） ═══════════ */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-end gap-2.5 z-20">
        {/* 实时圆饼图 —— 折叠状态下也一直显示 */}
        <button
          data-pop-anchor
          onClick={(e) => openDrawer('ecology', e.currentTarget.getBoundingClientRect())}
          className="glass capsule-btn p-1.5 flex items-center gap-2 group"
          title={lang === 'zh' ? '生态构成（实时）' : 'Live ecology'}
        >
          <EcologyPie
            composition={composition}
            counts={counts}
            size={58}
            thickness={8}
            showTotal={false}
          />
          <div className="pr-1.5 text-left hidden md:block">
            <div className="label-xs text-white/38">
              {lang === 'zh' ? '生态构成' : 'ECOLOGY'}
            </div>
            <div className="text-[10px] text-white/62 num">
              {alive.length} {lang === 'zh' ? '个体' : 'alive'}
            </div>
          </div>
        </button>

        {[
          { tab: 'lineage' as DrawerTab, icon: <IconSpark size={15} />, label: lang === 'zh' ? '演化路线' : 'Lineage', color: '#d4748e' },
          { tab: 'ranks' as DrawerTab, icon: <IconTrophy size={15} />, label: lang === 'zh' ? '猎杀榜' : 'Ranks', color: '#e2663f' },
          { tab: 'codex' as DrawerTab, icon: <IconBook size={15} />, label: lang === 'zh' ? '图鉴' : 'Codex', color: '#84b96b' },
          { tab: 'chronicle' as DrawerTab, icon: <IconScroll size={15} />, label: lang === 'zh' ? '编年史' : 'Log', color: '#d9a441' },
        ].map((b) => (
          <button
            key={b.tab}
            data-pop-anchor
            onClick={(e) => openDrawer(b.tab, e.currentTarget.getBoundingClientRect())}
            className="glass capsule-btn w-11 h-11 flex items-center justify-center"
            style={{ color: b.color }}
            title={b.label}
          >
            {b.icon}
          </button>
        ))}
      </div>

      {/* ═══════════ 底部：时间控制 ═══════════ */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
        <div className="glass capsule h-12 px-2.5 flex items-center gap-1.5">
          <button
            onClick={() => setRunning((r) => !r)}
            className={cx(
              'capsule-btn w-8 h-8',
              running ? 'bg-[#d2604f]/18 text-[#ff8b8b]' : 'bg-[#84b96b]/18 text-[#84b96b]',
            )}
            title={running ? (lang === 'zh' ? '暂停' : 'Pause') : lang === 'zh' ? '继续' : 'Resume'}
          >
            {running ? <IconPause size={14} /> : <IconPlay size={14} />}
          </button>

          {SPEEDS.map((s) => (
            <button
              key={s}
              onClick={() => {
                setSpeed(s);
                setRunning(true);
              }}
              className={cx(
                'capsule-btn h-7 px-2.5 text-[11px] num transition-colors',
                speed === s
                  ? 'text-[#d9a441] bg-[#d9a441]/14 shadow-[inset_0_0_0_1px_rgba(217,164,65,.45)]'
                  : 'text-white/45 hover:text-white/80',
              )}
            >
              ×{s}
            </button>
          ))}

          <span className="w-px h-5 bg-white/12 mx-1" />

          <button
            onClick={() => fastForward(2000, true)}
            title={lang === 'zh' ? '快进至下一个进化事件' : 'Skip to next event'}
            className="capsule-btn h-7 px-2.5 text-[11px] text-[#d9a441] flex items-center gap-1"
          >
            <IconForward size={12} />
            <span className="hidden sm:inline">{lang === 'zh' ? '事件' : 'Event'}</span>
          </button>
          <button
            onClick={() => fastForward(3000, false)}
            title={lang === 'zh' ? '快进 3000 世代' : 'Skip 3000 ticks'}
            className="capsule-btn h-7 px-2.5 text-[11px] text-white/50 flex items-center gap-1"
          >
            <IconSkip size={12} />
            <span className="hidden sm:inline">3000</span>
          </button>
          <button
            onClick={reset}
            title={lang === 'zh' ? '重置' : 'Reset'}
            className="capsule-btn w-7 h-7 text-white/45"
          >
            <IconReset size={13} />
          </button>
        </div>
      </div>

      {/* 生态构成速览条（底部左侧） */}
      <div className="absolute bottom-4 left-4 z-10 hidden lg:block pointer-events-none">
        <div className="glass capsule h-9 px-3.5 flex items-center gap-3 text-[10px] text-white/50">
          {Object.entries(STRATEGIES).map(([id, meta]) => (
            <span key={id} className="flex items-center gap-1.5">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: meta.color }}
              />
              <span className="num text-white/62">
                {((composition[id as keyof typeof composition] ?? 0) * 100).toFixed(0)}%
              </span>
            </span>
          ))}
        </div>
      </div>

      <div className="absolute bottom-5 right-4 z-10 text-[10px] text-white/22 font-mono pointer-events-none hidden md:block">
        {lang === 'zh'
          ? '拖动旋转 · 滚轮缩放 · 点击生物查看基因组'
          : 'Drag to orbit · Scroll to zoom · Click a cell to inspect'}
      </div>

      {/* 选中的个体 —— 悬浮小胶囊 */}
      {selected && (
        <button
          onClick={(e) => openDrawer('cell', e.currentTarget.getBoundingClientRect())}
          className="glass capsule h-10 px-3.5 flex items-center gap-2.5 z-20 absolute right-4 bottom-[68px]"
        >
          <span
            className="w-4 h-4 rounded-full"
            style={{
              background: `radial-gradient(circle at 34% 30%, hsl(${selected.genome.hue},78%,64%), hsl(${selected.genome.hue},70%,30%))`,
              boxShadow: '0 1px 2px rgba(0,0,0,.4)',
            }}
          />
          <span className="num text-[11px] text-white/80">#{selected.id}</span>
          <span className="text-[10px] text-white/45">
            {STRATEGIES[selected.strategy].zh}
            {selected.role ? ` · ${selected.role}` : ''}
          </span>
          <IconChart size={13} className="text-white/35" />
        </button>
      )}

      </div>

      {/* 数据抽屉：从被点击的胶囊按钮处展开 */}
      <StatsDrawer
        open={drawerOpen}
        tab={drawerTab}
        triggerRect={drawerTrigger}
        onTab={setDrawerTab}
        onClose={() => setDrawerOpen(false)}
        engine={engine}
        lang={lang}
        selected={selected}
      />

      {/* 介绍页 */}
      {!started && <Intro lang={lang} onEnter={() => setStarted(true)} />}
    </div>
  );
}
