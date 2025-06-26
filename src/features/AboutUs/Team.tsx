import Image from "next/image";
import React from "react";

function Team({
  name,
  role,
  img,
}: {
  name: string;
  role: string;
  img: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center bg-white shadow-md rounded-xl p-6 w-64 transition hover:shadow-lg">
      <div className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-1 rounded-full">
        <div className="w-28 h-28 relative rounded-full overflow-hidden bg-white">
          <Image
            src={img}
            fill
            alt={name}
            className="object-cover rounded-full"
          />
        </div>
      </div>
      <span className="text-lg font-semibold text-gray-800 mt-4">{name}</span>
      <span className="text-sm text-zinc-500">{role}</span>
    </div>
  );
}

export default Team;