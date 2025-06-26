import TitleSection from "@/components/ui/TitleSection";
import React from "react";

function AboutDitails({
  title,
  text,
  id,
}: {
  title: string;
  text: string;
  id: string;
}) {
  return (
    <div
      className="bg-zinc-50 border-zinc-200 shadow-md rounded-3xl p-4 space-y-5 transition hover:shadow-lg duration-300"
      id={id}
    >
      <TitleSection title={title} />
      <p className="text-md text-zinc-600 leading-[2] tracking-wide text-justify">
        {text}
      </p>
    </div>
  );
}

export default AboutDitails;
