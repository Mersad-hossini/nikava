import {
  LayoutDashboard,
  PackageSearch,
  ShoppingCart,
  Tag,
  Users,
  MessageCircle,
  FileText,
  Megaphone,
  Settings,
  Bell,
  Headphones,
  NotebookPenIcon,
  ListTree,
  Indent,
} from "lucide-react";

const SidebarLinks = [
  {
    title: "مدیریت فروش",
    items: [
      { href: "/cp", label: "داشبورد", icon: <LayoutDashboard size={18} /> },
      {
        href: "/cp/products",
        label: "محصولات",
        icon: <PackageSearch size={18} />,
      },
      {
        href: "/cp/orders",
        label: "سفارش‌ها",
        icon: <ShoppingCart size={18} />,
      },
      { href: "/cp/discounts", label: "کد تخفیف", icon: <Tag size={18} /> },
    ],
  },
  {
    title: "کاربران و پشتیبانی",
    items: [
      { href: "/cp/users", label: "کاربران", icon: <Users size={18} /> },
      {
        href: "/cp/comments",
        label: "نظرات کاربران",
        icon: <MessageCircle size={18} />,
      },
      {
        href: "/cp/chat",
        label: "چت آنلاین",
        icon: <Headphones size={18} />,
      },
      {
        href: "/cp/tickets",
        label: "تیکت‌ها",
        icon: <FileText size={18} />,
      },
    ],
  },
  {
    title: "مدیریت ساختار فروشگاه",
    items: [
      {
        href: "/cp/categories",
        label: "دسته‌بندی‌ها",
        icon: <ListTree size={18} />, 
      },
      {
        href: "/cp/subcategories",
        label: "زیر‌دسته‌بندی‌ها",
        icon: <Indent size={18} />, 
      },
    ],
  },
  {
    title: "محتوا و تنظیمات",
    items: [
      { href: "/cp/blog", label: "وبلاگ", icon: <FileText size={18} /> },
      { href: "/cp/banners", label: "بنرها", icon: <Megaphone size={18} /> },
      {
        href: "/cp/khabar",
        label: "خبرنامه‌ها",
        icon: <NotebookPenIcon size={18} />,
      },
      {
        href: "/cp/admin",
        label: "پروفایل ادمین",
        icon: <Settings size={18} />,
      },
      {
        href: "/cp/notifications",
        label: "نوتیفیکیشن‌ها",
        icon: <Bell size={18} />,
      },
    ],
  },
];
export default SidebarLinks;