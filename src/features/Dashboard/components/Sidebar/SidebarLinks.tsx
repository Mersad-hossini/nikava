import { Heart, Package, Settings, Ticket, User } from "lucide-react";
import React from "react";

const SidebarLinks = [
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

export default SidebarLinks;