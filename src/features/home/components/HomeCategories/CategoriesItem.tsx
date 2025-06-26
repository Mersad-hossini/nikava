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
      <div className="relative w-30 h-30 mx-auto">
        <Image
          src={img}
          width={192}
          height={192}
          alt="Category"
          className="object-cover w-full h-full rounded-full transition-all shadow-sm hover:border-3 hover:border-blue-500"
        />
      </div>
      <span className="block text-center mt-2 text-md text-zinc-500">
        {title}
      </span>
    </Link>
  );
}

export default CategoriesItem;
