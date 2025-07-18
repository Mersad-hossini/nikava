"use client";

import React from "react";
import DataTable from "../components/DataTable/DataTable";
import { Column, DiscountProps } from "../components/types/Table.type";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Plus } from "lucide-react";

// ✅ داده‌ی نمونه
const dummyDiscounts: DiscountProps[] = [
  {
    id: 1,
    code: "OFF20",
    discountPercent: 20,
    usageLimit: 100,
    used: 10,
    startDate: "2025-07-01T00:00",
    endDate: "2025-07-30T23:59",
    isActive: true,
    type: "code",
  },
  {
    id: 2,
    code: "تخفیف تابستانه",
    discountPercent: 10,
    usageLimit: 0,
    used: 0,
    startDate: "2025-07-05T00:00",
    endDate: "2025-07-20T23:59",
    isActive: false,
    type: "global",
  },
];

// ✅ ستون‌های جدول تخفیف
const discountColumns: Column<DiscountProps>[] = [
  { title: "شناسه", dataIndex: "id" },
  { title: "نوع تخفیف", dataIndex: "type" },
  { title: "کد", dataIndex: "code" },
  {
    title: "درصد",
    dataIndex: "discountPercent",
    render: (value) => `${value}%`,
  },
  {
    title: "استفاده‌شده / مجاز",
    dataIndex: "used",
    render: (value, row) =>
      row.usageLimit > 0 ? `${value} / ${row.usageLimit}` : "-",
  },
  {
    title: "تاریخ شروع",
    dataIndex: "startDate",
    render: (value) => new Date(value as string).toLocaleDateString("fa-IR"),
  },
  {
    title: "تاریخ پایان",
    dataIndex: "endDate",
    render: (value) => new Date(value as string).toLocaleDateString("fa-IR"),
  },
  {
    title: "وضعیت",
    dataIndex: "isActive",
    render: (value) => (
      <span
        className={`badge text-white ${
          value ? "badge-success" : "badge-error"
        }`}
      >
        {value ? "فعال" : "غیرفعال"}
      </span>
    ),
  },
];

function Discounts() {
  const router = useRouter();

  return (
    <div className="bg-white rounded-xl border border-zinc-100 shadow-md p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="xs:text-md sm:text-xl font-bold text-gray-800">
          کد تخفیف‌ها
        </h2>
        <Link
          href="/cp/discounts/new"
          className="btn btn-sm border-none xs:text-sm sm:text-md text-white shadow font-normal btn-success"
        >
          افزودن کد تخفیف
          <Plus className="size-4" />
        </Link>
      </div>

      <DataTable
        columns={discountColumns}
        datas={dummyDiscounts}
        onEdit={(id) => router.push(`/cp/discounts/edit/${id}`)}
        onDelete={(id) => console.log("Delete discount", id)}
      />
    </div>
  );
}

export default Discounts;