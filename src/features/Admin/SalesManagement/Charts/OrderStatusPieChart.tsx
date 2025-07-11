"use client";
import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

// Datas
const orderStatusData = [
  { status: "در انتظار", value: 20 },
  { status: "ارسال‌شده", value: 30 },
  { status: "لغو شده", value: 10 },
  { status: "تحویل داده شده", value: 40 },
];

const COLORS = ["#facc15", "#4ade80", "#f87171", "#60a5fa"];

function OrderStatusPieChart() {
  return (
    <div className="bg-zinc-100 rounded-xl border border-zinc-100 shadow-md p-2">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        وضعیت سفارش‌ها
      </h2>
      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            data={orderStatusData}
            dataKey="value"
            nameKey="status"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label={true}
            labelLine={false}
          >
            {orderStatusData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                style={{
                  cursor: "pointer",
                  transition: "filter 0.3s ease",
                }}
                onMouseEnter={(e: React.MouseEvent<SVGElement>) => {
                  const target = e.target as SVGElement;
                  target.style.filter =
                    "drop-shadow(0 2px 6px rgba(0,0,0,0.4))";
                  target.style.strokeWidth = "2px";
                }}
                onMouseLeave={(e: React.MouseEvent<SVGElement>) => {
                  (e.target as SVGElement).style.filter = "none";
                }}
              />
            ))}
          </Pie>

          <Tooltip
            formatter={(value) => [
              <span key="value" className="text-red-500 font-bold">
                {Number(value).toLocaleString()} سفارش
              </span>,
              "وضعیت", // یا مثلاً "درآمد" یا هر عنوان دلخواه
            ]}
            contentStyle={{
              fontFamily: "inherit",
              direction: "rtl",
              textAlign: "right",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default OrderStatusPieChart;