import React from "react";
import { ProductType } from "@/types/types";
import Breadcrumb from "../ui/Breadcrumb";
import EmptyMessage from "../ui/EmptyMessage";

interface ProductListingLayoutProps {
  sortBar: React.ReactNode;
  products: ProductType[];
  filters: React.ReactNode;
  grid: React.ReactNode;
  pagination: React.ReactNode;
  breadcrumbTitle: string;
}

const ProductListingLayout: React.FC<ProductListingLayoutProps> = ({
  products,
  filters,
  sortBar,
  grid,
  pagination,
  breadcrumbTitle,
}) => {
  return (
    <div className="container mx-auto mt-6 px-2">
      <Breadcrumb
        items={[{ title: "خانه", href: "/" }, { title: breadcrumbTitle }]}
      />

      <div className="grid grid-cols-12 gap-4">
        {/* Sidebar with filters */}
        <aside className="block col-span-3">{filters}</aside>

        {/* Main content */}
        <main className="col-span-12 md:col-span-9 space-y-6">
          {sortBar}
          {products.length > 0 ? (
            <>
              {grid}
              {pagination}
            </>
          ) : (
            <EmptyMessage
              title="هنوز هیچ محصولی برای این دسته بندی وجود ندارد."
              txt="هنوز هیچ محصولی به این دسته‌بندی اضافه نشده. به‌زودی با محصولات جدید برمی‌گردیم!"
            />
          )}
        </main>
      </div>
    </div>
  );
};

export default ProductListingLayout;
