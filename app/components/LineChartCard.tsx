"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useTheme } from "./ThemeProvider";

export default function LineChartCard({ data }: { data: any[] }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const colors = {
    text: isDark ? "#e5e7eb" : "#111827",
    grid: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
    stroke: isDark ? "#a78bfa" : "#6366f1",
  };

  return (
    <div className="w-full h-[320px] sm:h-[360px] rounded-xl border p-4 backdrop-blur-md">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid stroke={colors.grid} vertical={false} />

          <XAxis dataKey="category" stroke={colors.text} />
          <YAxis stroke={colors.text} />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="amount"
            stroke={colors.stroke}
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
