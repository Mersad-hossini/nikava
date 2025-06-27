"use client";

import { Search } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";

const SearchInput = () => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const suggestions = [
    "آیفون ۱۳",
    "اپل واچ سری ۹",
    "قاب شفاف مگ‌سیف",
    "ایرپاد پرو نسل ۲",
  ];

  return (
    <div className="relative w-full lg:w-144" ref={wrapperRef}>
      <form
        className="bg-zinc-100 w-full rounded-sm flex items-center"
        onClick={() => setIsOpen(true)}
      >
        <input
          type="text"
          placeholder="جستجو"
          className="outline-0 w-full pr-12 py-2 bg-transparent"
          onFocus={() => setIsOpen(true)}
        />
        <div className="absolute flex items-center h-full cursor-pointer right-0.5 pr-2">
          <Search className="text-zinc-400 size-5" />
          <div className="h-8 border-l border-gray-300 mr-2" />
        </div>
      </form>

      {isOpen && (
        <div className="absolute top-full mt-1 w-full bg-white shadow-lg rounded-sm z-50 border border-gray-200">
          <ul className="text-sm text-gray-700 divide-y divide-gray-100">
            {suggestions.map((item, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-right"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchInput;
