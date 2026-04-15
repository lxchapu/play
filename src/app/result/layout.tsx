import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "病历解密",
};

export default function ResultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
