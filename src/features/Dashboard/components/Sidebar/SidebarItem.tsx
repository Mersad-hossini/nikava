import { Heart, Package, Settings, Ticket, User } from "lucide-react";
import Link from "next/link";
import React from "react";

const navItems = [
  { href: "/dashboard", label: "داشبورد", icon: <User size={18} /> },
  { href: "/dashboard/orders", label: "سفارش‌ها", icon: <Package size={18} /> },
  {
    href: "/dashboard/wishlist",
    label: "علاقه‌مندی",
    icon: <Heart size={18} />,
  },
  {
    href: "/dashboard/profile",
    label: "اطلاعات حساب",
    icon: <Settings size={18} />,
  },
  {
    href: "/dashboard/tickets",
    label: "تیکت ها",
    icon: <Ticket size={18} />,
  },
];

type SidebarItemProps = {
  pathname: string;
  setIsOpen: (open: boolean) => void;
};

function SidebarItem({ pathname, setIsOpen }: SidebarItemProps) {
  return (
    <div className="flex-1 overflow-y-auto">
      <ul className="menu space-y-2 w-full">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <li key={item.href} className="hover:text-white">
              <Link
                href={item.href}
                className={`group flex items-center gap-2 px-3 py-3 rounded-md transition-all duration-200 ease-in-out ${
                  isActive ? "bg-zinc-700 text-white" : "hover:bg-zinc-700"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {React.cloneElement(item.icon, {
                  className:
                    "group-hover:text-white transition-colors",
                })}
                <span className="text-sm">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SidebarItem;
