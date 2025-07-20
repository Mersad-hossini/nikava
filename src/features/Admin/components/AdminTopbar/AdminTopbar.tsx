import NotificationBell from "@/components/ui/NotificationBell/NotificationBell";
import { Settings, LogOut, Plus } from "lucide-react";
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
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="cursor-pointer">
            <Plus size={20} className="text-green-600 hover:text-green-700" />
          </label>

          <ul
            tabIndex={0}
            className="menu dropdown-content z-[50] mt-3 p-2 shadow bg-white border border-gray-200 rounded-box w-56"
          >
            <li>
              <Link href="/cp/products/new">➕ افزودن محصول</Link>
            </li>
            <li>
              <Link href="/cp/story/new">➕ ایجاد استوری</Link>
            </li>
            <li>
              <Link href="/cp/discounts/new">
                🎟️ افزودن کد تخفیف
              </Link>
            </li>
          </ul>
        </div>

        <NotificationBell />

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="cursor-pointer">
            <Settings size={20} />
          </label>

          <ul
            tabIndex={0}
            className="menu dropdown-content z-[50] mt-3 p-2 shadow bg-white border border-gray-200 rounded-box w-56"
          >
            <li>
              <Link href="/cp/blogs" className="flex items-center gap-2">
                <span>📝</span> <span>وبلاگ</span>
              </Link>
            </li>
            <li>
              <Link href="/cp/banners" className="flex items-center gap-2">
                <span>🖼️</span> <span>بنرها</span>
              </Link>
            </li>
            <li>
              <Link
                href="/cp/newsletter"
                className="flex items-center gap-2"
              >
                <span>📬</span> <span>خبرنامه</span>
              </Link>
            </li>
            <li>
              <Link href="/cp/settings" className="flex items-center gap-2">
                <span>⚙️</span> <span>تنظیمات سایت</span>
              </Link>
            </li>
            <li>
              <Link href="/cp/profile" className="flex items-center gap-2">
                <span>👤</span> <span>پروفایل ادمین</span>
              </Link>
            </li>
          </ul>
        </div>

        <button title="خروج">
          <LogOut size={20} className="text-red-500 hover:text-red-600" />
        </button>
      </div>
    </header>
  );
}
