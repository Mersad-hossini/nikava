"use client";
import React, { useState } from "react";
import BlogCartItem from "@/components/ui/BlogCartItem";
import TitleSection from "@/components/ui/TitleSection";
import Pagination from "@/components/ui/Pagination";
import { usePagination } from "@/hooks/usePagination";

function Blog() {
  const blogs = Array.from({ length: 30 }, (_, i) => i); 
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const { currentItems: visibleBlogs, totalPages } = usePagination(
    blogs,
    currentPage,
    itemsPerPage
  );

  return (
    <div className="container mx-auto px-4 py-10">
      <TitleSection title="وبلاگ ها" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleBlogs.map((_, index) => (
          <BlogCartItem key={index} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default Blog;