"use client";
import React from "react";
import DataTable from "../components/DataTable/DataTable";
import { Column, OrderProps } from "../components/types/Table.type";
import { useRouter } from "next/navigation";

const orders: OrderProps[] = [
  {
    id: 1234,
    user: { name: "علی رضایی" },
    phone: "09121234567",
    createdAt: "2025-07-10T12:30",
    totalPrice: 1540000,
    paymentStatus: "paid",
    deliveryStatus: "shipped",
    address: "تهران، خیابان انقلاب، کوچه آزادی، پلاک ۱۲۳، واحد ۴",
    shippingTrackingCode: "TRK12345678",
    note: "لطفاً با بسته‌بندی هدیه ارسال شود",
    adminNote: "اولین سفارش کاربر - بررسی برای پیشنهاد وفاداری",
    items: [
      {
        id: 1,
        name: "هدفون بی‌سیم سونی",
        qty: 2,
        unitPrice: 350000,
        totalPrice: 700000,
      },
      {
        id: 2,
        name: "ماوس گیمینگ",
        qty: 1,
        unitPrice: 840000,
        totalPrice: 840000,
      },
    ],
  },
];

const orderColumns: Column<OrderProps>[] = [
  { title: "شناسه", dataIndex: "id" },
  { title: "نام کاربر", dataIndex: "user.name" },
  { title: "شماره تماس", dataIndex: "phone" },
  { title: "تاریخ", dataIndex: "createdAt" },
  {
    title: "مبلغ کل",
    dataIndex: "totalPrice",
    render: (value) => `${value?.toLocaleString?.()} تومان`,
  },
  {
    title: "وضعیت پرداخت",
    dataIndex: "paymentStatus",
    render: (value) => (
      <span
        className={`badge text-white ${
          value === "paid" ? "badge-success" : "badge-error"
        }`}
      >
        {value === "paid" ? "پرداخت‌شده" : "پرداخت‌نشده"}
      </span>
    ),
  },
  {
    title: "وضعیت ارسال",
    dataIndex: "deliveryStatus",
    render: (value) => {
      const map = {
        pending: "در انتظار",
        shipped: "ارسال‌شده",
        delivered: "تحویل‌شده",
        cancelled: "لغوشده",
      };
      return (
        <span className="badge badge-outline">
          {map[value as keyof typeof map]}
        </span>
      );
    },
  },
];

function Orders() {
  const router = useRouter();
  return (
    <div className="bg-white rounded-xl border border-zinc-100 shadow-md p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="xs:text-md sm:text-xl font-bold text-gray-800">
          مدیریت سفارش ها
        </h2>
      </div>

      <DataTable
        columns={orderColumns}
        datas={orders}
        onDelete={(id) => console.log("Delete", id)}
        onView={(id) => router.push(`/cp/orders/details/${id}`)}
      />
    </div>
  );
}

export default Orders;