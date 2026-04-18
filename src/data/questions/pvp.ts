import type { Question } from "../types";

/**
 * PLAY 16 游戏人格测试 - 竞技对抗/FPS/MOBA专属题库
 * 核心测算：胜负欲、社交攻击性(压力怪)、红温抗性、甩锅倾向、战绩虚荣心
 */
export const PVP_QUESTIONS: Question[] = [
  {
    id: "A1",
    genre: "pvp",
    title: "关于「猪队友」的审判",
    question:
      "晋级赛生死局，队友冲上去送了波大的，导致水晶直接爆炸。看着“失败”二字，你：",
    options: [
      {
        text: "打开聊天框打了一段字，又点了举报。",
        weight: { A: 30, l: 20, Y: 10 },
      },
      {
        text: "保存了录像，准备等会儿复盘一下。",
        weight: { L: 25, P: 20, a: 10 },
      },
      {
        text: "关掉了游戏，去倒了杯水。",
        weight: { a: 25, p: 20, y: 15 },
      },
    ],
  },
  {
    id: "A2",
    genre: "pvp",
    title: "关于「轮椅」的骨气",
    question: "你最拿手的英雄被削成废铁，排位里全是无脑超模的套路。你：",
    options: [
      {
        text: "选了那个超模英雄进了下一把。",
        weight: { Y: 30, L: 20, p: 10 },
      },
      {
        text: "继续锁你的绝活英雄，哪怕胜率已经掉到了40%。",
        weight: { P: 25, A: 20, y: 15 },
      },
      {
        text: "去了官网的反馈区写了一大段话。",
        weight: { L: 25, P: 15, p: 10 },
      },
    ],
  },
  {
    id: "A3",
    genre: "pvp",
    title: "关于「残局」的心跳",
    question: "残局1打5，四个队友都在观战你。此时你：",
    options: [
      {
        text: "操作频率明显加快，一直在试图找人开团。",
        weight: { A: 25, l: 20, Y: 15 },
      },
      {
        text: "在看小地图和对面技能冷却，计算怎么打收益最高。",
        weight: { L: 30, P: 20, Y: 10 },
      },
      {
        text: "手心在出汗，鼠标有点握不住。",
        weight: { p: 30, a: 25, y: 15 },
      },
    ],
  },
  {
    id: "A4",
    genre: "pvp",
    title: "关于「连败」的红温",
    question: "今晚已经疯狂十连败，段位掉回了上周。眼看凌晨三点了，你：",
    options: [
      {
        text: "又点了一局匹配。",
        weight: { P: 30, A: 20, Y: 15 },
      },
      {
        text: "在网上搜了一下代练的价格。",
        weight: { Y: 30, p: 20, L: 15 },
        hackProbability: 0.9,
      },
      {
        text: "关了电脑，上了床但还在想刚才那几把。",
        weight: { l: 25, p: 20, a: 15 },
      },
    ],
  },
  {
    id: "A5",
    genre: "pvp",
    title: "关于「炸鱼」的快感",
    question: "大号被打自闭了，借了个青铜小号去低分段玩，把对面杀穿了。你：",
    options: [
      {
        text: "在公屏打字，亮了你的段位标志。",
        weight: { A: 30, Y: 25, p: 15 },
      },
      {
        text: "赢了两把后就切回大号了。",
        weight: { P: 25, L: 20, a: 15 },
      },
      {
        text: "带着对面几个萌新一起打了好几把。",
        weight: { a: 20, P: 20, Y: 15 },
        mamaProbability: 0.8,
      },
    ],
  },
  {
    id: "A6",
    genre: "pvp",
    title: "关于「对线」的火力",
    question: "你正常发育，一个0-8的队友突然疯狂标记你，把锅扣你头上。你：",
    options: [
      {
        text: "停在泉水里打字跟他吵了起来。",
        weight: { A: 30, p: 20, l: 15 },
      },
      {
        text: "屏蔽了他，继续补兵线发育。",
        weight: { Y: 30, L: 25, P: 15 },
      },
      {
        text: "接下来的操作变得犹豫，总在想是不是真的自己的问题。",
        weight: { y: 25, a: 25, p: 20 },
      },
    ],
  },
  {
    id: "A7",
    genre: "pvp",
    title: "关于「指挥权」的崩溃",
    question: "局势大逆风，你一直在发信号指挥，但队友各玩各的根本不理你。你：",
    options: [
      {
        text: "冲向了对面人群，也不管能不能打过。",
        weight: { A: 25, y: 20, p: 20 },
      },
      {
        text: "把身上值钱的装备全让给了队友。",
        weight: { a: 25, P: 20, Y: 15 },
        mamaProbability: 0.9,
      },
      {
        text: "屏蔽了所有人聊天，自己去单带一路。",
        weight: { L: 25, a: 20, P: 20 },
      },
    ],
  },
  {
    id: "A8",
    genre: "pvp",
    title: "关于「甩锅」的艺术",
    question: "团战你走位失误被秒了，导致一波被推平。基地爆炸时你说的是：",
    options: [
      {
        text: "“这把延迟太高了。”",
        weight: { l: 25, A: 20, p: 15 },
      },
      {
        text: "“辅助刚才大招交错了位置。”",
        weight: { A: 25, Y: 15, l: 15 },
      },
      {
        text: "“我的，这波我没打好。”",
        weight: { a: 25, p: 20, L: 10 },
      },
    ],
  },
  {
    id: "A9",
    genre: "pvp",
    title: "关于「谢幕」的嘲讽",
    question: "鏖战50分钟终于赢了。屏幕弹出“胜利”后，你做的第一件事是：",
    options: [
      {
        text: "在公屏打了两个字。",
        weight: { A: 30, Y: 20, l: 15 },
      },
      {
        text: "盯着结算面板看了很久，确认了自己的数据。",
        weight: { L: 30, Y: 25, P: 10 },
      },
      {
        text: "给每个队友都点了赞。",
        weight: { a: 25, y: 25, p: 10 },
      },
    ],
  },
  {
    id: "A10",
    genre: "pvp",
    title: "关于「练英雄」的底线",
    question: "刚在视频里看到一个新套路，你想试试。你：",
    options: [
      {
        text: "直接拿去排位了。",
        weight: { l: 25, p: 25, A: 15 },
      },
      {
        text: "先在训练模式里练了十几把才敢出去。",
        weight: { P: 30, L: 20, a: 15 },
      },
      {
        text: "去匹配打了两把，感觉不太行就不玩了。",
        weight: { p: 25, a: 15, y: 15 },
      },
    ],
  },
  {
    id: "A11",
    genre: "pvp",
    title: "关于「K头」的愤怒",
    question: "你把对面残血打到丝血，队友路过平A抢了你的人头。你：",
    options: [
      {
        text: "狂点了好几下该队友的头像，又把他正在打的兵抢了两个。",
        weight: { A: 25, Y: 20, l: 15 },
      },
      {
        text: "没什么反应，继续往前走。",
        weight: { L: 25, a: 20, Y: 15 },
      },
      {
        text: "打了个“老板大气”发到了队伍频道。",
        weight: { y: 20, a: 20, P: 10 },
      },
    ],
  },
  {
    id: "A12",
    genre: "pvp",
    title: "关于「投降」的抉择",
    question: "开局10分钟0比15，队友发起投降投票。你：",
    options: [
      {
        text: "点了拒绝。",
        weight: { P: 30, A: 20, y: 15 },
      },
      {
        text: "点了同意。",
        weight: { Y: 30, L: 25, p: 15 },
      },
      {
        text: "等着别人选完再跟着点的。",
        weight: { a: 25, p: 20, y: 15 },
      },
    ],
  },
  {
    id: "A13",
    genre: "pvp",
    title: "关于「神仙」的制裁",
    question: "排位遇到对面有开挂的。你：",
    options: [
      {
        text: "开了全员麦号召大家一起举报他。",
        weight: { A: 25, y: 20, P: 15 },
      },
      {
        text: "也开了一个外挂程序。",
        weight: { Y: 25, l: 20, p: 15 },
        hackProbability: 0.9,
      },
      {
        text: "放下鼠标，靠在了椅子背上。",
        weight: { p: 25, a: 20, L: 15 },
      },
    ],
  },
  {
    id: "A14",
    genre: "pvp",
    title: "关于「尽力局」的数据",
    question: "你战绩15-0但队友全崩了，这把必输。你最在意的是：",
    options: [
      {
        text: "截了自己战绩图的屏保。",
        weight: { A: 25, l: 20, Y: 15 },
      },
      {
        text: "躲在后面不敢上前，怕死了一次KDA变难看。",
        weight: { Y: 30, L: 20, p: 15 },
      },
      {
        text: "一直在发信号指挥，冲在最前面试图翻盘。",
        weight: { P: 25, y: 20, A: 15 },
      },
    ],
  },
  {
    id: "A15",
    genre: "pvp",
    title: "关于「补位」的怨念",
    question: "你想玩输出位，结果队友秒选了。为了阵容你只能补辅助。你：",
    options: [
      {
        text: "整局都在发信号提示C位走位有问题。",
        weight: { A: 25, Y: 20, l: 15 },
      },
      {
        text: "买了辅助装，出了辅助鞋，认真打完了这把。",
        weight: { L: 25, P: 20, a: 15 },
      },
      {
        text: "全程跟在输出位后面，他走到哪你跟到哪。",
        weight: { a: 25, p: 20, Y: 15 },
        mamaProbability: 0.9,
      },
    ],
  },
];
