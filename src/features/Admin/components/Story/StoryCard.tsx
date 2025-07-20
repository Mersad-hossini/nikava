"use client";

import { MoreVertical } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { StoryCardProps } from "../types/Table.type";



export default function StoryCard({ story, onEdit, onDelete }: StoryCardProps) {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // بسته شدن منو با کلیک بیرون
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200">
      <div className="relative w-full h-40">
        <Image
          src={story.cover}
          alt={story.title}
          fill
          className="object-cover rounded-t-xl"
        />
      </div>

      <div className="p-2 text-sm font-semibold">{story.title}</div>

      <div className="absolute top-2 left-2" ref={menuRef}>
        <button
          className="btn btn-xs btn-circle"
          onClick={() => setOpenMenu((prev) => !prev)}
        >
          <MoreVertical className="size-4" />
        </button>

        {openMenu && (
          <ul className="absolute mt-2 left-0 bg-white border border-gray-300 shadow rounded-lg w-36 text-sm z-50">
            <li>
              <button
                onClick={() => {
                  onEdit();
                  setOpenMenu(false);
                }}
                className="block w-full text-right cursor-pointer px-4 py-2 hover:bg-gray-100 rounded-lg"
              >
                ✏️ ویرایش
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  onDelete();
                  setOpenMenu(false);
                }}
                className="block w-full text-right cursor-pointer px-4 py-2 text-red-600 hover:bg-gray-100 rounded-lg"
              >
                🗑️ حذف
              </button>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
