import React from "react";

function TitleSection({ title }: { title: string }) {
  return (
    <div className="px-5 sm:px-15 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 border-b-2 border-blue-600 inline-block pb-1 mb-6">
        {title}
      </h2>
    </div>
  );
}

export default TitleSection;