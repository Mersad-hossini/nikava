import { X, ShieldCheck, CalendarDays } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type ProfileProps = {
  setIsOpen: (open: boolean) => void;
};

export default function AdminProfile({ setIsOpen }: ProfileProps) {
  const [today, setToday] = useState("");

  useEffect(() => {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat("fa-IR", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
    setToday(formatter.format(now));
  }, []);

  return (
    <div className="flex items-center justify-between mb-6 px-2">
      {/* ✅ اطلاعات ادمین */}
      <div className="flex items-center gap-3">
        <Image
          src="/images/mersad.jpg"
          width={52}
          height={52}
          alt="Admin Avatar"
          className="rounded-full border size-13 border-gray-300 shadow-sm"
        />

        <div className="flex flex-col">
          <span className="font-bold text-sm text-zinc-800 flex items-center gap-1">
            <ShieldCheck size={14} className="text-blue-600" />
            ادمین
          </span>
          <span className="text-sm text-zinc-600">رضا منصوری</span>
          <span className="text-xs text-zinc-400 flex items-center gap-1 mt-1">
            <CalendarDays size={12} className="text-zinc-400" />
            {today}
          </span>
        </div>
      </div>

      {/* 🔘 دکمه بستن برای موبایل */}
      <div className="flex items-center gap-2">
        <X
          className="block lg:hidden cursor-pointer text-zinc-600 hover:text-black transition"
          onClick={() => setIsOpen(false)}
        />
      </div>
    </div>
  );
}
