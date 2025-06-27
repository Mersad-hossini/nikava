import React from "react";
import ProductCard from "@/components/ui/ProductCard/ProductCard";
import { ProductType } from "@/types/types";

interface CategoryProductGridProps {
  products: ProductType[];
}

export default function CategoryProductGrid({
  products,
}: CategoryProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mid-md:grid-cols-4 justify-items-center gap-4">
      {products.map((_, i) => (
        <ProductCard key={i} />
      ))}
    </div>
  );
}
