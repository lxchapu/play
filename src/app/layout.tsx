import "./_styles/global.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "PLAY - 自嘲型游戏人格测试",
    template: "%s | P·L·A·Y",
  },
  description:
    "通过 4 个维度测试你的游戏人格类型，发现你属于哪种玩家。P·L·A·Y —— 一款自嘲型游戏人格测试工具。开发中。",
  keywords: [
    "游戏人格测试",
    "玩家类型",
    "游戏心理",
    "PLAY",
    "性格测试",
    "游戏风格",
  ],
  authors: [{ name: "PLAY Team" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="antialiased">
      <body className="bg-slate-950">
        <div className="relative min-h-screen bg-slate-950 text-neutral-200 selection:bg-emerald-500/30 overflow-hidden">
          {/* 氛围光晕 (Cyberpunk / Gaming Vibe) */}
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-emerald-600/10 blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-purple-600/10 blur-[120px] pointer-events-none"></div>

          {/* 科技感网格背景 */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

          {/* <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_20%,#020617_100%)] pointer-events-none"></div> */}

          {children}
        </div>
      </body>
    </html>
  );
}
