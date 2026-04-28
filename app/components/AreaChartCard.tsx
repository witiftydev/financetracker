"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useTheme } from "./ThemeProvider";

export default function AreaChartCard({ data }: { data: any[] }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const colors = {
    text: isDark ? "#e5e7eb" : "#111827",
    grid: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
    stroke: isDark ? "#818cf8" : "#3b82f6",
  };

  return (
    <div className="w-full h-[320px] sm:h-[360px] min-h-[280px] rounded-xl border p-4 backdrop-blur-md">
      {/* IMPORTANT: FIX height(-1) issue */}
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="areaGlow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={colors.stroke} stopOpacity={0.4} />
              <stop offset="95%" stopColor={colors.stroke} stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid stroke={colors.grid} vertical={false} />

          <XAxis
            dataKey="category"
            stroke={colors.text}
            tick={{ fontSize: 11 }}
          />

          <YAxis stroke={colors.text} tick={{ fontSize: 11 }} />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="amount"
            stroke={colors.stroke}
            strokeWidth={2}
            fill="url(#areaGlow)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
