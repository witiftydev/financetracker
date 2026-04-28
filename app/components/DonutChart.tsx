"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { useTheme } from "./ThemeProvider";

export default function DonutChart({ data }: { data: any[] }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const COLORS = isDark
    ? ["#818cf8", "#a78bfa", "#60a5fa", "#34d399", "#fbbf24"]
    : ["#3b82f6", "#6366f1", "#06b6d4", "#10b981", "#f59e0b"];

  const tooltipBg = isDark ? "rgba(17,24,39,0.9)" : "rgba(255,255,255,0.9)";

  const textColor = isDark ? "#e5e7eb" : "#111827";

  return (
    <div className="w-full h-[320px] sm:h-[360px] min-h-[280px] rounded-xl border p-4 backdrop-blur-md">
      {/* IMPORTANT FIX: avoid height 100% crash */}
      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
          {/* TOOLTIP (modern UI) */}
          <Tooltip
            contentStyle={{
              backgroundColor: tooltipBg,
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "12px",
              backdropFilter: "blur(10px)",
            }}
            labelStyle={{
              color: textColor,
              fontWeight: 600,
            }}
          />

          {/* DONUT */}
          <Pie
            data={data}
            dataKey="amount"
            nameKey="category"
            cx="50%"
            cy="50%"
            innerRadius={75}
            outerRadius={110}
            paddingAngle={5}
            stroke="none"
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
