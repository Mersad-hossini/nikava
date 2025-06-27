"use client";

import React, { useState } from "react";
import { Heart } from "lucide-react";
import ProductCard from "@/components/ui/ProductCard/ProductCard";
import { ProductType } from "@/types/types";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Pagination from "@/components/ui/Pagination";
import { usePagination } from "@/hooks/usePagination";
import EmptyMessage from "@/components/ui/EmptyMessage";

const wishlistItems: ProductType[] = [
  {
    id: 1,
    title: "هندزفری بلوتوثی مدل AirBuds Pro Max",
    price: "۱,۱۹۰,۰۰۰ تومان",
    image: "/images/AirBuds.webp",
  },
  {
    id: 2,
    title: "قهوه اسپشیالیتی کنیا",
    price: "۵۶۰,۰۰۰ تومان",
    image: "/images/AirBuds2.webp",
  },
  {
    id: 3,
    title: "قهوه اسپشیالیتی کنیا",
    price: "۵۶۰,۰۰۰ تومان",
    image: "/images/AirBuds2.webp",
  },
  {
    id: 4,
    title: "قهوه اسپشیالیتی کنیا",
    price: "۵۶۰,۰۰۰ تومان",
    image: "/images/AirBuds2.webp",
  },
  {
    id: 5,
    title: "قهوه اسپشیالیتی کنیا",
    price: "۵۶۰,۰۰۰ تومان",
    image: "/images/AirBuds2.webp",
  },
  {
    id: 6,
    title: "قهوه اسپشیالیتی کنیا",
    price: "۵۶۰,۰۰۰ تومان",
    image: "/images/AirBuds2.webp",
  },
  {
    id: 7,
    title: "قهوه اسپشیالیتی کنیا",
    price: "۵۶۰,۰۰۰ تومان",
    image: "/images/AirBuds2.webp",
  },
  {
    id: 8,
    title: "قهوه اسپشیالیتی کنیا",
    price: "۵۶۰,۰۰۰ تومان",
    image: "/images/AirBuds2.webp",
  },
  {
    id: 9,
    title: "قهوه اسپشیالیتی کنیا",
    price: "۵۶۰,۰۰۰ تومان",
    image: "/images/AirBuds2.webp",
  },
  {
    id: 10,
    title: "قهوه اسپشیالیتی کنیا",
    price: "۵۶۰,۰۰۰ تومان",
    image: "/images/AirBuds2.webp",
  },
];

export default function Wishlist() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const { currentItems: visibleProducts, totalPages } = usePagination(
    wishlistItems,
    currentPage,
    itemsPerPage
  );

  return (
    <div className="container max-w-7xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center justify-start gap-2 mb-6">
        <Heart className="w-6 h-6 text-red-500" />
        <h1 className="text-xl font-bold text-zinc-800">علاقه‌مندی‌های من</h1>
      </div>

      {/* Breadcrumb */}
      <Breadcrumb
        items={[{ title: "خانه", href: "/" }, { title: "علاقه‌مندی‌های من" }]}
      />

      {/* Content */}
      {wishlistItems.length > 0 ? (
        <>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-items-center gap-6 mt-8">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-10">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </>
      ) : (
        <EmptyMessage
          title="هنوز هیچ محصولی را به علاقه‌مندی‌ها اضافه نکرده‌اید."
          txt="برای شروع، به فروشگاه سر بزنید و محصولات مورد علاقه‌تان را انتخاب کنید."
        />
      )}
    </div>
  );
}