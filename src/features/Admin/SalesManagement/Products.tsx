"use client";
import Link from "next/link";
import DataTable from "./DataTable/DataTable";
import { Plus } from "lucide-react";
import { Column } from "./types/Table.type";
import { ProductProps } from "./types/Table.type";
import Image from "next/image";
import { useRouter } from "next/navigation";

const products = [
  {
    id: 1,
    name: "AirBuds Pro Max",
    image: "/images/AirBuds.webp",
    price: 3450000,
    stock: 12,
    category: "هدفون",
    active: true,
  },
  {
    id: 2,
    name: "AirBuds Pro Max 2",
    image: "/images/AirBuds2.webp",
    price: 3220000,
    stock: 12,
    category: "هدفون",
    active: false,
  },
];

const productColumns: Column<ProductProps>[] = [
  {
    title: "تصویر",
    dataIndex: "image",
    render: (src: unknown, row: ProductProps) => (
      <div className="avatar">
        <div className="relative w-12 h-12 mask mask-squircle overflow-hidden">
          <Image
            src={String(src)}
            alt={row.name}
            fill
            className="object-cover"
          />
        </div>
      </div>
    ),
  },

  { title: "نام محصول", dataIndex: "name" },
  {
    title: "قیمت",
    dataIndex: "price",
    render: (value) =>
      typeof value === "number" ? `${value.toLocaleString()} تومان` : "",
  },
  { title: "موجودی", dataIndex: "stock" },
  { title: "دسته‌بندی", dataIndex: "category" },
  {
    title: "وضعیت",
    dataIndex: "active",
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

export default function AdminProductPage() {
  const router = useRouter();
  return (
    <div className="bg-white rounded-xl border border-zinc-100 shadow-md p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="xs:text-md sm:text-xl font-bold text-gray-800">
          مدیریت محصولات
        </h2>
        <Link
          href="/cp/products/new"
          className="btn btn-sm border-none xs:text-sm sm:text-md text-white shadow font-normal btn-success"
        >
          افزودن محصول
          <Plus className="size-4" />
        </Link>
      </div>

      <DataTable
        columns={productColumns}
        datas={products}
        onEdit={(id) => router.push(`/cp/products/edit/${id}`)}
        onDelete={(id) => console.log("Delete", id)}
      />
    </div>
  );
}
