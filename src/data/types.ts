/**
 * 类型定义
 */

export type Dimension = "P" | "L" | "A" | "Y" | "p" | "l" | "a" | "y";

export interface Weight {
  [key: string]: number;
}

export interface Option {
  text: string;
  weight: Partial<Record<Dimension, number>>;
  triggerBranchId?: string;
  hackProbability?: number;
  libyProbability?: number;
}

export type Genre = "all" | "solo" | "gacha" | "pvp" | "variety";

export interface Question {
  id: string;
  genre: Genre;
  isBranch?: boolean;
  title: string;
  question: string;
  options: Option[];
}

interface MetaOption {
  id: "solo" | "gacha" | "pvp" | "variety";
  text: string;
}

export interface MetaQuestion {
  title: string;
  question: string;
  options: MetaOption[];
}
export interface Personality {
  code: string;
  name: string;
  abbr: string;
  emoji: string;
  description: string;
  quote: string;
  toxicEvaluation: string;
  soulBlade: string;
  cyberPrescription: string;
  traits: string[];
  hidden?: boolean;
}
