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
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
