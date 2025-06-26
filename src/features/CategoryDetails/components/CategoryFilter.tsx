import React from "react";
import { FilterIcon } from "lucide-react";

export default function CategoryFilter() {
  return (
    <div className="border border-gray-200 rounded-xl p-4 shadow-sm">
      <div className="flex gap-2 items-center mb-3">
        <FilterIcon className="w-5 h-5 text-gray-700" />
        <h2 className="text-lg font-semibold text-gray-700">فیلترها</h2>
      </div>

      <div className="space-y-2 text-sm text-gray-600">
        <div className="collapse collapse-arrow bg-base-100 border border-gray-200">
          <input type="checkbox" />
          <div className="collapse-title font-medium">موجودی</div>
          <div className="collapse-content">
            <label className="block">
              <input type="checkbox" className="mr-2" /> موجود در انبار
            </label>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 border border-gray-200">
          <input type="checkbox" />
          <div className="collapse-title font-medium">قیمت</div>
          <div className="collapse-content">
            <label className="block">
              <input type="checkbox" className="mr-2" /> کمتر از ۵۰۰ هزار
            </label>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 border border-gray-200">
          <input type="checkbox" />
          <div className="collapse-title font-medium">برند</div>
          <div className="collapse-content">
            <label className="block">
              <input type="checkbox" className="mr-2" /> اپل
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}