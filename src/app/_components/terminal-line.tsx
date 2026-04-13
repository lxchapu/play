"use client";

import { useEffect, useState } from "react";

interface TerminalLineProps {
  text: string;
  delay: number;
  onComplete?: () => void;
  isGlitch?: boolean;
}

export const TerminalLine = ({
  text,
  delay,
  onComplete,
  isGlitch = false,
}: TerminalLineProps) => {
  const [displayedText, setDisplayedText] = useState<string>("");

  useEffect(() => {
    let i = 0;
    const timer = window.setTimeout(() => {
      const interval = window.setInterval(() => {
        setDisplayedText(text.substring(0, i + 1));
        i++;
        if (i >= text.length) {
          window.clearInterval(interval);
          if (onComplete) window.setTimeout(onComplete, 400);
        }
      }, 30); // 打字速度
      return () => window.clearInterval(interval);
    }, delay);
    return () => window.clearTimeout(timer);
  }, [text, delay, onComplete]);

  // 高亮 P.L.A.Y 首字母的渲染逻辑
  const renderText = () => {
    if (displayedText.startsWith("[")) {
      const parts = displayedText.split("]");
      if (parts.length > 1) {
        const bracketContent = parts[0].substring(1);
        const restOfText = parts.slice(1).join("]");

        // 针对 P, L, A, Y 进行更亮的高亮 + 微微的霓虹投影
        if (["P", "L", "A", "Y"].includes(bracketContent)) {
          return (
            <>
              [
              <span className="text-emerald-300 font-bold text-lg drop-shadow-[0_0_5px_rgba(52,211,153,0.6)]">
                {bracketContent}
              </span>
              ]{restOfText}
            </>
          );
        }
      }
    }
    return displayedText;
  };

  return (
    <div
      className={`font-mono text-sm md:text-base mb-1 ${isGlitch ? "text-red-400 animate-pulse" : "text-emerald-400"}`}
    >
      <span className="mr-2 text-neutral-500">{">"}</span>
      {renderText()}
      {displayedText.length < text.length && (
        <span className="animate-ping ml-1 bg-emerald-400 inline-block w-2 h-4 align-middle"></span>
      )}
    </div>
  );
};
