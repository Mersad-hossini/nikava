import Link from "next/link";
import {
  LayoutDashboard,
  PackageSearch,
  ShoppingCart,
  Users,

  Tag,
  Settings,
  Megaphone,
  MessageCircle,
  FileText,
  Bell,
} from "lucide-react";
import React from "react";

type SidebarItemProps = {
  pathname: string;
  setIsOpen: (open: boolean) => void;
};

const sections = [
  {
    title: "مدیریت فروش",
    items: [
      { href: "/admin", label: "داشبورد", icon: <LayoutDashboard size={18} /> },
      {
        href: "/admin/products",
        label: "محصولات",
        icon: <PackageSearch size={18} />,
      },
      {
        href: "/admin/orders",
        label: "سفارش‌ها",
        icon: <ShoppingCart size={18} />,
      },
      { href: "/admin/discounts", label: "کد تخفیف", icon: <Tag size={18} /> },
    ],
  },
  {
    title: "کاربران و پشتیبانی",
    items: [
      { href: "/admin/users", label: "کاربران", icon: <Users size={18} /> },
      {
        href: "/admin/comments",
        label: "نظرات کاربران",
        icon: <MessageCircle size={18} />,
      },
      {
        href: "/admin/tickets",
        label: "تیکت‌ها",
        icon: <FileText size={18} />,
      },
    ],
  },
  {
    title: "محتوا و تنظیمات",
    items: [
      { href: "/admin/blog", label: "وبلاگ", icon: <FileText size={18} /> },
      { href: "/admin/banners", label: "بنرها", icon: <Megaphone size={18} /> },
      {
        href: "/admin/settings",
        label: "تنظیمات سایت",
        icon: <Settings size={18} />,
      },
      {
        href: "/admin/notifications",
        label: "نوتیفیکیشن‌ها",
        icon: <Bell size={18} />,
      },
      // و موارد دیگر در صورت نیاز
    ],
  },
];

function AdminSidebarItem({ pathname, setIsOpen }: SidebarItemProps) {
  return (
    <div className="flex-1 overflow-y-auto text-sm">
      <ul className="menu w-full space-y-2">
        {sections.map((section, idx) => (
          <li key={idx} className="space-y-1">
            <div className="text-zinc-400 px-3 pt-4 text-xs">
              {section.title}
            </div>

            {section.items.map((item) => {
              const isActive = pathname === item.href;

              return (
                <div key={item.href} className="relative">
                  {isActive && (
                    <span className="absolute right-0 top-0 h-full w-1 bg-blue-600 rounded-tr-md rounded-br-md"></span>
                  )}

                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`group w-full flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200 ease-in-out ${
                      isActive
                        ? "bg-blue-100 text-blue-700 font-medium"
                        : "hover:bg-zinc-100 text-zinc-700"
                    }`}
                  >
                    {React.cloneElement(item.icon, {
                      className: `transition-colors ${
                        isActive ? "text-blue-600" : "group-hover:text-blue-600"
                      }`,
                    })}
                    <span>{item.label}</span>
                  </Link>
                </div>
              );
            })}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminSidebarItem;
