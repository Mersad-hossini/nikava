import { Clock } from "lucide-react";

export function ProductTimerBadge({ discount, time }: { discount: number; time: string }) {
  return (
    <div className="absolute top-3 right-3 flex flex-col items-end gap-1 z-10">
      <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full shadow-sm">
        ٪{discount} تخفیف
      </span>
      <div className="bg-black text-white text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1">
        <Clock className="w-3 h-3" />
        <span>{time}</span>
      </div>
    </div>
  );
}
