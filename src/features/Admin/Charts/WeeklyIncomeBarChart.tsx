"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const weeklyIncome = [
  { day: "شنبه", income: 25000000 },
  { day: "یکشنبه", income: 18000000 },
  { day: "دوشنبه", income: 22000000 },
  { day: "سه‌شنبه", income: 20000000 },
  { day: "چهارشنبه", income: 30000000 },
  { day: "پنج‌شنبه", income: 27000000 },
  { day: "جمعه", income: 35000000 },
];

const baseColor = "#10b981"; // emerald-500

function WeeklyIncomeBarChart() {
  return (
    <div className="bg-zinc-100 rounded-xl border border-zinc-100 shadow-md p-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">درآمد هفتگی</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={weeklyIncome}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="day"
            tick={{ fontSize: 12 }}
            padding={{ left: 10, right: 10 }}
          />
          <YAxis
            tickFormatter={(v) => `${v / 1e6}M`}
            tick={{ fontSize: 12, dx: -25 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            formatter={(value) => [
              <span key="price" className="text-emerald-500 font-bold">
                {Number(value).toLocaleString()} تومان
              </span>,
              "درآمد",
            ]}
            contentStyle={{
              fontFamily: "inherit",
              direction: "rtl",
              textAlign: "right",
            }}
            wrapperStyle={{ marginLeft: "-8px" }}
          />

          <Bar dataKey="income" barSize={30} radius={[4, 4, 0, 0]}>
            {weeklyIncome.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={baseColor}
                onMouseEnter={(e: React.MouseEvent<SVGElement>) => {
                  (e.target as SVGElement).style.filter = "brightness(0.85)";
                }}
                onMouseLeave={(e: React.MouseEvent<SVGElement>) => {
                  (e.target as SVGElement).style.filter = "none";
                }}
                style={{
                  transition: "filter 0.3s ease",
                  cursor: "default",
                }}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default WeeklyIncomeBarChart;
