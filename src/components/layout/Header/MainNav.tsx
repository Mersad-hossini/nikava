"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Bell,
  User,
  ChevronDown,
  ChevronLeft,
  Package,
  Heart,
  SquarePen,
  LogOut,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";
import NavCart from "./NavCart";

function MainNav() {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isUserBoxOpen, setIsUserBoxOpen] = useState<boolean>(false);
  const userBoxRef = useRef<HTMLDivElement>(null);
  const userBoxButtonRef = useRef<HTMLDivElement>(null); // برای ارجاع به دکمه آیکون

  const toggleUserBox = (event: React.MouseEvent) => {
    event.stopPropagation(); // جلوگیری از بسته شدن هنگام کلیک روی دکمه
    setIsUserBoxOpen((prevState) => !prevState);
  };

  // Close the user box when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // بررسی می‌کنیم که آیا کلیک خارج از منو و دکمه آیکون بوده است
      if (
        userBoxRef.current &&
        !userBoxRef.current.contains(event.target as Node) &&
        userBoxButtonRef.current &&
        !userBoxButtonRef.current.contains(event.target as Node)
      ) {
        setIsUserBoxOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="hidden lg:flex items-center">
        <Link href="#" className="ml-6">
          <Bell />
        </Link>

        <div className="hidden lg:flex relative">
          <div
            ref={userBoxButtonRef} // ارجاع به دکمه آیکون کاربری
            className="flex items-center cursor-pointer"
            onClick={toggleUserBox}
          >
            <User />
            <ChevronDown className="size-4" />
          </div>
          {isUserBoxOpen && (
            <div className="absolute top-6 left-0 z-20" ref={userBoxRef}>
              <div className="flex justify-center rounded-lg items-center bg-gray-50">
                <div className="bg-white rounded-lg shadow-2xl w-full lg:w-70">
                  <Link href="#">
                    <div className="flex justify-between items-center rounded-lg p-4 border-t-2 border-b-1 border-t-yellow-500 border-b-gray-100 text-neutral-700 hover:bg-gray-100">
                      <span className="font-semibold text-md">
                        مرصاد محمد حسینی
                      </span>
                      <ChevronLeft />
                    </div>
                  </Link>
                  <ul className="space-y-2 p-4 rounded-lg">

                    <li className="border-b border-gray-100">
                      <Link href="/profile/orders">
                        <div className="flex items-center text-zinc-600 text-sm font-bold hover:bg-gray-100 p-2 rounded-lg">
                          <Package className="ml-2" />
                          <div className="flex items-center justify-between w-full">
                            <span>سفارش‌ها</span>
                            <ChevronLeft />
                          </div>
                        </div>
                      </Link>
                    </li>

                    <li className="border-b border-gray-100">
                      <Link href="/profile/orders">
                        <div className="flex items-center text-zinc-600 text-sm font-bold hover:bg-gray-100 p-2 rounded-lg">
                          <Heart className="ml-2" />
                          <div className="flex items-center justify-between w-full">
                            <span>علاقه مندی ها</span>
                            <ChevronLeft />
                          </div>
                        </div>
                      </Link>
                    </li>

                    <li className="border-b border-gray-100">
                      <Link href="/profile/orders">
                        <div className="flex items-center text-zinc-600 text-sm font-bold hover:bg-gray-100 p-2 rounded-lg">
                          <SquarePen className="ml-2" />
                          <div className="flex items-center justify-between w-full">
                            <span>جزئیات حساب</span>
                            <ChevronLeft />
                          </div>
                        </div>
                      </Link>
                    </li>

                    <li>
                      <Link href="/profile/orders">
                        <div className="flex items-center text-zinc-600 text-sm font-bold hover:bg-gray-100 p-2 rounded-lg">
                          <LogOut className="ml-2" />
                          <div className="flex items-center justify-between w-full">
                            <span>خروج از حساب</span>
                            <ChevronLeft />
                          </div>
                        </div>
                      </Link>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="h-8 border-l border-gray-200 mx-4" />
        <ShoppingCart
          className="cursor-pointer"
          onClick={() => setIsCartOpen((prevState) => !prevState)}
        />
      </div>
      {isCartOpen && <NavCart setIsCartOpen={setIsCartOpen} />}
    </>
  );
}

export default MainNav;
