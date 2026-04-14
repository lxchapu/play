import { useEffect, useState } from "react";

// 神经同步率微型仪表盘
export const NeuralSyncIndicator = () => {
  const [syncRate, setSyncRate] = useState(82.4);

  useEffect(() => {
    // 模拟脑波/神经同步率的实时波动
    const interval = setInterval(() => {
      setSyncRate((prev) => {
        // 每次波动在 -1.5 到 +1.5 之间
        const fluctuation = Math.random() * 3 - 1.5;
        let next = prev + fluctuation;
        if (next > 99.9) next = 99.9;
        if (next < 50.0) next = 50.0;
        return Number(next.toFixed(1)); // 保留一位小数增强精确感
      });
    }, 800); // 每0.8秒跳动一次
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 px-2 py-1 bg-slate-900/50 border border-slate-800 rounded shadow-inner">
      {/* 迷你动态波形图 (Fake Audio/Brainwave Visualization) */}
      <div className="flex items-end gap-0.5 h-3 w-4">
        <div className="w-0.5 bg-emerald-500/80 animate-[wave_1.2s_ease-in-out_infinite]"></div>
        <div className="w-0.5 bg-emerald-500/80 animate-[wave_0.8s_ease-in-out_infinite_0.2s]"></div>
        <div className="w-0.5 bg-emerald-500/80 animate-[wave_1.5s_ease-in-out_infinite_0.4s]"></div>
        <div className="w-0.5 bg-emerald-500/80 animate-[wave_1s_ease-in-out_infinite_0.1s]"></div>
      </div>

      <span className="text-[10px] font-mono text-slate-500 hidden sm:inline tracking-wider">
        SYNC_PULSE:
      </span>
      <span className="text-[10px] sm:text-xs font-mono text-emerald-400 w-10 text-right font-bold tracking-tighter">
        {syncRate}%
      </span>
    </div>
  );
};
