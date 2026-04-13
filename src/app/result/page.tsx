/**
 * 测试结果展示
 */
"use client";

import { ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { DIMENSION_LABELS, PERSONALITIES } from "@/data/personalities";
import { decodeResult } from "@/logic/result-codec";

function ResultCodeLine({ text }: { text: string }) {
  const chars = text.split("").map((ch, i) => ({ ch, pos: i }));
  return (
    <span className="inline-flex flex-wrap justify-center gap-0">
      {chars.map(({ ch, pos }) => (
        <span
          key={`char-${pos}-${ch}`}
          className="inline-block w-[1em] min-w-[1em] text-center"
        >
          {ch}
        </span>
      ))}
    </span>
  );
}

export default function ResultPage() {
  const searchParams = useSearchParams();
  const data = searchParams.get("data");
  const result = data ? decodeResult(data) : null;

  if (!result || !PERSONALITIES[result.code]) return null;

  const { code, scores } = result;
  const p = { code, ...PERSONALITIES[code] };

  return (
    <div className="min-h-screen bg-surface">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/92 backdrop-blur-[saturate(1.6)_blur(10px)] border-b border-border">
        <div className="max-w-260 mx-auto px-8 py-3.5 flex items-center justify-between gap-4">
          <Link
            href="/quiz"
            className="inline-flex items-center gap-2 text-sm font-medium text-text-mid hover:text-text-dark transition-colors"
          >
            <ArrowLeft size={18} className="shrink-0" />
            重新测试
          </Link>
          <button
            type="button"
            className="inline-flex items-center gap-2 text-sm font-medium text-text-mid hover:text-text-dark transition-colors"
          >
            <Share2 size={18} className="shrink-0" />
            分享图片
          </button>
        </div>
      </nav>

      <div className="max-w-200 mx-auto px-8 pt-14 pb-20 flex flex-col gap-18">
        {/* ===== Hero ===== */}
        <section className="text-center pt-5">
          {/* Eyebrow */}
          <p className="mb-7 text-xs font-semibold tracking-[0.14em] uppercase text-text-mid">
            测试完成 · 你的 PLAY 赛博人格是
          </p>

          {/* Portrait */}
          <div className="relative mx-auto mb-6 w-80">
            <div className="aspect-square w-full overflow-hidden rounded-full bg-linear-to-br from-brand/10 to-brand/5 flex items-center justify-center">
              <span className="text-8xl">{p.emoji}</span>
            </div>
            <div className="absolute -inset-[12%] -z-10 rounded-full bg-[radial-gradient(circle_at_50%_45%,rgba(99,102,241,0.08)_0%,transparent_62%)]" />
          </div>

          {/* Identity */}
          <div className="mb-7">
            <h1 className="font-title text-[64px] font-bold leading-[1.05] tracking-[-0.02em] text-text-dark mb-2.5">
              {p.name}
            </h1>
            <p className="text-[68px] font-bold leading-[1.2] tracking-[0] uppercase text-brand mb-1.5">
              <span className="inline-flex flex-wrap justify-center">
                {p.abbr.split("").map((ch) => (
                  <span
                    key={ch}
                    className="inline-block w-[1em] min-w-[1em] text-center"
                  >
                    {ch}
                  </span>
                ))}
              </span>
            </p>
            <p className="font-title text-[26px] font-semibold tracking-[0] uppercase text-text-soft">
              <ResultCodeLine text={p.code} />
            </p>
          </div>

          {/* Tagline */}
          <p className="mx-auto mb-8 text-[19px] leading-[1.55] text-text-mid max-w-520">
            &ldquo;{p.quote}&rdquo;
          </p>
        </section>

        {/* ===== Dimensions ===== */}
        <section>
          <p className="mb-3 text-xs font-semibold tracking-[0.16em] uppercase text-text-soft">
            维度分析 · Dimensions
          </p>
          <h2 className="font-title mb-7 text-[34px] font-bold leading-[1.15] tracking-[-0.01em] text-text-dark">
            四维坐标
          </h2>
          <div className="flex flex-col gap-6">
            {DIMENSION_LABELS.map((axis) => {
              const upperWins = scores[axis.upper] >= scores[axis.lower];
              return (
                <div key={axis.upper}>
                  <div className="mb-2.5">
                    <span className="font-title text-base font-bold text-text-dark">
                      {axis.upper}
                    </span>
                  </div>
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`min-w-18 text-right text-[13px] font-medium ${upperWins ? "text-brand" : undefined}`}
                    >
                      {axis.upperLabel}
                    </span>
                    <div className="relative h-2 flex-1 overflow-hidden rounded-full bg-border">
                      <div
                        className={`absolute right-1/2 top-0 h-full rounded-full ${upperWins ? "bg-brand" : "bg-border-strong"}`}
                        style={{ width: `${scores[axis.upper] / 2}%` }}
                      />
                      <div
                        className={`absolute left-1/2 top-0 h-full rounded-full ${!upperWins ? "bg-[#F25E62]" : "bg-border-strong"}`}
                        style={{ width: `${scores[axis.lower] / 2}%` }}
                      />
                    </div>
                    <span
                      className={`min-w-18 text-left text-[13px] font-medium ${!upperWins ? "text-[#F25E62]" : undefined}`}
                    >
                      {axis.lowerLabel}
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs text-text-soft">
                    {axis.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ===== Dynamic Profile ===== */}
        <section>
          <p className="mb-3 text-xs font-semibold tracking-[0.16em] uppercase text-text-soft">
            动态画像 · Profile
          </p>
          <h2 className="font-title mb-7 text-[34px] font-bold leading-[1.15] tracking-[-0.01em] text-text-dark">
            这次的你更像这样
          </h2>
          <div className="max-w-620 text-[17px] leading-[1.8] text-text-dark">
            {p.description
              .split(/\u3002/)
              .filter(Boolean)
              .map((sentence) => (
                <p key={sentence} className="mb-4 last:mb-0">
                  {sentence}。
                </p>
              ))}
          </div>
        </section>

        {/* ===== Traits ===== */}
        <section>
          <p className="mb-3 text-xs font-semibold tracking-[0.16em] uppercase text-text-soft">
            常见病状 · Traits
          </p>
          <h2 className="font-title mb-7 text-[34px] font-bold leading-[1.15] tracking-[-0.01em] text-text-dark">
            你的特质
          </h2>
          <ul className="list-none p-0">
            {p.traits.map((trait, i) => (
              <li
                key={trait}
                className="flex items-baseline gap-5 border-t border-border py-5 last:border-b"
              >
                <span className="font-title min-w-9 text-[13px] font-bold tracking-widest text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 text-[15px] leading-[1.7] text-text-dark">
                  {trait}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* ===== Soul Blade (Toxic Evaluation) ===== */}
        <section>
          <p className="mb-3 text-xs font-semibold tracking-[0.16em] uppercase text-text-soft">
            毒舌鉴定 · Toxic Evaluation
          </p>
          <h2 className="font-title mb-7 text-[34px] font-bold leading-[1.15] tracking-[-0.01em] text-text-dark">
            你在游戏里的样子
          </h2>
          <div className="flex flex-col gap-6">
            <div className="rounded-none border-l-4 border-brand bg-surface-soft px-7 py-6">
              <p className="font-title text-xl font-medium leading-[1.55] text-text-dark">
                {p.soulBlade}
              </p>
            </div>
            <div className="rounded-none border-l-4 border-border-strong bg-surface-soft px-7 py-6">
              <p className="text-[17px] leading-[1.8] text-text-mid">
                {p.toxicEvaluation}
              </p>
            </div>
          </div>
        </section>

        {/* ===== Advice (Cyber Prescription) ===== */}
        <section className="rounded-3xl border border-border bg-surface-soft px-11 py-14 text-center">
          <p className="mb-3 text-xs font-semibold tracking-[0.16em] uppercase text-text-soft">
            一句忠告 · Advice
          </p>
          <p className="mx-auto mb-0 max-w-580 font-title text-[26px] font-medium leading-normal text-text-dark">
            &ldquo;{p.cyberPrescription}&rdquo;
          </p>
        </section>

        {/* ===== Restart ===== */}
        <div className="text-center">
          <Link
            href="/quiz"
            className="inline-flex items-center gap-3 rounded-full bg-brand px-8 py-4 text-base font-semibold text-white shadow-[0_4px_16px_rgba(99,102,241,0.25)] transition-all hover:bg-brand-dark hover:shadow-[0_6px_20px_rgba(99,102,241,0.35)]"
          >
            再测一次
            <ArrowLeft size={18} />
          </Link>
        </div>

        {/* ===== Footer ===== */}
        <footer className="flex flex-col items-center gap-5 border-t border-border pt-8 text-center">
          <p className="text-xs tracking-[0.04em] text-text-soft">
            PLAY · 自嘲型游戏人格测试 · 仅供娱乐
          </p>
          <p className="text-xs tracking-[0.04em] text-text-soft">
            本测试未经临床验证，请勿用于相亲、挽回、分手或发律师函。
          </p>
        </footer>
      </div>
    </div>
  );
}
