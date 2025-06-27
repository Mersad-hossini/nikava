"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { MoreHorizontal } from "lucide-react";
import { ProductTimerBadge } from "./ProductTimerBadge";
import { ThreeDotMenu } from "./ThreeDotMenu";
import Link from "next/link";

export default function ProductCard() {
  const [showMenu, setShowMenu] = useState(false);
  const [timeLeft, setTimeLeft] = useState("00:00:00");
  const menuRef = useRef<HTMLDivElement>(null);

  // ⏱ Timer
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

  // Close menu
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative bg-white rounded-3xl shadow border border-zinc-100 transition-all mb-3 p-4 w-full max-w-xs group">
      <div className="absolute top-3 left-3 z-20" ref={menuRef}>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="p-1 rounded-full hover:bg-zinc-100 transition cursor-pointer"
        >
          <MoreHorizontal className="w-5 h-5 text-zinc-500" />
        </button>
        {showMenu && <ThreeDotMenu onClose={() => setShowMenu(false)} />}
      </div>

      {/* Product Image */}
      <div className="w-full aspect-[1/1] rounded-2xl overflow-hidden mb-3">
        <Link href="/product/هندزفری-بلوتوثی-مدل-AirBuds-Pro-Max">
          <Image
            src="/images/AirBuds.webp"
            alt="محصول"
            width={400}
            height={400}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 select-none"
          />
        </Link>
      </div>

      {/* Timer Discount */}
      <ProductTimerBadge discount={25} time={timeLeft} />

      {/* Product Infos */}
      <div dir="rtl" className="space-y-1 text-right">
        <h3 className="text-sm font-semibold text-zinc-800 leading-5">
          هندزفری بلوتوثی مدل AirBuds Pro Max
        </h3>
        {/* Product Rating */}
        <div className="flex items-center gap-1 my-2">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${
                i < 4
                  ? "fill-yellow-400 text-yellow-400"
                  : "fill-gray-300 text-gray-300"
              }`}
              viewBox="0 0 24 24"
            >
              <path d="M12 .587l3.668 7.568L24 9.75l-6 5.85L19.336 24 12 19.897 4.664 24 6 15.6 0 9.75l8.332-1.595z" />
            </svg>
          ))}
          <span className="text-xs text-zinc-500 mr-1">(۴.۵)</span>
        </div>
        <div className="flex items-center justify-between mt-1">
          <span className="text-xs line-through text-zinc-400">۱,۵۸۰,۰۰۰</span>
          <span className="text-red-600 font-bold text-sm">
            ۱,۱۹۰,۰۰۰ تومان
          </span>
        </div>
      </div>
    </div>
  );
}
