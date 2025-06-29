import { Bell, Settings } from "lucide-react";

export default function Topbar() {
  return (
    <header className="mx-4 mt-4 mb-6 bg-zinc-200 rounded-xl shadow-md border border-zinc-200 pr-12 xs:px-12 py-4 flex items-center justify-between">
      <div className="font-semibold text-base">
        خوش آمدید، <span className="text-blue-600">مرصاد محمد حسینی</span>
      </div>

      <div className="hidden xs:flex items-center gap-4">
        <button className="relative">
          <Bell size={20} className="cursor-pointer" />
          <span className="absolute -top-1 -right-1 bg-green-500 text-xs w-3 h-3 rounded-full flex items-center justify-center">
            3
          </span>
        </button>
        <Settings size={20} className="cursor-pointer" />
      </div>
    </header>
  );
}