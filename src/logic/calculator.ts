/**
 * 分值计算
 */

import type { Dimension, Question, Scores } from "@/data/types";

export interface HiddenPersonalityScores {
  hack: number;
  hams: number;
  mama: number;
  arch: number;
}

export interface CalculationResult {
  scores: Scores;
  hiddenPersonalityScores: HiddenPersonalityScores;
}

const DIMENSIONS: Dimension[] = ["P", "L", "A", "Y", "p", "l", "a", "y"];

const zeroScores = (): Scores =>
  Object.fromEntries(DIMENSIONS.map((d) => [d, 0])) as Scores;

/**
 * 根据题目队列和用户答案，计算各维度得分与隐藏人格得分
 */
export function calculateScores(
  queue: Question[],
  answers: Record<string, number>,
): CalculationResult {
  const maxScores = zeroScores();
  const userScores = zeroScores();
  const h: HiddenPersonalityScores = {
    hack: 0,
    hams: 0,
    mama: 0,
    arch: 0,
  };

  for (const q of queue) {
    const selectedIdx = answers[q.id];
    if (selectedIdx == null) continue;
    const selectedOpt = q.options[selectedIdx];

    for (const dim of DIMENSIONS) {
      // 该题各选项在该维度上的最大分值
      let best = 0;
      for (const opt of q.options) {
        const v = opt.weight[dim] ?? 0;
        if (v > best) best = v;
      }
      maxScores[dim] += best;

      // 用户实际得分
      userScores[dim] += selectedOpt.weight[dim] ?? 0;
    }

    // 隐藏人格累计
    if (selectedOpt.hackProbability != null)
      h.hack += selectedOpt.hackProbability;
    if (selectedOpt.hamsProbability != null)
      h.hams += selectedOpt.hamsProbability;
    if (selectedOpt.mamaProbability != null)
      h.mama += selectedOpt.mamaProbability;
    if (selectedOpt.archProbability != null)
      h.arch += selectedOpt.archProbability;
  }

  // 各维度实际分数 = 用户得分 / 理论最高分 * 100
  const scores = zeroScores();
  for (const dim of DIMENSIONS) {
    scores[dim] =
      maxScores[dim] > 0
        ? Math.round((userScores[dim] / maxScores[dim]) * 100)
        : 0;
  }

  return { scores, hiddenPersonalityScores: h };
}
