"use client";
import "./_styles/style.css";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { GithubIcon } from "./_components/github-icon";
import { TerminalLine } from "./_components/terminal-line";

export default function LandingPage() {
  const router = useRouter();
  const [bootSequence, setBootSequence] = useState<number>(0);
  const [agreed, setAgreed] = useState<boolean>(false);
  const [isHovering, setIsHovering] = useState<boolean>(false);

  // 强化“游戏”属性的文案
  const sequences: string[] = [
    "[INIT] 正在挂载 PLAY 游戏行为分析模型...",
    "[SCAN] 正在读取你的 Steam/主机 隐藏成就及肝度记录...",
    "[P]ersistence - 测算你的赛博劳役抗性与爆肝指数",
    "[L]ogic - 扫描底层决策逻辑：是机制懂哥还是玄学赌狗？",
    "[A]ggression - 评估数字暴力倾向与排位降维打击欲",
    "[Y]earning - 探测你的虚拟多巴胺受体与剧情沉浸底线",
    "[DONE] 传感器校准完毕，准备直面真实的自己。",
  ];

  useEffect(() => {
    if (bootSequence < sequences.length) {
      const timer = setTimeout(() => {
        setBootSequence((prev) => prev + 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [bootSequence]);

  const handleStart = () => {
    if (!agreed) return;
    router.push("/quiz");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-neutral-200 flex flex-col items-center justify-center p-4 overflow-hidden relative selection:bg-emerald-500/30">
      {/* 氛围光晕 (Cyberpunk / Gaming Vibe) */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-emerald-600/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-purple-600/10 blur-[120px] pointer-events-none"></div>

      {/* 科技感网格背景 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      {/* GitHub 导流按钮 */}
      <a
        href="https://github.com/lxchapu/play"
        target="_blank"
        rel="noreferrer"
        className="absolute top-6 right-6 z-50 flex items-center gap-2 px-4 py-2 bg-neutral-900/50 hover:bg-neutral-800 border border-neutral-700/50 hover:border-neutral-500 rounded-full transition-all duration-300 group backdrop-blur-sm"
      >
        <GithubIcon className="w-5 h-5 text-neutral-300 group-hover:text-white transition-colors" />
        <span className="font-mono text-sm text-neutral-400 group-hover:text-neutral-100 hidden sm:inline">
          Star on GitHub
        </span>
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse ml-1"></div>
      </a>

      <div className="w-full max-w-2xl relative z-10 flex flex-col gap-8 mt-12 md:mt-0">
        {/* 顶部：带有毛玻璃质感的终端区 */}
        <div className="bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-xl p-5 min-h-60 shadow-2xl shadow-emerald-900/5">
          <div className="flex justify-between items-center mb-4 border-b border-slate-700/50 pb-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_5px_rgba(239,68,68,0.5)]"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_5px_rgba(234,179,8,0.5)]"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-[0_0_5px_rgba(16,185,129,0.5)]"></div>
            </div>
            <span className="text-xs font-mono text-slate-400 px-2 py-0.5 bg-slate-800 rounded">
              PLAY_Engine_v1.0.exe
            </span>
          </div>

          <div className="flex flex-col gap-1.5">
            {sequences.map(
              (text, index) =>
                index <= bootSequence && (
                  <TerminalLine
                    key={text}
                    text={text}
                    delay={0}
                    isGlitch={index === sequences.length - 1}
                  />
                ),
            )}
          </div>
        </div>

        {/* 核心内容区：当加载完毕后淡入显示 */}
        <div
          className={`transition-all duration-1000 ease-in-out flex flex-col items-center gap-8 ${bootSequence >= sequences.length ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="text-center space-y-4 flex flex-col items-center">
            {/* 游戏玩家专属人格鉴定标签 */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-mono text-xs sm:text-sm shadow-[0_0_15px_rgba(16,185,129,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              游戏玩家专属人格鉴定
            </div>

            {/* 新增口号：展现赛博态度 */}
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
            disabled={!agreed}
            className={`
              relative px-10 py-4 font-mono font-bold text-lg tracking-widest rounded-lg overflow-hidden transition-all duration-300
              ${
                agreed
                  ? "bg-emerald-500 text-slate-950 hover:bg-emerald-400 hover:scale-[1.02] shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                  : "bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700/50"
              }
            `}
          >
            {/* 动态应用 glitch-text 类来激活故障效果 */}
            <span
              className={`relative z-10 flex items-center justify-center gap-2 ${isHovering && agreed ? "glitch-text" : ""}`}
              data-text="[ 确 认 链 接 ]"
            >
              {agreed ? (
                <>
                  {isHovering ? "[ 确 认 链 接 ]" : "接 入 神 经 链 路"}
                  {!isHovering && (
                    <svg
                      className="w-5 h-5 animate-bounce-x"
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
            {/* 按钮扫描光效 */}
            {agreed && (
              <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/40 to-transparent hover:animate-[shimmer_1.5s_infinite]"></div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
