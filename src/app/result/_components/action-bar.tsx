/**
 * 操作按钮组
 */
export function ActionBar({
  onExport,
  onRestart,
  isExporting,
}: {
  onExport: () => Promise<void>;
  onRestart: () => void;
  isExporting: boolean;
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-[fadeIn_1s_ease-out_0.5s_both]">
      <button
        type="button"
        onClick={onExport}
        disabled={isExporting}
        className={`flex-1 font-bold font-mono py-3 rounded transition-all flex justify-center items-center gap-2
            ${isExporting ? "bg-slate-700 text-slate-400 cursor-not-allowed" : "bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]"}
          `}
      >
        {isExporting ? (
          <>
            <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></span>
            [ 正在生成... ]
          </>
        ) : (
          "[ 保存病历 / SHARE ]"
        )}
      </button>
      <button
        type="button"
        className="flex-1 bg-transparent border border-slate-600 text-slate-400 font-mono py-3 rounded hover:bg-slate-800 hover:text-slate-200 transition-colors"
        onClick={onRestart}
        disabled={isExporting}
      >
        [ 重新校准 / REBOOT ]
      </button>
    </div>
  );
}
