"use client";

import { Heart, Copy } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

interface ThreeDotMenuProps {
  onClose: () => void;
}

export function ThreeDotMenu({ onClose }: ThreeDotMenuProps) {
  const [pageUrl] = useState(() =>
    typeof window !== "undefined" ? window.location.href : ""
  );

  const handleCopyLink = () => {
    if (navigator.clipboard && pageUrl) {
      navigator.clipboard.writeText(pageUrl);
      toast.success("لینک کپی شد!");
    } else {
      toast.error("خطا در کپی لینک");
    }
  };

  const handleAddToFavorites = () => {
    toast.success("به علاقه‌مندی‌ها اضافه شد");
  };

  const menuItems = [
    {
      icon: Heart,
      label: "افزودن به علاقه‌مندی",
      onClick: handleAddToFavorites,
    },
    {
      icon: Copy,
      label: "کپی لینک",
      onClick: handleCopyLink,
    },
  ];

  return (
    <div className="absolute left-0 mt-2 w-48 bg-white border border-zinc-200 rounded-xl shadow-md z-20 transition-all duration-200 scale-95 hover:scale-100 origin-top-left">
      {menuItems.map((item, index) => (
        <button
          key={index}
          type="button"
          className="w-full px-4 py-2 text-sm flex items-center gap-2 hover:bg-zinc-50 rounded-xl cursor-pointer text-right"
          onClick={() => {
            item.onClick();
            onClose();
          }}
        >
          <item.icon className="w-4 h-4 text-zinc-600" />
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  );
}