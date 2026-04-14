/**
 * 扫描记载动画
 */
export function ScanningOverlay() {
  return (
    <div className="relative z-1 min-h-screen flex flex-col items-center justify-center">
      <div className="p-4 text-emerald-400 font-mono flex flex-col items-center gap-6">
        <div className="relative w-32 h-32 flex items-center justify-center">
          <div className="absolute inset-0 border-4 border-emerald-500/30 rounded-full border-t-emerald-500 animate-spin"></div>
          <div className="absolute inset-2 border-4 border-emerald-500/10 rounded-full border-b-emerald-400 animate-[spin_2s_linear_infinite_reverse]"></div>
          <span className="text-xl font-bold animate-pulse">99%</span>
        </div>
        <div className="text-center space-y-2">
          <p className="animate-pulse">正在生成最终赛博病历...</p>
          <p className="text-xs text-slate-500">
            正在重构多维人格矩阵与特质模型
          </p>
        </div>
      </div>
    </div>
  );
}
