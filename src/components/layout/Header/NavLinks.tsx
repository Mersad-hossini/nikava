import {
  CircleHelp,
  Clock,
  Flame,
  Menu,
  Phone,
  Store,
  Book,
  TabletSmartphoneIcon,
  Music,
  Shirt
} from "lucide-react";
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import SubNavLink from "./SubNavLink";

function NavLinks() {
  return (
    <div className="hidden lg:flex mt-5 items-center">
      <div className="flex relative group h-10">
        <Link href="#" className="relative flex items-center pl-4">
          <div className="flex items-center cursor-pointer">
            <Menu className="size-4 flex items-center ml-2" />
            <span className="text-sm font-bold">دسته‌بندی کالاها</span>
          </div>
        </Link>
        <div className="hidden overflow-y-auto max-h-130 group-hover:flex flex-col px-2 py-2 gap-y-2 absolute top-10 -right-6 w-70 border-t border-gray-200 bg-white z-20 shadow-md ">
          <SubNavLink icon={Book} title="کتاب" />
          <SubNavLink icon={TabletSmartphoneIcon} title="تبلت" />
          <SubNavLink icon={Shirt} title="لباس" />
          <SubNavLink icon={Music} title="موسیقی" />
        </div>
      </div>

      <div className="h-8 border-l-1 border-gray-200 ml-4" />

      <NavLink icon={Clock} title="جدیدترین‌ها" />
      <NavLink icon={Flame} title="پرفروش‌ها" />
      <NavLink icon={Store} title="سوپر مارکت" />
      <NavLink icon={CircleHelp} title="سوالی دارید؟" />
      <NavLink icon={Phone} title="ارتباط با ما" />
    </div>
  );
}

export default NavLinks;
