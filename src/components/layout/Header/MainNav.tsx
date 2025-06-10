"use client";

import {
  Bell,
  LogIn,
  LogOut,
  ShoppingCart,
  User,
  ChevronDown,
  ChevronLeft,
  Package,
  Heart,
  SquarePen,
} from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import NavCart from "./NavCart";

function MainNav() {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isUserBoxOpen, setIsUserBoxOpen] = useState<boolean>(false);

  const userBoxRef = useRef<HTMLDivElement>(null);

  // Close the user box when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        userBoxRef.current &&
        !userBoxRef.current.contains(event.target as Node)
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
        {/* <Link
          href="/auth"
          className="flex items-center border-1 border-zinc-200 py-2 px-4 rounded-md cursor-pointer"
        >
          <LogIn className="ml-2 rotate-180 size-6" />
          <span>ورود/ثبت نام</span>
        </Link> */}

        <div className="hidden lg:flex relative">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setIsUserBoxOpen((prevState) => !prevState)}
          >
            <User />
            <ChevronDown className="size-4" />
          </div>
          {isUserBoxOpen && (
            <div className="absolute top-6 left-0 z-20" ref={userBoxRef}>
              <div className="flex justify-center items-center bg-gray-50">
                <div className="bg-white rounded-lg shadow-lg w-full lg:w-80">
                  <Link href="#">
                    <div className="flex justify-between items-center p-4 border-b text-neutral-700 hover:bg-gray-100">
                      <span className="font-semibold text-lg">
                        مرصاد محمد حسینی
                      </span>
                      <ChevronLeft />
                    </div>
                  </Link>

                  {/* منوی لینک‌ها */}
                  <ul className="space-y-2 p-4">
                    <li className="border-b border-gray-200">
                      <Link href="/profile/orders">
                        <div className="flex items-center text-zinc-600 font-bold hover:bg-gray-100 p-2 rounded-lg">
                          <Package className="ml-2" />
                          سفارش‌ها
                        </div>
                      </Link>
                    </li>
                    <li className="border-b border-gray-200">
                      <Link href="/profile/orders">
                        <div className="flex items-center text-zinc-600 font-bold hover:bg-gray-100 p-2 rounded-lg">
                          <Heart className="ml-2" />
                          علاقه مندی ها
                        </div>
                      </Link>
                    </li>
                    <li className="border-b border-gray-200">
                      <Link href="/profile/orders">
                        <div className="flex items-center text-zinc-600 font-bold hover:bg-gray-100 p-2 rounded-lg">
                          <SquarePen className="ml-2" />
                          جزئیات حساب
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/profile/orders">
                        <div className="flex items-center text-zinc-600 font-bold hover:bg-gray-100 p-2 rounded-lg">
                          <LogOut className="ml-2" />
                          خروج از حساب
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