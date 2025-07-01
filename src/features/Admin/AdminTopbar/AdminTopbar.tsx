import { Bell, Settings, LogOut, UserCog, Plus } from "lucide-react";
import Link from "next/link";

export default function AdminTopbar() {
  const greeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "صبح بخیر";
    if (hour < 18) return "ظهر بخیر";
    return "عصر بخیر";
  };

  return (
    <header className="mx-4 mt-4 mb-6 bg-white rounded-xl shadow-md border border-zinc-200 px-12 py-4 grid grid-cols-1 xs:grid-cols-2">
      <div className="text-base font-semibold text-center xs:text-start text-zinc-800">
        <span>{greeting()}، </span>
        <span className="text-blue-600"> رضا منصوری </span>
      </div>

      <div className="hidden xs:flex items-center justify-end gap-4">
        <Link href="/admin/products/new" title="افزودن محصول">
          <Plus size={20} className="text-green-600 hover:text-green-700" />
        </Link>

        <button title="اعلان‌ها">
          <Bell size={20} className="text-zinc-700 hover:text-black" />
        </button>

        <Link href="/admin/settings" title="تنظیمات">
          <Settings size={20} className="text-zinc-700 hover:text-black" />
        </Link>

        <Link href="/admin/profile" title="پروفایل ادمین">
          <UserCog size={20} className="text-zinc-700 hover:text-black" />
        </Link>

        <button title="خروج">
          <LogOut size={20} className="text-red-500 hover:text-red-600" />
        </button>
      </div>
    </header>
  );
}
