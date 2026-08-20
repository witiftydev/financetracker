"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "To increase sales within the country", value: 47 },
  { name: "To broaden customer base", value: 41 },
  { name: "To automate processes", value: 40 },
  { name: "To lower inventory and supply chain costs", value: 24 },
  { name: "To explore new sources of revenue", value: 22 },
  { name: "To know more about consumers and enhance interactions", value: 16 },
  { name: "To improve monitoring of the business's activities", value: 14 },
  { name: "To improve more flexible working arrangements", value: 13 },
  { name: "To reduce businesses' energy consumption", value: 13 },
  { name: "To increase sales outside the country", value: 9 },
  { name: "To enhance the products", value: 8 },
  { name: "To comply with government regulations", value: 4 },
  { name: "To be seen as attractive to potential employees", value: 1 },
];

export default function DigitalBusinessChart() {
  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white p-4 sm:p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900">
          Business Objectives
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Reasons for using digital tools
        </p>
      </div>

      <div className="h-[650px] w-full sm:h-[700px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{
              top: 10,
              right: 25,
              left: 10,
              bottom: 20,
            }}
          >
            <CartesianGrid horizontal={false} vertical={false} />

            <XAxis
              type="number"
              domain={[0, 50]}
              ticks={[0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50]}
              axisLine={{
                stroke: "#374151",
              }}
              tickLine={{
                stroke: "#374151",
              }}
              tick={{
                fill: "#374151",
                fontSize: 12,
              }}
            />

            <YAxis
              type="category"
              dataKey="name"
              width={280}
              axisLine={{
                stroke: "#374151",
              }}
              tickLine={false}
              tick={{
                fill: "#111827",
                fontSize: 12,
              }}
            />

            <Tooltip
              formatter={(value) => [`${value}%`, "Respondents"]}
              cursor={{
                fill: "rgba(37, 99, 235, 0.05)",
              }}
              contentStyle={{
                borderRadius: "10px",
                border: "1px solid #e5e7eb",
                boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              }}
            />

            <Bar
              dataKey="value"
              fill="#4b8ca8"
              barSize={12}
              radius={[0, 0, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 border-t border-gray-100 pt-4">
        <p className="text-xs italic text-gray-500">
          Note: Based on respondents that indicated their business is
          digitalised. Respondents were given the possibility to select multiple
          answers.
        </p>

        <p className="mt-1 text-xs text-gray-500">
          Source: 2023 OECD D4SME Survey.
        </p>
      </div>
    </div>
  );
}
