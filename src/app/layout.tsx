import "./_styles/global.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "P·L·A·Y 游戏人格诊断系统 | 测算你的赛博病历",
    template: "%s | P·L·A·Y",
  },
  description:
    "虚伪的 MBTI 已经过时，SBTI 赛博变体已部署。通过 4 个维度解剖你的真实游戏人格。敢来直面吃灰的游戏库和凌晨的连败记录，查收你的专属赛博病历吗？",
  keywords: [
    "SBTI",
    "游戏人格测试",
    "玩家类型诊断",
    "电子阳痿",
    "MBTI",
    "赛博诊所",
    "游戏测试",
    "P.L.A.Y",
  ],
  authors: [{ name: "lxchapu" }],

  openGraph: {
    title: "P·L·A·Y 游戏人格诊断 | 查收你的赛博病历",
    description:
      "在这个地下诊所，你的每次点击和破防都在出卖你。点击接入终端，剥开高端玩家的虚荣伪装。",
    url: "https://play.lxchapu.com",
    siteName: "P·L·A·Y 诊断终端",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "P·L·A·Y 赛博共鸣诊断系统",
      },
    ],
    locale: "zh_CN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "P·L·A·Y 游戏人格诊断 | 查收你的赛博病历",
    description:
      "虚伪的 MBTI 已经过时。敢来测算你的赛博劳役抗性与多巴胺受体吗？",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://play.lxchapu.com",
  },
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
