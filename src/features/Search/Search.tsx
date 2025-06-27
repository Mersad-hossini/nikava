// app/search/page.tsx
"use client";

import { useState } from "react";
import ProductListingLayout from "@/components/shared/ProductListingLayout";
import SortToolbar from "@/components/ui/ProductFilter/SortToolbar";
import CategoryProductGrid from "@/components/ui/ProductFilter/CategoryProductGrid";
import Pagination from "@/components/ui/Pagination";
import { usePagination } from "@/hooks/usePagination";
import { ProductType } from "@/types/types";
import FilterSidebarWrapper from "@/components/ui/ProductFilter/FilterSidebarWrapper";

export default function SearchPage() {
  // فرضی: لیست کامل محصولات برای جستجو (در حالت واقعی از API یا سرور می‌گیری)
  // const searchParams = useSearchParams();
  //   const query = searchParams.get("q") || "";
  //   const allProducts: ProductType[] = dummyProducts.filter((p) =>
  //     p.title.toLowerCase().includes(query.toLowerCase())
  //   );
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
      breadcrumbTitle="جستجو"
    />
  );
}
