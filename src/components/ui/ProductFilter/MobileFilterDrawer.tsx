"use client";

import { X } from "lucide-react";
import React, { useEffect } from "react";
import SidebarFilter from "./SidebarFilter";

type MobileFilterDrawerProps = {
  isFilterOpen: boolean;
  setIsFilterOpen: (open: boolean) => void;
  drawerRef: React.RefObject<HTMLDivElement | null>;
};

const MobileFilterDrawer: React.FC<MobileFilterDrawerProps> = ({
  isFilterOpen,
  setIsFilterOpen,
  drawerRef,
}) => {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        setIsFilterOpen(false);
      }
    };

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsFilterOpen(false);
      }
    };

    if (isFilterOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isFilterOpen, drawerRef, setIsFilterOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-black/50 transition-opacity duration-200 ease-in-out ${
        isFilterOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } flex justify-end`}
    >
      <div
        ref={drawerRef}
        className={`w-11/12 sm:w-3/4 bg-white min-h-screen shadow-lg p-4 overflow-y-auto transform transition-transform duration-200 ease-in-out ${
          isFilterOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">فیلترها</h2>
          <button
            onClick={() => setIsFilterOpen(false)}
            className="text-gray-600 hover:text-gray-800 transition cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <hr className="my-3 border-zinc-200" />
        <SidebarFilter />
      </div>
    </div>
  );
};

export default MobileFilterDrawer;