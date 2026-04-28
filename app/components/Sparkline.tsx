"use client";

import { ResponsiveContainer, AreaChart, Area } from "recharts";

export default function Sparkline({ data }: { data: any[] }) {
  return (
    <div className="w-full h-[90px] relative">
      {/* soft glow background */}
      <div className="absolute inset-0 blur-2xl opacity-40 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400" />

      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          {/* gradient definition */}
          <defs>
            <linearGradient id="glowColor" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#6366f1" stopOpacity={0.9} />
              <stop offset="50%" stopColor="#a78bfa" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity={0.9} />
            </linearGradient>

            <linearGradient id="fillGlow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6366f1" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#6366f1" stopOpacity={0} />
            </linearGradient>
          </defs>

          {/* soft glowing area */}
          <Area
            type="monotone"
            dataKey="amount"
            stroke="url(#glowColor)"
            strokeWidth={2.5}
            fill="url(#fillGlow)"
            dot={false}
            isAnimationActive={true}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
