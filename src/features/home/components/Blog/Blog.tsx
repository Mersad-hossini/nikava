import React from "react";
import BlogCart from "./BlogCart";

function Blog() {
  return (
    <>
      <div className="px-5 sm:px-15 mt-10 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 border-b-2 border-blue-600 inline-block pb-1 mb-6">
          مقاله‌ها
        </h2>
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 sm:mx-15 bg-white py-4">
        <BlogCart />
        <BlogCart />
      </div>
    </>
  );
}

export default Blog;
