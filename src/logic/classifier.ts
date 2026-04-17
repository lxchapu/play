/**
 * 人格判断
 */
import { PERSONALITIES } from "@/data/personalities";
import type { Personality, Scores } from "@/data/types";
import type { HiddenPersonalityScores } from "./calculator";

/** 隐藏人格触发阈值 */
const HIDDEN_THRESHOLD = 1.2;

/**
 * 根据维度得分判定 4 字符人格 code（如 "PLAY"、"play"）
 */
function buildCode(scores: Scores): string {
  return (
    (scores.P >= scores.p ? "P" : "p") +
    (scores.L >= scores.l ? "L" : "l") +
    (scores.A >= scores.a ? "A" : "a") +
    (scores.Y >= scores.y ? "Y" : "y")
  );
}

/**
 * 将 code + PERSONALITIES 表合并为完整 Personality 对象
 */
function resolve(id: string): Personality {
  const entry = PERSONALITIES[id];
  if (!entry) {
    throw new Error(`Unknown personality code: ${id}`);
  }
  return { id, ...entry };
}

/**
 * 根据得分与隐藏人格得分，判定最终人格
 *
 * 优先级：隐藏人格 > 标准人格
 */
export function classifyPersonality(
  scores: Scores,
  hidden: HiddenPersonalityScores,
): Personality {
  // 隐藏人格优先判定
  if (hidden.liby >= HIDDEN_THRESHOLD) return resolve("LIBY");
  if (hidden.hack >= HIDDEN_THRESHOLD) return resolve("HACK");
  if (hidden.arch >= HIDDEN_THRESHOLD) return resolve("ARCH");
  if (hidden.mama >= HIDDEN_THRESHOLD) return resolve("MAMA");

  // 标准 16 型判定
  return resolve(buildCode(scores));
}
