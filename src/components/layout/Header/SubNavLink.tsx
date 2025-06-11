import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

import { NavLinkProps } from "@/types/types";


function SubNavLink({ icon: Icon, title }:NavLinkProps) {
  return (
    <Link
      href="#"
      className="flex justify-between items-center w-full pr-2 py-2 hover:bg-gray-100 border-b rounded-md border-gray-100"
    >
      <div className="flex items-center gap-x-2">
        <div className="flex items-center justify-center size-8 rounded-full shadow-lg">
          <Icon className="size-5 text-gray-800" />
        </div>
        <span className="text-md">{title}</span>
      </div>
      <ChevronLeft className="size-5 ml-2 text-gray-400" />
    </Link>
  );
}

export default SubNavLink;
