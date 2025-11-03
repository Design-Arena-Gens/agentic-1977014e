import { ReactNode } from "react";

type StatCardProps = {
  label: string;
  value: string;
  change?: number;
  period?: string;
  icon?: ReactNode;
};

export function StatCard({ label, value, change, period, icon }: StatCardProps) {
  const isPositive = (change ?? 0) >= 0;

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-zinc-100 bg-white/80 p-5 shadow-sm shadow-emerald-50 backdrop-blur transition hover:translate-y-[-2px] hover:shadow-md dark:border-zinc-800/60 dark:bg-zinc-900/80 dark:shadow-none">
      <div className="flex items-start justify-between">
        <div className="flex flex-col">
          <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            {label}
          </span>
          {period ? (
            <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
              {period}
            </span>
          ) : null}
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-500 dark:bg-emerald-900/40 dark:text-emerald-300">
          {icon}
        </div>
      </div>
      <div className="flex items-end justify-between">
        <span className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          {value}
        </span>
        {typeof change === "number" ? (
          <span
            className={`flex items-center gap-1 text-sm font-medium ${
              isPositive
                ? "text-emerald-600 dark:text-emerald-400"
                : "text-rose-500 dark:text-rose-400"
            }`}
          >
            <span
              aria-hidden
              className="text-lg leading-none"
            >
              {isPositive ? "▲" : "▼"}
            </span>
            {Math.abs(change).toFixed(1)}%
          </span>
        ) : null}
      </div>
    </div>
  );
}
