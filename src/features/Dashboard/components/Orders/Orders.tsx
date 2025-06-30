"use client";

import { ListOrdered } from "lucide-react";
import OrderBox from "./OrderBox";

const orders = [
  {
    id: 101,
    date: "۹ تیر ۱۴۰۴",
    status: "تحویل‌شده",
    total: "۱,۲۵۰,۰۰۰",
    items: [{ name: "کفش ورزشی" }, { name: "شلوار جین" }],
  },
  {
    id: 102,
    date: "۸ تیر ۱۴۰۴",
    status: "در حال پردازش",
    total: "۸۶۰,۰۰۰",
    items: [{ name: "ساعت مچی دیجیتال" }],
  },
];

export default function Orders() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-6 rounded-lg shadow-md bg-white">
      <div className="flex gap-2">
        <ListOrdered className="text-red-500" />
        <h1 className="text-xl font-bold text-zinc-800 mb-6">سفارش‌های من</h1>
      </div>

      {orders.map((order, index) => (
        <div
          key={index}
          dir="rtl"
          className="collapse collapse-arrow bg-zinc-100  rounded-xl shadow-md hover:shadow-lg transition"
        >
          <input type="checkbox" name={`order-${order.id}`} />

          {/* 🔸 order title */}
          <div className="collapse-title flex flex-col md:flex-row justify-between items-start md:items-center text-base md:text-lg font-semibold text-gray-800 gap-2">
            <span>سفارش #{order.id}</span>
            <span className="text-sm text-zinc-500">{order.date}</span>
          </div>

          {/* 🔹 Content of the order */}
          <div className="collapse-content text-sm text-zinc-700 leading-relaxed pr-1 space-y-4">
            {/* Three information boxes*/}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
              <OrderBox title="تعداد کالا" content={order.items.length} />
              <OrderBox title="مبلغ" content={`${order.total} تومان`} />
              <div className="bg-white shadow-md rounded-lg p-3 text-center">
                <div className="text-xs text-zinc-500 mb-1">وضعیت</div>
                <span
                  className={`inline-block px-2 py-1 text-xs rounded-full font-medium ${
                    order.status === "تحویل‌شده"
                      ? "bg-green-100 text-green-700"
                      : order.status === "در حال پردازش"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {order.status}
                </span>
              </div>
            </div>

            {/* List of products */}
            <div>
              <strong>محصولات خریداری‌شده:</strong>
              <ul className="list-disc pr-5 mt-2 text-zinc-600">
                {order.items.map((item, idx) => (
                  <li key={idx}>{item.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
