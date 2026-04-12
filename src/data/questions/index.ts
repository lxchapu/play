import type { Genre, MetaQuestion } from "../types";
import { GACHA_QUESTIONS } from "./gacha";
import { PVP_QUESTIONS } from "./pvp";
import { SOLO_QUESTIONS } from "./solo";
import { UNIVERSAL_QUESTIONS } from "./universal";
import { VARIETY_QUESTIONS } from "./variety";

export const META_QUESTION: MetaQuestion = {
  question: "欢迎进入体检仓。检测到多处显卡波动，请选择你最常出没的赛博社区：",
  title: "前置题（不计分，仅分流）",
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

export const ALL_QUESTIONS = [
  ...UNIVERSAL_QUESTIONS,
  ...GACHA_QUESTIONS,
  ...PVP_QUESTIONS,
  ...SOLO_QUESTIONS,
  ...VARIETY_QUESTIONS,
];

export const getExtensionQuestionsPool = (genre: Genre) => {
  switch (genre) {
    case "gacha":
      return GACHA_QUESTIONS;
    case "pvp":
      return PVP_QUESTIONS;
    case "solo":
      return SOLO_QUESTIONS;
    case "variety":
      return VARIETY_QUESTIONS;
    default:
      return [];
  }
};
