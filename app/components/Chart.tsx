"use client";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
} from "recharts";
import { useTheme } from "./ThemeProvider";
import { useEffect, useState } from "react";

type Props = { data: any[] };

const Chart = ({ data }: Props) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [isMobile, setIsMobile] = useState(false);

  // detect screen size
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 480);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const colors = {
    text: isDark ? "#e5e7eb" : "#111827",
    grid: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
    tooltipBg: isDark ? "rgba(17,24,39,0.9)" : "rgba(255,255,255,0.9)",
    border: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)",
  };

  const getBarColor = (index: number) => {
    const darkPalette = ["#818cf8", "#a78bfa", "#60a5fa", "#34d399"];
    const lightPalette = ["#3b82f6", "#6366f1", "#06b6d4", "#10b981"];

    return isDark
      ? darkPalette[index % darkPalette.length]
      : lightPalette[index % lightPalette.length];
  };

  return (
    <div className="w-full h-[340px] sm:h-[360px] md:h-[420px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 10, right: 10, left: 0, bottom: isMobile ? 55 : 30 }}
          barCategoryGap="30%"
        >
          {/* GRID */}
          <CartesianGrid
            strokeDasharray="3 6"
            stroke={colors.grid}
            vertical={false}
          />

          {/* X AXIS (RESPONSIVE ROTATION) */}
          <XAxis
            dataKey="category"
            stroke={colors.text}
            tick={{ fontSize: 11 }}
            tickLine={false}
            axisLine={false}
            interval={0}
            height={60}
            tickMargin={10}
            angle={isMobile ? -25 : 0}
            textAnchor={isMobile ? "end" : "middle"}
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
            cursor={{ fill: "rgba(99,102,241,0.08)" }}
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

          {/* BARS */}
          <Bar dataKey="amount" radius={[10, 10, 10, 10]}>
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={getBarColor(index)}
                style={{
                  filter: "drop-shadow(0px 6px 10px rgba(0,0,0,0.12))",
                }}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
