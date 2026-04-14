import { QRCodeSVG } from "qrcode.react";
import { type Ref, useMemo } from "react";
import type { Personality, Scores } from "@/data/types";
import { OctagonRadar } from "./octagon-radar";

/**
 * 档案头部
 */
function ReportHeader({
  personality,
  isAnomaly,
  diagnosticId,
}: {
  personality: Personality;
  isAnomaly: boolean;
  diagnosticId: string;
}) {
  return (
    <div className="flex items-start justify-between mb-8 animate-[reveal_0.5s_ease-out_both_0.1s]">
      <div className="flex flex-col relative z-10">
        {isAnomaly ? (
          <h3 className="text-purple-400 font-mono text-[10px] md:text-xs tracking-[0.2em] mb-1 uppercase animate-pulse flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-purple-500 rounded-sm"></span>{" "}
            隐藏人格强制覆写
          </h3>
        ) : (
          <h3 className="text-slate-500 font-mono text-[10px] md:text-xs tracking-[0.2em] mb-1 uppercase flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-sm"></span>{" "}
            标准确诊类型
          </h3>
        )}

        <h1
          className={`text-4xl md:text-5xl font-black text-slate-100 tracking-tighter drop-shadow-md mt-1 ${isAnomaly ? "glitch-text-purple" : "glitch-text"}`}
          data-text={personality.abbr}
        >
          {personality.abbr}
        </h1>
        <h2 className="text-xl md:text-2xl font-bold text-slate-300 mt-1">
          {personality.title}
        </h2>

        <div className="mt-3 font-mono text-[8px] text-slate-600 tracking-widest uppercase">
          {`ID: ${diagnosticId} // TYPE_`}
          {personality.abbr}
        </div>
      </div>

      <div
        className={`relative shrink-0 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-sm bg-slate-800/80 border ${isAnomaly ? "border-purple-600/50" : "border-slate-600/50"} shadow-lg group z-10 backdrop-blur-sm`}
      >
        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-slate-400/50"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-slate-400/50"></div>
        <span className="text-3xl relative z-10">{personality.emoji}</span>
      </div>
    </div>
  );
}
/**
 * 特质标签列表
 */
function TraitTags({
  personality,
  isAnomaly,
}: {
  personality: Personality;
  isAnomaly: boolean;
}) {
  return (
    <div className="mt-2 pt-5 border-t border-dashed border-slate-800/80 flex flex-wrap justify-center gap-2">
      {personality.traits.map((trait: string, index: number) => (
        <div
          key={trait}
          className={`flex items-center border ${isAnomaly ? "border-purple-900/50 bg-purple-950/20" : "border-emerald-900/50 bg-emerald-950/20"} rounded-sm overflow-hidden`}
        >
          <span
            className={`font-mono text-[9px] px-1.5 py-1 border-r ${isAnomaly ? "border-purple-900/50 text-purple-400/80" : "border-emerald-900/50 text-emerald-500/80"}`}
          >
            {`T${index + 1}`}
          </span>
          <span className="text-slate-300 font-mono text-[10px] md:text-xs px-2 py-1 tracking-wider">
            {trait}
          </span>
        </div>
      ))}
    </div>
  );
}

/**
 * 语录
 */
function VoiceLog({ personality }: { personality: Personality }) {
  return (
    <div className="mb-4 pl-4 border-l-2 border-slate-700 relative">
      <span className="text-[10px] font-mono text-slate-500 mb-1 block">
        {">"} [VOICE_LOG_RECORDED] :
      </span>
      <p className="text-slate-300 font-serif italic text-sm md:text-base leading-relaxed">
        {personality.quote}
      </p>
    </div>
  );
}

/**
 * 行为扫描报告
 */
function BehaviorScan({
  personality,
  isAnomaly,
}: {
  personality: Personality;
  isAnomaly: boolean;
}) {
  return (
    <div
      className={`bg-slate-800/30 p-4 rounded-sm border border-slate-700/50 relative backdrop-blur-sm`}
    >
      <span
        className={`font-mono text-[10px] block mb-2 font-bold uppercase tracking-wider ${isAnomaly ? "text-purple-400" : "text-emerald-400"}`}
      >
        {">"} Behavior_Scan_Report / 行为扫描
      </span>
      <p className="text-slate-300 text-xs md:text-sm leading-relaxed text-justify">
        {personality.summary}
      </p>
    </div>
  );
}

/**
 * 系统评价
 */
function SystemEvaluation({
  personality,
  isAnomaly,
}: {
  personality: Personality;
  isAnomaly: boolean;
}) {
  return (
    <div className="relative mb-4 rounded-sm overflow-hidden border border-slate-700/80 shadow-md bg-slate-900/80 backdrop-blur-sm">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-500"></div>

      <div className="p-4 relative z-10">
        <span className="text-yellow-500/90 font-mono text-[10px] md:text-xs mb-3 font-bold flex items-center gap-2 uppercase tracking-wider">
          <span className="w-1.5 h-1.5 bg-yellow-500/80 rounded-full animate-pulse"></span>
          System_Evaluation / 系统评价
        </span>
        <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-3 text-justify">
          {personality.toxicEvaluation}
        </p>
        <p
          className={`font-bold text-sm md:text-base leading-relaxed text-justify ${isAnomaly ? "text-purple-400" : "text-emerald-400"}`}
        >
          {personality.soulFinisher}
        </p>
      </div>
    </div>
  );
}
/**
 * 赛博处方
 */
function Advice({ personality }: { personality: Personality }) {
  return (
    <div className="relative rounded-sm overflow-hidden border border-cyan-800/50 shadow-md bg-cyan-950/20 backdrop-blur-sm ">
      <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500"></div>
      <div className="p-4 relative z-10">
        <span className="text-cyan-400 font-mono text-[10px] mb-2 font-bold flex items-center gap-1.5 uppercase tracking-wider">
          CYBER_PRESCRIPTION / 赛博处方
        </span>
        <p className="text-cyan-100/80 text-xs md:text-sm leading-relaxed text-justify">
          {personality.advice}
        </p>
      </div>
    </div>
  );
}
/**
 * 底部二维码
 */
function ReportFooter({
  isAnomaly,
  shareUrl,
}: {
  isAnomaly: boolean;
  shareUrl: string;
}) {
  return (
    <div className="mt-10 flex flex-col items-center justify-center border-t-2 border-dashed border-slate-700/60 pt-8 pb-2 animate-[reveal_0.5s_ease-out_both_0.9s]">
      <div className="relative p-2 md:p-3 mb-4">
        <div
          className={`absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 ${isAnomaly ? "border-purple-500/60" : "border-emerald-500/60"}`}
        ></div>
        <div
          className={`absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 ${isAnomaly ? "border-purple-500/60" : "border-emerald-500/60"}`}
        ></div>
        <div
          className={`absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 ${isAnomaly ? "border-purple-500/60" : "border-emerald-500/60"}`}
        ></div>
        <div
          className={`absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 ${isAnomaly ? "border-purple-500/60" : "border-emerald-500/60"}`}
        ></div>

        <div className="bg-slate-800 text-slate-400 p-1 rounded-sm shadow-xl">
          <QRCodeSVG
            value={shareUrl}
            size={100}
            bgColor="transparent"
            fgColor="currentColor"
          />
        </div>
      </div>
      <div className="flex flex-col items-center text-center">
        <span className="text-slate-400 font-mono text-sm md:text-base font-bold tracking-widest drop-shadow-sm">
          PLAY.LXCHAPU.COM
        </span>
        <span className="text-slate-600 font-mono text-[10px] md:text-xs mt-1 uppercase">
          Scan code to diagnose yourself
        </span>
      </div>
    </div>
  );
}

/**
 * 测试报告
 */
export function ReportCard({
  personality,
  reportRef,
  scores,
  shareUrl,
}: {
  personality: Personality;
  reportRef: Ref<HTMLDivElement>;
  scores: Scores;
  shareUrl: string;
}) {
  const diagnosticId = useMemo(
    () => Math.random().toString(36).substring(2, 10),
    [],
  );

  const isAnomaly = !!personality.hidden;

  return (
    <div
      ref={reportRef}
      id="report-card"
      className={`bg-slate-900 border ${isAnomaly ? "border-purple-700/50 shadow-[0_0_40px_rgba(168,85,247,0.3)]" : "border-slate-700/80 shadow-[0_0_40px_rgba(0,0,0,0.5)]"} relative overflow-hidden flex flex-col rounded-sm animate-[fadeIn_0.5s_ease-out]`}
    >
      <div className="absolute -top-5 -right-10 md:-top-10 md:-right-15 text-[200px] md:text-[260px] opacity-[0.03] pointer-events-none grayscale select-none rotate-12 flex items-center justify-center">
        {personality.emoji}
      </div>

      <div
        className={`bg-slate-800 text-slate-400 text-[10px] md:text-xs font-mono px-4 py-1.5 flex justify-between items-center border-b ${isAnomaly ? "border-purple-800" : "border-slate-700"} relative z-1`}
      >
        <span>{"// PLAY_DIAGNOSTIC_REPORT"}</span>
        <span
          className={`flex items-center gap-2 ${isAnomaly ? "text-purple-500/80" : "text-emerald-500/80"}`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full animate-pulse ${isAnomaly ? "bg-purple-500" : "bg-emerald-500"}`}
          ></span>
          {isAnomaly ? "ANOMALY_OVERRIDE" : "CONFIDENTIAL"}
        </span>
      </div>

      <div className="p-6 md:p-8 flex flex-col relative z-1">
        <ReportHeader
          diagnosticId={diagnosticId}
          isAnomaly={isAnomaly}
          personality={personality}
        />

        <div className="bg-slate-950/40 border border-slate-800 rounded-lg p-5 mb-8 relative animate-[reveal_0.5s_ease-out_both_0.3s]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 px-3 text-[10px] font-mono text-slate-500 tracking-widest">
            NEURAL_MAPPING_DATA
          </div>

          <OctagonRadar isAnomaly={isAnomaly} scores={scores} />

          <TraitTags isAnomaly={isAnomaly} personality={personality} />
        </div>

        <div className="mb-8 animate-[reveal_0.5s_ease-out_both_0.5s]">
          <VoiceLog personality={personality} />

          <BehaviorScan isAnomaly={isAnomaly} personality={personality} />
        </div>

        <div className="border-t-2 border-dashed border-slate-700/60 pt-6 animate-[reveal_0.5s_ease-out_both_0.7s]">
          <SystemEvaluation isAnomaly={isAnomaly} personality={personality} />
          <Advice personality={personality} />
        </div>

        <ReportFooter isAnomaly={isAnomaly} shareUrl={shareUrl} />
      </div>

      <div
        className={`absolute inset-0 pointer-events-none bg-linear-to-b from-transparent via-(--ui-gradient-color) to-transparent h-5 animate-[scanLine_4s_linear_infinite] z-20`}
        style={
          {
            "--ui-gradient-color": isAnomaly
              ? "rgba(168,85,247,0.05)"
              : "rgba(16,185,129,0.05)",
          } as React.CSSProperties
        }
      ></div>
    </div>
  );
}
