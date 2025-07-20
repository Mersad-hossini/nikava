"use client";

import DataTable from "../components/DataTable/DataTable";
import { Column, Notification } from "../components/types/Table.type";
import { Bell } from "lucide-react";
import Link from "next/link";

const notifications: Notification[] = [
  {
    id: 1,
    title: "سفارش جدید ثبت شد",
    description: "سفارش شماره ۱۲۳۴ با موفقیت ثبت شد.",
    isRead: false,
    createdAt: "2025-07-20T10:30:00",
  },
  {
    id: 2,
    title: "پایان موجودی کالا",
    description: "موجودی محصول «هدفون بی‌سیم A5» به صفر رسید.",
    isRead: true,
    createdAt: "2025-07-19T15:00:00",
  },
];

const notificationColumns: Column<Notification>[] = [
  {
    title: "عنوان",
    dataIndex: "title",
    render: (value) => <span className="font-semibold">{value as string}</span>,
  },
  {
    title: "توضیحات",
    dataIndex: "description",
    render: (value) => (
      <span className="text-sm text-gray-500">{value as string ?? "-"}</span>
    ),
  },
  {
    title: "تاریخ",
    dataIndex: "createdAt",
    render: (val) =>
      new Date(val as string).toLocaleString("fa-IR", {
        dateStyle: "short",
        timeStyle: "short",
      }),
  },
  {
    title: "وضعیت",
    dataIndex: "isRead",
    render: (val) => (
      <span
        className={`badge ${val ? "badge-success" : "badge-warning"} text-xs`}
      >
        {val ? "خوانده‌شده" : "خوانده‌نشده"}
      </span>
    ),
  },
];

export default function Notifications() {

  return (
    <div className="bg-white rounded-xl border border-zinc-100 shadow-md p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <Bell className="size-5" /> مدیریت نوتیفیکیشن‌ها
        </h2>
        <Link
          href="#"
          className="btn btn-sm text-white border-none bg-gray-400 hover:bg-gray-500"
        >
          علامت‌گذاری همه به عنوان خوانده‌شده
        </Link>
      </div>

      <DataTable
        columns={notificationColumns}
        datas={notifications}
        onDelete={(id) => console.log("Delete notification", id)}
      />
    </div>
  );
}