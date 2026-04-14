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
  const router = useRouter();
  const [booted, setBooted] = useState(false);
  const [agreed, setAgreed] = useState<boolean>(false);
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const handleStart = () => {
    if (!agreed) return;
    router.push("/quiz");
  };

  return (
    <>
      <div className="w-full max-w-300 mx-auto">
        <div className="pt-6 px-6 flex justify-end">
          <GithubLink />
        </div>
      </div>
      <div className="relative z-1 w-full max-w-250 mx-auto">
        <div className="px-8 pt-10 pb-30 flex flex-col gap-8">
          <Terminal
            title="PLAY_Engine_v1.0.exe"
            logs={LOGS}
            onComplete={() => setBooted(true)}
          />
          <div
            className={`transition-all duration-1000 ease-in-out flex flex-col items-center gap-8 ${booted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
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
    </>
  );
}
