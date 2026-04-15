import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "深度扫描中",
};

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
