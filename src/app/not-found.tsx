import "./_styles/not-found.css";

import { RefreshCcw } from "lucide-react";
import { ActionButton } from "./_components/action-button";
import { Terminal, type TerminalLog } from "./_components/terminal";

const LOGS: TerminalLog[] = [
  { text: "[FATAL] ERROR_404: 目标坐标未在神经矩阵中注册。", variant: "error" },
  { text: "[SCAN] 正在逆向追踪访问足迹..." },
  { text: "[WARN] 试图在此触发隐藏彩蛋？很遗憾，你的意识已游离于观测边界之外。" },
  { text: "[SYS] 在单干线链路中发生迷失，已作为「重度空间认知障碍」写入档案。" },
  {
    text: "[ACTION] 精神污染阈值即将过载，请立即执行坐标重置指令。",
    variant: "error",
  },
];

export default function NotFound() {
  return (
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl p-4 flex flex-col items-center gap-10">
        <div className="text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[120px] md:text-[200px] font-black text-slate-800/30 blur-sm pointer-events-none select-none">
            404
          </div>

          <h1
            className="relative z-10 text-5xl md:text-8xl font-black tracking-tighter text-slate-100 drop-shadow-lg glitch-text-error mb-6"
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

        <ActionButton
          label="[ 重 置 坐 标 / RESET ]"
          href="/"
          icon={<RefreshCcw className="my-icon animate-pulse" />}
        />
      </div>
    </div>
  );
}
