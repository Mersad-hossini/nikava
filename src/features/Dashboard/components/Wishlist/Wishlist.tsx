"use client";

import React, { useState } from "react";
import { Heart } from "lucide-react";
import ProductCard from "@/components/ui/ProductCard/ProductCard";
import { ProductProps } from "@/types/types";
import Pagination from "@/components/ui/Pagination";
import { usePagination } from "@/hooks/usePagination";
import EmptyMessage from "@/components/ui/EmptyMessage";

const wishlistItems: ProductProps[] = [
  {
    id: "1",
    title: " هارد مدل XM-22",
    price: 850000,
    discountedPrice: 690000,
    discountPercent: 19,
    rating: 4.3,
    image: "/images/product1.webp",
  },
  {
    id: "2",
    title: "لپ تاپ مدل FitPro T5",
    price: 1250000,
    discountedPrice: 980000,
    discountPercent: 22,
    rating: 4.1,
    image: "/images/product2.webp",
  },
  {
    id: "3",
    title: "ایفون مدل 16 Max Pro ",
    price: 190000,
    discountedPrice: 159000,
    discountPercent: 16,
    rating: 4.7,
    image: "/images/product3.webp",
  },
  {
    id: "4",
    title: "لباس شویی مدل LG",
    price: 460000,
    discountedPrice: 389000,
    discountPercent: 15,
    rating: 4.5,
    image: "/images/product4.webp",
  },
  {
    id: "5",
    title: "سرخ کن شیائومی",
    price: 24500000,
    discountedPrice: 21900000,
    discountPercent: 11,
    rating: 4.8,
    image: "/images/product5.webp",
  },
  {
    id: "6",
    title: "هدفون بلوتوثی مدل XM-22",
    price: 24500000,
    discountedPrice: 21900000,
    discountPercent: 11,
    rating: 4.8,
    image: "/images/AirBuds.webp",
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
    <div className="container max-w-7xl mx-auto px-4 py-6 bg-zinc-100 rounded-xl shadow-md">
      {/* Header */}
      <div className="flex items-center justify-start gap-2 mb-6">
        <Heart className="w-6 h-6 text-red-500" />
        <h1 className="text-xl font-bold text-zinc-800">علاقه‌مندی‌های من</h1>
      </div>

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
