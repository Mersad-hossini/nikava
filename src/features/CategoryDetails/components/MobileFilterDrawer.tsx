"use client";

import { X } from "lucide-react";
import React, { useEffect, RefObject } from "react";

type MobileFilterDrawerProps = {
  isFilterOpen: boolean;
  setIsFilterOpen: (open: boolean) => void;
  drawerRef: RefObject<HTMLDivElement>;
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
      className={`fixed inset-0 z-50 transition-all duration-300 md:hidden ${
        isFilterOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } bg-black/50 flex justify-end`}
    >
      <div
        ref={drawerRef}
        className={`w-3/4 xs:w-2/4 bg-white h-full shadow-lg p-4 overflow-y-auto transition-transform duration-500 transform ${
          isFilterOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">فیلترها</h2>
          <button
            onClick={() => setIsFilterOpen(false)}
            className="text-gray-600 text-lg"
          >
            <X />
          </button>
        </div>
        <hr className="my-3 text-zinc-200" />
        <div className="space-y-2 text-sm text-gray-600">
          <label className="block">
            <input type="checkbox" className="mr-2" />
            موجود در انبار
          </label>
          <label className="block">
            <input type="checkbox" className="mr-2" />
            قیمت کمتر از ۵۰۰ هزار
          </label>
          <label className="block">
            <input type="checkbox" className="mr-2" />
            برند اپل
          </label>
        </div>
      </div>
    </div>
  );
};

export default MobileFilterDrawer;