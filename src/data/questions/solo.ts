import type { Question } from "../types";

/**
 * PLAY 16 游戏人格测试 - 单机/主机/3A专属题库
 * 核心测算：受苦抗性、沉浸度、探索欲(舔图)、赛博仓鼠病、剧情代入感
 */
export const SOLO_QUESTIONS: Question[] = [
  {
    id: "S1",
    genre: "solo",
    title: "关于「道德」的背叛",
    question:
      "亲手干掉那个救过你的NPC就能拿到全服最强神装。你：",
    options: [
      {
        text: "动手了，拿了神装，继续往下推剧情。",
        weight: { Y: 30, L: 15, A: 10 },
      },
      {
        text: "穿着破烂装备通关了整个游戏，一次都没碰过这个选项。",
        weight: { y: 30, a: 20, P: 10 },
      },
      {
        text: "存档，杀了他拿了神装，又读档让他复活了。",
        weight: { L: 25, P: 20, y: 15 },
      },
    ],
  },
  {
    id: "S2",
    genre: "solo",
    title: "关于「舔图」的强迫",
    question:
      "护送任务限时倒计时最后1分钟，雷达边缘闪过一个金色宝箱。此时你：",
    options: [
      {
        text: "拐弯去开了宝箱，任务失败了重新来。",
        weight: { P: 25, Y: 20, l: 10 },
      },
      {
        text: "直奔终点，没理会那个宝箱。",
        weight: { L: 20, Y: 15, P: 15 },
      },
      {
        text: "往宝箱方向走了几步，嫌太远又放弃了，任务也放弃了。",
        weight: { p: 25, a: 15, y: 10 },
        babyProbability: 0.7,
      },
    ],
  },
  {
    id: "S3",
    genre: "solo",
    title: "关于「主线」的搁置",
    question:
      "老国王求你去打恶龙，但路边酒馆可以玩小游戏。你：",
    options: [
      {
        text: "在酒馆里坐了一下午。",
        weight: { p: 25, y: 20, l: 15 },
      },
      {
        text: "直接去找恶龙了，酒馆回来再说。",
        weight: { P: 25, L: 20, Y: 15 },
      },
      {
        text: "接了酒馆的任务，又接了路上所有支线，打算一起做掉。",
        weight: { L: 30, Y: 20, P: 10 },
      },
    ],
  },
  {
    id: "S4",
    genre: "solo",
    title: "关于「折腾」的怪圈",
    question:
      "你花了一整个周末给游戏打了各种美化Mod，解决了几十次闪退。当游戏终于能跑起来的时候：",
    options: [
      {
        text: "在游戏里跑了不到五分钟就退出来了。",
        weight: { L: 30, p: 25, a: 20 },
        triggerBranchId: "S4b",
      },
      {
        text: "熬夜开始正式玩游戏。",
        weight: { P: 25, y: 20, L: 15 },
      },
      {
        text: "又下了一个无敌Mod，准备轻松体验剧情。",
        weight: { Y: 25, p: 20, L: 15 },
        hackProbability: 0.8,
      },
    ],
  },
  {
    id: "S5",
    genre: "solo",
    title: "关于「白金」的诅咒",
    question:
      "成就98%，最后一个需要收集500个散落在地图各地的物品。你：",
    options: [
      {
        text: "开着攻略地图一个个去找。",
        weight: { P: 30, Y: 20, L: 10 },
      },
      {
        text: "删了游戏。",
        weight: { y: 30, p: 20, a: 10 },
      },
      {
        text: "用了修改器直接解锁了成就。",
        weight: { Y: 25, p: 20, A: 15 },
        hackProbability: 0.9,
      },
    ],
  },
  {
    id: "S6",
    genre: "solo",
    title: "关于「怜悯」的侮辱",
    question:
      "你被同一个关卡虐了三天，系统弹出提示“是否切换简单模式”。你：",
    options: [
      {
        text: "选了“否”，重新读档又来了一遍。",
        weight: { P: 30, A: 20, L: 10 },
      },
      {
        text: "选了“是”，用简单模式快速过了这段剧情。",
        weight: { p: 25, y: 20, a: 15 },
      },
      {
        text: "保持困难，但先去社区发帖骂了两句策划。",
        weight: { A: 20, l: 20, p: 10 },
      },
    ],
  },
  {
    id: "S7",
    genre: "solo",
    title: "关于「谜语」的耐心",
    question:
      "走进一间废弃屋子，桌上散落着十几封没有任何任务指引的信件，加起来一万多字。你：",
    options: [
      {
        text: "一封一封读完，还做了笔记。",
        weight: { y: 30, L: 20, p: 10 },
      },
      {
        text: "全部捡进了背包，一个字都没看。",
        weight: { Y: 20, P: 15, l: 15 },
      },
      {
        text: "一眼没看，直接出门去找BOSS。",
        weight: { A: 20, p: 20, Y: 10 },
        babyProbability: 0.8,
      },
    ],
  },
  {
    id: "S8",
    genre: "solo",
    title: "关于「逃课」的诱惑",
    question:
      "遇到一个很坐牢的潜行关卡，但你发现墙角卡Bug可以直接穿到终点。你：",
    options: [
      {
        text: "卡过去了，提前二十分钟到了下一个存档点。",
        weight: { Y: 25, L: 20, p: 15 },
      },
      {
        text: "老老实实潜行过去的，没用那个Bug。",
        weight: { y: 25, P: 15, L: 10 },
      },
      {
        text: "录了个卡墙的搞笑视频发给了朋友看，然后正常打的。",
        weight: { l: 20, a: 15, y: 15, P: 10 },
      },
    ],
  },
  {
    id: "S9",
    genre: "solo",
    title: "关于「仓鼠病」的绝症",
    question:
      "最终BOSS战，你快死了，背包里有99瓶瞬间回满血的药。你：",
    options: [
      {
        text: "一口都没喝，硬撑着打赢了BOSS。",
        weight: { P: 25, y: 20, L: 15 },
        libyProbability: 0.8,
      },
      {
        text: "像喝水一样灌下去，打完BOSS发现剩了不到5瓶。",
        weight: { Y: 25, l: 20, A: 10 },
      },
      {
        text: "忘了有这种药，一直在吃普通的血瓶。",
        weight: { p: 25, l: 20, a: 15 },
      },
    ],
  },
  {
    id: "S10",
    genre: "solo",
    title: "关于「贤者时间」的降临",
    question:
      "伴随着片尾曲，你完美通关了一部玩了上百小时的大作。现在你：",
    options: [
      {
        text: "开启了二周目最高难度。",
        weight: { P: 25, A: 20, Y: 10 },
      },
      {
        text: "坐在屏幕前发呆了好久。",
        weight: { y: 30, a: 20, p: 15 },
      },
      {
        text: "截了图发到社交平台，然后打开了Steam商店。",
        weight: { Y: 25, A: 15, p: 10 },
      },
    ],
  },
  {
    id: "S11",
    genre: "solo",
    title: "关于「捏脸」的虚无",
    question:
      "你花了两个小时捏了一张完美的脸，进游戏后发现全程只能看到后脑勺，还必须戴头盔。你：",
    options: [
      {
        text: "每次过场动画都会切出第三人称欣赏一下那张脸。",
        weight: { y: 25, P: 20, L: 10 },
      },
      {
        text: "用了默认脸，从没进过捏脸界面。",
        weight: { Y: 25, p: 20, A: 15 },
        babyProbability: 0.7,
      },
      {
        text: "故意捏了个很丑的脸，专门用来截搞笑图。",
        weight: { l: 25, a: 20, y: 15 },
      },
    ],
  },
  {
    id: "S12",
    genre: "solo",
    title: "关于「潜行」的破产",
    question:
      "玩潜行暗杀关卡，不小心踢翻了桶，警报响了，一群人朝你跑来。你：",
    options: [
      {
        text: "立刻读了最近的存档重来。",
        weight: { P: 30, L: 20, a: 10 },
      },
      {
        text: "拔出了武器把目击者全都杀了。",
        weight: { A: 30, Y: 20, l: 15 },
      },
      {
        text: "蹲进了旁边的柜子里等警报结束。",
        weight: { p: 25, y: 20, a: 15 },
      },
    ],
  },
  {
    id: "S13",
    genre: "solo",
    title: "关于「负重」的折磨",
    question:
      "搜刮了太多东西，屏幕提示【负重超载】，距离最近的商人还有很远。你：",
    options: [
      {
        text: "打开背包，把不值钱的全扔了。",
        weight: { L: 30, Y: 20, P: 10 },
      },
      {
        text: "一步一步挪回去，一件东西都没舍得扔。",
        weight: { P: 30, y: 20, a: 10 },
        libyProbability: 0.8,
      },
      {
        text: "用了控制台指令改了负重上限。",
        weight: { p: 25, Y: 20, l: 15 },
        hackProbability: 0.9,
      },
    ],
  },
  {
    id: "S14",
    genre: "solo",
    title: "关于「迷路」的尊严",
    question:
      "游戏没有地图，你在迷宫里绕了两个小时还没找到路。你：",
    options: [
      {
        text: "拿出手机搜了攻略路线图。",
        weight: { Y: 30, p: 20, L: 15 },
      },
      {
        text: "沿着右边墙壁一点点摸完全图。",
        weight: { P: 30, L: 20, y: 15 },
      },
      {
        text: "关了游戏，去论坛发了个帖吐槽引导设计。",
        weight: { A: 30, l: 20, p: 15 },
      },
    ],
  },
  {
    id: "S15",
    genre: "solo",
    title: "关于「捡尸」的恐惧",
    question:
      "魂类游戏，身上带着巨款摔死了，需要跑半个地图去捡回。你：",
    options: [
      {
        text: "莽着跑过去，半路又被怪打死了一次，彻底红温。",
        weight: { A: 25, l: 25, p: 10 },
      },
      {
        text: "规划了一条最安全的路线，一路潜行过去。",
        weight: { L: 30, P: 20, Y: 10 },
      },
      {
        text: "假装没发生过，换了个方向继续玩别的内容。",
        weight: { a: 25, y: 20, p: 15 },
      },
    ],
  },
  {
    id: "S16",
    genre: "solo",
    title: "关于「地基」的执念",
    question:
      "你在开放世界找到一片风景很好的空地。主线催你去救公主，但你已经在脑子里画好了房子的样子。你：",
    options: [
      {
        text: "在空地上建起了房子，公主等了很久。",
        weight: { P: 30, a: 25, y: 20 },
        archProbability: 0.9,
      },
      {
        text: "拍了照就走了，直奔公主所在的地方。",
        weight: { Y: 25, L: 20, P: 15 },
      },
      {
        text: "找了别人建好的房子代码导入，建好之后才去的公主那里。",
        weight: { p: 25, Y: 20, L: 15 },
      },
    ],
  },
  {
    id: "S4b",
    genre: "solo",
    isBranch: true,
    title: "关于「折腾」的真相",
    question:
      "花了一整个周末配Mod，结果玩了不到五分钟就退了。你退出来的真实原因是：",
    options: [
      {
        text: "已经把Mod列表、冲突解决、性能优化全摸透了，游戏本身反而没那么重要了。",
        weight: { L: 35, P: 15 },
      },
      {
        text: "截了几张图发到了群里，展示完了就满足了。",
        weight: { A: 25, Y: 20, l: 15 },
      },
      {
        text: "突然觉得开始一个新游戏的Mod配置好像更有意思。",
        weight: { L: 20, p: 25, y: 15 },
      },
    ],
  },
];
