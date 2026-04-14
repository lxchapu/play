"use client";

import "./_styles/not-found.css";

import { RefreshCcw } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Terminal, type TerminalLog } from "./_components/terminal";

const LOGS: TerminalLog[] = [
  { text: "[FATAL] ERROR_404: 目标坐标未在神经矩阵中注册。", variant: "error" },
  { text: "[SCAN] 正在追踪你的访问足迹..." },
  { text: "[WARN] 警告：你已偏离主干道，触碰到了系统的物理边界。" },
  { text: "[SYS] 连个网页都能走丢，建议在现实世界里出门多带两个导航。" },
  {
    text: "[ACTION] 神经链路即将熔断，请立即执行紧急重启指令。",
    variant: "error",
  },
];

export default function NotFound() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl p-4 flex flex-col items-center gap-10">
        <div className="text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[120px] md:text-[200px] font-black text-slate-800/30 blur-sm pointer-events-none select-none">
            404
          </div>

          <h1
            className="relative z-10 text-6xl md:text-8xl font-black tracking-tighter text-slate-100 drop-shadow-lg glitch-text-error mb-6"
            data-text="404_NOT_FOUND"
          >
            404_NOT_FOUND
          </h1>
          <div className="relative z-10 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 font-mono text-xs sm:text-sm shadow-[0_0_15px_rgba(239,68,68,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            NEURAL_LINK_SEVERED / 神经链路断开
          </div>
        </div>

        <Terminal title="SYS_DIAGNOSTIC_ERR" logs={LOGS} variant="error" />

        <div className="animate-[fadeIn_0.5s_ease-out_both_4s]">
          <Link
            href="/"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="relative inline-block px-10 py-4 font-mono font-bold text-lg tracking-widest rounded-lg overflow-hidden transition-all duration-300 bg-emerald-500 text-slate-950 hover:bg-emerald-400 hover:scale-[1.02] shadow-[0_0_20px_rgba(16,185,129,0.3)] cursor-pointer"
          >
            <span
              className={`relative z-10 flex items-center justify-center gap-2 ${isHovering ? "glitch-text" : ""}`}
              data-text="[ 强 制 重 启 / REBOOT ]"
            >
              {"[ 强 制 重 启 / REBOOT ]"}
              {!isHovering && (
                <RefreshCcw size={20} className="animate-pulse" />
              )}
            </span>
            {/* 按钮扫描光效 */}
            <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/40 to-transparent animate-[shimmer_2s_infinite]"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}
