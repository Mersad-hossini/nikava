"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CopyLinkButton from "@/components/ui/CopyLinkButton";

const SocialShare = () => {
  const [pageUrl, setPageUrl] = useState("");

  useEffect(() => {
    setPageUrl(window.location.href);
  }, []);

  const socialIcons = useMemo(
    () => [
      {
        img: "/images/telegram.png",
        href: `https://t.me/share/url?url=${encodeURIComponent(pageUrl)}`,
        alt: "telegram",
      },
      {
        img: "/images/whatsapp.png",
        href: `https://wa.me/?text=${encodeURIComponent(pageUrl)}`,
        alt: "whatsapp",
      },
    ],
    [pageUrl]
  );

  return (
    <div className="flex items-center gap-3">
      <span className="font-semibold text-gray-800">اشتراک‌گذاری:</span>
      {socialIcons.map((item, i) => (
        <Link
          key={i}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={item.img}
            alt={item.alt}
            width={40}
            height={40}
            className="hover:opacity-80 size-5 transition-opacity duration-200 cursor-pointer"
          />
        </Link>
      ))}
      <CopyLinkButton />
    </div>
  );
};

export default SocialShare;
