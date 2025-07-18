"use client";

import Link from "next/link";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import DataTable from "../components/DataTable/DataTable";
import { Column } from "../components/types/Table.type";
import { CategoryProps } from "../components/types/Table.type";

// داده‌های تستی (باید از API بیاد)
const categories: CategoryProps[] = [
  {
    id: 1,
    name: "هدفون",
    slug: "headphones",
    status: true,
    productCount: 12,
    parentId: null,
  },
  {
    id: 2,
    name: "هدفون بی‌سیم",
    slug: "wireless-headphones",
    status: true,
    productCount: 7,
    parentId: 1,
  },
  {
    id: 3,
    name: "لپ‌تاپ",
    slug: "laptops",
    status: false,
    productCount: 0,
    parentId: null,
  },
];

const categoryColumns: Column<CategoryProps>[] = [
  { title: "نام دسته", dataIndex: "name" },
  {
    title: "اسلاگ",
    dataIndex: "slug",
    render: (value) => (
      <span className="text-gray-500 text-xs">{String(value)}</span>
    ),
  },
  {
    title: "تعداد محصولات",
    dataIndex: "productCount",
    render: (value) => `${value} محصول`,
  },
  {
    title: "نوع دسته",
    dataIndex: "parentId",
    render: (value) => (
      <span className="badge badge-outline">
        {value ? "زیر‌دسته" : "دسته اصلی"}
      </span>
    ),
  },
  {
    title: "وضعیت",
    dataIndex: "status",
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

export default function Categories() {
  const router = useRouter();

  return (
    <div className="bg-white rounded-xl border border-zinc-100 shadow-md p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="xs:text-md sm:text-xl font-bold text-gray-800">
          مدیریت دسته‌بندی‌ها
        </h2>
        <Link
          href="/cp/categories/new"
          className="btn btn-sm border-none xs:text-sm sm:text-md text-white shadow font-normal btn-success"
        >
          افزودن دسته‌بندی
          <Plus className="size-4" />
        </Link>
      </div>

      <DataTable
        columns={categoryColumns}
        datas={categories}
        onEdit={(id) => router.push(`/cp/categories/edit/${id}`)}
        onDelete={(id) => console.log("Delete", id)}
      />
    </div>
  );
}