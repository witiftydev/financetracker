"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { useTheme } from "./ThemeProvider";

export default function DonutChart({ data }: { data: any[] }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const COLORS = isDark
    ? ["#818cf8", "#a78bfa", "#60a5fa", "#34d399", "#fbbf24"]
    : ["#3b82f6", "#6366f1", "#06b6d4", "#10b981", "#f59e0b"];

  return (
    <div className="w-full h-[320px] sm:h-[360px] rounded-xl border p-4 backdrop-blur-md">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Tooltip />

          <Pie
            data={data}
            dataKey="amount"
            nameKey="category"
            innerRadius={70}
            outerRadius={110}
            paddingAngle={4}
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
