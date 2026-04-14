"use client";

import "./_styles/style.css";

import { toPng } from "html-to-image";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef, useState } from "react";
import { PERSONALITIES } from "@/data/personalities";
import { decodeResult } from "@/logic/result-codec";
import { GithubLink } from "../_components/github-link";
import { ActionBar } from "./_components/action-bar";
import { ReportCard } from "./_components/report-card";
import { ScanningOverlay } from "./_components/scanning-overlay";

function ResultContent() {
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

  const shareUrl = typeof window !== "undefined" ? window.location.origin : "";

  const handleRestart = () => {
    router.push("/quiz");
  };

  const handleExport = async () => {
    if (!reportRef.current) return;
    setIsExporting(true);
    try {
      const dataUrl = await toPng(reportRef.current, {
        pixelRatio: 2,
        cacheBust: true,
      });
      const link = document.createElement("a");
      link.download = `赛博病历-${p.title}.png`;
      link.href = dataUrl;
      link.click();
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

export default function ResultPage() {
  return (
    <Suspense>
      <ResultContent />
    </Suspense>
  );
}
