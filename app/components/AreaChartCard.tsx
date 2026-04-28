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
    fill: isDark ? "rgba(129,140,248,0.2)" : "rgba(59,130,246,0.2)",
  };

  return (
    <div className="w-full h-[320px] sm:h-[360px] rounded-xl border p-4 backdrop-blur-md">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
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
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
