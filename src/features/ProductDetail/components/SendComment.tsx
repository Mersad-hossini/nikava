import { Star } from "lucide-react";
import React, { useState } from "react";

function SendComment() {
  const [rating, setRating] = useState(0);

  return (
    <form className="mt-6 space-y-3">
      <h2 className="text-lg font-semibold text-gray-800">دیدگاه خود را بنویسید</h2>
      <div className="flex gap-1 text-yellow-500 cursor-pointer">
      <label className="block font-medium text-sm text-gray-700">
        امتیاز شما:
      </label>
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 transition ${
              rating >= star ? "fill-yellow-400" : "fill-gray-300"
            }`}
            onClick={() => setRating(star)}
          />
        ))}
      </div>

      <textarea
        rows={5}
        className="w-full border resize-none border-gray-200 rounded-2xl p-3 text-sm bg-gray-100 outline-0"
        placeholder="نظر خود را بنویسید..."
      ></textarea>

      <button
        type="submit"
        className="bg-black text-white px-4 py-2 rounded-lg hover:bg-zinc-800 transition text-sm cursor-pointer"
      >
        ارسال نظر
      </button>
    </form>
  );
}

export default SendComment;
