// --- 渲染全局控制栏 (Top Bar) ---
export const TopBar = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      type="button"
      onClick={() => onClick()}
      className="absolute top-4 left-4 sm:top-6 sm:left-6 z-50 flex items-center gap-2 px-3 py-1.5 text-slate-500 hover:text-red-400 border border-transparent hover:border-red-500/30 hover:bg-red-500/10 rounded transition-all font-mono text-xs sm:text-sm group"
    >
      <svg
        className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
      <span className="hidden sm:inline tracking-wider">TERMINATE_LINK</span>
    </button>
  );
};
