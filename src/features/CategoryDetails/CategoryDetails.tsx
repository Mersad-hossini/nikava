"use client";

import React, { useState } from "react";
import Pagination from "@/components/ui/Pagination";
import { usePagination } from "@/hooks/usePagination";
import CategoryProductGrid from "../../components/ui/ProductFilter/CategoryProductGrid";
import SortToolbar from "@/components/ui/ProductFilter/SortToolbar";
import ProductListingLayout from "@/components/shared/ProductListingLayout";
import { ProductType } from "@/types/types";
import FilterSidebarWrapper from "@/components/ui/ProductFilter/FilterSidebarWrapper";

export default function CategoryDetails() {
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
    <ProductListingLayout
      products={allProducts}
      filters={<FilterSidebarWrapper />}
      sortBar={<SortToolbar productCount={allProducts.length} />}
      grid={<CategoryProductGrid products={visibleProducts} />}
      pagination={
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      }
      breadcrumbTitle="دسته بندی ها"
    />
  );
}