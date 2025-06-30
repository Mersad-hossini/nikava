"use client";
import Link from "next/link";
import { Plus } from "lucide-react";
import TicketItem from "./TicketItem";

const dummyTickets = [
  {
    id: 1,
    subject: "خطا در پرداخت",
    department: "مالی",
    status: "باز",
    createdAt: "۹ تیر ۱۴۰۴",
  },
  {
    id: 2,
    subject: "مشکل در ورود",
    department: "فنی",
    status: "پاسخ داده شده",
    createdAt: "۸ تیر ۱۴۰۴",
  },
];

export default function Tickets() {
  return (
    <div className="container max-w-5xl bg-white shadow-md rounded-lg mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="xs:text-xl font-bold text-zinc-800">تیکت‌های پشتیبانی</h1>
        <Link
          href="/dashboard/tickets/new"
          className="flex items-center gap-2 text-xs xs:text-sm bg-green-600 text-white cursor-pointer px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
        >
          <span>ثبت تیکت جدید</span>
          <Plus size={16} />
        </Link>
      </div>

      <div className="space-y-4">
        {dummyTickets.map((ticket) => (
          <TicketItem key={ticket.id} {...ticket} />
        ))}
      </div>
    </div>
  );
}
