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
    tooltipBg: isDark ? "rgba(17,24,39,0.9)" : "rgba(255,255,255,0.9)",
    border: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)",
  };

  return (
    <div className="w-full h-[320px] sm:h-[360px] min-h-[280px] rounded-xl border p-4 backdrop-blur-md">
      {/* IMPORTANT FIX: avoid height="100%" bug */}
      <ResponsiveContainer width="100%" height={320}>
        <LineChart
          data={data}
          margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
        >
          {/* GRID */}
          <CartesianGrid stroke={colors.grid} vertical={false} />

          {/* X AXIS */}
          <XAxis
            dataKey="category"
            stroke={colors.text}
            tick={{ fontSize: 11 }}
            tickLine={false}
            axisLine={false}
            interval={0}
          />

          {/* Y AXIS */}
          <YAxis
            stroke={colors.text}
            tick={{ fontSize: 11 }}
            tickLine={false}
            axisLine={false}
          />

          {/* TOOLTIP */}
          <Tooltip
            cursor={{ stroke: colors.stroke, strokeWidth: 1, opacity: 0.2 }}
            contentStyle={{
              backgroundColor: colors.tooltipBg,
              border: `1px solid ${colors.border}`,
              borderRadius: "12px",
              backdropFilter: "blur(10px)",
            }}
            labelStyle={{
              color: colors.text,
              fontWeight: 600,
            }}
          />

          {/* LINE */}
          <Line
            type="monotone"
            dataKey="amount"
            stroke={colors.stroke}
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
