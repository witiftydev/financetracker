"use client";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useTheme } from "./ThemeProvider";

type Props = { data: any[] };

const Chart = ({ data }: Props) => {
  const { theme } = useTheme();

  const isDark = theme === "dark";

  const barColor = isDark
    ? "rgba(99, 102, 241, 0.8)"
    : "rgba(59, 130, 246, 0.8)";

  const textColor = isDark ? "#e5e7eb" : "#111827"; // axis + labels
  const tooltipBg = isDark ? "#111827" : "#ffffff";
  const tooltipText = isDark ? "#ffffff" : "#000000";

  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          {/* X Axis */}
          <XAxis dataKey="category" stroke={textColor} />

          {/* Y Axis */}
          <YAxis stroke={textColor} />

          {/* Tooltip */}
          <Tooltip
            contentStyle={{
              backgroundColor: tooltipBg,
              border: "none",
              borderRadius: "8px",
              color: tooltipText,
            }}
            labelStyle={{
              color: tooltipText,
            }}
          />

          <Bar dataKey="amount" fill={barColor} radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
