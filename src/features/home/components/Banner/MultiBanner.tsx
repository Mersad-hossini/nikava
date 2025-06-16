import Image from "next/image";
import Link from "next/link";
import React from "react";

function MultiBanner() {
  return (
    <div className="rounded-2xl overflow-hidden select-none">
      <Link href="#">
        <Image
          src={"/images/multiBanner.webp"}
          alt=""
          width={720}
          height={256}
          className="rounded-2xl w-full h-auto object-cover"
        />
      </Link>
    </div>
  );
}

export default MultiBanner;
