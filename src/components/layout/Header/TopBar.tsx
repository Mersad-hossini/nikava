import React from "react";
import Image from "next/image";
import Link from "next/link";

function TopBar() {
  return (
    <div className="select-none">
      <Link href="/nikava-offers">
        <Image
          src="/images/topbar.gif"
          alt="Topbar"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
          priority
        />
      </Link>
    </div>
  );
}

export default TopBar;
