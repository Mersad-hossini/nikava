import Link from "next/link";

import React from "react";
import SidebarLinks from "./SidebarLinks";

type SidebarItemProps = {
  pathname: string;
  setIsOpen: (open: boolean) => void;
};

function AdminSidebarItem({ pathname, setIsOpen }: SidebarItemProps) {
  return (
    <div className="flex-1 overflow-y-auto text-sm">
      <ul className="menu w-full space-y-2">
        {SidebarLinks.map((section, idx) => (
          <div key={idx} className="space-y-1">
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
                    className={`group w-full hover:bg-zinc-200 flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200 ease-in-out ${
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
          </div>
        ))}
      </ul>
    </div>
  );
}

export default AdminSidebarItem;
