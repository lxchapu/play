import type { Question } from "@/data/types";
import { NeuralSyncIndicator } from "./neural-sync-indicator";

// --- 渲染具体题目 (Phase 1) ---
export const QuizPhase = ({
  quesion,
  currentIndex,
  answerIndex,
  totalQuestions,
  onOptionClick,
  onPrevClick,
  onNextClick,
  isWritingLog,
  sysLog,
}: {
  quesion: Question;
  currentIndex: number;
  answerIndex: number;
  totalQuestions: number;
  onOptionClick: (optionIndex: number) => void;
  onPrevClick: () => void;
  onNextClick: () => void;
  isWritingLog: boolean;
  sysLog: string;
}) => {
  const hasLastQuestion = currentIndex > 0;
  const hasCurrentAnswered = answerIndex !== undefined;
  return (
    <div
      className={`w-full max-w-3xl mt-12 md:mt-0 transition-opacity duration-300 ${isWritingLog ? "opacity-50 pointer-events-none" : "opacity-100"}`}
    >
      {/* 顶部控制台 & 进度条区域 */}
      <div className="mb-6">
        <div className="flex justify-between items-end mb-2">
          {/* 真实的进度 */}
          <div className="flex items-baseline gap-2">
            <h2 className="text-lg md:text-xl font-bold font-mono tracking-wider text-slate-200">
              PHASE_01
            </h2>
            <div className="font-mono text-emerald-400 text-lg md:text-xl font-bold">
              {currentIndex + 1}{" "}
              <span className="text-slate-600 text-sm md:text-base">
                / {totalQuestions}
              </span>
            </div>
          </div>

          {/* 替换为带有动态波形的迷你组件 */}
          <NeuralSyncIndicator />
        </div>

        {/* 真实物理进度条 */}
        <div className="w-full h-1.5 bg-slate-800/80 rounded-full overflow-hidden mb-4 border border-slate-700/50">
          <div
            className="h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)] transition-all duration-500 ease-out"
            style={{
              width: `${Math.round(((currentIndex + 1) / totalQuestions) * 100)}%`,
            }}
          ></div>
        </div>

        {/* 降低视觉权重的分析目标 */}
        <div className="text-xs md:text-sm font-mono text-slate-500 tracking-wide flex items-center">
          <span className="text-slate-600 mr-2">{">"} TARGET_ANALYSIS :</span>
          <span className="opacity-75">[{quesion.title}]</span>
          <span className="animate-pulse w-1.5 h-3 md:h-3.5 bg-slate-600 inline-block ml-2"></span>
        </div>
      </div>

      {/* 题干展示 */}
      <div className="bg-slate-900/50 border border-slate-700/50 p-6 md:p-8 rounded-xl mb-8 relative overflow-hidden group shadow-lg">
        {/* 扫光特效 */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-emerald-500/30 -translate-y-25 animate-[scan_3s_ease-in-out_infinite]"></div>
        <p className="text-lg md:text-xl text-slate-200 leading-relaxed font-medium">
          {quesion.question}
        </p>
      </div>

      {/* 选项区 */}
      <div className="flex flex-col gap-4">
        {quesion.options.map((option, idx) => {
          // 判断当前选项是否为已选项
          const isSelected = answerIndex === idx;

          return (
            <button
              type="button"
              key={`${quesion.id}-${idx}`}
              onClick={() => onOptionClick(idx)}
              className={`relative p-5 text-left border rounded-lg transition-all duration-200 overflow-hidden group
                  ${
                    isSelected
                      ? "bg-emerald-500/20 border-emerald-500 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.15)]"
                      : "bg-slate-900/30 border-slate-700 text-slate-400 hover:text-slate-100 hover:border-emerald-500/60 hover:bg-slate-800/50"
                  }
                `}
            >
              {/* 选项标号 */}
              <span
                className={`absolute left-0 top-0 h-full w-8 flex items-center justify-center font-mono text-xs border-r transition-colors
                  ${
                    isSelected
                      ? "bg-emerald-500/30 text-emerald-400 border-emerald-500"
                      : "bg-slate-800/50 text-slate-500 border-slate-700 group-hover:bg-emerald-500/20 group-hover:text-emerald-400 group-hover:border-emerald-500/50"
                  }
                `}
              >
                0{idx + 1}
              </span>
              <span className="block pl-8 font-medium">{option.text}</span>
            </button>
          );
        })}
      </div>

      {/* 底部导航与伪造日志输出 */}
      <div className="mt-6 flex flex-col md:flex-row md:items-center justify-between min-h-10">
        {/* 返回上一题按钮 */}
        <div className="flex-1">
          {!isWritingLog && hasLastQuestion && (
            <button
              type="button"
              onClick={onPrevClick}
              className="flex items-center gap-2 text-slate-500 hover:text-emerald-400 font-mono text-sm transition-colors group w-max"
            >
              <span className="group-hover:-translate-x-1 transition-transform">
                ←
              </span>
              [ 回溯脉冲 / 上一题 ]
            </button>
          )}
        </div>

        {/* 写入日志 或 下一题跳转按钮 */}
        <div className="mt-4 md:mt-0 flex-1 flex justify-start md:justify-end">
          {isWritingLog ? (
            <div className="font-mono text-xs text-emerald-500/80 animate-pulse">
              {sysLog}
            </div>
          ) : (
            hasCurrentAnswered && (
              <button
                type="button"
                onClick={onNextClick}
                className="flex items-center gap-2 text-emerald-500 hover:text-emerald-300 font-mono text-sm transition-colors group w-max"
              >
                {currentIndex < totalQuestions - 1
                  ? "[ 脉冲跃迁 / 下一题 ]"
                  : "[ 导出最终诊断报告 ]"}
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};
