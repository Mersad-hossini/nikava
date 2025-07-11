"use client";

import { usePathname } from "next/navigation";
import { Menu, LogOut } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import React from "react";
import SidebarItem from "./SidebarItem";
import AdminProfile from "./AdminProfile";
import Image from "next/image";
import Link from "next/link";

export default function AdminSidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div>
      {/* 🔹 Mobile Toggle Button */}
      <div className="lg:hidden fixed top-7 right-5 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-zinc-700 p-2 rounded-md hover:bg-zinc-600 transition"
          aria-label="باز کردن منو"
        >
          <Menu size={20} className="text-white" />
        </button>
      </div>

      {/* 🔹 Sidebar for Desktop (sticky) */}
      <div className="hidden lg:flex sticky top-4 right-4 h-[calc(100vh-2rem)] w-64 bg-zinc-100 text-zinc-900 p-4 shadow-md flex-col justify-between rounded-xl border border-zinc-100 z-40">
        <Link href="/" className="mb-6 flex justify-center">
          <Image
            src="/images/nikava-logo.png"
            width={120}
            height={120}
            alt="لوگوی نیکاوا"
            priority
            className="h-auto"
          />
        </Link>

        <AdminProfile setIsOpen={() => {}} />
        <SidebarItem pathname={pathname} setIsOpen={() => {}} />
        <button className="w-full mt-4 flex items-center justify-center gap-2 cursor-pointer text-white bg-zinc-700 hover:bg-zinc-800 transition-all rounded-md py-2">
          <LogOut size={16} />
          خروج
        </button>
      </div>

      {/* 🔹 Sidebar for Mobile (fixed) */}
      <div
        ref={sidebarRef}
        className={`fixed lg:hidden top-4 right-0 z-50 h-[calc(100vh-2rem)] w-64 bg-zinc-100 text-zinc-800 p-4 shadow-md flex flex-col justify-between rounded-xl border border-zinc-100 transition-transform duration-300
        ${isOpen ? "translate-x-0 right-4" : "translate-x-full"}
      `}
      >
        <Link href="/" className="flex justify-center mb-6">
          <Image
            src="/images/nikava-logo.png"
            width={120}
            height={120}
            alt="لوگوی نیکاوا"
            priority
            className="h-auto"
          />
        </Link>

        <AdminProfile setIsOpen={setIsOpen} />
        <SidebarItem pathname={pathname} setIsOpen={setIsOpen} />
        <button className="w-full mt-4 flex items-center justify-center gap-2 cursor-pointer text-white bg-zinc-700 hover:bg-zinc-800 transition-all rounded-md py-2">
          <LogOut size={16} />
          خروج
        </button>
      </div>
    </div>
  );
}
