"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MoreHorizontal } from "lucide-react";
import { ProductTimerBadge } from "./ProductTimerBadge";
import { ThreeDotMenu } from "./ThreeDotMenu";
import { ProductProps } from "@/types/types";

export default function ProductCard({
  title,
  price,
  discountedPrice,
  discountPercent,
  rating,
  image,
}: ProductProps) {
  const [showMenu, setShowMenu] = useState(false);
  const [timeLeft, setTimeLeft] = useState("00:00:00");
  const menuRef = useRef<HTMLDivElement>(null);

  // ⏱ Timer logic
  useEffect(() => {
    const end = new Date().getTime() + 3600 * 1000;
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = end - now;
      if (diff <= 0) return clearInterval(interval);

      const h = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(
        2,
        "0"
      );
      const m = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0");
      const s = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");
      setTimeLeft(`${h}:${m}:${s}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Close menu if clicked outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;

  return (
    <div className="relative bg-white rounded-3xl shadow border border-zinc-100 transition-all mb-3 p-4 w-full max-w-xs group flex flex-col justify-between h-full">
      {/* Three-dot menu */}
      <div className="absolute top-3 left-3 z-20" ref={menuRef}>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="p-1 rounded-full hover:bg-zinc-100 transition cursor-pointer"
        >
          <MoreHorizontal className="w-5 h-5 text-zinc-500" />
        </button>
        {showMenu && <ThreeDotMenu onClose={() => setShowMenu(false)} />}
      </div>

      {/* Product image */}
      <div className="w-full aspect-[1/1] rounded-2xl overflow-hidden mb-3">
        <Link href={`/product/${title}`}>
          <Image
            src={image}
            alt={title}
            width={400}
            height={400}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 select-none"
          />
        </Link>
      </div>

      {/* Discount timer badge */}
      <ProductTimerBadge discount={discountPercent} time={timeLeft} />

      {/* Product info */}
      <div dir="rtl" className="space-y-1 text-right mt-auto">
        <h3 className="text-sm font-semibold text-zinc-800 leading-5 line-clamp-2 min-h-[2.5rem]">
          {title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 my-2">
          {[...Array(fullStars)].map((_, i) => (
            <svg
              key={`full-${i}`}
              className="w-4 h-4 fill-yellow-400 text-yellow-400"
              viewBox="0 0 24 24"
            >
              <path d="M12 .587l3.668 7.568L24 9.75l-6 5.85L19.336 24 12 19.897 4.664 24 6 15.6 0 9.75l8.332-1.595z" />
            </svg>
          ))}
          {[...Array(emptyStars)].map((_, i) => (
            <svg
              key={`empty-${i}`}
              className="w-4 h-4 fill-gray-300 text-gray-300"
              viewBox="0 0 24 24"
            >
              <path d="M12 .587l3.668 7.568L24 9.75l-6 5.85L19.336 24 12 19.897 4.664 24 6 15.6 0 9.75l8.332-1.595z" />
            </svg>
          ))}
          <span className="text-xs text-zinc-500 mr-1">({rating})</span>
        </div>

        {/* Price */}
        <div className="flex items-center font-IranSansNum justify-between mt-1 min-h-[1.6rem] whitespace-nowrap gap-2 overflow-hidden">
          <span className="text-xs line-through text-zinc-400 truncate max-w-[50%]">
            {price.toLocaleString()} تومان
          </span>
          <span className="text-red-600 font-bold text-sm truncate max-w-[50%] text-left">
            {discountedPrice.toLocaleString()} تومان
          </span>
        </div>
      </div>
    </div>
  );
}
