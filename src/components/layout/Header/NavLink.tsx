import React from "react";
import Link from "next/link";

import { NavLinkProps } from "@/types/types";

function NavLink({ icon: Icon, title }: NavLinkProps) {
  return (
    <div className="mx-4">
      <Link href="#" className="text-zinc-500 flex items-center">
        <Icon className="w-4 h-4 flex ml-1" />
        <span className="text-sm">{title}</span>
      </Link>
    </div>
  );
}

export default NavLink;