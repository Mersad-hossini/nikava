import React from "react";
import Image from "next/image";

function TopBar() {
  return (
    <div className="select-none">
      <Image
        src="/images/topbar.gif"
        alt="Topbar"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
        priority
      />
    </div>
  );
}

export default TopBar;