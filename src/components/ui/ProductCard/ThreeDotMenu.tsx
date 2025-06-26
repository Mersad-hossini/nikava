import { Heart, Share2 } from "lucide-react";

interface ThreeDotMenuProps {
  onClose: () => void;
}

const menuItems = [
  { icon: Heart, label: "علاقه‌مندی" },
  { icon: Share2, label: "اشتراک‌گذاری" },
];

export function ThreeDotMenu({ onClose }: ThreeDotMenuProps) {
  return (
    <div className="absolute left-0 mt-2 w-40 bg-white border border-zinc-200 rounded-xl shadow-md z-20">
      {menuItems.map((item, index) => (
        <button
          key={index}
          type="button"
          className="w-full px-4 py-2 text-sm flex items-center gap-2 hover:bg-zinc-50 rounded-xl cursor-pointer"
          onClick={onClose}
        >
          <item.icon className="w-4 h-4" />
          {item.label}
        </button>
      ))}
    </div>
  );
}