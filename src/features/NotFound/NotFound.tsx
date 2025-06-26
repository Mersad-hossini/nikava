"use client";

import Lottie from "lottie-react";
import animationData from "../../../public/lottie/404.json";
import Link from "next/link";

function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-10 text-center"
      dir="rtl"
    >
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mb-6">
        <Lottie
          animationData={animationData}
          loop={true}
          className="w-full h-full"
        />
      </div>

      <h1 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-3">
        صفحه پیدا نشد!
      </h1>
      <p className="text-sm md:text-base text-zinc-500 mb-6">
        آدرسی که وارد کردید وجود ندارد یا ممکن است جابجا شده باشد.
      </p>

      <Link href="/" className="inline-block">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition cursor-pointer">
          بازگشت به خانه
        </button>
      </Link>
    </div>
  );
}
export default NotFound;
