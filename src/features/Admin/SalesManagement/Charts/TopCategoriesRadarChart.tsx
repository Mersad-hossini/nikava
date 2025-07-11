"use client";
import React from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const categorySalesData = [
  { category: "موبایل", sales: 520 },
  { category: "هدفون", sales: 280 },
  { category: "لوازم جانبی", sales: 150 },
  { category: "لپ‌تاپ", sales: 100 },
  { category: "ساعت هوشمند", sales: 180 },
  { category: "اسپیکر", sales: 90 },
];

function TopCategoriesRadarChart() {
  return (
    <div className="bg-zinc-100 rounded-xl border border-zinc-100 shadow-md p-2">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        پرفروش‌ترین دسته‌ها
      </h2>
      <ResponsiveContainer width="100%" height={350}>
        <RadarChart outerRadius={120} data={categorySalesData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="category" fontSize={12} />
          <PolarRadiusAxis
            tickFormatter={(v) => `${v}M`}
            angle={30}
            domain={[0, 600]}
            tick={{ fontSize: 11 }}
          />
          <Tooltip
            formatter={(value: number) => [
              <span
                key="price"
                style={{ color: "#8b5cf6", fontWeight: "bold" }}
              >
                {value.toLocaleString()} میلیون تومان
              </span>,
              <span key="label" style={{ fontWeight: "bold" }}>
                فروش
              </span>,
            ]}
            contentStyle={{
              fontFamily: "inherit",
              direction: "rtl",
              textAlign: "right",
            }}
          />

          <Radar
            name="فروش"
            dataKey="sales"
            stroke="#6366f1"
            fill="#6366f1"
            fillOpacity={0.5}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TopCategoriesRadarChart;
