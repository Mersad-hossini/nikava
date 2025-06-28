import Link from "next/link";
import React from "react";

type FooterLink = string | { title: string; href: string };

function FooterSection({
  title,
  links,
}: {
  title: string;
  links: FooterLink[];
}) {
  return (
    <div>
      <span className="text-lg font-bold">{title}</span>
      <ul className="flex flex-col gap-3 mt-3">
        {links.map((link, idx) => (
          <li key={idx}>
            <Link
              href={typeof link === "string" ? "#" : link.href}
              className="text-sm text-zinc-500 hover:text-zinc-600 hover:font-bold transition"
            >
              {typeof link === "string" ? link : link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterSection;