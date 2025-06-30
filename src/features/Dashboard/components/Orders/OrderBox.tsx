import React from "react";

function OrderBox({ title, content }: { title: string; content: string | number }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-3 text-center">
      <div className="text-xs text-zinc-500 mb-1">{title}</div>
      <div className="font-semibold text-zinc-900">{content}</div>
    </div>
  );
}

export default OrderBox;
