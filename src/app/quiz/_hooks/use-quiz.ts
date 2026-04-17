"use client";

import { useCallback, useState } from "react";
import { ALL_QUESTION_MAP, QUESTIONS_POOLS } from "@/data/questions";
import type { Genre, Question } from "@/data/types";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export const useQuiz = () => {
  // 题目队列
  const [queue, setQueue] = useState<Question[]>([]);
  // 用户答案 {questionId: optionIndex}
  const [answers, setAnswers] = useState<Record<string, number>>({});
  // 派生值
  const totalQuestions = queue.length;
  const answeredCount = queue.filter((q) => answers[q.id] !== undefined).length;
  const isFinished = totalQuestions > 0 && answeredCount === totalQuestions;

  /**
   * 根据游戏类型生成题目队列
   * 通用题 + 类型题，打乱顺序
   */
  const generateQueue = useCallback((genre: Exclude<Genre, "universal">) => {
    const universalPool = QUESTIONS_POOLS.universal;
    const genrePool = QUESTIONS_POOLS[genre];
    const q = shuffle([...universalPool, ...genrePool]);
    setQueue(q);
    setAnswers({});
  }, []);

  /**
   * 回答指定索引的题目
   * - 首次作答时返回下一个应跳转的索引（null 表示已到末尾）
   * - 修改答案时返回 null（不自动前进）
   */
  const answerQuestion = useCallback(
    (questionIndex: number, optionIndex: number) => {
      const question = queue[questionIndex];
      if (!question) return null;

      const newOption = question.options[optionIndex];
      if (!newOption) return null;

      const oldOptionIndex = answers[question.id];
      const oldOption =
        oldOptionIndex !== undefined ? question.options[oldOptionIndex] : null;

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
            copy.splice(questionIndex + 1, 0, newBranch);
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
      if (oldOptionIndex !== undefined) return null;

      if (newBranch || questionIndex < queue.length - 1) {
        return questionIndex + 1;
      }
      return null;
    },
    [queue, answers],
  );

  return {
    queue,
    totalQuestions,
    isFinished,
    answers,
    answerQuestion,
    generateQueue,
  };
};
