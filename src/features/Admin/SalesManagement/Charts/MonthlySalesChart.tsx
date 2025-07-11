"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const monthlySales = [
  { month: "فروردین", sales: 120000000 },
  { month: "اردیبهشت", sales: 100000000 },
  { month: "خرداد", sales: 12000000 },
  { month: "تیر", sales: 20000000 },
  { month: "مرداد", sales: 12500000 },
  { month: "شهریور", sales: 110000000 },
  { month: "مهر", sales: 14000000 },
  { month: "آبان", sales: 110000000 },
];

function MonthlySalesChart() {
  return (
    <div className="bg-zinc-100 rounded-xl border border-zinc-100 shadow-md p-2">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">فروش ماهانه</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={monthlySales}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis
            tickFormatter={(v) => `${v / 1e6}M`}
            tick={{ fontSize: 12, dx: -25 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            formatter={(value) => [
              <span
                key="value"
                style={{ color: "#3b82f6", fontWeight: "bold" }}
              >
                {Number(value).toLocaleString()} تومان
              </span>,
              "فروش", 
            ]}
            contentStyle={{
              fontFamily: "inherit",
              direction: "rtl",
              textAlign: "right",
            }}
            wrapperStyle={{ marginLeft: "-8px" }}
          />

          <Line
            type="monotone"
            dataKey="sales"
            stroke="#3b82f6"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default MonthlySalesChart;
