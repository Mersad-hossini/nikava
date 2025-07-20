"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { Plus } from "lucide-react";
import DataTable from "../components/DataTable/DataTable";
import { Column } from "../components/types/Table.type";
import { BannerProps } from "../components/types/Table.type";
import Image from "next/image";

const banners: BannerProps[] = [
  {
    id: 1,
    title: "بنر صفحه اصلی",
    imageUrl: "/images/banner1.webp",
    link: "/products/123",
    position: "homepage",
    isActive: true,
    order: 1,
  },
  {
    id: 2,
    title: "بنر پیشنهاد شگفت‌انگیز",
    imageUrl: "/images/banner2.webp",
    link: "/offers",
    position: "offer",
    isActive: false,
    order: 2,
  },
];

const bannerColumns: Column<BannerProps>[] = [
  {
    title: "تصویر",
    dataIndex: "imageUrl",
    render: (src) => (
      <div className="relative w-20 h-12 rounded overflow-hidden">
        <Image src={String(src)} fill alt="Banner" className="object-cover" />
      </div>
    ),
  },
  { title: "عنوان", dataIndex: "title" },
  {
    title: "مکان",
    dataIndex: "position",
    render: (value) => {
      const map = {
        homepage: "صفحه اصلی",
        category: "دسته‌بندی",
        offer: "پیشنهاد شگفت‌انگیز",
        sidebar: "سایدبار",
      };
      return map[value as keyof typeof map];
    },
  },
  {
    title: "وضعیت",
    dataIndex: "isActive",
    render: (val) => (
      <span
        className={`badge ${val ? "badge-success" : "badge-error"} text-white`}
      >
        {val ? "فعال" : "غیرفعال"}
      </span>
    ),
  },
  { title: "ترتیب", dataIndex: "order" },
];

export default function Banners() {
  const router = useRouter();
  return (
    <div className="bg-white rounded-xl border border-zinc-100 shadow-md p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">مدیریت بنرها</h2>
        <Link
          href="/cp/banners/new"
          className="btn btn-sm text-white btn-success border-none shadow"
        >
          افزودن بنر <Plus className="size-4" />
        </Link>
      </div>

      <DataTable
        columns={bannerColumns}
        datas={banners}
        onEdit={(id) => router.push(`/cp/banners/edit/${id}`)}
        onDelete={(id) => console.log("Delete", id)}
      />
    </div>
  );
}
