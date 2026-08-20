"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell,
} from "recharts";

const data = [
  {
    name: "Abandonment Rate",
    rate: 70.19,
  },
];

export default function CarAbandonmentRateChart() {
  return (
    <div className="h-[600px] w-full max-w-lg rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-4">
        <h2 className="text-lg font-semibold tracking-tight text-gray-900">
          Car Abandonment Rate
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Percentage of abandoned cars
        </p>
      </div>

      <div className="flex h-[85%] w-full items-center justify-center">
        <ResponsiveContainer width="80%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 20, left: 15, bottom: 10 }}
          >
            <CartesianGrid
              strokeDasharray="4 4"
              vertical={false}
              stroke="#e5e7eb"
            />

            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#6b7280",
                fontSize: 12,
                fontWeight: 500,
              }}
            />

            <YAxis
              domain={[0, 100]}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `${value}%`}
              tick={{
                fill: "#9ca3af",
                fontSize: 12,
              }}
            />

            <Tooltip
              cursor={{ fill: "transparent" }}
              formatter={(value) => [
                `${Number(value).toFixed(2)}%`,
                "Abandonment Rate",
              ]}
              contentStyle={{
                borderRadius: "12px",
                border: "1px solid #e5e7eb",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              }}
            />

            <Bar dataKey="rate" barSize={85} radius={[12, 12, 4, 4]}>
              <Cell fill="#2563eb" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
