"use client";

import { useRef, useState } from "react";
import SidebarFilter from "./SidebarFilter";
import MobileFilterDrawer from "./MobileFilterDrawer";
import { FilterIcon } from "lucide-react";

export default function FilterSidebarWrapper() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* Filter button on mobile */}
      <div className="flex md:hidden mb-4">
        <button
          onClick={() => setIsFilterOpen(true)}
          className="flex items-center gap-2 text-sm text-gray-700 border border-gray-300 px-3 py-1.5 rounded-md cursor-pointer shadow-sm"
        >
          <FilterIcon className="w-4 h-4" />
          فیلتر
        </button>
      </div>

      {/* Desktop filter */}
      <aside className="hidden md:block">
        <SidebarFilter />
      </aside>

      {/* Mobile filter */}
      <MobileFilterDrawer
        isFilterOpen={isFilterOpen}
        setIsFilterOpen={setIsFilterOpen}
        drawerRef={drawerRef}
      />
    </>
  );
}
