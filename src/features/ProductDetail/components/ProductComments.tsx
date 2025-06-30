import { Star } from "lucide-react";
import Image from "next/image";

const comments = [
  {
    id: 1,
    name: "زهرا",
    date: "۱۴۰۳/۰۴/۰۶",
    rating: 4,
    text: " فوق‌العاده‌ای بود! بسته‌بندی هم عالی بود.",
    reply: "خیلی خوشحالیم که رضایت داشتید! 🙏 ممنون از بازخورد خوبتون.",
  },
  {
    id: 2,
    name: "محمد",
    date: "۱۴۰۳/۰۴/۰۵",
    rating: 5,
    text: "عطر و طعم بسیار خوبی داشت. حتما دوباره خرید می‌کنم.",
    reply: null,
  },
];

export default function ProductComments() {
  return (
    <div className="mt-6 space-y-6">
      <h2 className="text-lg font-semibold text-gray-800">نظرات کاربران</h2>

      {comments.map((comment) => (
        <div
          key={comment.id}
          className="rounded-xl border border-gray-200 p-4 space-y-2 shadow-sm bg-white"
        >
          {/* هدر: نام کاربر و تاریخ */}
          <div className="flex items-center justify-between text-sm text-zinc-500">
            <div className="flex items-center gap-2">
              <Image
                src="/images/mersad.jpg"
                width={48}
                height={48}
                alt="user avatar"
                className="size-8 rounded-full"
              />
              <span className="font-semibold text-zinc-800">
                {comment.name}
              </span>

              <span>{comment.date}</span>
            </div>
            {/* نمره با ستاره */}
            <div className="flex gap-1 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < comment.rating ? "fill-yellow-400" : "fill-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* متن نظر */}
          <p className="text-sm text-gray-700 leading-6">{comment.text}</p>

          {/* پاسخ ادمین اگر وجود داشت */}
          {comment.reply && (
            <div className="mt-3 border-r-4 border-green-500 bg-green-50 p-3 rounded-lg text-sm text-gray-800">
              <span className="block font-semibold mb-1 text-green-700">
                پاسخ ادمین:
              </span>
              <p>{comment.reply}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
