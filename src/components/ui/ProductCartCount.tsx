import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

function ProductCartCount() {
  const [count, setCount] = useState<number>(1);
  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <>
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
    </>
  );
}

export default ProductCartCount;