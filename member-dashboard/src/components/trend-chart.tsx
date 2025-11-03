type TrendPoint = {
  label: string;
  value: number;
};

type TrendChartProps = {
  data: TrendPoint[];
  color?: string;
};

export function TrendChart({
  data,
  color = "#10b981",
}: TrendChartProps) {
  if (!data.length) {
    return null;
  }

  const gradientId = `trend-${data
    .map((item) => item.label.toLowerCase().replace(/\s+/g, "-"))
    .join("-")}`;
  const maxValue = Math.max(...data.map((item) => item.value));
  const minValue = Math.min(...data.map((item) => item.value));
  const diff = maxValue - minValue || 1;

  const points = data
    .map((item, index) => {
      const x = (index / (data.length - 1 || 1)) * 100;
      const y = 100 - ((item.value - minValue) / diff) * 100;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="flex h-full flex-col justify-between">
      <div className="relative h-40 w-full overflow-hidden rounded-xl border border-zinc-100 bg-white/70 p-3 dark:border-zinc-800/60 dark:bg-zinc-900/70">
        <svg
          viewBox="0 0 100 100"
          className="h-full w-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity={0.38} />
              <stop offset="100%" stopColor={color} stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <path
            d={`M0,100 ${points} 100,100`}
            fill={`url(#${gradientId})`}
            opacity={0.55}
          />
          <polyline
            points={points}
            fill="none"
            stroke={color}
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {data.map((item, index) => {
            const x = (index / (data.length - 1 || 1)) * 100;
            const y = 100 - ((item.value - minValue) / diff) * 100;
            return (
              <circle
                key={item.label}
                cx={x}
                cy={y}
                r={2.5}
                fill={color}
              />
            );
          })}
        </svg>
      </div>
      <div className="mt-3 grid grid-cols-5 text-xs font-medium text-zinc-500 dark:text-zinc-400">
        {data.map((item) => (
          <span key={item.label} className="text-center">
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}
