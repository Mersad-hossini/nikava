import Image from "next/image";
import React from "react";

function AuthTemplate({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gray-50">
      {/* تصویر پس‌زمینه */}
      <Image
        src="/images/auth-background.png"
        alt="Background"
        layout="fill"
        objectFit="cover" // برای تنظیم اندازه و پر کردن پس‌زمینه
        quality={100} // تنظیم کیفیت تصویر
        priority
        style={{
          filter: "brightness(70%) drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))", // سایه به تصویر
        }}
      />

      {/* فرم ورود و ثبت‌نام */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96 relative z-10">
        {/* لوگو */}
        <Image
          src="/images/nikava-logo.png"
          width={300}
          height={300}
          priority
          alt="logo"
          className="w-40 mb-6 h-auto object-cover mx-auto"
        />

        {/* عنوان صفحه ورود و ثبت‌نام */}
        <div className="flex items-center justify-center gap-x-3 mb-6">
          <span className="text-xl font-semibold text-center text-yellow-900">
            ورود
          </span>
          <div className="border-l border-gray-300 h-8"></div>
          <span className="text-xl font-semibold text-center text-yellow-900">
            ثبت‌نام
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}

export default AuthTemplate;
