"use client";
import "./_styles/style.css";

import { useRouter } from "next/navigation";
import { useState } from "react";

import type { Genre } from "@/data/types";
import { calculateScores } from "@/logic/calculator";
import { classifyPersonality } from "@/logic/classifier";
import { encodeResult } from "@/logic/result-codec";
import { GenrePhase } from "./_components/genre-phase";
import { QuizPhase } from "./_components/quiz-phase";
import { TopBar } from "./_components/top-bar";
import { Transition } from "./_components/transition";
import { useQuiz } from "./_hooks/use-quiz";

const TRANSITION_LOGS = [
  "[SCAN] 正在计算你的“电子阳痿”全周期概率曲线...",
  "[WRITE] 发现 42 个已标记为“赛博故乡”的存档点...",
  "[TRACE] 监测到对特定 NPC 的高强度情感投射...",
  "[INFO] 正在将你的游戏时长转化为现实世界缺失的成就感...",
  "[DETECT] 正在分析你的心率波动与破防阈值...",
];

const DEEP_SCAN_LOGS = [
  "[SYS] 正在将脉冲信号写入人格矩阵...",
  "[WARN] 检测到异常决策波动，正在复核...",
  "[SCAN] 正在比对全网玩家行为基准线...",
  "[WRITE] 局部记忆碎片提取成功...",
];

export default function QuizPage() {
  const [phase, setPhase] = useState<"genre" | "transition" | "quiz">("genre");
  const [selectedGenre, setSelectedGenre] = useState<Exclude<
    Genre,
    "universal"
  > | null>(null);

  const {
    queue,
    totalQuestions,
    isFinished,
    answers,
    answerQuestion,
    generateQueue,
  } = useQuiz();
  const [currentIndex, setCurrentIndex] = useState(0);

  // 是否正在生成题目
  const [isGenerating, setIsGenerating] = useState(false);
  // 新增：是否正在展示深度写入日志
  const [isWritingLog, setIsWritingLog] = useState(false);
  // 新增：当前随机展示的日志内容
  const [currentSysLog, setCurrentSysLog] = useState("");
  // 日志状态
  const [logs, setLogs] = useState<string[]>([]);

  const router = useRouter();

  const startTransitionLogs = () => {
    let logCount = 0;
    const logInterval = setInterval(() => {
      setLogs((prev) => [
        ...prev,
        TRANSITION_LOGS[Math.floor(Math.random() * TRANSITION_LOGS.length)],
      ]);
      logCount++;
      if (logCount >= 3 && !isGenerating) {
        clearInterval(logInterval);
        setTimeout(() => setPhase("quiz"), 1000);
      }
    }, 600);
  };

  // 提交生态位选择
  const handleGenreSelect = (genreId: Exclude<Genre, "universal">) => {
    setSelectedGenre(genreId);
    // 开始过渡动画
    setPhase("transition");
    startTransitionLogs();
    // 生成题目
    setIsGenerating(true);
    generateQueue(genreId);
    setCurrentIndex(0);
    setIsGenerating(false);
  };

  const proceedToNext = (nextIndex: number | null) => {
    setIsWritingLog(false);

    if (currentIndex < totalQuestions - 1) {
      if (nextIndex) setCurrentIndex(nextIndex);
    } else {
      submit();
    }
  };

  const triggerDeepScan = (nextIndex: number | null) => {
    const randomSysLog =
      DEEP_SCAN_LOGS[Math.floor(Math.random() * DEEP_SCAN_LOGS.length)];
    setCurrentSysLog(randomSysLog);
    setTimeout(() => proceedToNext(nextIndex), 1000);
  };

  // 回答问题
  const handleOptionClick = (optIdx: number) => {
    if (isWritingLog) return;
    setIsWritingLog(true);
    const nextIndex = answerQuestion(currentIndex, optIdx);

    const isDeepScan = Math.random() > 0.7;

    if (isDeepScan) {
      triggerDeepScan(nextIndex);
    } else {
      proceedToNext(nextIndex);
    }
  };

  // 返回上一题
  const handlePreviousQuestion = () => {
    if (isWritingLog || currentIndex <= 0) return;
    setCurrentIndex((prev) => prev - 1);
  };

  // 手动跳转到下一题 (当本题已有答案时触发)
  const handleNextQuestion = () => {
    if (isWritingLog) return;
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      submit();
    }
  };

  const submit = () => {
    if (selectedGenre == null || !isFinished) return;
    const { scores, hiddenPersonalityScores } = calculateScores(queue, answers);
    const personality = classifyPersonality(scores, hiddenPersonalityScores);
    const encoded = encodeResult(personality.id, scores);
    router.push(`/result?data=${encoded}`);
  };

  // 退回首页 (强行切断链接)
  const handleTerminate = () => {
    // 增加确认框，带有赛博系统警告的口吻
    if (
      confirm(
        "[SYS WARNING] 确定要强行切断神经链接吗？\n当前的诊断进度和尚未写入的人格映射将会丢失。",
      )
    ) {
      router.replace("/");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4 relative selection:bg-emerald-500/30">
      <TopBar onClick={handleTerminate} />

      {/* 科技背景 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_20%,#020617_100%)] pointer-events-none"></div>

      <div className="relative z-10 w-full flex justify-center">
        {phase === "genre" && <GenrePhase onGenreSelect={handleGenreSelect} />}
        {phase === "transition" && <Transition logs={logs} />}
        {phase === "quiz" && (
          <QuizPhase
            quesion={queue[currentIndex]}
            currentIndex={currentIndex}
            answerIndex={answers[queue[currentIndex].id]}
            totalQuestions={totalQuestions}
            onOptionClick={handleOptionClick}
            onPrevClick={handlePreviousQuestion}
            onNextClick={handleNextQuestion}
            isWritingLog={isWritingLog}
            sysLog={currentSysLog}
          />
        )}
      </div>
    </div>
  );
}
