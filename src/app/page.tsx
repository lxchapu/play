"use client";

import "./_styles/style.css";

import { ArrowRight, Check, TriangleAlert } from "lucide-react";
import { useState } from "react";
import { ActionButton } from "./_components/action-button";
import { GithubLink } from "./_components/github-link";
import { Terminal, type TerminalLog } from "./_components/terminal";

const LOGS: TerminalLog[] = [
  { text: "[SYS_INIT] 正在挂载 P·L·A·Y 赛博病理学剖析引擎..." },
  {
    text: "[WARN] 正在绕过自尊防火墙，强制提取 Steam/主机 吃灰库与历史破防录像...",
  },
  {
    text: "[P]ersistence - 测算赛博劳役抗性：现实打工，游戏里继续当免费黑奴？",
    highlight: "P",
  },
  {
    text: "[L]ogic - 扫描底层防御机制：是硬核机制懂哥，还是纯血玄学赌狗？",
    highlight: "L",
  },
  {
    text: "[A]ggression - 评估数字暴力倾向：顺风局装神指点江山，逆风局光速尽孝？",
    highlight: "A",
  },
  {
    text: "[Y]earning - 探测虚拟多巴胺受体：强度焦虑晚期，还是赛博情感难民？",
    highlight: "Y",
  },
  {
    text: "[FATAL] 虚伪外骨骼已卸载。请准备直面惨淡的真实。",
    variant: "error",
  },
];
export default function LandingPage() {
  const [booted, setBooted] = useState(false);

  return (
    <>
      <div className="w-full max-w-300 mx-auto">
        <div className="pt-6 px-6 flex justify-end">
          <GithubLink />
        </div>
      </div>
      <div className="relative z-1 w-full max-w-250 mx-auto">
        <div className="px-4 pt-4 pb-30 md:pt-10 md:px-8 flex flex-col gap-10">
          <Header />
          <div className="w-full max-w-2xl mx-auto animate-[fadeIn_0.5s_ease-out_both_0.2s]">
            <Terminal
              title="PLAY_Engine_v1.0.exe"
              logs={LOGS}
              onComplete={() => setBooted(true)}
            />
          </div>
          <Action booted={booted} />
        </div>
      </div>
    </>
  );
}

/**
 * 视觉主体和大标题
 */
function Header() {
  return (
    <div className="text-center gap-y-4 flex flex-col items-center animate-[fadeIn_0.5s_ease-out_both]">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-mono text-xs sm:text-sm shadow-[0_0_15px_rgba(16,185,129,0.15)]">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        高危玩家精神病理学临床诊断
      </div>

      <div className="font-mono text-sm sm:text-base text-slate-400 font-medium tracking-wide">
        <span className="line-through decoration-slate-500/70 decoration-2 opacity-50 transition-opacity hover:opacity-100 cursor-default">
          虚伪的 MBTI 已经过时
        </span>
        <span className="mx-3 text-emerald-500/40 italic">{"///"}</span>
        <span className="text-emerald-400 font-bold tracking-widest drop-shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse">
          SBTI 赛博变体已部署
        </span>
      </div>

      <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-neutral-100 via-neutral-300 to-slate-500 drop-shadow-lg">
        P·L·A·Y 共鸣诊断终端
      </h1>

      <p className="text-slate-400 font-mono text-sm md:text-base max-w-lg leading-relaxed">
        别装了。在这个地下诊所里，你库里{" "}
        <span className="text-emerald-400/80">吃灰的 500 个游戏</span>、凌晨 3
        点的 <span className="text-emerald-400/80">连败红温</span>，以及为了
        0.6% 概率 <span className="text-emerald-400/80">倾家荡产的嘴脸</span>
        ，系统都看得一清二楚。
      </p>
    </div>
  );
}

/**
 * 操作区
 */
function Action({ booted }: { booted: boolean }) {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="flex flex-col items-center gap-6 w-full animate-[fadeIn_0.5s_ease-out_both_0.4s]">
      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 p-6 rounded-xl w-full max-w-lg group hover:border-slate-500/50 transition-colors">
        <h3 className="text-red-400 font-mono text-sm mb-4 flex items-center gap-2">
          <TriangleAlert className="animate-pulse" size={14} />
          {"SYS_WARNING // 临床风险告知书"}
        </h3>

        <label className="flex items-start gap-3 cursor-pointer">
          <div className="relative shrink-0 mt-1">
            <input
              type="checkbox"
              className="peer sr-only"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <div className="size-5 border-2 border-slate-600 rounded bg-slate-800 peer-checked:bg-emerald-500 peer-checked:border-emerald-500 transition-all duration-200"></div>
            <div className="absolute inset-0 text-slate-950 scale-0 peer-checked:scale-100 transition-transform pointer-events-none flex items-center justify-center">
              <Check size={16} strokeWidth={3} />
            </div>
          </div>
          <span className="text-sm text-slate-300 group-hover:text-slate-200 transition-colors leading-relaxed">
            本人已知晓本系统具有极强的冒犯性与“精神解剖”属性。本人自愿卸下“高端玩家”的虚荣伪装，同意系统提取我最真实、最破防的赛博病历，并
            <strong className="text-emerald-400 font-normal">
              已做好被戳中脊梁骨的心理准备
            </strong>
            。若因诊断结果引发重度红温或电子阳痿加剧，本诊所概不负责。
          </span>
        </label>
      </div>

      <ActionButton
        loading={!booted}
        disabled={!(booted && agreed)}
        label={
          !booted
            ? "[ 引 擎 挂 载 中 ... ]"
            : !agreed
              ? "[ 等 待 授 权 ]"
              : "接 入 终 端"
        }
        hoverLabel="[ 接 入 终 端 ]"
        href="/quiz"
        icon={<ArrowRight className="my-icon animate-bounce-x" />}
      />
    </div>
  );
}
