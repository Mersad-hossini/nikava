import Image from "next/image";
import { Trash2 } from "lucide-react";
import ProductCartCount from "@/components/ui/ProductCartCount";

export default function CartItem() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4">
      {/* Product image and details */}
      <div className="relative flex items-center gap-4">
        <Image
          src="/images/AirBuds.webp"
          alt="AirBuds"
          width={720}
          height={640}
          className="w-28 h-28 rounded-xl object-cover"
        />

        {/* Discount percentage badge */}
        <span className="absolute top-1 right-1 rotate-45 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow">
          ٪46
        </span>

        <div className="space-y-2">
          <h3 className="font-semibold text-base sm:text-lg text-gray-800">
            هندزفری بلوتوثی مدل AirBuds Pro Max
          </h3>

          {/* Price details */}
          <div className="flex flex-col gap-1 text-sm sm:text-base">
            <span className="text-zinc-400 line-through">315,000 تومان</span>
            <span className="text-zinc-800 font-bold">170,000 تومان</span>
          </div>
        </div>
      </div>

      {/* Quantity controls and delete */}
      <div className="flex items-center justify-end sm:justify-start gap-2">
        <ProductCartCount />
        <button className="btn btn-sm btn-error btn-circle ml-2">
          <Trash2 className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  );
}