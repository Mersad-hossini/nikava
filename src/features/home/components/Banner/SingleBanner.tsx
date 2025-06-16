import Image from "next/image";
import Link from "next/link";
import React from "react";

function SingleBanner() {
  return (
    <div className="rounded-2xl px-5 mt-3 sm:px-15 select-none">
      <Link href="#">
        <Image
          src="/images/singleBanner.webp"
          alt=""
          className="rounded-2xl w-full h-auto object-cover"
          width={720}
          height={256}
        />
      </Link>
    </div>
  );
}

export default SingleBanner;
