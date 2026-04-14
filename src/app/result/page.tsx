"use client";

import "./_styles/style.css";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { PERSONALITIES } from "@/data/personalities";
import { decodeResult } from "@/logic/result-codec";
import { GithubLink } from "../_components/github-link";
import { ActionBar } from "./_components/action-bar";
import { ReportCard } from "./_components/report-card";
import { ScanningOverlay } from "./_components/scanning-overlay";

export default function ResultPage() {
  const [isScanning, setIsScanning] = useState(true);
  const [isExporting, setIsExporting] = useState(false);
  const reportRef = useRef<HTMLDivElement>(null);

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

  const shareUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/result?data=${data}`
      : "";

  const handleRestart = () => {
    router.push("/quiz");
  };

  const handleExport = async () => {
    if (!reportRef.current) return;
    setIsExporting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("✅ 绝密档案已生成！");
    } catch (error) {
      console.error("Export failed:", error);
    } finally {
      setIsExporting(false);
    }
  };

  if (isScanning) return <ScanningOverlay />;

  return (
    <>
      <div className="w-full max-w-300 mx-auto">
        <div className="pt-6 px-6 flex justify-end">
          <GithubLink />
        </div>
      </div>
      <div className="relative z-1 w-full max-w-lg mx-auto p-8 pb-12">
        <ReportCard
          reportRef={reportRef}
          isAnomaly={isAnomaly}
          personality={p}
          scores={scores}
          shareUrl={shareUrl}
        />
        <ActionBar
          isExporting={isExporting}
          onExport={handleExport}
          onRestart={handleRestart}
        />
      </div>
    </>
  );
}
