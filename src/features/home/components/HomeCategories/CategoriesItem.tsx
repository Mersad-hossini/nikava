import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ImageProps {
  img: string;
  title: string;
}

function CategoriesItem({ img, title }: ImageProps) {
  return (
    <Link href="#">
      {/* تصویر دسته‌بندی دایره‌ای تنها */}
      <div className="relative w-30 h-30 mx-auto">
        <Image
          src={img} // تصویر دسته‌بندی
          width={192} // عرض تصویر دسته‌بندی
          height={192} // ارتفاع تصویر دسته‌بندی
          alt="Category"
          className="object-cover w-full h-full rounded-full transition-all ease-in-out shadow-sm hover:shadow-md hover:border-3 hover:border-blue-500"
        />
      </div>
      {/* نام محصول */}
      <span className="block text-center mt-2 text-md text-zinc-500">
        {title}
      </span>
    </Link>
  );
}

export default CategoriesItem;
