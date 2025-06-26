"use client";

import { ChevronUpCircle } from "lucide-react";
import React from "react";

function GoToTop() {
  const GoTopHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="flex items-center mt-2 cursor-pointer border border-gray-100 transition shadow rounded-lg px-5 py-2"
      onClick={GoTopHandler}
    >
      <span className="ml-1">برو بالا</span>
      <ChevronUpCircle />
    </div>
  );
}

export default GoToTop;
