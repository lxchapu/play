import type { Scores } from "@/data/types";

/**
 * 雷达图
 */
export function OctagonRadar({
  scores,
  isAnomaly,
}: {
  scores: Scores;
  isAnomaly: boolean;
}) {
  const { P, L, A, Y, p, l, a, y } = scores;
  const angles = [0, 45, 90, 135, 180, 225, 270, 315];
  const values = [P, A, L, Y, p, a, l, y];

  const getCoord = (radius: number, angle: number) => {
    const rad = (angle * Math.PI) / 180;
    return `${50 + radius * Math.sin(rad)},${50 - radius * Math.cos(rad)}`;
  };

  const polygonPoints = values
    .map((val, i) => getCoord((val / 100) * 40, angles[i]))
    .join(" ");
  const gridRadii = [10, 20, 30, 40];
  const gridPolygons = gridRadii.map((r) =>
    angles.map((angle) => getCoord(r, angle)).join(" "),
  );

  const labels = [
    { key: "P", name: "爆肝", pos: "top-[-20px] left-1/2 -translate-x-1/2" },
    {
      key: "A",
      name: "竞技",
      pos: "top-[10%] right-[-10px] md:right-[-20px] translate-x-full",
    },
    {
      key: "L",
      name: "理性",
      pos: "top-1/2 right-[-15px] md:right-[-30px] -translate-y-1/2 translate-x-full",
    },
    {
      key: "Y",
      name: "收益",
      pos: "bottom-[10%] right-[-10px] md:right-[-20px] translate-x-full",
    },
    { key: "p", name: "随缘", pos: "bottom-[-20px] left-1/2 -translate-x-1/2" },
    {
      key: "a",
      name: "佛系",
      pos: "bottom-[10%] left-[-10px] md:left-[-20px] -translate-x-full",
    },
    {
      key: "l",
      name: "直觉",
      pos: "top-1/2 left-[-15px] md:left-[-30px] -translate-y-1/2 -translate-x-full",
    },
    {
      key: "y",
      name: "沉浸",
      pos: "top-[10%] left-[-10px] md:left-[-20px] -translate-x-full",
    },
  ];

  const radarColor = isAnomaly ? "#a855f7" : "#10b981";
  const radarFill = isAnomaly
    ? "rgba(168, 85, 247, 0.25)"
    : "rgba(16, 185, 129, 0.25)";
  const radarShadow = isAnomaly
    ? "drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]"
    : "drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]";
  const textClass = isAnomaly
    ? "text-purple-400 drop-shadow-[0_0_2px_rgba(168,85,247,0.8)]"
    : "text-emerald-400 drop-shadow-[0_0_2px_rgba(16,185,129,0.8)]";

  return (
    <div className="relative w-44 h-44 md:w-56 md:h-56 mx-auto my-6 flex items-center justify-center z-10">
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full overflow-visible"
        aria-hidden="true"
      >
        {gridPolygons.map((points, idx) => (
          <polygon
            key={idx}
            points={points}
            fill="none"
            stroke="currentColor"
            className="text-slate-700/40"
            strokeWidth="0.5"
          />
        ))}
        {angles.slice(0, 4).map((angle, idx) => {
          const p1 = getCoord(40, angle);
          const p2 = getCoord(40, angle + 180);
          return (
            <line
              key={idx}
              x1={p1.split(",")[0]}
              y1={p1.split(",")[1]}
              x2={p2.split(",")[0]}
              y2={p2.split(",")[1]}
              stroke="currentColor"
              className="text-slate-600/60"
              strokeWidth="0.5"
              strokeDasharray="2,2"
            />
          );
        })}
        <polygon
          points={polygonPoints}
          fill={radarFill}
          stroke={radarColor}
          strokeWidth="1.5"
          className={`animate-[pulse_3s_ease-in-out_infinite] ${radarShadow}`}
          style={{ strokeLinejoin: "round" }}
        />
        {values.map((val, i) => {
          const coord = getCoord((val / 100) * 40, angles[i]);
          return (
            <circle
              key={i}
              cx={coord.split(",")[0]}
              cy={coord.split(",")[1]}
              r="1.5"
              fill={radarColor}
            />
          );
        })}
      </svg>

      {labels.map((label) => (
        <div
          key={label.key}
          className={`absolute ${label.pos} flex flex-col items-center whitespace-nowrap`}
        >
          <span
            className={`text-sm md:text-base font-black font-mono ${textClass}`}
          >
            {label.key}
          </span>
          <span className="text-[9px] md:text-[10px] text-slate-500 font-mono tracking-widest">
            {label.name}
          </span>
        </div>
      ))}
    </div>
  );
}
