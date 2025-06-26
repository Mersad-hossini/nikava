"use client";

import Lottie from "lottie-react";
import errorAnimation from "../../public/lottie/500.json";

export default function ErrorPage({}: { error: Error; reset: () => void }) {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-10 text-center bg-white"
      dir="rtl"
    >
      <div className="w-full max-w-md sm:max-w-lg ">
        <Lottie animationData={errorAnimation} loop className="w-full h-full" />
      </div>

      <h1 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-2">
        خطای داخلی سرور
      </h1>
      <p className="text-sm md:text-base text-zinc-500 mb-6">
        متأسفیم! مشکلی در پردازش درخواست شما به وجود آمده است.
      </p>
    </div>
  );
}
