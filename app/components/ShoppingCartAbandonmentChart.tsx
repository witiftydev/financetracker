"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const data = [
  { year: "2006", rate: 59.8 },
  { year: "2007", rate: 61.36 },
  { year: "2008", rate: 62.1 },
  { year: "2009", rate: 66.08 },
  { year: "2010", rate: 64.76 },
  { year: "2011", rate: 68.87 },
  { year: "2012", rate: 71.98 },
  { year: "2013", rate: 71.1 },
  { year: "2014", rate: 68.07 },
  { year: "2015", rate: 68.5 },
  { year: "2016", rate: 68.63 },
  { year: "2017", rate: 69.2 },
  { year: "2018", rate: 69.89 },
  { year: "2019", rate: 69.5 },
  { year: "2020", rate: 69.8 },
  { year: "2021", rate: 69.85 },
  { year: "2022", rate: 69.99 },
  { year: "2023", rate: 70.1 },
  { year: "2024", rate: 70.19 },
  { year: "2025", rate: 70.15 },
  { year: "2026", rate: 70.2 },
];

const labelYears = [
  "2006",
  "2007",
  "2009",
  "2010",
  "2011",
  "2012",
  "2014",
  "2016",
  "2018",
  "2020",
  "2022",
  "2024",
  "2026",
];

const CustomLabel = ({
  x,
  y,
  value,
  index,
}: {
  x?: number;
  y?: number;
  value?: number;
  index?: number;
}) => {
  if (
    x === undefined ||
    y === undefined ||
    value === undefined ||
    index === undefined
  ) {
    return null;
  }

  if (!labelYears.includes(data[index].year)) {
    return null;
  }

  return (
    <text
      x={x}
      y={y - 12}
      textAnchor="middle"
      fill="#111827"
      fontSize={12}
      fontWeight={600}
    >
      {value.toFixed(2)}%
    </text>
  );
};

export default function ShoppingCartAbandonmentChart() {
  return (
    <div className="h-[420px] w-full rounded-xl bg-white p-4 sm:h-[500px] sm:p-6">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 30,
            right: 20,
            left: 10,
            bottom: 15,
          }}
        >
          <CartesianGrid vertical={false} stroke="#d1d5db" strokeWidth={1} />

          <XAxis
            dataKey="year"
            axisLine={false}
            tickLine={false}
            tick={{
              fill: "#4b5563",
              fontSize: 10,
            }}
            minTickGap={12}
          />

          <YAxis
            domain={[58, 76]}
            ticks={[58, 60, 62, 64, 66, 68, 70, 72, 74, 76]}
            axisLine={false}
            tickLine={false}
            width={45}
            tick={{
              fill: "#374151",
              fontSize: 12,
            }}
            label={{
              value: "Shopping cart abandonment rate",
              angle: -90,
              position: "insideLeft",
              offset: 10,
              style: {
                fill: "#4b5563",
                fontSize: 12,
              },
            }}
          />

          <Tooltip
            formatter={(value) => [
              `${Number(value).toFixed(2)}%`,
              "Abandonment Rate",
            ]}
            contentStyle={{
              borderRadius: "10px",
              border: "1px solid #e5e7eb",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            }}
          />

          <Line
            type="linear"
            dataKey="rate"
            stroke="#2563eb"
            strokeWidth={2}
            dot={{
              r: 4,
              fill: "#2563eb",
              strokeWidth: 0,
            }}
            activeDot={{
              r: 6,
            }}
          >
            <LabelList dataKey="rate" content={<CustomLabel />} />
          </Line>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
