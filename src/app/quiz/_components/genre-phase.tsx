import { META_QUESTION } from "@/data/questions";
import type { Genre } from "@/data/types";

// --- 渲染生态位选择 (Phase 0) ---
export const GenrePhase = ({
  onGenreSelect,
}: {
  onGenreSelect: (genreId: Exclude<Genre, "universal">) => void;
}) => (
  <div className="w-full max-w-3xl mx-auto animate-[fadeIn_0.5s_ease-out]">
    <div className="mb-8 border-l-4 border-emerald-500 pl-4 mt-12 md:mt-0">
      <h2 className="text-sm font-mono text-emerald-400 mb-2">
        [ PHASE 0 : SENSOR CALIBRATION ]
      </h2>
      <h1 className="text-3xl md:text-4xl font-bold text-slate-100">
        {META_QUESTION.title}
      </h1>
      <p className="text-slate-400 mt-2 font-mono text-sm">
        {META_QUESTION.question}
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {META_QUESTION.options.map((genre) => (
        <button
          type="button"
          key={genre.id}
          onClick={() => onGenreSelect(genre.id)}
          className="group relative flex flex-col items-start p-6 bg-slate-900/40 border border-slate-700/50 rounded-lg hover:border-emerald-500/50 hover:bg-slate-800/60 transition-all duration-300 text-left overflow-hidden"
        >
          <div className="absolute inset-0 w-1 bg-emerald-500 -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
          <span className="text-lg font-bold text-slate-200 group-hover:text-emerald-300 transition-colors">
            {genre.label}
          </span>
          <span className="text-sm text-slate-500 mt-2 font-mono group-hover:text-slate-400">
            {genre.desc}
          </span>
        </button>
      ))}
    </div>
  </div>
);
