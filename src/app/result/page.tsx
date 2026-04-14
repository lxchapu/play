"use client";

import "./_styles/style.css";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { PERSONALITIES } from "@/data/personalities";
import { decodeResult } from "@/logic/result-codec";
import { GithubLink } from "../_components/github-link";
import { OctagonRadar } from "./_components/octagon-radar";
import { ScanningOverlay } from "./_components/scanning-overlay";

export default function ResultPage() {
  const [isScanning, setIsScanning] = useState(true);

  // 模拟报告生成过程
  useEffect(() => {
    const timer = setTimeout(() => setIsScanning(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const router = useRouter();
  const searchParams = useSearchParams();
  const data = searchParams.get("data");
  if (!data) return null;

  const result = decodeResult(data);
  if (!result || !PERSONALITIES[result.id]) return null;

  const { id, scores } = result;
  const p = { id, ...PERSONALITIES[id] };
  const isAnomaly = !!p.hidden;
  const themeAccent = isAnomaly ? "purple" : "emerald";

  function onReboot() {
    router.push("/quiz");
  }

  function onSave() {}

  if (isScanning) return <ScanningOverlay />;

  return (
    <>
      <div className="w-full max-w-300 mx-auto">
        <div className="pt-6 px-6 flex justify-end">
          <GithubLink />
        </div>
      </div>
      <div className="relative z-1 w-full max-w-125 mx-auto px-8 py-10">
        <div
          id="report-card"
          className={`bg-slate-900 border ${isAnomaly ? "border-purple-700/50 shadow-[0_0_40px_rgba(168,85,247,0.3)]" : "border-slate-700/80 shadow-[0_0_40px_rgba(0,0,0,0.5)]"} relative overflow-hidden flex flex-col rounded-sm animate-[fadeIn_0.5s_ease-out]`}
        >
          <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[200px] opacity-[0.02] pointer-events-none grayscale select-none">
            {p.emoji}
          </div>

          <div
            className={`bg-slate-800 text-slate-400 text-[10px] md:text-xs font-mono px-4 py-1.5 flex justify-between items-center border-b ${isAnomaly ? "border-purple-800" : "border-slate-700"} relative z-10`}
          >
            <span>{"// PLAY_DIAGNOSTIC_REPORT"}</span>
            <span
              className={`text-${themeAccent}-500/80 flex items-center gap-2`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full bg-${themeAccent}-500 animate-pulse`}
              ></span>
              {isAnomaly ? "ANOMALY_OVERRIDE" : "CONFIDENTIAL"}
            </span>
          </div>

          <div className="p-6 md:p-8 flex flex-col relative z-10">
            <div className="text-center mb-6">
              <div
                className={`relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-800 border-2 ${isAnomaly ? "border-purple-600" : "border-slate-600"} shadow-[0_0_20px_rgba(0,0,0,0.5)] mb-4 group`}
              >
                <div
                  className={`absolute inset-0 rounded-full border ${isAnomaly ? "border-purple-500/50" : "border-emerald-500/30"} animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]`}
                ></div>
                <span className="text-3xl drop-shadow-md relative z-10 group-hover:scale-110 transition-transform">
                  {p.emoji}
                </span>
                <div
                  className={`absolute bottom-0 right-0 w-3.5 h-3.5 bg-${themeAccent}-500 border-2 border-slate-800 rounded-full`}
                ></div>
              </div>

              {isAnomaly ? (
                <h3 className="text-purple-400 font-mono text-sm tracking-[0.2em] mb-1 uppercase animate-pulse">
                  [!] 隐藏人格强制覆写
                </h3>
              ) : (
                <h3 className="text-emerald-400/80 font-mono text-sm tracking-[0.3em] mb-1 uppercase">
                  确诊类型
                </h3>
              )}

              <h1
                className={`text-5xl font-black text-slate-100 tracking-tighter drop-shadow-md mb-1 ${isAnomaly ? "glitch-text-purple" : "glitch-text"}`}
                data-text={p.id}
              >
                {p.id}
              </h1>
              <h2 className="text-2xl font-bold text-slate-300 mt-1">
                {p.title}
              </h2>

              {/* 核心人格特质 (Core Traits) */}
              <div className="mt-6">
                <div className="w-full text-slate-500 font-mono text-[10px] mb-2 flex items-center justify-center gap-1.5 opacity-80">
                  <span
                    className={`w-1 h-1 bg-${themeAccent}-500 rounded-full animate-ping`}
                  ></span>
                  CORE_TRAITS / 核心人格特质
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {p.traits?.map((trait: string, index: number) => (
                    <div
                      key={trait}
                      className="flex items-center border border-slate-700/80 bg-slate-800/30 rounded overflow-hidden shadow-inner"
                    >
                      <span className="text-slate-600 font-mono text-[10px] px-1.5 py-1 border-r border-slate-700/50 bg-slate-900/50">
                        {`0${index + 1}`}
                      </span>
                      <span className="text-slate-300 font-mono text-xs px-2 py-1 tracking-wider">
                        {trait}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 1. 人格语录 (提前作为座右铭) */}
            <div
              className={`text-center mb-2 italic text-slate-300 font-serif text-lg px-6 py-4 relative`}
            >
              <span
                className={`absolute left-0 top-0 ${isAnomaly ? "text-purple-500/30" : "text-slate-600/50"} text-5xl font-serif leading-none`}
              >
                "
              </span>
              {p.quote}
              <span
                className={`absolute right-0 -bottom-5 ${isAnomaly ? "text-purple-500/30" : "text-slate-600/50"} text-5xl font-serif leading-none`}
              >
                "
              </span>
            </div>

            {/* 2. 八极神经映射雷达图 */}
            <OctagonRadar isAnomaly={isAnomaly} scores={scores} />

            {/* 3. 行为扫描 (客观特征总结) */}
            <div
              className={`bg-slate-950/50 border ${isAnomaly ? "border-purple-900/50" : "border-slate-800"} p-4 rounded-lg mb-6 text-sm text-slate-300 leading-relaxed relative`}
            >
              <div
                className={`absolute top-0 left-0 w-1 h-full bg-${themeAccent}-600 rounded-l-lg`}
              ></div>
              <span
                className={`text-${themeAccent}-400 font-mono text-xs block mb-2 font-bold`}
              >
                {">"} BEHAVIOR_SCAN_REPORT
              </span>
              {p.summary}
            </div>

            {/* 4. 合并后的多段式伤害报告 (系统锐评 + 灵魂补刀) */}
            <div className="mb-6 rounded-lg border border-slate-700/80 overflow-hidden flex flex-col bg-slate-900 shadow-lg">
              {/* 上半部：客观锐评 */}
              <div className="p-4 md:p-5 relative bg-linear-to-br from-slate-800/50 to-transparent">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-500/80"></div>
                <span className="text-yellow-500/90 font-mono text-xs mb-3 font-bold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-yellow-500/80 rounded-full"></span>
                  SYSTEM_CRITIQUE / 系统锐评
                </span>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  {p.toxicEvaluation}
                </p>
              </div>

              {/* 下半部：深层心理暴击 */}
              <div className="p-4 md:p-5 bg-red-950/20 border-t border-slate-700/80 relative overflow-hidden group">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(239,68,68,0.03)_10px,rgba(239,68,68,0.03)_20px)]"></div>
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500/80"></div>
                <div className="relative z-10">
                  <span className="text-red-400 font-mono text-xs mb-3 font-bold animate-pulse flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                    [!] CRITICAL_DAMAGE / 灵魂补刀
                  </span>
                  <p className="text-slate-100 font-bold text-base md:text-lg leading-relaxed drop-shadow-md">
                    {p.soulFinisher}
                  </p>
                </div>
              </div>
            </div>

            {/* 5. 赛博处方 (建议) */}
            {p.advice && (
              <div className="bg-cyan-950/20 border border-cyan-500/30 p-4 rounded-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500"></div>
                <span className="text-cyan-400 font-mono text-xs mb-2 font-bold flex items-center gap-2">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  CYBER_PRESCRIPTION / 赛博处方
                </span>
                <p className="text-cyan-100/90 text-sm md:text-base leading-relaxed font-medium">
                  {p.advice}
                </p>
              </div>
            )}

            {/* 底部水印与二维码占位 */}
            <div className="mt-10 flex justify-between items-end border-t border-slate-800 pt-4">
              <div className="flex flex-col">
                <span className="text-slate-500 font-mono text-xs font-bold tracking-widest">
                  PLAY.LXCHAPU.COM
                </span>
                <span className="text-slate-600 font-mono text-[9px] mt-0.5">
                  SCAN CODE TO DIAGNOSE YOURSELF
                </span>
              </div>
              <div className="w-12 h-12 bg-slate-800 p-1 flex flex-wrap gap-0.5">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div
                    key={i.toString()}
                    className={`size-2.25 ${Math.random() > 0.4 ? "bg-slate-400" : "bg-transparent"}`}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* 全局扫描线特效 */}
          <div
            className={`absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,transparent_0%,rgba(${isAnomaly ? "168,85,247" : "16,185,129"},0.05)_50%,transparent_100%)] h-5 animate-[scanLine_4s_linear_infinite]`}
          ></div>
        </div>

        {/* 外部操作按钮区 */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-[fadeIn_1s_ease-out_0.5s_both]">
          <button
            type="button"
            className="flex-1 bg-emerald-500 text-slate-950 font-bold font-mono py-3 rounded hover:bg-emerald-400 transition-colors shadow-[0_0_15px_rgba(16,185,129,0.3)]"
            onClick={onSave}
          >
            [ 保存病历 / SHARE ]
          </button>
          <button
            type="button"
            className="flex-1 bg-transparent border border-slate-600 text-slate-400 font-mono py-3 rounded hover:bg-slate-800 hover:text-slate-200 transition-colors"
            onClick={onReboot}
          >
            [ 重新校准 / REBOOT ]
          </button>
        </div>
      </div>
    </>
  );
}
