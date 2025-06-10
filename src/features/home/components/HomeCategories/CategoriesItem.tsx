import Image from "next/image";
import Link from "next/link";
import React from "react";

function CategoriesItem() {
  return (
    <Link href="#">
      {/* تصویر مربعی اصلی */}
      <div className="relative w-35 h-35 overflow-hidden">
        <Image
          src="/images/home-categoty.png" // تصویر مربعی اصلی
          width={300} // عرض مربعی
          height={300} // ارتفاع مربعی
          alt="Home Category"
          className="object-cover"
        />
        {/* تصویر دسته‌بندی */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full overflow-hidden">
          <Image
            src="/images/category1.png" // تصویر دسته‌بندی
            width={300} // عرض تصویر دسته‌بندی
            height={300} // ارتفاع تصویر دسته‌بندی
            alt="Category"
            className="object-cover w-50 h-full"
          />
        </div>
      </div>
        <span className="flex justify-center mt-3  text-md text-zinc-500">اسم محصول تستی</span>
    </Link>
  );
}

export default CategoriesItem;
