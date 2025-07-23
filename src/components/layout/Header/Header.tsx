"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import NavLinks from "./nav/NavLinks";
import TopBar from "./TopBar";
import MainNav from "./nav/MainNav";
import MobileBottomNav from "./nav/MobileBottomNav";
import Link from "next/link";
import SearchInput from "./SearchInput";
import NotificationBell from "@/components/ui/NotificationBell/NotificationBell";

function Header() {
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md transition-all duration-300">
      <TopBar />

      <nav className="mt-3 mx-6 pb-3 lg:pb-0">
        <div className="lg:flex pb-3 lg:justify-between items-center">
          {/* Right Side Nav */}
          <div className="flex">
            {/* Logo */}
            <div className="hidden lg:flex items-center ml-5">
              <Link href="/">
                <Image
                  src="/images/nikava-logo.png"
                  width={120}
                  height={120}
                  alt="Picture of the author"
                  priority
                  className="h-auto"
                />
              </Link>
            </div>
            {/* Search Input */}
            <SearchInput />
            {/* Bell For Smaller Size(1030px) */}
            <Link href="#">
              {/* Badge number for bell */}
              <div className="hidden min-[330px]:flex lg:hidden relative bg-zinc-200 rounded-full p-2 mr-2">
                <NotificationBell />
              </div>
            </Link>
          </div>

          {/* Left Side Nav */}
          <MainNav />
        </div>
        {/* Nav Links */}

        <NavLinks />

        <MobileBottomNav />
      </nav>
    </header>
  );
}

export default Header;
