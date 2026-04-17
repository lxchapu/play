import type { Question } from "../types";

export const UNIVERSAL_QUESTIONS: Question[] = [
  {
    id: "U1",
    genre: "universal",
    title: "关于「开局」的本能",
    question:
      "新游戏刚播完开场 CG，屏幕直接糊你一脸密密麻麻的“专有名词”和“按键教程”。此时你：",
    options: [
      {
        text: "疯狂按跳过，直到屏幕上出现可以操作的角色。",
        weight: { Y: 25, p: 20, A: 15 },
        babyProbability: 0.7,
      },
      {
        text: "逐字读完每一行，甚至打开设置把字体调大了再看一遍。",
        weight: { L: 25, P: 20, Y: 15 },
      },
      {
        text: "跳过战斗操作说明，但把剧情对话全部看完再进游戏。",
        weight: { y: 25, p: 15, a: 15 },
      },
    ],
  },
  {
    id: "U2",
    genre: "universal",
    title: "关于「卡关」的破防",
    question:
      "你被同一个粪怪单杀了 20 次，每次都是差一丝血被反杀。看着屏幕上的“GAME OVER”，你：",
    options: [
      {
        text: "咬着牙重新再来，这次换了套配装，打算再死二十次也无所谓。",
        weight: { P: 30, L: 15, A: 15 },
      },
      {
        text: "切出去搜了一下有没有一键无敌的修改器。",
        weight: { Y: 25, p: 20, l: 15 },
        hackProbability: 0.9,
        triggerBranchId: "U2b",
      },
      {
        text: "关掉游戏，打开B站搜这个BOSS的通关视频看别人怎么打。",
        weight: { a: 25, y: 20, p: 15 },
      },
    ],
  },
  {
    id: "U3",
    genre: "universal",
    title: "关于「活人」的折磨",
    question: "组队匹配到一个怨种队友，全程引怪、空大、送人头。你的第一反应是：",
    options: [
      {
        text: "打开聊天框打了一长串字，然后按了举报。",
        weight: { A: 30, Y: 20, l: 10 },
      },
      {
        text: "默默换上辅助装跟在后面给他加血加盾。",
        weight: { a: 25, P: 20, y: 15 },
        mamaProbability: 0.9,
      },
      {
        text: "直接屏蔽他的消息，然后开始规划一个人怎么打赢这局。",
        weight: { L: 30, P: 15, Y: 15 },
      },
    ],
  },
  {
    id: "U4",
    genre: "universal",
    title: "关于「正事」的延误",
    question:
      "主线任务提示：【世界还有3分钟毁灭，请立刻讨伐魔王！】此时你发现路边有一片空地可以盖房子。你：",
    options: [
      {
        text: "先去把地基打了、墙砌了、屋顶的颜色选好，魔王的事等会儿再说。",
        weight: { P: 25, y: 20, a: 15 },
        archProbability: 0.9,
      },
      {
        text: "头也不回地直奔魔王所在地，路上的资源看都不看一眼。",
        weight: { Y: 25, L: 20, A: 15 },
      },
      {
        text: "去搜一下有没有自动挂机采集的脚本，想两边都不耽误。",
        weight: { p: 25, L: 20, Y: 15 },
      },
    ],
  },
  {
    id: "U5",
    genre: "universal",
    title: "关于「占有」的幻觉",
    question:
      "Steam夏促/epic白嫖，你的库里已经躺了五十多个没拆封的游戏。面对又一波打折大促，你决定：",
    options: [
      {
        text: "又买了五个，虽然你知道上一个买的到现在还没下载过。",
        weight: { p: 30, y: 20, l: 15 },
        libyProbability: 0.9,
      },
      {
        text: "逐个对比评测和价格，最后只买了一款确定会玩的。",
        weight: { L: 30, P: 20, Y: 10 },
      },
      {
        text: "挑了个最贵的买下来，然后截图发到了所有群里。",
        weight: { A: 25, Y: 20, l: 15 },
      },
    ],
  },
  {
    id: "U6",
    genre: "universal",
    title: "关于「优越」的快感",
    question: "你在公屏看到一个萌新问了一个极其基础的问题。你的第一反应是：",
    options: [
      {
        text: "开始打字回复他，从原理到操作写了一大段才发出去。",
        weight: { A: 20, P: 20, L: 20 },
      },
      {
        text: "关掉了聊天框，假装没看见这条消息。",
        weight: { a: 25, p: 20, y: 10 },
      },
      {
        text: "截了图发到自己的群里，配上几个笑哭表情。",
        weight: { A: 25, l: 20, Y: 10 },
      },
    ],
  },
  {
    id: "U7",
    genre: "universal",
    title: "关于「攻略」的依赖",
    question: "你卡在一个解谜关卡，已经试了半小时毫无头绪。此时你：",
    options: [
      {
        text: "打开B站搜了这个关卡的标题，找了个最新发布的通关视频。",
        weight: { L: 30, P: 20, Y: 10 },
      },
      {
        text: "继续试，把刚才失败的每种方法又各来了一遍。",
        weight: { P: 30, y: 20, l: 10 },
      },
      {
        text: "在社区发了个帖子问大家这关是不是有BUG。",
        weight: { a: 20, l: 15, p: 20 },
      },
    ],
  },
  {
    id: "U2b",
    genre: "universal",
    isBranch: true,
    title: "关于「修改器」的用法",
    question:
      "你找到了一个可以一键无敌的修改器，下载之后你：",
    options: [
      {
        text: "直接用了，一口气推了十个存档点。",
        weight: { Y: 30, p: 15 },
      },
      {
        text: "打开文件看了一眼代码逻辑，又关掉了。",
        weight: { L: 30, P: 10 },
        hackProbability: 0.95,
      },
      {
        text: "下载完发现安装步骤太麻烦，还是自己打吧。",
        weight: { P: 25, y: 20 },
      },
    ],
  },
];
