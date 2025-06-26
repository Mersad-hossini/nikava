import React from "react";

function SortToolbar() {
  return (
    <>
      {/* Sort Toolbar */}
      <div className="flex flex-wrap gap-3 items-center justify-between bg-zinc-50 px-4 py-3 rounded-xl shadow-sm border border-gray-200">
        <div className="hidden md:flex gap-2 flex-wrap">
          <button className="text-sm px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg">
            پرفروش‌ترین
          </button>
          <button className="text-sm px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg">
            بیشترین قیمت
          </button>
          <button className="text-sm px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg">
            ارزان‌ترین
          </button>
        </div>
        <div className="flex md:hidden gap-2 flex-wrap">
          <select
            className="text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-300"
            defaultValue="default"
          >
            <option value="default" disabled>
              مرتب‌سازی بر اساس
            </option>
            <option value="bestselling">پرفروش‌ترین</option>
            <option value="expensive">بیشترین قیمت</option>
            <option value="cheapest">ارزان‌ترین</option>
          </select>
        </div>
        <span className="text-sm text-gray-500">۲۱۸۰ محصول</span>
      </div>
    </>
  );
}

export default SortToolbar;
