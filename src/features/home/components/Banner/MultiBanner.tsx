import Image from "next/image";
import React from "react";

function MultiBanner({ banner }: { banner: string }) {
  return (
    <div className="rounded-2xl overflow-hidden select-none">
      <Image
        src={banner}
        alt=""
        width={720}
        height={256}
        className="rounded-2xl w-full h-auto object-cover"
      />
    </div>
  );
}

export default MultiBanner;
