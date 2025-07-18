"use client";

import React from "react";
import DataTable from "../components/DataTable/DataTable";
import { Column } from "../components/types/Table.type";
import { useRouter } from "next/navigation";

export type TicketProps = {
  id: number;
  subject: string;
  user: { name: string };
  phone: string;
  createdAt: string;
  status: "open" | "closed" | "pending";
};

const tickets: TicketProps[] = [
  {
    id: 101,
    subject: "مشکل در ثبت سفارش",
    user: { name: "مرصاد محمد حسینی" },
    phone: "09121234567",
    createdAt: "2025-07-15T14:20",
    status: "pending",
  },
  {
    id: 102,
    subject: "درخواست فاکتور",
    user: { name: "علی رستمی" },
    phone: "09351234567",
    createdAt: "2025-07-14T09:30",
    status: "open",
  },
];

const ticketColumns: Column<TicketProps>[] = [
  { title: "شناسه", dataIndex: "id" },
  { title: "موضوع", dataIndex: "subject" },
  { title: "نام کاربر", dataIndex: "user.name" },
  { title: "شماره تماس", dataIndex: "phone" },
  {
    title: "تاریخ ثبت",
    dataIndex: "createdAt",
    render: (value) => (
      <span>{new Date(value as string).toLocaleDateString("fa-IR")}</span>
    ),
  },
  {
    title: "وضعیت",
    dataIndex: "status",
    render: (value) => {
      const map = {
        open: "باز",
        closed: "بسته",
        pending: "در انتظار پاسخ",
      };
      return (
        <span className="badge badge-outline">
          {map[value as keyof typeof map]}
        </span>
      );
    },
  },
];

function Ticket() {
  const router = useRouter();
  return (
    <div className="bg-white rounded-xl border border-zinc-100 shadow-md p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="xs:text-md sm:text-xl font-bold text-gray-800">
          مدیریت تیکت‌ها
        </h2>
      </div>

      <DataTable
        columns={ticketColumns}
        datas={tickets}
        onView={(id) => router.push(`/cp/tickets/${id}`)}
        onDelete={(id) => console.log("حذف تیکت", id)}
      />
    </div>
  );
}

export default Ticket;
