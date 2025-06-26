import Image from "next/image";
import React from "react";
import { StoryCardProps } from "../../types/Types";

function StoryCard({ story, onClick }: StoryCardProps) {
  return (
    <div
      onClick={onClick}
      className="size-20 lg:size-24 rounded-full mt-4 mb-10 cursor-pointer select-none"
    >
      <div className="flex flex-col items-center space-y-2">
        {/* Outer ring with gradient */}
        <div className="bg-gradient-to-tr from-[#e03d96] to-[#7d4c9e] p-[2.5px] rounded-full">
          {/* White border */}
          <div className="bg-white p-[3px] rounded-full">
            {/* Image wrapper to enforce square ratio */}
            <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden">
              <Image
                src={story.cover}
                alt={story.title}
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Story title */}
        <span className="text-xs text-zinc-500 text-center truncate max-w-[80px]">
          {story.title}
        </span>
      </div>
    </div>
  );
}

export default StoryCard;
