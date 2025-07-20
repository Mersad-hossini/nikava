"use client"

import DataTable from "../components/DataTable/DataTable";
import { Column } from "../components/types/Table.type";
import { NewsletterSubscriber } from "../components/types/Table.type";

const subscribers: NewsletterSubscriber[] = [
  {
    id: 1,
    email: "user@example.com",
    createdAt: "2025-07-18T10:00:00",
    status: "active",
  },
  {
    id: 2,
    email: "test@domain.ir",
    createdAt: "2025-07-17T16:30:00",
    status: "unsubscribed",
  },
];

const newsletterColumns: Column<NewsletterSubscriber>[] = [
  { title: "ایمیل", dataIndex: "email" },
  {
    title: "تاریخ عضویت",
    dataIndex: "createdAt",
    render: (date) => new Date(date as string).toLocaleDateString("fa-IR"),
  },
  {
    title: "وضعیت",
    dataIndex: "status",
    render: (value) => (
      <span
        className={`badge text-white ${
          value === "active"
            ? "badge-success"
            : value === "unsubscribed"
            ? "badge-warning"
            : "badge-error"
        }`}
      >
        {value === "active"
          ? "فعال"
          : value === "unsubscribed"
          ? "لغو عضویت"
          : "بلاک‌شده"}
      </span>
    ),
  },
];

export default function NewSletterForm() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md border border-zinc-100">
      <h2 className="text-lg font-bold mb-4">مدیریت خبرنامه</h2>

      <DataTable
        columns={newsletterColumns}
        datas={subscribers}
        onDelete={(id) => console.log("Delete", id)}
      />
    </div>
  );
}
