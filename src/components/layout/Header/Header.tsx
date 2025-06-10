import React from "react";
import { Bell, Search } from "lucide-react";
import Image from "next/image";
import NavLinks from "./NavLinks";
import TopBar from "./TopBar";
import MainNav from "./MainNav";
import MobileBottomNav from "./MobileBottomNav";

function Header() {
  return (
    <header className="shadow-md">
      <TopBar />

      <nav className="mt-3 mx-6 pb-3">
        <div className="lg:flex lg:justify-between items-center">
          {/* Right Side Nav */}
          <div className="flex">
            {/* Logo */}
            <div className="hidden lg:flex items-center ml-5">
              <Image
                src="/images/nikava-logo.png"
                width={120}
                height={120}
                alt="Picture of the author"
                priority
                className="h-auto"
              />
            </div>
            {/* Search Input */}
            <form className="relative bg-zinc-200 w-full lg:w-144 rounded-sm flex items-center">
              <input
                type="text"
                placeholder="جستجو"
                className="outline-0 w-full pr-12 py-2"
              />
              <div className="absolute flex items-center h-full cursor-pointer right-0.5 pr-2">
                <Search className="text-zinc-400 size-5" />
                <div className="h-8 border-l border-gray-300 mr-2" />
              </div>
            </form>
            {/* Bell For Smaller Size(1030px) */}
            <div className="flex lg:hidden bg-zinc-200 rounded-full p-2 mr-2">
              <Bell />
            </div>
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