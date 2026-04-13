/**
 * 首页
 */
"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { PERSONALITIES } from "@/data/personalities";

const VISIBLE_CODES = Object.entries(PERSONALITIES).filter(
  ([, p]) => !p.hidden,
);
const HIDDEN_CODES = Object.entries(PERSONALITIES).filter(([, p]) => p.hidden);

const FAMILIES: Record<string, { name: string; color: string; desc: string }> =
  {
    P: {
      name: "卷王家族",
      color: "var(--color-fam-p)",
      desc: "主动出击 · 冲锋型",
    },
    L: {
      name: "摸鱼家族",
      color: "var(--color-fam-l)",
      desc: "佛系养生 · 摸鱼型",
    },
    A: {
      name: "暴躁家族",
      color: "var(--color-fam-a)",
      desc: "炸裂输出 · 暴躁型",
    },
    Y: {
      name: "暖心家族",
      color: "var(--color-fam-y)",
      desc: "温柔辅助 · 暖心型",
    },
  };

function getFamilyColor(code: string) {
  const firstChar = code[0];
  return FAMILIES[firstChar]?.color ?? "var(--color-brand)";
}

const TIPS = [
  {
    title: "据实以答",
    desc: "别装，游戏里是什么样就是什么样。",
  },
  {
    title: "勿钻牛角",
    desc: "第一直觉就是最真实的你。",
  },
  {
    title: "题必有选",
    desc: "不能跳过，就像你不能跳过剧情过场。",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-surface flex flex-col">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/92 backdrop-blur-[saturate(1.6)_blur(10px)] border-b border-border">
        <div className="max-w-260 mx-auto px-8 py-3.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-5.5 h-5.5 rounded-md bg-(--color-brand) relative">
              <div className="absolute inset-1.5 rounded-xs bg-white" />
            </div>
            <span className="font-title text-lg font-bold text-text-dark tracking-wide">
              PLAY
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[13px] text-text-mid tracking-wide">
              自嘲娱乐
            </span>
            <a
              href="https://github.com/lxchapu/play"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-text-mid hover:text-text-dark transition-colors"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="shrink-0"
                aria-hidden="true"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative bg-(--color-brand) text-white overflow-hidden px-8 pt-18 pb-30">
        {/* Decorative shapes */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.12)_0,transparent_35%),radial-gradient(circle_at_85%_80%,rgba(255,255,255,0.08)_0,transparent_40%)]" />

        <motion.div
          className="max-w-205 mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold tracking-[0.14em] uppercase text-white/85 mb-4">
            P·L·A·Y Type Indicator
          </p>
          <h1 className="font-title font-bold text-[56px] leading-[1.12] text-white mb-3.5 tracking-tight">
            MBTI 已经过时
            <br />
            PLAY 来了
          </h1>
          <p className="font-title font-semibold text-[22px] leading-[1.35] text-white/92 mb-5 max-w-160 mx-auto tracking-tight">
            自嘲型游戏人格测试
          </p>
          <p className="text-lg leading-[1.65] text-white/90 mb-9 max-w-140 mx-auto">
            50+ 道灵魂拷问，四维交叉分析，
            <br />
            为君精准定位此生游戏之废料品类。
          </p>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <a
              href="/quiz"
              className="inline-flex items-center gap-2.5 text-base font-semibold text-white bg-brand-dark rounded-[30px] px-8 py-4 shadow-[0_4px_16px_rgba(0,0,0,0.25)] hover:bg-[#4338ca] hover:shadow-[0_6px_20px_rgba(0,0,0,0.35)] transition-all"
            >
              开始测试
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <span className="text-sm text-white/75">约需 5 分钟</span>
          </div>
        </motion.div>
      </section>

      {/* Tips */}
      <div className="max-w-200 mx-auto -mt-15 px-6 relative z-20">
        <div className="grid grid-cols-3 gap-5">
          {TIPS.map((tip) => (
            <div
              key={tip.title}
              className="bg-surface border border-border rounded-2xl px-6 py-7 text-center shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
            >
              <p className="font-title text-xl font-bold text-text-dark mb-2">
                {tip.title}
              </p>
              <p className="text-sm text-text-mid leading-relaxed">
                {tip.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Personality Preview Grid */}
      <section className="max-w-7xl mx-auto mt-20 px-10">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-[0.14em] uppercase text-text-soft mb-3">
            16 种人格 · The Waste Gallery
          </p>
          <h2 className="font-title text-4xl font-bold text-text-dark tracking-tight">
            君之归宿，四族十六型
          </h2>
          <p className="mt-3.5 text-sm text-text-soft tracking-wide">
            点击卡片查看类型释义
          </p>
        </div>

        <motion.div
          className="grid grid-cols-4 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.04,
              },
            },
          }}
        >
          {VISIBLE_CODES.map(([code, p]) => (
            <TileCard key={code} code={code} personality={p} />
          ))}
        </motion.div>
      </section>

      {/* Legend */}
      <section className="flex flex-col items-stretch gap-7 mt-9 max-w-230 mx-auto px-5">
        {/* Quadrants */}
        <div className="text-center">
          <div className="flex flex-col items-center gap-1.5 mb-3.5">
            <p className="font-title text-[15px] font-semibold tracking-wide text-text-dark">
              四族色谱
            </p>
            <p className="text-xs leading-relaxed text-text-soft max-w-[34em]">
              上图 16 张卡片之主色来自 P/L × A/Y 四象限
            </p>
          </div>
          <div className="flex justify-center flex-wrap gap-3.5 gap-x-7">
            {Object.entries(FAMILIES).map(([key, f]) => (
              <div
                key={key}
                className="flex items-center gap-2 text-[13px] text-text-mid"
              >
                <span
                  className="w-3 h-3 rounded-full shrink-0"
                  style={{ background: f.color }}
                />
                <span>{f.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hidden */}
        <div className="text-center">
          <div className="flex flex-col items-center gap-1.5 mb-3.5">
            <p className="font-title text-[15px] font-semibold tracking-wide text-text-dark">
              隐藏人格 · 彩蛋
            </p>
            <p className="text-xs leading-relaxed text-text-soft max-w-[34em]">
              需特定作答触发，判定点见结果页
            </p>
          </div>
          <div className="flex justify-center flex-wrap gap-2.5">
            {HIDDEN_CODES.map(([code, p]) => (
              <span
                key={code}
                className="inline-flex items-center gap-2 px-3.5 py-1.75 pl-2.5 rounded-full bg-surface border border-border text-xs font-medium text-text-mid leading-snug whitespace-nowrap"
              >
                <span className="text-[1.1em] leading-none shrink-0">
                  {p.emoji}
                </span>
                <span>{p.name}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-24 border-t border-border px-8 py-8 text-center">
        <p className="text-[13px] text-text-soft leading-relaxed">
          本测试仅供娱乐，未经临床验证，
          <br />
          请勿用于群嘲、相亲、求职或发律师函。
        </p>
      </footer>
    </div>
  );
}

function TileCard({
  code,
  personality: p,
}: {
  code: string;
  personality: Omit<import("@/data/types").Personality, "code">;
}) {
  const tileColor = getFamilyColor(code);

  return (
    <motion.button
      type="button"
      className="w-full bg-linear-to-b from-(--tile-tint) to-surface border border-border rounded-[20px] px-4.5 pt-6.5 pb-5.5 text-center relative overflow-hidden transition-all duration-250 hover:-translate-y-1 hover:border-(--tile-color) hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)] focus-visible:outline-2 focus-visible:outline-offset-3"
      style={
        {
          "--tile-color": tileColor,
          "--tile-tint": `${tileColor}10`,
        } as React.CSSProperties
      }
      variants={{
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {/* Emoji avatar area */}
      <div className="relative w-45 max-w-full mx-auto mb-3 aspect-square">
        <div
          className="w-full h-full rounded-full flex items-center justify-center text-6xl"
          style={{ background: `${tileColor}12` }}
        >
          {p.emoji}
        </div>
      </div>

      {/* Code + Abbr */}
      <div className="inline-flex items-center gap-2.5 relative mb-1.5">
        <span
          className="font-title text-[11px] font-bold tracking-[0.24em]"
          style={{ color: tileColor }}
        >
          {code}
        </span>
        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-text-soft">
          {p.abbr}
        </span>
      </div>

      {/* Name */}
      <p className="font-title text-xl font-bold text-text-dark tracking-tight relative mb-1.5">
        {p.name}
      </p>

      {/* Tagline */}
      <p className="text-xs leading-relaxed text-text-mid italic relative max-w-55 mx-auto">
        「{p.quote}」
      </p>
    </motion.button>
  );
}
