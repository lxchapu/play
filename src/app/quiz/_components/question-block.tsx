const LABELS = ["A", "B", "C", "D", "E"] as const;

interface QuestionBlockProps {
  id?: string;
  isMeta?: boolean;
  number: string;
  title?: string;
  question: string;
  options: { text: string; selected: boolean }[];
  onSelect: (idx: number) => void;
  note?: string;
}

export function QuestionBlock({
  id,
  isMeta,
  number,
  title,
  question,
  options,
  onSelect,
  note,
}: QuestionBlockProps) {
  return (
    <div
      id={id}
      className="flex flex-col items-center text-center pt-7 pb-2 scroll-mt-20"
    >
      {/* Head: number + tag */}
      <div className="flex items-center gap-3 mb-3.5">
        <span
          className={`font-title text-xs font-bold tracking-[0.18em] ${isMeta ? "text-text-mid bg-surface-soft px-2.5 py-1 rounded-full" : "text-text-soft"}`}
        >
          {number}
        </span>
        {title && process.env.NODE_ENV === "development" && (
          <span className="text-[11px] font-semibold tracking-widest uppercase text-text-mid bg-surface-soft border border-border px-2.5 py-1 rounded-full">
            {title}
          </span>
        )}
      </div>

      {/* Question text */}
      <p className="font-title text-[26px] font-medium leading-[1.4] text-text-dark mb-8 max-w-140">
        {question}
      </p>

      {/* Supplementary note */}
      {note && (
        <p className="-mt-3 mb-4.5 text-[13px] text-text-soft text-center max-w-120">
          {note}
        </p>
      )}

      {/* Options */}
      <div className="w-full max-w-125 flex flex-col gap-2.5 text-left mb-2">
        {options.map((opt, idx) => {
          return (
            <button
              key={LABELS[idx]}
              type="button"
              onClick={() => onSelect(idx)}
              className={`flex items-start gap-3 w-full px-4 py-3 bg-surface-soft border-2 rounded-xl cursor-pointer text-left font-[inherit] text-inherit transition-all duration-150 ${
                opt.selected
                  ? "border-(--color-brand) bg-surface-soft shadow-[0_0_0_1px_rgba(99,102,241,0.2)]"
                  : "border-border hover:border-(--color-brand)/35 hover:shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
              }`}
            >
              <span
                className={`shrink-0 w-6.5 h-6.5 rounded-full flex items-center justify-center text-white font-title font-bold text-xs tracking-wide transition-colors duration-150 ${
                  opt.selected ? "bg-(--color-brand)" : "bg-text-mid"
                }`}
              >
                {LABELS[idx]}
              </span>
              <span className="flex-1 text-sm leading-[1.55] text-text-dark pt-0.5">
                {opt.text}
              </span>
            </button>
          );
        })}
      </div>

      {/* Meter */}
      {!isMeta && (
        <p className="mt-5 text-xs text-text-soft tracking-[0.08em]">
          {(() => {
            const selectedLabel = options.findIndex((o) => o.selected);
            return selectedLabel >= 0
              ? `已选择 ${LABELS[selectedLabel]}`
              : "未作答";
          })()}
        </p>
      )}
    </div>
  );
}
