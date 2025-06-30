"use client";

import { Bell } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const notifications = [
  { id: 1, title: "تخفیف ۳۰٪ روی محصولات دیجیتال", time: "۲ ساعت پیش" },
  { id: 2, title: "محصول جدید به فروشگاه افزوده شد", time: "۵ ساعت پیش" },
  { id: 3, title: "سفارش شما ارسال شد", time: "دیروز" },
  { id: 4, title: "امتیاز وفاداری جدید دریافت کردید", time: "۳ روز پیش" },
];

export default function NotificationBell() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex ite relative" ref={dropdownRef}>
      <button
        className="relative"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="اعلان‌ها"
      >
        <Bell size={22} className="cursor-pointer" />
        <span className="absolute -top-1 -right-1 bg-green-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
          {notifications.length}
        </span>
      </button>

      {open && (
        <div className="absolute left-0 mt-3 w-72 max-h-72 overflow-y-auto bg-white border border-zinc-100 rounded-lg shadow-lg z-50">
          <div className="p-3 border-b border-zinc-400 font-semibold text-zinc-700">
            اعلان‌ها
          </div>
          <ul className="divide-y divide-zinc-100 text-sm">
            {notifications.map((n) => (
              <li key={n.id} className="px-4 py-3 hover:bg-zinc-50">
                <div className="text-zinc-800">{n.title}</div>
                <div className="text-xs text-zinc-500 mt-1">{n.time}</div>
              </li>
            ))}
          </ul>
          {notifications.length === 0 && (
            <div className="p-4 text-center text-zinc-500 text-sm">
              اعلانی وجود ندارد.
            </div>
          )}
        </div>
      )}
    </div>
  );
}