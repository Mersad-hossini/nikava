"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { Plus } from "lucide-react";
import DataTable from "../components/DataTable/DataTable";
import { Column, BlogProps } from "../components/types/Table.type";
import Image from "next/image";

const blogs: BlogProps[] = [
  {
    id: 1,
    title: "راهنمای خرید هدفون",
    cover: "/images/blog1.webp",
    author: "علی رضایی",
    createdAt: "1403/04/01",
    isPublished: true,
  },
  {
    id: 2,
    title: "5 لپ‌تاپ برتر 2025",
    cover: "/images/blog1.webp",
    author: "مریم احمدی",
    createdAt: "1403/03/15",
    isPublished: false,
  },
];

const blogColumns: Column<BlogProps>[] = [
  {
    title: "تصویر",
    dataIndex: "cover",
    render: (src) => (
      <div className="relative w-20 h-12 rounded overflow-hidden">
        <Image
          src={String(src)}
          fill
          alt="Blog Cover"
          className="object-cover"
        />
      </div>
    ),
  },
  { title: "عنوان", dataIndex: "title" },
  { title: "نویسنده", dataIndex: "author" },
  { title: "تاریخ", dataIndex: "createdAt" },
  {
    title: "وضعیت",
    dataIndex: "isPublished",
    render: (val) => (
      <span
        className={`badge ${val ? "badge-success" : "badge-error"} text-white`}
      >
        {val ? "منتشر شده" : "پیش‌نویس"}
      </span>
    ),
  },
];

export default function Blogs() {
  const router = useRouter();

  return (
    <div className="bg-white rounded-xl border border-zinc-100 shadow-md p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">مدیریت وبلاگ‌ها</h2>
        <Link
          href="/cp/blogs/new"
          className="btn btn-sm text-white btn-success border-none shadow"
        >
          افزودن وبلاگ <Plus className="size-4" />
        </Link>
      </div>

      <DataTable
        columns={blogColumns}
        datas={blogs}
        onEdit={(id) => router.push(`/cp/blogs/edit/${id}`)}
        onDelete={(id) => console.log("Delete", id)}
      />
    </div>
  );
}
