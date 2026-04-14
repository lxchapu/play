// --- 渲染过渡假日志 (Transition) ---
export const Transition = ({ logs }: { logs: string[] }) => {
  return (
    <div className="w-full max-w-2xl bg-slate-900/80 border border-slate-700 p-6 rounded-lg font-mono text-sm md:text-base text-emerald-400/80 shadow-[0_0_30px_rgba(16,185,129,0.1)]">
      <div className="flex gap-2 items-center mb-4 border-b border-slate-700 pb-2">
        <div className="animate-spin w-4 h-4 border-2 border-emerald-500 border-t-transparent rounded-full"></div>
        <span className="text-slate-300">NEURAL_LINK_ESTABLISHING...</span>
      </div>
      <div className="flex flex-col gap-2 min-h-30">
        {logs.map((log, idx) => (
          <div key={idx} className="animate-[slideInRight_0.3s_ease-out]">
            <span className="text-slate-500 mr-2">{">"}</span>
            {log}
          </div>
        ))}
        <div className="animate-pulse">_</div>
      </div>
    </div>
  );
};
