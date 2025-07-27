"use client";

import React, { useState } from "react";
import TitleSection from "@/components/ui/TitleSection";
import ProductCard from "@/components/ui/ProductCard/ProductCard";
import Pagination from "@/components/ui/Pagination";
import { usePagination } from "@/hooks/usePagination";

const products = [
  {
    id: "1",
    title: "هارد مدل XM-22",
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
    title: "آیفون مدل 16 Max Pro",
    price: 190000,
    discountedPrice: 159000,
    discountPercent: 16,
    rating: 4.7,
    image: "/images/product3.webp",
  },
  {
    id: "4",
    title: "لباس‌شویی مدل LG",
    price: 460000,
    discountedPrice: 389000,
    discountPercent: 15,
    rating: 4.5,
    image: "/images/product4.webp",
  },
  {
    id: "5",
    title: "سرخ‌کن شیائومی",
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

function NikavaOffers() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // برای تست کمترش کردم

  const { currentItems: visibleProducts, totalPages } = usePagination(
    products,
    currentPage,
    itemsPerPage
  );

  return (
    <main className="bg-white py-8 min-h-screen">
      {/* معرفی کمپین */}
      <section className="text-center mb-8 px-4">
        <TitleSection title="جشنواره تخفیفات نیکاوا" />
        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          آخرین تکنولوژی، طراحی مینیمال، و قیمت‌هایی که تکرار نمی‌شوند. از میان
          محصولات منتخب نیکاوا، انتخاب خود را هوشمندانه انجام دهید.
        </p>
      </section>

      {/* نمایش کارت‌های محصول */}
      <section className="max-w-7xl mx-auto px-4 md:px-6">
        {visibleProducts.length === 0 ? (
          <p className="text-center text-gray-500 py-12">
            هیچ محصولی یافت نشد.
          </p>
        ) : (
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-items-center gap-6">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        )}
      </section>

      {/* صفحه‌بندی */}
      {totalPages > 1 && (
        <div className="mt-12 flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </main>
  );
}

export default NikavaOffers;
