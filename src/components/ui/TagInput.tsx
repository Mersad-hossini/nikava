"use client";
import { useState } from "react";

export default function TagInput({ title }: { title: string }) {
  const [tags, setTags] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const MAX_TAGS = 5;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === "Enter" || e.key === " ") && input.trim()) {
      e.preventDefault();

      if (tags.length >= MAX_TAGS) return; 

      if (!tags.includes(input.trim())) {
        setTags([...tags, input.trim()]);
      }
      setInput("");
    }

    if (e.key === "Backspace" && !input && tags.length > 0) {
      setTags(tags.slice(0, -1));
    }
  };

  const removeTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  return (
    <div className="w-full">
      <label className="text-sm font-medium text-zinc-700 block mb-2">
        {title}
      </label>
      <div className="flex flex-wrap items-center gap-2 w-full border border-gray-200 rounded-xl p-3 text-sm bg-gray-100 outline-0">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="flex items-center gap-1 bg-emerald-100 text-emerald-800 text-sm px-3 py-1 rounded-full"
          >
            {tag}
            <button
              type="button"
              className="text-emerald-700 hover:text-red-500 text-xs cursor-pointer"
              onClick={() => removeTag(tag)}
            >
              ×
            </button>
          </span>
        ))}

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-grow min-w-[100px] border-none outline-none text-sm p-1"
          placeholder="تایپ کنید و Enter یا Space بزنید..."
        />
      </div>
    </div>
  );
}
