import type { Genre, MetaQuestion, Question } from "../types";
import { GACHA_QUESTIONS } from "./gacha";
import { PVP_QUESTIONS } from "./pvp";
import { SOLO_QUESTIONS } from "./solo";
import { UNIVERSAL_QUESTIONS } from "./universal";
import { VARIETY_QUESTIONS } from "./variety";

export const META_QUESTION: MetaQuestion = {
  id: "META1",
  title: "传感器校准",
  question:
    "神经链路已接通。请锚定核心数据扇区：过去一年，你的多巴胺与时间，主要挥霍在以下哪个虚拟维度？",
  options: [
    {
      id: "solo",
      label: "[ 孤岛协议 ] 单机 / 主机 / 3A大作",
      desc: "拒绝无效社交的电子苦行僧。宁愿花几百块买个神作放在硬盘里发霉，也不愿在公共频道和人类产生半个字节的交互。",
    },
    {
      id: "gacha",
      label: "[ 抽卡协议 ] 赛博二游 / 纸片人养成",
      desc: "算法最爱的概率学奴隶。一边大骂掉率和数值膨胀，一边为了 0.6% 的虚拟皮囊乖乖开放钱包的最高权限。",
    },
    {
      id: "pvp",
      label: "[ 狂暴协议 ] 竞技对抗 / FPS / MOBA",
      desc: "靠红温和段位维持生命体征的压力终端。为了虚无缥缈的胜点，随时准备跨越网线对陌生人执行物理打击。",
    },
    {
      id: "variety",
      label: "[ 游离协议 ] 全品类漫游 / 独立沙盒",
      desc: "脑电波频繁跳跃的电子流浪汉。单机、网游、手游全覆盖，哪里有廉价的多巴胺就往哪里钻。如果无法锁定你的单一频段，请接入此泛用型端口。",
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
