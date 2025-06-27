import { HeartOff } from "lucide-react";
import React from "react";

function EmptyMessage({title, txt}: {title:string, txt:string}) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center text-zinc-500">
      <HeartOff className="w-16 h-16 mb-4 text-red-400" />

      <h2 className="text-lg font-semibold text-zinc-700">{title}</h2>

      <p className="text-sm text-zinc-500 mt-2 mb-4">{txt}</p>
    </div>
  );
}

export default EmptyMessage;
