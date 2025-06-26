import { Settings } from "lucide-react";
import React from "react";

function AboutIcons({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center justify-between bg-white shadow-md rounded-2xl px-6 py-6 w-44 h-42 transition hover:shadow-lg hover:scale-105 duration-300">
      <div className="bg-gradient-to-tr from-blue-500 to-purple-600 p-4 rounded-full shadow-sm">
        <Settings className="text-white w-10 h-10" />
      </div>
      <span className="text-base font-medium text-gray-700 text-center leading-relaxed">
        {title}
      </span>
    </div>
  );
}

export default AboutIcons;