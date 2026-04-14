import { GithubIcon } from "./github-icon";

export const GithubLink = () => {
  return (
    <a
      href="https://github.com/lxchapu/play"
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2 px-4 py-2 bg-neutral-900/50 hover:bg-neutral-800 border border-neutral-700/50 hover:border-neutral-500 rounded-full transition-all duration-300 group backdrop-blur-sm"
    >
      <GithubIcon className="w-5 h-5 text-neutral-300 group-hover:text-white transition-colors" />
      <span className="font-mono text-sm text-neutral-400 group-hover:text-neutral-100 hidden sm:inline">
        Star on GitHub
      </span>
      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse ml-1"></div>
    </a>
  );
};
