import { CircleHelp, Clock, Flame, Menu, Phone, Store } from "lucide-react";
import Link from "next/link";
import React from "react";

function NavLinks() {
  return (
    <div className="hidden lg:flex mt-5 **:flex **:items-center">
      <div>
        <Link href="#">
          <Menu className="size-4 flex ml-2" />
          <span className="text-sm font-bold">دسته‌بندی کالاها</span>
        </Link>
        <div className="h-8 border-l border-gray-200 mx-4" />
      </div>

      <div>
        <Link href="#" className="text-zinc-500">
          <Clock className="size-4 flex ml-1" />
          <span className="text-sm">جدیدترین‌ها</span>
        </Link>
      </div>

      <div className="mx-4">
        <Link href="#" className="text-zinc-500">
          <Flame className="size-4 flex ml-1" />
          <span className="text-sm">پرفروش‌ها</span>
        </Link>
      </div>

      <div className="mx-4">
        <Link href="#" className="text-zinc-500">
          <Store className="size-4 flex ml-1" />
          <span className="text-sm">سوپر مارکت</span>
        </Link>
      </div>

      <div className="mx-4">
        <Link href="#" className="text-zinc-500">
          <CircleHelp className="size-4 flex ml-1" />
          <span className="text-sm">سوالی دارید؟</span>
        </Link>
      </div>

      <div className="mx-4">
        <Link href="#" className="text-zinc-500">
          <Phone className="size-4 flex ml-1" />
          <span className="text-sm">ارتباط با ما</span>
        </Link>
      </div>
    </div>
  );
}

export default NavLinks;