/**
 * 类型定义
 */

export type Dimension = "P" | "L" | "A" | "Y" | "p" | "l" | "a" | "y";

export type Scores = Record<Dimension, number>;

export interface Option {
  text: string;
  weight: Partial<Record<Dimension, number>>;
  triggerBranchId?: string;
  // 扩展隐藏人格概率
  hackProbability?: number;
  libyProbability?: number;
  mamaProbability?: number;
  archProbability?: number;
}

export type Genre = "universal" | "solo" | "gacha" | "pvp" | "variety";

export interface Question {
  id: string;
  genre: Genre;
  isBranch?: boolean;
  title: string;
  question: string;
  options: Option[];
}

interface MetaOption {
  id: Exclude<Genre, "universal">;
  label: string;
  desc: string;
}

export interface MetaQuestion {
  id: string;
  title: string;
  question: string;
  options: MetaOption[];
  note?: string;
}

export interface Personality {
  id: string;
  title: string;
  abbr: string;
  emoji: string;
  summary: string;
  quote: string;
  toxicEvaluation: string;
  soulFinisher: string;
  advice: string;
  traits: string[];
  hidden?: boolean;
}
