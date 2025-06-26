import Image from "next/image";
import React from "react";

function AuthTemplate({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gray-50">
      {/* Background Image */}
      <Image
        src="/images/auth-background.png"
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        style={{
          filter: "brightness(70%) drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))",
        }}
      />

      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96 relative z-10">
        {/* Nikava Logo */}
        <Image
          src="/images/nikava-logo.png"
          width={300}
          height={300}
          priority
          alt="logo"
          className="w-40 mb-6 h-auto object-cover mx-auto"
        />

        {/* signIn/Login Title */}
        <div className="flex items-center justify-center gap-x-3 mb-6">
          <span className="text-xl font-semibold text-center text-yellow-900">
            ورود
          </span>
          <div className="border-l border-gray-300 h-8"></div>
          <span className="text-xl font-semibold text-center text-yellow-900">
            ثبت‌نام
          </span>
        </div>
        {/* signIn/Login Form */}
        {children}
      </div>
    </div>
  );
}

export default AuthTemplate;
