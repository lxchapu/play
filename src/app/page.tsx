"use client";

import "./_styles/style.css";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { GithubLink } from "./_components/github-link";
import { Terminal, type TerminalLog } from "./_components/terminal";

const LOGS: TerminalLog[] = [
  { text: "[INIT] 正在挂载 PLAY 游戏行为分析模型..." },
  { text: "[SCAN] 正在读取你的 Steam/主机 隐藏成就及肝度记录..." },
  { text: "[P]ersistence - 测算你的赛博劳役抗性与爆肝指数", highlight: "P" },
  {
    text: "[L]ogic - 扫描底层决策逻辑：是机制懂哥还是玄学赌狗？",
    highlight: "L",
  },
  { text: "[A]ggression - 评估数字暴力倾向与排位降维打击欲", highlight: "A" },
  { text: "[Y]earning - 探测你的虚拟多巴胺受体与剧情沉浸底线", highlight: "Y" },
  { text: "[DONE] 传感器校准完毕，准备直面真实的自己。", variant: "error" },
];

export default function LandingPage() {
  const [booted, setBooted] = useState(false);

  return (
    <>
      <div className="w-full max-w-300 mx-auto">
        <div className="pt-6 px-6 flex justify-end">
          <GithubLink />
        </div>
      </div>
      <div className="relative z-1 w-full max-w-250 mx-auto">
        <div className="px-8 pt-10 pb-30 flex flex-col gap-10">
          <Header />
          <div className="w-full max-w-2xl mx-auto animate-[fadeIn_0.5s_ease-out_both_0.2s]">
            <Terminal
              title="PLAY_Engine_v1.0.exe"
              logs={LOGS}
              onComplete={() => setBooted(true)}
            />
          </div>
          <Action booted={booted} />
        </div>
      </div>
    </>
  );
}

/**
 * 视觉主体和大标题
 */
function Header() {
  return (
    <div className="text-center gap-y-4 flex flex-col items-center animate-[fadeIn_0.5s_ease-out_both]">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-mono text-xs sm:text-sm shadow-[0_0_15px_rgba(16,185,129,0.15)]">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        游戏玩家专属人格鉴定
      </div>

      <div className="font-mono text-sm sm:text-base text-slate-400 font-medium tracking-wide">
        <span className="line-through decoration-slate-500/70 decoration-2 opacity-50 transition-opacity hover:opacity-100 cursor-default">
          MBTI 已经过时
        </span>
        <span className="mx-3 text-emerald-500/40 italic">{"///"}</span>
        <span className="text-emerald-400 font-bold tracking-widest drop-shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse">
          PLAY 来了
        </span>
      </div>

      <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-neutral-100 via-neutral-300 to-slate-500 drop-shadow-lg">
        赛博共鸣诊断系统
      </h1>

      <p className="text-slate-400 font-mono text-sm md:text-base max-w-lg">
        别装了，在这个体检中心，你平时的每一次{" "}
        <span className="text-emerald-400/80">点击</span> 和{" "}
        <span className="text-emerald-400/80">破防</span> 都在出卖你。
      </p>
    </div>
  );
}

/**
 * 操作区
 */
function Action({ booted }: { booted: boolean }) {
  const router = useRouter();
  const [agreed, setAgreed] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleStart = () => {
    if (!agreed) return;
    router.push("/quiz");
  };
  return (
    <div className="flex flex-col items-center gap-6 w-full animate-[fadeIn_0.5s_ease-out_both_0.4s]">
      {/* 免责声明 */}
      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 p-6 rounded-xl w-full max-w-md group hover:border-slate-500/50 transition-colors">
        <h3 className="text-red-400 font-mono text-sm mb-4 flex items-center gap-2">
          <span className="animate-pulse">⚠</span> The Disclaimer
        </h3>

        <label className="flex items-start gap-3 cursor-pointer">
          <div className="relative shrink-0 mt-1">
            <input
              type="checkbox"
              className="peer sr-only"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <div className="w-5 h-5 border-2 border-slate-600 rounded bg-slate-800 peer-checked:bg-emerald-500 peer-checked:border-emerald-500 transition-all duration-200"></div>
            <svg
              className="absolute inset-0 w-5 h-5 text-slate-950 scale-0 peer-checked:scale-100 transition-transform pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="3"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <span className="text-sm text-slate-300 group-hover:text-slate-200 transition-colors">
            本人已知晓本报告仅代表赛博人格映射，并非现实权威诊断。我已准备好剥开虚荣的战绩外衣，并
            <strong className="text-emerald-400 font-normal">
              做好被戳中脊梁骨的准备
            </strong>
            。
          </span>
        </label>
      </div>

      <button
        type="button"
        onClick={handleStart}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        disabled={!agreed || !booted}
        className={`
              relative w-full max-w-sm py-3.5 md:py-4 font-mono font-bold text-base md:text-lg tracking-widest rounded-lg overflow-hidden transition-all duration-300
              ${
                agreed && booted
                  ? "bg-emerald-500 text-slate-950 hover:bg-emerald-400 hover:scale-[1.05] shadow-[0_0_25px_rgba(16,185,129,0.4)]"
                  : "bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700/50"
              }
            `}
      >
        <span
          className={`relative z-10 flex items-center justify-center gap-2 ${isHovering && agreed && booted ? "glitch-text" : ""}`}
          data-text="[ 确 认 链 接 ]"
        >
          {!booted ? (
            <>
              <span className="w-4 h-4 border-2 border-slate-500 border-t-transparent rounded-full animate-spin"></span>
              [ 系 统 启 动 中 ... ]
            </>
          ) : agreed ? (
            <>
              {isHovering ? "[ 确 认 链 接 ]" : "接 入 神 经 链 路"}
              {!isHovering && (
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 animate-bounce-x"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              )}
            </>
          ) : (
            "请 先 签 署 协 议"
          )}
        </span>
        {agreed && booted && (
          <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/40 to-transparent hover:animate-[shimmer_1.5s_infinite]"></div>
        )}
      </button>
    </div>
  );
}
