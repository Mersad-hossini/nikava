"use client";

import { Menu, Store, House, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import NavCart from "./NavCart";
import CategoryDropdownMobile from "./CategoryDropdownMobile";

const MobileBottomNav = () => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [showCategories, setShowCategories] = useState(false);

  return (
    <>
      <nav className="lg:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-md z-50">
        <ul className="flex justify-between items-center px-4 py-2 text-xs text-zinc-600">
          <li>
            <Link href="/" className="flex flex-col items-center">
              <House className="size-5" />
              <span>خانه</span>
            </Link>
          </li>
          <li>
            <button
              onClick={() => setShowCategories(true)}
              className="flex flex-col items-center cursor-pointer"
            >
              <Menu className="size-5" />
              <span>دسته بندی‌ها</span>
            </button>
          </li>
          {showCategories && (
            <CategoryDropdownMobile onClose={() => setShowCategories(false)} />
          )}
          <li>
            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setIsCartOpen((prevState) => !prevState)}
            >
              <ShoppingCart className="size-5" />
              <span>سبد خرید</span>
            </div>
          </li>
          <li>
            <Link href="#" className="flex flex-col items-center">
              <Store className="size-5" />
              <span>سوپرمارکت</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="flex flex-col items-center">
              <User className="size-5" />
              <span>پنل کاربری</span>
            </Link>
          </li>
        </ul>
      </nav>
      {isCartOpen && <NavCart setIsCartOpen={setIsCartOpen} />}
    </>
  );
};

export default MobileBottomNav;
