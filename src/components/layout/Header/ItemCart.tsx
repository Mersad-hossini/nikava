import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

function ItemCart() {
  const [count, setCount] = useState<number>(1);
  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-x-4 items-center sm:items-start p-4 border-b border-zinc-100">
      {/* تصویر محصول */}
      <div className="w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0 mb-3 sm:mb-0">
        <Image
          src="/images/coffeeimage.jpg"
          alt="قهوه فوری"
          width={500}
          height={500}
          priority
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* اطلاعات محصول */}
      <div className="flex flex-col items-center justify-between flex-grow gap-y-2">
        {/* عنوان محصول */}
        <h4 className="text-zinc-800 text-base sm:text-lg font-semibold line-clamp-2">
          قهوه فوری
        </h4>

        {/* شمارنده تعداد */}
        <div className="flex items-center justify-start gap-x-3 mb-2">
          <button
            className="bg-orange-100 p-1 rounded-full cursor-pointer"
            onClick={() => setCount((prevCount) => prevCount + 1)}
          >
            <Plus className="text-orange-500 size-5" />
          </button>
          <span className="text-orange-500 font-medium text-lg">{count}</span>
          <button
            className="bg-orange-100 p-1 rounded-full cursor-pointer"
            onClick={decreaseCount}
          >
            <Minus className="text-orange-500 size-5" />
          </button>
        </div>

        {/* قیمت و تخفیف */}
        <div className="flex flex-col items-center gap-y-1">
          <span className="text-teal-600 text-sm font-medium">
            145,000 تومان تخفیف
          </span>
          <span className="text-zinc-800 text-lg font-bold">170,000 تومان</span>
        </div>
      </div>
      <button className="text-red-500 hover:text-red-700 cursor-pointer">
        <Trash2 className="w-5 h-5 mt-3 lg:mt-0" />
      </button>
    </div>
  );
}

export default ItemCart;
