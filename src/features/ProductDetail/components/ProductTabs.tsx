"use client";

import { useState } from "react";
import { MessageCircle, Info } from "lucide-react";
import ProductComments from "./ProductComments";
import ProductInfos from "./ProductInfos";
import SendComment from "./SendComment";

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="mt-10 border-t border-gray-200">
      {/* Tab Header */}
      <div className="flex justify-center border-b border-gray-200">
        <button
          onClick={() => setActiveTab("description")}
          className={`flex items-center gap-2 px-6 py-3 text-sm cursor-pointer font-medium transition-all duration-300 ease-in-out hover:text-black hover:border-black border-b-2 ${
            activeTab === "description"
              ? "text-black border-black"
              : "text-gray-400 border-transparent"
          }`}
        >
          <Info className="w-4 h-4" /> توضیحات
        </button>

        <button
          onClick={() => setActiveTab("reviews")}
          className={`flex items-center gap-2 px-6 py-3 text-sm cursor-pointer font-medium transition-all duration-300 ease-in-out hover:text-black hover:border-black border-b-2 ${
            activeTab === "reviews"
              ? "text-black border-black"
              : "text-gray-400 border-transparent"
          }`}
        >
          <MessageCircle className="w-4 h-4" /> نظرات کاربران (7)
        </button>
      </div>

      {/* Tab Content */}
      <div className="py-6">
        {activeTab === "description" ? (
          <ProductInfos />
        ) : (
          <div className="grid grid-cols-1 mid-md:grid-cols-2 gap-4 space-y-4 text-sm">
            <ProductComments />
            <SendComment />
          </div>
        )}
      </div>
    </div>
  );
}
