"use client";
import { ChevronLeft } from "lucide-react";
import React, { useEffect, useState } from "react";

const CategoryDropdown = () => {
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
        "کیبورد",
        "موس",
        "میکروفون",
        "کارت گرافیک",
        "پاور بانک",
        "مچ‌بند هوشمند",
        "کنسول بازی",
        "گیرنده دیجیتال",
      ],
    },
    {
      name: "خانه و آشپزخانه",
      children: [
        "یخچال",
        "ماشین لباسشویی",
        "ماشین ظرفشویی",
        "مایکروویو",
        "آبمیوه‌گیری",
        "چای‌ساز",
        "قهوه‌ساز",
        "پلوپز",
        "جاروبرقی",
        "اتو",
        "سرخ‌کن",
        "آون توستر",
      ],
    },
    {
      name: "مد و پوشاک",
      children: [
        "کفش مردانه",
        "کفش زنانه",
        "کیف",
        "اکسسوری",
        "ساعت",
        "عینک",
        "شال",
        "روسری",
        "کلاه",
        "کمربند",
        "لباس زنانه",
        "لباس مردانه",
      ],
    },
    {
      name: "زیبایی و سلامت",
      children: [
        "عطر",
        "کرم مرطوب‌کننده",
        "ماسک صورت",
        "شامپو",
        "برق لب",
        "رژ لب",
        "ادکلن",
        "برس مو",
        "سشوار",
        "اتو مو",
        "ریش‌تراش",
        "لوازم آرایشی",
      ],
    },
    {
      name: "خودرو و ابزار",
      children: [
        "روغن موتور",
        "لوازم یدکی",
        "باتری خودرو",
        "دزدگیر",
        "جاروبرقی فندکی",
        "پمپ باد",
        "جعبه ابزار",
        "آچار",
        "پیچ‌گوشتی",
        "روکش صندلی",
      ],
    },
    {
      name: "ورزش و سفر",
      children: [
        "چمدان",
        "کوله‌پشتی",
        "کفش کوهنوردی",
        "لباس ورزشی",
        "زیرانداز",
        "قمقمه",
        "دوچرخه",
        "تجهیزات کمپینگ",
        "چادر مسافرتی",
      ],
    },
    {
      name: "مادر و کودک",
      children: [
        "پوشک",
        "لباس نوزاد",
        "کالسکه",
        "شیر خشک",
        "شیشه شیر",
        "واکر کودک",
        "اسباب‌بازی آموزشی",
        "تشک تعویض",
      ],
    },
    {
      name: "فرهنگ و هنر",
      children: [
        "کتاب",
        "دفتر نقاشی",
        "مداد رنگی",
        "ساز",
        "گیتار",
        "پیانو",
        "سه‌تار",
        "دف",
        "کالای هنری",
        "خطاطی",
        "تابلو",
      ],
    },
    {
      name: "مواد غذایی",
      children: [
        "چای",
        "قهوه",
        "شکلات",
        "حبوبات",
        "ادویه",
        "برنج",
        "ماکارونی",
        "روغن",
        "سس",
        "تن ماهی",
        "عسل",
        "آجیل",
        "غلات صبحانه",
      ],
    },
    {
      name: "لوازم تحریر و اداری",
      children: [
        "خودکار",
        "مداد",
        "دفتر",
        "کاغذ",
        "پرینتر",
        "ماشین‌حساب",
        "پوشه",
        "گیره کاغذ",
        "ست رومیزی",
        "سوزن منگنه",
        "چسب نواری",
      ],
    },
    {
      name: "صنایع دستی",
      children: [
        "فرش دستباف",
        "میناکاری",
        "سفال",
        "فیروزه‌کوب",
        "ترمه",
        "قلم‌زنی",
        "خاتم‌کاری",
        "گلیم",
        "آینه سنتی",
      ],
    },
    {
      name: "حیوانات خانگی",
      children: [
        "غذای سگ",
        "غذای گربه",
        "لوازم بهداشتی حیوانات",
        "اسباب‌بازی حیوانات",
        "قلاده",
        "ظرف غذا",
        "تشک حیوان",
        "شن گربه",
        "لوازم آکواریوم",
      ],
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(categories[0].name); // پیش‌فرض روی اولین آیتم

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
      console.log();
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <div className="relative z-50">
      {/* دکمه منو */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center cursor-pointer px-4 py-2 text-sm font-medium text-gray-700 hover:text-black hover:bg-gray-100 transition-all rounded-lg"
      >
        دسته‌بندی‌ها
        <ChevronLeft className="size-4 mr-1" />
      </div>

      {/* بک‌گراند تیره */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* منوها */}
      {isOpen && (
        <div className="absolute right-0 top-full category-dropdown flex bg-white border border-gray-200 shadow-2xl rounded-lg z-50 text-right max-h-[80vh] w-full sm:w-auto">
          {/* First Menu */}
          <ul className="w-60 max-h-[480px] overflow-y-auto text-sm rounded-lg text-gray-800 divide-y divide-gray-100">
            {categories.map((cat) => (
              <li
                key={cat.name}
                className="px-4 py-3 hover:bg-gray-50 whitespace-nowrap cursor-pointer"
                onMouseEnter={() => setHovered(cat.name)}
              >
                <div className="flex justify-between items-center">
                  <span>{cat.name}</span>
                  <ChevronLeft className="w-3 h-3 text-gray-400" />
                </div>
              </li>
            ))}
          </ul>

          {/* Seconde Menu */}
          <div className="w-64 max-h-[80vh] overflow-y-auto border-r rounded-lg border-gray-100 bg-gray-50">
            <ul className="text-xs max-h-[480px] text-gray-700 rounded-lg py-3 px-4 space-y-1">
              {categories
                .find((cat) => cat.name === hovered)
                ?.children.map((sub, idx) => (
                  <li
                    key={idx}
                    className="py-2 px-2 rounded-lg hover:bg-gray-200 hover:text-black cursor-pointer transition-all"
                  >
                    {sub}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryDropdown;
