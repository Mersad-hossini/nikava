import Image from "next/image";
import React from "react";
import { StoryCardProps } from "../../types/Types";

function StoryCard({ story, onClick }: StoryCardProps) {
  return (
    <div
      onClick={onClick}
      className="size-20 lg:size-25 rounded-full p-[2.5px] mt-4 mb-10 bg-gradient-to-tr from-[#e03d96] to-[#7d4c9e] cursor-pointer select-none"
    >
      <div className="flex flex-col items-center">
        <div className="bg-white rounded-full p-[3px] w-full h-full">
          <Image
            src={story.cover}
            alt={story.title}
            width={1000}
            height={1000}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <span className="text-xs mt-2 text-zinc-500">{story.title}</span>
      </div>
    </div>
  );
}

export default StoryCard;