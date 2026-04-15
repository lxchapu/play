"use client";

import { LoaderCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/cn";

interface ActionButtonProps {
  /** 按钮是否处于加载状态 */
  loading?: boolean;
  /** 按钮是否禁用 */
  disabled?: boolean;
  /** 正常显示的文案 */
  label: string;
  /** hover 时显示的文案（用于 glitch 效果） */
  hoverLabel?: string;
  /** 跳转的路径 */
  href: string;
  /** 右侧自定义图标 */
  icon?: React.ReactNode;
}

/**
 * 赛博风格操作按钮，支持加载态、glitch hover 效果和扫描光效
 */
export function ActionButton({
  loading = false,
  disabled = false,
  label,
  hoverLabel,
  href,
  icon,
}: ActionButtonProps) {
  const [isHovering, setIsHovering] = useState(false);

  const isDisabled = loading || disabled;

  const inner = (
    <>
      {!isDisabled && (
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite]" />
      )}
      <div className="p-3.5 md:p-4 font-mono font-bold text-base md:text-lg flex items-center justify-center gap-2">
        {loading && <LoaderCircle className="my-icon animate-spin" />}
        <span
          className={cn("relative", isHovering && !isDisabled && "glitch-text")}
          data-text={hoverLabel ?? label}
        >
          {isHovering && !isDisabled ? (hoverLabel ?? label) : label}
        </span>
        {!isHovering && !isDisabled && icon}
      </div>
    </>
  );
  return (
    <Link
      href={href}
      className={cn(
        "relative min-w-xs rounded-lg overflow-hidden transition-all duration-300 border",
        isDisabled
          ? "bg-slate-800 text-slate-500 border-slate-700/50 cursor-not-allowed"
          : "bg-emerald-500 text-slate-950 border-transparent hover:bg-emerald-400 hover:scale-[1.05] shadow-[0_0_25px_rgba(16,185,129,0.4)]",
      )}
      onClick={isDisabled ? (e) => e.preventDefault() : undefined}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {inner}
    </Link>
  );
}
