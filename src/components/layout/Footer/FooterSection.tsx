import Link from "next/link";
import React from "react";

function FooterSection({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <span className="text-lg font-bold">{title}</span>
      <ul className="flex flex-col gap-3 mt-3">
        {links.map((link, idx) => (
          <li key={idx}>
            <Link href="#" className="text-sm text-zinc-500">
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterSection;
