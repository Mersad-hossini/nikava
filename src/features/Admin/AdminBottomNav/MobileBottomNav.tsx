import { Plus, Settings, LogOut } from "lucide-react";
import NotificationBell from "@/components/ui/NotificationBell/NotificationBell";

const AdminBottomNav = () => {
  return (
    <div className="xs:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow z-40">
      <div className="flex justify-around items-center px-4 py-2 text-xs text-zinc-600">
        {/* افزودن */}
        <div className="dropdown dropdown-top dropdown-end">
          <label tabIndex={0} className="cursor-pointer">
            <Plus size={20} className="text-green-600 hover:text-green-700" />
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content right-0 z-[60] mb-3 p-2 shadow bg-white border border-gray-200 rounded-box w-max min-w-[180px]"
          >
            <li>
              <a href="/admin/products/new">➕ افزودن محصول ساده</a>
            </li>
            <li>
              <a href="/admin/products/new?type=variable">🧩 محصول متغیر</a>
            </li>
            <li>
              <a href="/admin/products/import">📥 افزودن از فایل اکسل</a>
            </li>
          </ul>
        </div>

        {/* تنظیمات */}
        <div className="dropdown dropdown-top dropdown-end">
          <label tabIndex={0} className="cursor-pointer">
            <Settings size={20} className="text-zinc-700 hover:text-black" />
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content right-0 z-[60] mb-3 p-2 shadow bg-white border border-gray-200 rounded-box w-max min-w-[180px]"
          >
            <li>
              <a href="/admin/blogs" className="flex items-center gap-2">
                <span>📝</span> <span>وبلاگ</span>
              </a>
            </li>
            <li>
              <a href="/admin/banners" className="flex items-center gap-2">
                <span>🖼️</span> <span>بنرها</span>
              </a>
            </li>
            <li>
              <a href="/admin/newsletter" className="flex items-center gap-2">
                <span>📬</span> <span>خبرنامه</span>
              </a>
            </li>
            <li>
              <a href="/admin/settings" className="flex items-center gap-2">
                <span>⚙️</span> <span>تنظیمات سایت</span>
              </a>
            </li>
            <li>
              <a href="/admin/profile" className="flex items-center gap-2">
                <span>👤</span> <span>پروفایل ادمین</span>
              </a>
            </li>
          </ul>
        </div>

        {/* نوتیفیکیشن */}
        <NotificationBell />

        {/* خروج */}
        <button title="خروج">
          <LogOut size={20} className="text-red-500 hover:text-red-600" />
        </button>
      </div>
    </div>
  );
};

export default AdminBottomNav;
