"use client";

import { ChevronLeft, X } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
  onClose: () => void;
}

const categories = [
  {
    name: "لوازم دیجیتال",
    children: [
      "موبایل",
      "تبلت",
      "ساعت هوشمند",
      "هدفون",
      "لپ‌تاپ",
      "دوربین",
      "مودم",
      "مانیتور",
      "هارد اکسترنال",
      "فلش",
    ],
  },
  {
    name: "خانه و آشپزخانه",
    children: ["یخچال", "لباسشویی", "ظرفشویی", "مایکروویو"],
  },
  {
    name: "مد و پوشاک",
    children: ["کفش", "کیف", "لباس زنانه", "اکسسوری"],
  },
  // ... ادامه بده
];

const CategoryDropdownMobile = ({ onClose }: Props) => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-white p-4 overflow-y-auto lg:hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 pb-2 border-b">
        <span className="text-lg font-semibold">دسته‌بندی‌ها</span>
        <button onClick={onClose}>
          <X className="w-5 h-5 text-gray-700 cursor-pointer" />
        </button>
      </div>

      {/* Categories */}
      {categories.map((cat) => (
        <div key={cat.name} className="mb-2">
          <button
            onClick={() =>
              setOpenCategory((prev) => (prev === cat.name ? null : cat.name))
            }
            className="flex justify-between cursor-pointer items-center w-full text-sm font-medium text-right py-2 text-gray-800 hover:bg-gray-100 rounded-lg px-2"
          >
            <span>{cat.name}</span>
            <ChevronLeft
              className={`w-4 h-4 transform transition-transform duration-200 ${
                openCategory === cat.name ? "-rotate-90" : ""
              }`}
            />
          </button>

          {/* Subcategories */}
          {openCategory === cat.name && (
            <ul className="mt-2 pr-4 text-xs text-gray-700 space-y-1">
              {cat.children.map((item, i) => (
                <li
                  key={i}
                  className="py-2 px-2 rounded-lg hover:bg-gray-100 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoryDropdownMobile;
