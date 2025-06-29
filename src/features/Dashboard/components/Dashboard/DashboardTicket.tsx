import { CheckCircle } from "lucide-react";
import React from "react";

function DashboardTicket() {
  return (
    <div className="border border-zinc-300 rounded-xl p-4 bg-zinc-300 shadow flex flex-col gap-4">
      <div className="font-medium">متن تیکت</div>
      <div className="flex justify-between items-center text-sm">
        <div className="flex gap-2">
          <span>دپارتمان:</span>
          <span>دیپارتمان تیکت</span>
        </div>
        <span className="flex items-center gap-1 bg-green-600 text-white text-xs px-3 py-1 rounded-full">
          <CheckCircle size={14} />
          فعال
        </span>
      </div>
    </div>
  );
}

export default DashboardTicket;
