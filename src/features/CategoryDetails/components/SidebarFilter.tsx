import { FilterIcon } from "lucide-react";
import React from "react";

function SidebarFilter() {
  return (
    <>
      {/* Sidebar (Desktop) */}
      <aside className="hidden md:block md:col-span-1 space-y-4">
        <div className="border border-gray-200 rounded-xl p-4 shadow-sm">
          <div className="flex gap-2 items-center mb-3">
            <FilterIcon className="w-5 h-5 text-gray-700" />
            <h2 className="text-lg font-semibold text-gray-700">فیلترها</h2>
          </div>
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
      </aside>
    </>
  );
}

export default SidebarFilter;
