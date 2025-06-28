"use client";

import { Clock, File, Flame, Phone, Store } from "lucide-react";
import React from "react";
import NavLink from "./NavLink";
import CategoryDropdown from "./CategoryDropdown";

export default function NavLinks() {
  return (
    <div className="hidden lg:flex items-center relative pb-1">
      <CategoryDropdown />

      <div className="h-8 border-l border-gray-200 mx-4" />
      <NavLink icon={Clock} title="جدیدترین‌ها" href="#" />
      <NavLink icon={Flame} title="پرفروش‌ها" href="#" />
      <NavLink icon={Store} title="سوپر مارکت" href="#" />
      <NavLink icon={Phone} title="ارتباط با ما" href="/contact-us" />
      <NavLink icon={File} title="وبلاگ ها" href="/blog" />
    </div>
  );
}