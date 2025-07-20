"use client";

import { useState } from "react";
import StoryModal from "../components/Story/StoryModal";
import StoryCard from "../components/Story/StoryCard";
import { Plus } from "lucide-react";

const stories = [
  { id: 1, title: "معرفی محصول جدید", cover: "/images/blog1.webp" },
  { id: 2, title: "تخفیف تابستانی", cover: "/images/blog1.webp" },
  { id: 3, title: "معرفی محصول جدید", cover: "/images/blog1.webp" },
  { id: 4, title: "تخفیف تابستانی", cover: "/images/blog1.webp" },
];

type StoryType = { id: number; title: string; cover: string };

export default function Story() {
  const [modalStory, setModalStory] = useState<StoryType | "new" | null>(null);

  return (
    <div className="bg-white rounded-xl border border-zinc-100 shadow-md p-4">
      <h1 className="text-xl font-bold mb-6">📸 مدیریت استوری‌ها</h1>

      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mid-md:grid-cols-4 gap-4">
        {/* مربع افزودن استوری */}
        <div
          onClick={() => setModalStory("new")}
          className="h-50 w-full bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center cursor-pointer hover:opacity-90 transition"
        >
          <Plus className="text-white size-10 font-bold" />
        </div>

        {/* کارت‌های استوری */}
        {stories.map((story) => (
          <StoryCard
            key={story.id}
            story={story}
            onEdit={() => setModalStory(story)}
            onDelete={() => console.log("حذف", story.id)}
          />
        ))}
      </div>

      {/* مودال افزودن یا ویرایش */}
      {modalStory && (
        <StoryModal
          story={modalStory === "new" ? null : modalStory}
          onClose={() => setModalStory(null)}
        />
      )}
    </div>
  );
}
