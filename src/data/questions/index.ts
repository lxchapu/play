import type { Genre, MetaQuestion, Question } from "../types";
import { GACHA_QUESTIONS } from "./gacha";
import { PVP_QUESTIONS } from "./pvp";
import { SOLO_QUESTIONS } from "./solo";
import { UNIVERSAL_QUESTIONS } from "./universal";
import { VARIETY_QUESTIONS } from "./variety";

export const META_QUESTION: MetaQuestion = {
  id: "META1",
  title: "传感器校准",
  question: "欢迎进入体检仓。检测到多处显卡波动，请选择你最常出没的赛博社区：",
  options: [
    {
      id: "solo",
      label: "苦难单机流 (Solo/AAA)",
      desc: "把受苦当乐趣的电子苦行僧",
    },
    {
      id: "gacha",
      label: "赛博抽卡二游 (Gacha/Anime)",
      desc: "被概率学反复蹂躏的赛博赌徒",
    },
    {
      id: "pvp",
      label: "竞技/协作网游 (MMO/PVP)",
      desc: "靠血压和段位维持生命体征的压力怪",
    },
    {
      id: "variety",
      label: "杂食性电子包工头 (Variety/Indie)",
      desc: "库里有500个游戏但只玩商店的仓鼠",
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
