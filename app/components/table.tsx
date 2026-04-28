"use client";

import { Transaction } from "../lib/data";
import { useTheme } from "./ThemeProvider";

export default function Table({ data }: { data: Transaction[] }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const text = isDark ? "#e5e7eb" : "#111827";

  return (
    <div className="w-full mt-6 overflow-x-auto">
      {/* container */}
      <div
        className="min-w-[420px] rounded-xl border overflow-hidden backdrop-blur-md"
        style={{
          background: isDark
            ? "rgba(255,255,255,0.03)"
            : "rgba(255,255,255,0.7)",
          borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)",
        }}
      >
        {/* HEADER */}
        <div
          className="grid grid-cols-3 px-4 sm:px-6 py-3 text-xs sm:text-sm font-semibold"
          style={{
            color: text,
            borderBottom: isDark
              ? "1px solid rgba(255,255,255,0.08)"
              : "1px solid rgba(0,0,0,0.08)",
          }}
        >
          <span>Date</span>
          <span>Category</span>
          <span className="text-right">Amount</span>
        </div>

        {/* ROWS */}
        {data.map((item) => (
          <div
            key={item.id}
            className="
              grid grid-cols-3
              px-4 sm:px-6 py-3
              text-xs sm:text-sm
              transition-all duration-200
              hover:bg-black/5 dark:hover:bg-white/5
            "
            style={{
              color: text,
              borderBottom: isDark
                ? "1px solid rgba(255,255,255,0.04)"
                : "1px solid rgba(0,0,0,0.04)",
            }}
          >
            {/* DATE */}
            <span className="opacity-80 whitespace-nowrap">{item.date}</span>

            {/* CATEGORY */}
            <span className="flex items-center">
              <span
                className="px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium whitespace-nowrap"
                style={{
                  background: isDark
                    ? "rgba(99,102,241,0.15)"
                    : "rgba(59,130,246,0.12)",
                  color: isDark ? "#c7d2fe" : "#1d4ed8",
                  border: isDark
                    ? "1px solid rgba(99,102,241,0.3)"
                    : "1px solid rgba(59,130,246,0.2)",
                }}
              >
                {item.category}
              </span>
            </span>

            {/* AMOUNT */}
            <span className="text-right font-semibold whitespace-nowrap">
              ${item.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
