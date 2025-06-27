"use client";

import React, { useState } from "react";
import TitleSection from "@/components/ui/TitleSection";
import ProductCard from "@/components/ui/ProductCard/ProductCard";
import Pagination from "@/components/ui/Pagination";
import { ProductType } from "@/types/types";

// فرضی: تابع مدیریت صفحه‌بندی و لیست محصولات تخفیفی
import { usePagination } from "@/hooks/usePagination";

function NikavaOffers() {
  const allProducts: ProductType[] = Array.from({ length: 42 }, (_, i) => ({
    id: i + 1,
    title: `محصول شماره ${i + 1}`,
    price: `${(100 + i * 5).toLocaleString()} تومان`,
    image: "/images/coffeeimage.jpg",
  }));
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const { currentItems: visibleProducts, totalPages } = usePagination(
    allProducts,
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