"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

interface TerminalLineProps {
  text: string;
  highlight?: string;
  variant?: "normal" | "error";
  typingSpeed?: number;
  isActive?: boolean;
  onComplete?: () => void;
}

export function TerminalLine({
  text,
  highlight,
  variant = "normal",
  typingSpeed = 30,
  isActive = true,
  onComplete,
}: TerminalLineProps) {
  const [displayedText, setDisplayedText] = useState<string>("");

  // biome-ignore lint/correctness/useExhaustiveDependencies: 仅在挂载时执行一次
  useEffect(() => {
    if (!isActive) {
      setDisplayedText(text);
      return;
    }

    let i = 0;
    const interval = window.setInterval(() => {
      i++;
      setDisplayedText(text.substring(0, i));
      if (i >= text.length) {
        window.clearInterval(interval);
        if (onComplete) window.setTimeout(onComplete, 400);
      }
    }, typingSpeed);

    return () => window.clearInterval(interval);
  }, []);

  const renderText = () => {
    if (!highlight || !displayedText.includes(highlight)) {
      return displayedText;
    }
    const idx = displayedText.indexOf(highlight);
    return (
      <>
        {displayedText.substring(0, idx)}
        <span className="text-emerald-300 font-bold text-lg drop-shadow-[0_0_5px_rgba(52,211,153,0.6)]">
          {displayedText.substring(idx, idx + highlight.length)}
        </span>
        {displayedText.substring(idx + highlight.length)}
      </>
    );
  };

  const isError = variant === "error";

  return (
    <div
      className={cn(
        "font-mono text-sm md:text-base mb-1",
        isError ? "text-red-400 animate-pulse" : "text-emerald-400",
      )}
    >
      <span className="mr-2 text-neutral-500">{">"}</span>
      {renderText()}
      {displayedText.length < text.length && (
        <span className="animate-ping ml-1 bg-emerald-400 inline-block w-2 h-4 align-middle"></span>
      )}
    </div>
  );
}
