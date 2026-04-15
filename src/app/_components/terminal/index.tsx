"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { TerminalLine } from "./terminal-line";

export interface TerminalLog {
  text: string;
  highlight?: string;
  variant?: "normal" | "error";
}

interface TerminalProps {
  logs: TerminalLog[];
  speed?: number;
  variant?: "normal" | "error";
  title: string;
  onComplete?: () => void;
}

/**
 * 终端组件，支持逐行打字机效果，双击可跳过动画
 */
export function Terminal({
  logs,
  speed = 30,
  variant = "normal",
  title,
  onComplete,
}: TerminalProps) {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleLineComplete = () => {
    if (currentLineIndex + 1 >= logs.length) {
      setIsFinished(true);
      onComplete?.();
      return;
    }
    setCurrentLineIndex((i) => i + 1);
  };

  const skip = () => {
    if (isFinished) return;
    setIsFinished(true);
    setCurrentLineIndex(logs.length - 1);
    onComplete?.();
  };

  const isErrorVariant = variant === "error";

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: 双击跳过动画
    <div
      onDoubleClick={skip}
      className={cn(
        "w-full min-h-60 p-5 bg-slate-900/60 backdrop-blur-md border rounded-xl shadow-2xl",
        isErrorVariant
          ? "border-red-900/50 shadow-red-900/10"
          : "border-slate-700/50 shadow-emerald-900/5",
      )}
    >
      <div className="flex justify-between items-center mb-4 border-b border-slate-700/50 pb-3">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_5px_rgba(239,68,68,0.5)]"></div>
          <div
            className={cn(
              "w-3 h-3 rounded-full",
              isErrorVariant
                ? "bg-slate-600"
                : "bg-yellow-500/80 shadow-[0_0_5px_rgba(234,179,8,0.5)]",
            )}
          ></div>
          <div
            className={cn(
              "w-3 h-3 rounded-full",
              isErrorVariant
                ? "bg-slate-600"
                : "bg-emerald-500/80 shadow-[0_0_5px_rgba(16,185,129,0.5)]",
            )}
          ></div>
        </div>
        <span
          className={cn(
            "text-xs font-mono px-2 py-0.5 rounded",
            isErrorVariant
              ? "text-red-400/80 bg-red-950/30 border border-red-900/50"
              : "bg-slate-800 text-slate-400",
          )}
        >
          {title}
        </span>
      </div>

      <div className="flex flex-col gap-1.5">
        {logs.map((log, index) => {
          const isVisible = index <= currentLineIndex;
          const isCurrentLine = index === currentLineIndex;

          return (
            isVisible && (
              <TerminalLine
                key={log.text}
                text={log.text}
                highlight={log.highlight}
                variant={log.variant}
                typingSpeed={speed}
                isActive={isCurrentLine && !isFinished}
                onComplete={handleLineComplete}
              />
            )
          );
        })}
      </div>
    </div>
  );
}
