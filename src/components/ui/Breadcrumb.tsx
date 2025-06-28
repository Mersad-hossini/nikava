"use client";

import Link from "next/link";

interface BreadcrumbItem {
  title: string;
  href?: string; 
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="w-full px-4 pt-4 pb-2 select-none my-3" aria-label="breadcrumb">
      <ol className="flex items-center text-sm text-zinc-400 space-x-2 rtl:space-x-reverse">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-zinc-500 hover:text-black transition-colors font-normal"
                >
                  {item.title}
                </Link>
              ) : (
                <span className="text-zinc-800 font-medium">{item.title}</span>
              )}
              {!isLast && <span className="mx-2 text-zinc-300 text-xs">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}