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
        text: "疯狂敲空格跳过。“少废话，直接告诉我砍谁！”",
        weight: { p: 20, l: 25, A: 15 },
      },
      {
        text: "戴上痛苦面具逐字拜读。“加错一个点这号就废了。”",
        weight: { L: 25, P: 20, Y: 15 },
      },
      {
        text: "跳过战斗教程，细品剧情。“我是来这世界看风景/谈恋爱的。”",
        weight: { y: 25, p: 15, a: 15 },
      },
    ],
  },
  {
    id: "U2",
    genre: "universal",
    title: "关于「卡关」的破防",
    question:
      "你被同一个粪怪单杀了 20 次，又是就差一丝血被反杀。看着屏幕上的“GAME OVER”，你：",
    options: [
      {
        text: "彻底红温。“今天我和这几行破代码必须死一个！”",
        weight: { P: 30, L: 15, A: 15 },
      },
      {
        text: "切出后台，启动风灵月影/修改器。“给脸不要脸是吧？”",
        weight: { Y: 25, p: 20, l: 15 },
        hackProbability: 0.9,
      },
      {
        text: "原地下线。“太累了，我还是去B站看别人受苦吧。”",
        weight: { a: 25, y: 20, p: 15 },
      },
    ],
  },
  {
    id: "U3",
    genre: "universal",
    title: "关于「活人」的折磨",
    question:
      "系统给你匹配了一个纯种“猪队友”，疯狂引怪、空大、送人头。你的第一反应是：",
    options: [
      {
        text: "化身祖安钢琴家，直接公屏问候族谱。",
        weight: { A: 30, Y: 20, l: 10 },
      },
      {
        text: "跟在后面疯狂交奶交盾。“崽崽别怕，躲我后面。”",
        weight: { a: 25, P: 20, y: 15 },
        mamaProbability: 0.9,
      },
      {
        text: "直接屏蔽，大脑飞速重算“带条狗怎么赢”的单刷路线。",
        weight: { L: 30, P: 15, Y: 15 },
      },
    ],
  },
  {
    id: "U4",
    genre: "universal",
    title: "关于「正事」的延误",
    question:
      "主线红字警告：【世界还有 3 分钟毁灭，请讨伐魔王！】此时你发现路边可以盖房子/种地。你：",
    options: [
      {
        text: "“世界毁灭关我屁事，等我盖完这栋大别墅再说。”",
        weight: { P: 25, y: 20, a: 15 },
        archProbability: 0.9,
      },
      {
        text: "直奔魔王。“只有傻子才在决战前捡破烂。”",
        weight: { Y: 25, L: 20, A: 15 },
      },
      {
        text: "去搜个《全自动挂机蓝图》，我要一边救世界一边薅羊毛。",
        weight: { p: 25, L: 20, Y: 15 },
      },
    ],
  },
  {
    id: "U5",
    genre: "universal",
    title: "关于「占有」的幻觉",
    question:
      "面对满屏闪烁着【骨折价】【绝版限定】的大促活动，看着你干瘪的余额，你决定：",
    options: [
      {
        text: "“买到就是玩到！”闭眼下单，然后放库里吃灰。",
        weight: { p: 30, y: 20, l: 15 },
        libyProbability: 0.9,
      },
      {
        text: "掏出计算器。“没实打实的提升，休想骗走我一分钱。”",
        weight: { L: 30, P: 20, Y: 10 },
      },
      {
        text: "只要能让我发个全服广播装杯，接下来吃一个月泡面也冲！",
        weight: { A: 25, Y: 20, l: 15 },
      },
    ],
  },
];
