import type { Question } from "../types";

/**
 * PLAY 16 游戏人格测试 - 杂食/全品类专属题库
 * 核心测算：电子阳痿指数、三分钟热度、赛博囤积癖、云通关倾向、FOMO(错失恐惧症)
 */
export const VARIETY_QUESTIONS: Question[] = [
  {
    id: "V1",
    genre: "variety",
    title: "关于「阳痿」的晚期",
    question:
      "难得的周末，你打开电脑面对库里几百个图标，选了半小时。最终你：",
    options: [
      {
        text: "关了电脑躺床上刷手机了。",
        weight: { p: 30, a: 20, y: 15 },
      },
      {
        text: "打开了一个已经通关了三次的老游戏。",
        weight: { p: 20, y: 25, l: 15 },
      },
      {
        text: "强迫自己玩了刚买的那个新游戏，设了闹钟两小时后才能停。",
        weight: { P: 25, L: 20, Y: 10 },
      },
    ],
  },
  {
    id: "V2",
    genre: "variety",
    title: "关于「看透」的傲慢",
    question:
      "新游戏玩了15分钟，你觉得已经完全看透了它的核心玩法循环。你：",
    options: [
      {
        text: "卸载了。",
        weight: { p: 30, L: 20, Y: 15 },
      },
      {
        text: "继续玩下去了，虽然觉得后面应该也就这样。",
        weight: { P: 25, Y: 15, y: 15 },
      },
      {
        text: "去看评测视频，验证一下自己的想法对不对。",
        weight: { p: 20, l: 20, a: 15 },
      },
    ],
  },
  {
    id: "V3",
    genre: "variety",
    title: "关于「云端」的妥协",
    question:
      "最近爆火了一款硬核游戏，你也想玩，但打开就觉得困。你：",
    options: [
      {
        text: "在视频网站看了三个小时的通关流程视频。",
        weight: { p: 35, L: 25, y: 15 },
      },
      {
        text: "咬着牙坚持玩，死了很多遍也没放弃。",
        weight: { P: 25, A: 20, L: 15 },
      },
      {
        text: "看了画风觉得不好看，就没下载。",
        weight: { l: 30, Y: 20, p: 15 },
      },
    ],
  },
  {
    id: "V4",
    genre: "variety",
    title: "关于「嘴硬」的广度",
    question:
      "有人说你玩了几百款游戏但没有一个精通的。你：",
    options: [
      {
        text: "“广度也是实力。”",
        weight: { A: 30, y: 25, p: 20 },
      },
      {
        text: "“我懂的东西比他们深。”",
        weight: { L: 30, A: 20, P: 10 },
      },
      {
        text:"点了点头没说话。",
        weight: { a: 25, p: 20, y: 15 },
      },
    ],
  },
  {
    id: "V5",
    genre: "variety",
    title: "关于「多开」的幻觉",
    question:
      "桌面上同时开着五个游戏窗口：一个挂机的、一个排队的、一个暂停的、一个刷材料的、一个没打开过的。你：",
    options: [
      {
        text: "在五个窗口之间来回切换，每个都操作了一会儿。",
        weight: { P: 30, Y: 20, L: 15 },
        triggerBranchId: "V5b",
      },
      {
        text: "全部最小化，打开了短视频APP。",
        weight: { p: 30, a: 25, y: 15 },
      },
      {
        text: "关了其中四个，只留了一个在玩。",
        weight: { L: 25, P: 25, a: 10 },
      },
    ],
  },
  {
    id: "V6",
    genre: "variety",
    title: "关于「包工头」的觉醒",
    question:
      "生存游戏的主线是末日求生，但你刚解锁了高级建材。你：",
    options: [
      {
        text: "建房子建了很久，直到下线都没去过主线区域。",
        weight: { P: 30, a: 25, y: 20 },
        archProbability: 0.9,
      },
      {
        text: "搭了个简易庇护所就赶紧去推进主线了。",
        weight: { Y: 25, L: 20, P: 15 },
      },
      {
        text: "抄了别人的自动化蓝图，让采集全自动运转。",
        weight: { L: 25, p: 20, A: 10 },
      },
    ],
  },
  {
    id: "V7",
    genre: "variety",
    title: "关于「试吃」的廉价",
    question: "Steam新品节上千个免费试玩。你：",
    options: [
      {
        text: "下了三十个，每个玩了不到三分钟就删了。",
        weight: { p: 30, Y: 20, l: 15 },
      },
      {
        text: "挑了一个认真打通了，还去开发者社区写了反馈。",
        weight: { P: 30, L: 20, y: 15 },
      },
      {
        text: "一个都没下，准备等打折了再买完整版。",
        weight: { a: 20, Y: 20, L: 15 },
      },
    ],
  },
  {
    id: "V8",
    genre: "variety",
    title: "关于「背叛」的出轨",
    question:
      "一款RPG正玩到高潮，期待已久的另一部大作发售了。你：",
    options: [
      {
        text: "立刻下载了新游戏，RPG再也没打开过。",
        weight: { l: 30, Y: 25, p: 20 },
      },
      {
        text: "先把手里这款打通了结局再去碰新的。",
        weight: { P: 30, y: 25, a: 15 },
      },
      {
        text: "两个轮流玩，谁都没打通。",
        weight: { Y: 25, P: 20, L: 10 },
      },
    ],
  },
  {
    id: "V9",
    genre: "variety",
    title: "关于「履历」的冰冷",
    question:
      "深夜看你库里有一百个游戏，大部分游玩时长都是2小时左右。你：",
    options: [
      {
        text: "觉得自己涉猎广泛挺好的。",
        weight: { A: 25, y: 20, p: 15 },
      },
      {
        text: "觉得有点空虚，不知道该玩什么好了。",
        weight: { a: 30, y: 25, p: 20 },
      },
      {
        text: "觉得大部分游戏确实不值得投入超过两小时。",
        weight: { L: 25, Y: 20, A: 15 },
      },
    ],
  },
  {
    id: "V10",
    genre: "variety",
    title: "关于「会员」的陷阱",
    question: "你开通了游戏会员，库里面多了几百个免费游戏。你：",
    options: [
      {
        text: "批量添加到库，一个都没下载。",
        weight: { p: 30, y: 20, l: 15 },
        libyProbability: 0.9,
      },
      {
        text: "列了个表挑着打，专挑那些贵的和短的。",
        weight: { L: 30, P: 25, Y: 15 },
      },
      {
        text: "下了好几个，每个打开看了一眼主界面又关了，最后还是去玩常驻的那个免费游戏。",
        weight: { p: 25, a: 20, l: 20 },
      },
    ],
  },
  {
    id: "V11",
    genre: "variety",
    title: "关于「慢热」的诅咒",
    question:
      "朋友推荐了一款游戏：“前20小时比较坐牢，后面很好玩。”你：",
    options: [
      {
        text: "玩了二十分钟就删了。",
        weight: { p: 30, A: 20, Y: 15 },
      },
      {
        text: "硬撑了二十个小时熬过了前期。",
        weight: { P: 30, y: 20, a: 15 },
      },
      {
        text: "去搜了剧情梗概，直接从中后期开始玩的。",
        weight: { L: 25, p: 20, Y: 15 },
      },
    ],
  },
  {
    id: "V12",
    genre: "variety",
    title: "关于「跨界」的排斥",
    question:
      "你正在玩的休闲种田游戏更新加入了PVP掠夺模式。你：",
    options: [
      {
        text: "换了套PVP配装，开始去抢别人的资源。",
        weight: { A: 30, l: 20, Y: 15 },
      },
      {
        text: "完全无视这个新模式，继续种地。",
        weight: { a: 30, y: 25, p: 15 },
      },
      {
        text: "研究了一下奖励，发现给的不错就去打了几把。",
        weight: { L: 25, Y: 25, P: 15 },
      },
    ],
  },
  {
    id: "V13",
    genre: "variety",
    title: "关于「退坑」的仪式",
    question:
      "你不打算再玩某款投入了很多时间的网游了。离开前你做的最后一件事是：",
    options: [
      {
        text: "把账号挂上了交易平台。",
        weight: { Y: 30, L: 20, p: 15 },
      },
      {
        text: "截了全身装备图发到了群里。",
        weight: { A: 25, l: 20, Y: 15 },
      },
      {
        text: "把装备全分解了或送人了，角色站在了最好看的场景里。",
        weight: { y: 30, P: 15, a: 20 },
        mamaProbability: 0.8,
      },
    ],
  },
  {
    id: "V14",
    genre: "variety",
    title: "关于「节奏」的吃瓜",
    question:
      "你最近在玩的一款游戏因为某个改动被全网差评。你：",
    options: [
      {
        text: "也去商店打了一星评价，虽然你其实没怎么玩过。",
        weight: { A: 25, l: 25, Y: 10 },
      },
      {
        text: "自己算了下数据，觉得改动其实还行，接着玩了。",
        weight: { L: 30, P: 20, a: 15 },
      },
      {
        text: "卸载了，换了个别的游戏。",
        weight: { a: 25, p: 20, y: 15 },
      },
    ],
  },
  {
    id: "V15",
    genre: "variety",
    title: "关于「喜加一」的病理",
    question: "你买了很多根本没时间玩的游戏。最诚实的理由是：",
    options: [
      {
        text: "想着以后有空了一定会玩的。",
        weight: { p: 35, l: 15 },
        libyProbability: 0.9,
      },
      {
        text: "这样群里聊什么游戏你都接得上话。",
        weight: { A: 25, Y: 20, L: 15 },
      },
      {
        text: "就是喜欢看到库存数字增加的感觉。",
        weight: { P: 25, L: 20, a: 15 },
      },
    ],
  },
  {
    id: "V5b",
    genre: "variety",
    isBranch: true,
    title: "关于「多开」的收成",
    question:
      "你在五个游戏窗口之间切了一小时。这一个小时的实际成果是：",
    options: [
      {
        text: "每个游戏都推进了一点，五个进度条都在动。",
        weight: { P: 35, Y: 15 },
      },
      {
        text: "大部分时间在切换和加载界面中度过，实际没玩到什么。",
        weight: { y: 30, p: 20, l: 10 },
      },
      {
        text: "后来索性只玩了一个，剩下四个忘了关但也没再看。",
        weight: { y: 25, L: 20, a: 10 },
      },
    ],
  },
];
