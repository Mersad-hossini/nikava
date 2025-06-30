import NotificationBell from "@/components/ui/NotificationBell/NotificationBell";
import { Settings } from "lucide-react";
import Link from "next/link";

export default function Topbar() {
  return (
    <header className="mx-4 mt-4 mb-6 bg-zinc-100 rounded-xl shadow-md border border-zinc-100 pr-12 xs:px-12 py-4 flex items-center justify-between">
      <div className="font-semibold text-base">
        خوش آمدید، <span className="text-blue-600">مرصاد محمد حسینی</span>
      </div>

      <div className="hidden xs:flex items-center gap-4">
        <NotificationBell />

        <Link href="/dashboard/profile">
          <Settings size={22} className="cursor-pointer" />
        </Link>
      </div>
    </header>
  );
}
