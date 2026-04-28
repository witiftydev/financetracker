"use client";

import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useTheme } from "./ThemeProvider";

export default function ComposedChartCard({ data }: { data: any[] }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const text = isDark ? "#e5e7eb" : "#111827";

  return (
    <div className="w-full h-[340px] sm:h-[380px] rounded-xl border p-4">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data}>
          <XAxis dataKey="category" stroke={text} />
          <YAxis stroke={text} />
          <Tooltip />

          <Bar dataKey="amount" fill="#3b82f6" radius={[8, 8, 0, 0]} />
          <Line
            type="monotone"
            dataKey="amount"
            stroke="#a78bfa"
            strokeWidth={3}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
