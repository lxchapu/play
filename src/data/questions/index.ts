import type { Genre, MetaQuestion, Question } from "../types";
import { GACHA_QUESTIONS } from "./gacha";
import { PVP_QUESTIONS } from "./pvp";
import { SOLO_QUESTIONS } from "./solo";
import { UNIVERSAL_QUESTIONS } from "./universal";
import { VARIETY_QUESTIONS } from "./variety";

export const META_QUESTION: MetaQuestion = {
  id: "META1",
  title: "前置题",
  question:
    "欢迎进入体检仓。\n检测到多处显卡波动，请选择你最常出没的赛博社区：",
  note: "本题只用于语境路由，不计分；若稍后更改此项，后续答案会自动重置。",
  options: [
    {
      id: "solo",
      text: "苦难单机流 (Solo/AAA)",
    },
    {
      id: "gacha",
      text: "赛博抽卡二游 (Gacha/Anime)",
    },
    {
      id: "pvp",
      text: "竞技/协作网游 (MMO/PVP)",
    },
    {
      id: "variety",
      text: "杂食性电子包工头 (Variety/Indie)",
    },
  ],
};

export const QUESTIONS_POOLS: Record<Genre, Question[]> = {
  gacha: GACHA_QUESTIONS.filter((q) => !q.isBranch),
  pvp: PVP_QUESTIONS.filter((q) => !q.isBranch),
  solo: SOLO_QUESTIONS.filter((q) => !q.isBranch),
  universal: UNIVERSAL_QUESTIONS.filter((q) => !q.isBranch),
  variety: VARIETY_QUESTIONS.filter((q) => !q.isBranch),
};

const allQuestions = [
  ...GACHA_QUESTIONS,
  ...PVP_QUESTIONS,
  ...SOLO_QUESTIONS,
  ...UNIVERSAL_QUESTIONS,
  ...VARIETY_QUESTIONS,
];

// 汇总所有题目，用于分支跳转查找
export const ALL_QUESTION_MAP = Object.freeze(
  allQuestions.reduce(
    (acc, q) => {
      acc[q.id] = q;
      return acc;
    },
    {} as Record<string, Question>,
  ),
);
