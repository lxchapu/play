"use client";

import { useCallback, useRef, useState } from "react";
import { ALL_QUESTION_MAP, QUESTIONS_POOLS } from "@/data/questions";
import type { Dimension, Genre, Question, Scores } from "@/data/types";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickRandom<T>(arr: T[], count: number): T[] {
  return shuffle(arr).slice(0, count);
}

export const useQuiz = () => {
  // 题目队列
  const [queue, setQueue] = useState<Question[]>([]);
  // 用户答案：questionId → optionIndex
  const [answers, setAnswers] = useState<Record<string, number>>({});
  // 是否正在生成题目
  const [isGenerating, setIsGenerating] = useState(false);
  // 生成定时器引用，防止快速切换时竞态
  const generateTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  // 派生值
  const totalQuestions = queue.length;
  const answeredCount = queue.filter((q) => answers[q.id] !== undefined).length;
  const isFinished = totalQuestions > 0 && answeredCount === totalQuestions;

  /**
   * 根据游戏类型生成题目队列
   * 通用题 10 道 + 类型题 8 道，打乱顺序
   */
  const generateQueue = useCallback((genre: Exclude<Genre, "universal">) => {
    if (generateTimerRef.current) clearTimeout(generateTimerRef.current);
    setIsGenerating(true);
    const startTime = Date.now();
    const universalPool = QUESTIONS_POOLS.universal;
    const genrePool = QUESTIONS_POOLS[genre];
    const q = shuffle([
      ...pickRandom(universalPool, 10),
      ...pickRandom(genrePool, 8),
    ]);
    const elapsed = Date.now() - startTime;
    const delay = Math.max(0, 500 - elapsed);
    generateTimerRef.current = setTimeout(() => {
      setQueue(q);
      setAnswers({});
      setIsGenerating(false);
    }, delay);
  }, []);

  /**
   * 回答指定索引的题目
   * - 首次作答时返回下一个应跳转的索引（null 表示已到末尾）
   * - 修改答案时返回 null（不自动前进）
   */
  const answerQuestion = useCallback(
    (index: number, optionIndex: number) => {
      const question = queue[index];
      if (!question) return null;

      const newOption = question.options[optionIndex];
      if (!newOption) return null;

      const oldOptIdx = answers[question.id];
      const oldOption =
        oldOptIdx !== undefined ? question.options[oldOptIdx] : null;

      const oldBranchId = oldOption?.triggerBranchId;
      const newBranchId = newOption.triggerBranchId;

      // 判断分支变更
      const shouldRemoveOldBranch =
        oldBranchId !== undefined && oldBranchId !== newBranchId;
      const newBranch =
        newBranchId && !queue.some((q) => q.id === newBranchId)
          ? (ALL_QUESTION_MAP[newBranchId] ?? null)
          : null;

      // 增删队列中的分支题
      if (shouldRemoveOldBranch || newBranch) {
        setQueue((prev) => {
          const copy = shouldRemoveOldBranch
            ? prev.filter((q) => q.id !== oldBranchId)
            : [...prev];
          if (newBranch) {
            copy.splice(index + 1, 0, newBranch);
          }
          return copy;
        });
      }

      // 清理被移除的分支题的答案
      if (shouldRemoveOldBranch && oldBranchId) {
        setAnswers((prev) => {
          const next = { ...prev };
          delete next[oldBranchId];
          return next;
        });
      }

      // 记录答案
      setAnswers((prev) => ({ ...prev, [question.id]: optionIndex }));

      // 仅首次作答时返回下一题索引
      if (oldOptIdx !== undefined) return null;

      if (newBranch || index < queue.length - 1) {
        return index + 1;
      }
      return null;
    },
    [queue, answers],
  );

  /**
   * 计算当前全部有效答案的维度得分与隐藏人格得分
   */
  const getScores = useCallback(() => {
    const s: Scores = {
      P: 0,
      L: 0,
      A: 0,
      Y: 0,
      p: 0,
      l: 0,
      a: 0,
      y: 0,
    };
    const h = { hack: 0, liby: 0, smur: 0 };

    for (const q of queue) {
      const optIdx = answers[q.id];
      if (optIdx === undefined) continue;
      const opt = q.options[optIdx];
      if (!opt) continue;
      for (const [dim, weight] of Object.entries(opt.weight)) {
        s[dim as Dimension] += weight;
      }
      h.hack += opt.hackProbability ?? 0;
      h.liby += opt.libyProbability ?? 0;
      h.smur += opt.smurProbability ?? 0;
    }

    return { scores: s, hiddenPersonalityScores: h };
  }, [queue, answers]);

  return {
    queue,
    totalQuestions,
    answeredCount,
    progress:
      totalQuestions === 0
        ? 0
        : Math.round((answeredCount / totalQuestions) * 100),
    isFinished,
    isGenerating,
    answers,
    getScores,
    answerQuestion,
    generateQueue,
  };
};
