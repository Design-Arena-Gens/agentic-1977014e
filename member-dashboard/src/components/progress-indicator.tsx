type ProgressIndicatorProps = {
  value: number;
  label: string;
  description?: string;
};

export function ProgressIndicator({
  value,
  label,
  description,
}: ProgressIndicatorProps) {
  const normalized = Math.min(100, Math.max(0, value));

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-zinc-100 bg-white/80 p-5 shadow-sm backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-900/80">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
          {label}
        </span>
        <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
          {normalized.toFixed(0)}%
        </span>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative h-20 w-20">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `conic-gradient(#10b981 ${normalized * 3.6}deg, rgba(16, 185, 129, 0.15) ${normalized * 3.6}deg)`,
            }}
          />
          <div className="absolute inset-[14%] rounded-full bg-white shadow-inner dark:bg-zinc-950" />
          <div className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            {normalized.toFixed(0)}%
          </div>
        </div>
        {description ? (
          <div className="flex-1 text-sm text-zinc-600 dark:text-zinc-400">
            {description}
          </div>
        ) : null}
      </div>
    </div>
  );
}
