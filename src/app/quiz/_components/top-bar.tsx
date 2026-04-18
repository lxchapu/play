"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { ArrowLeft, TriangleAlert } from "lucide-react";

export function TopBar() {
  const router = useRouter();
  const [showExitModal, setShowExitModal] = useState(false);

  const handleBack = () => {
    setShowExitModal(true);
  };

  const confirmExit = () => {
    setShowExitModal(false);
    router.push("/");
  };

  const cancelExit = () => {
    setShowExitModal(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && showExitModal) {
        cancelExit();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showExitModal]);

  return (
    <>
      <button
        type="button"
        onClick={handleBack}
        className="flex items-center gap-2 px-3 py-1.5 text-slate-500 hover:text-red-400 border border-transparent hover:border-red-500/30 hover:bg-red-500/10 rounded transition-all font-mono text-xs sm:text-sm group"
      >
        <ArrowLeft
          className="group-hover:-translate-x-1 transition-transform"
          size={16}
        />
        <span className="hidden sm:inline tracking-wider">TERMINATE_LINK</span>
      </button>

      {showExitModal && (
        <div
          onClick={cancelExit}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-md w-full bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-xl p-6 shadow-[0_0_30px_rgba(16,185,129,0.1)]"
          >
            <div className="flex items-start gap-4 mb-6">
              <TriangleAlert
                className="text-red-400 mt-1 animate-pulse shrink-0"
                size={18}
              />

              <div>
                <h3 className="text-red-400 font-bold font-mono text-base mb-3 tracking-wider">
                  SYS_WARNING
                </h3>
                <div className="text-slate-300 font-mono text-sm space-y-2 leading-relaxed">
                  <p>
                    当前的诊断进度和尚未写入的人格映射将会
                    <span className="text-red-400 font-bold">永久丢失</span>。
                  </p>
                  <p className="pt-2 animate-pulse">
                    _确定要强行切断神经链接吗？
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-3 font-mono mt-8">
              <button
                type="button"
                onClick={cancelExit}
                className="px-4 py-2 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500 hover:text-black transition-all duration-200 uppercase tracking-wider text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
              >
                [ 继续同步/RESUME ]
              </button>
              <button
                type="button"
                onClick={confirmExit}
                className="px-4 py-2 border border-red-500/30 text-red-400 hover:bg-red-500 hover:text-black transition-all duration-200 uppercase tracking-wider text-sm focus:outline-none focus:ring-2 focus:ring-red-500/50"
              >
                [ 强行断开/ABORT ]
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
