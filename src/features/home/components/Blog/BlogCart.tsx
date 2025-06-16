import React from "react";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function BlogCart() {
  return (
    <div className="border border-gray-200 p-4 bg-white shadow-lg rounded-xl transition-shadow hover:shadow-xl duration-300 flex flex-col h-full">
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 leading-tight">
        طرز تهیه میلک شیک انبه
      </h3>

      <div className="text-sm text-gray-500 mb-4 flex items-center gap-2">
        <span className="text-xs">نویسنده: مرصاد محمد حسینی</span>
        <span className="text-xs">•</span>
        <span className="text-xs">۲۶ خرداد ۱۴۰۴</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 items-start flex-grow">
        <div className="rounded-lg overflow-hidden w-full lg:w-[45%]">
          <Image
            src="/images/blog1.webp"
            alt="تصویر مقاله"
            width={180}
            height={120}
            className="object-cover w-full h-auto"
          />
        </div>

        <div className="flex flex-col w-full lg:w-[55%]">
          <p className="text-sm text-gray-800 leading-6 tracking-normal text-justify line-clamp-3">
            طرز تهیه میلک‌شیک انبه؛ به روش یک باریستای حرفه‌ای طرز تهیه میلک‌شیک
            انبه؛ به روش یک باریستای حرفه‌ای طرز تهیه میلک‌شیک انبه باریستای
            حرفه‌ای
          </p>
        </div>
      </div>

      <div className="mt-auto pt-4 text-left">
        <Link href="/blog/mango-milkshake">
          <button className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow hover:from-blue-700 hover:to-indigo-700 transition cursor-pointer">
            ادامه مطلب
            <ChevronLeft />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default BlogCart;