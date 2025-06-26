import React from "react";
import TitleSection from "@/components/ui/TitleSection";
import BlogCartItem from "@/components/ui/BlogCartItem";

function Blog() {
  return (
    <>
      <div className="px-5 sm:px-15 mt-10 text-center">
        <TitleSection title="مقاله‌ها" />
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 sm:mx-15 bg-white py-4">
        <BlogCartItem />
        <BlogCartItem />
      </div>
    </>
  );
}

export default Blog;