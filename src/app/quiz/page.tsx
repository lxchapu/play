/**
 * 测试入口
 */
"use client";

import { ArrowRight, Loader2 } from "lucide-react";
import { motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { META_QUESTION } from "@/data/questions";
import type { Genre } from "@/data/types";
import { QuestionBlock } from "./_components/question-block";
import { useQuiz } from "./_hooks/use-quiz";

export default function QuizPage() {
  const [metaAnswer, setMetaAnswer] = useState<Exclude<
    Genre,
    "universal"
  > | null>(null);

  const {
    queue,
    totalQuestions,
    answeredCount,
    progress,
    isFinished,
    isGenerating,
    answers,
    answerQuestion,
    generateQueue,
  } = useQuiz();

  const canSubmit = metaAnswer !== null && isFinished;

  const scrollToQuestion = useCallback(
    (qIdx: number) => {
      console.log("滚动到第%d题，id：%s", qIdx + 1, queue[qIdx].id);
      document
        .getElementById(queue[qIdx].id)
        ?.scrollIntoView({ behavior: "smooth" });
    },
    [queue],
  );
  const prevGeneratingRef = useRef(isGenerating);

  // isGenerating 从 true → false 时滚动到第一题
  useEffect(() => {
    if (prevGeneratingRef.current && !isGenerating && queue.length > 0) {
      console.log("已生成题目：", queue);
      scrollToQuestion(0);
    }
    prevGeneratingRef.current = isGenerating;
  }, [isGenerating, queue, scrollToQuestion]);

  const handleOptionSelect = (qIdx: number, optIdx: number) => {
    const nextIdx = answerQuestion(qIdx, optIdx);
    if (nextIdx !== null) {
      scrollToQuestion(nextIdx);
    }
  };

  const handleMetaSelect = (id: Exclude<Genre, "universal">) => {
    setMetaAnswer(id);
    generateQueue(id);
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/92 backdrop-blur-[saturate(1.6)_blur(10px)] border-b border-border">
        <div className="max-w-1120 mx-auto px-8 py-3.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-5.5 h-5.5 rounded-md bg-(--color-brand) relative">
              <div className="absolute inset-1.5 rounded-xs bg-white" />
            </div>
            <span className="font-title text-lg font-bold text-text-dark tracking-wide">
              PLAY
            </span>
            <span className="text-[13px] text-text-mid tracking-wide">
              {isGenerating
                ? "生成中..."
                : metaAnswer
                  ? `进行中 · ${answeredCount} / ${totalQuestions}`
                  : "请选择社区"}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/lxchapu/play"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-text-mid hover:text-text-dark transition-colors"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="shrink-0"
                aria-hidden="true"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="bg-(--color-brand) text-white py-10 px-6 text-center">
        <div className="max-w-175 mx-auto">
          <p className="font-title font-bold text-[32px] leading-tight tracking-tight mb-2">
            自嘲型游戏人格测试
          </p>
          <p className="text-[15px] leading-relaxed text-white/85">
            据实作答，勿过虑，题题必选；若场景不适用，请按前置题所选语境代入想象。当前路径随前置题与部分选项动态扩展。
          </p>
        </div>
      </div>

      {/* Quiz List */}
      <div className="max-w-180 mx-auto px-6 py-10 flex flex-col gap-16">
        {/* META Question */}
        <QuestionBlock
          isMeta
          number="META"
          title={META_QUESTION.title}
          question={META_QUESTION.question}
          options={META_QUESTION.options.map((o) => ({
            text: o.text,
            selected: o.id === metaAnswer,
          }))}
          onSelect={(idx) => handleMetaSelect(META_QUESTION.options[idx].id)}
          note={META_QUESTION.note}
        />

        {isGenerating ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <Loader2 className="w-8 h-8 text-(--color-brand) animate-spin" />
            <p className="text-sm text-text-mid">正在生成题目...</p>
          </div>
        ) : (
          <>
            {/* Questions */}
            {queue.map((q, qIdx) => (
              <QuestionBlock
                key={q.id}
                id={q.id}
                number={`Q${String(qIdx + 1).padStart(2, "0")}`}
                title={q.title}
                question={q.question}
                options={q.options.map((o, i) => ({
                  text: o.text,
                  selected: answers[q.id] === i,
                }))}
                onSelect={(idx) => handleOptionSelect(qIdx, idx)}
              />
            ))}
          </>
        )}
      </div>

      {/* Submit Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/96 backdrop-blur-[saturate(1.6)_blur(10px)] border-t border-border px-6 py-3.5">
        <div className="max-w-240 mx-auto flex items-center gap-6">
          {/* Progress */}
          <div className="flex-1 flex items-center gap-3.5">
            <div className="flex-1 h-1.5 bg-border rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-(--color-brand) rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
              />
            </div>
            <span className="font-title font-bold text-[13px] text-text-dark min-w-10 text-right">
              {progress}%
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="button"
            disabled={!canSubmit}
            className="inline-flex items-center gap-2.5 text-sm font-semibold rounded-full px-6.5 py-3 bg-(--color-brand) text-white shadow-[0_4px_16px_rgba(99,102,241,0.25)] hover:bg-brand-dark hover:shadow-[0_6px_20px_rgba(99,102,241,0.35)] disabled:opacity-45 disabled:cursor-not-allowed transition-all"
          >
            {!metaAnswer
              ? "请先完成前置题"
              : canSubmit
                ? "查看结果"
                : `还剩 ${totalQuestions - answeredCount} 题`}
            {!canSubmit && <ArrowRight size={16} />}
          </button>
        </div>
      </div>

      {/* Bottom spacer for fixed bar */}
      <div className="h-28" />
    </div>
  );
}
