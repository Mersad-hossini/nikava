"use client";

import React, { useState } from "react";
import Pagination from "@/components/ui/Pagination";
import { usePagination } from "@/hooks/usePagination";
import CategoryFilter from "./components/CategoryFilter";
import CategorySort from "./components/CategorySort";
import CategoryProductGrid from "./components/CategoryProductGrid";

export default function CategoryDetails() {
  const allProducts = Array.from({ length: 42 }, (_, i) => i);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const { currentItems: visibleProducts, totalPages } = usePagination(
    allProducts,
    currentPage,
    itemsPerPage
  );

  return (
    <div className="container mx-auto mt-6 px-2">
      <div className="grid grid-cols-12 gap-4">
        <aside className="hidden md:block col-span-3">
          <CategoryFilter />
        </aside>
        <main className="col-span-12 md:col-span-9 space-y-6">
          <CategorySort productCount={allProducts.length} />
          <CategoryProductGrid products={visibleProducts} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </main>
      </div>
    </div>
  );
}