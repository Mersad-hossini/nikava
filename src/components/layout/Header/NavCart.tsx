import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";
import ItemCart from "./ItemCart";

interface NavCartProps {
  setIsCartOpen: (value: boolean) => void;
}

function NavCart({ setIsCartOpen }: NavCartProps) {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    setShow(true);
    return () => setShow(false);
  }, [setIsCartOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsCartOpen(false);
      }
    };

    if (show) {
      window.addEventListener("keydown", handleKey);
    } else {
      window.removeEventListener("keydown", handleKey);
    }

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [show, setIsCartOpen]);

  const handleClickOutside = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsCartOpen(false);
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black/70 z-60 transition-opacity duration-500 ${
        show ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClickOutside}
    >
      <div
        className={`flex flex-col absolute top-0 left-0 bg-white h-screen max-w-full p-5 transition-all transform duration-500 ease-out ${
          show ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cart Header */}
        <div className="flex items-center justify-between pb-4 px-4">
          <h3 className="font-bold text-lg text-zinc-700">سبد خرید</h3>
          <button
            className="flex cursor-pointer text-zinc-700 gap-x-2"
            onClick={() => setIsCartOpen(false)}
          >
            <X />
          </button>
        </div>
        {/* Cart Devider */}
        <hr className="text-gray-300" />

        {/* Emtpy Template */}
        {/* <div className="flex flex-col items-center justify-center h-screen">
          <ShoppingCart className="size-30 text-zinc-300" />
          <span className="text:md sm:text-lg mt-5 font-bold text-zinc-400">
            هنوز محصولی به سبدی خرید اضاف نشده
          </span>
        </div> */}

        {/* Cart Body */}
        <div className="*:pb-5 *:mb-5 flex-wrap *:border-b *:border-b-gray-100 overflow-y-auto">
          <ItemCart />
          <ItemCart />
          <ItemCart />
          <ItemCart />
          <ItemCart />
        </div>
        {/* Cart Footer */}
        <div className="flex items-end justify-between gap-x-4 mt-auto">
          <Link
            href="#"
            className="flex items-center justify-center h-11 w-28 text-white bg-teal-600 rounded-xl"
          >
            ثبت سفارش
          </Link>
          <div>
            <span className="text-gray-300 text-xs tracking-tighter">
              مبلغ قابل پرداخت
            </span>
            <div className="text-zinc-700 text-xl">
              350000
              <span className="text-xs">تومان</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavCart;
