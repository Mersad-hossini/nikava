"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { ChevronLeft, RotateCcw } from "lucide-react";
import AuthTemplate from "./components/AuthTemplate";
import Timer from "./components/Timer";

function VerifyCode() {
  const [timer, setTimer] = useState(120); // Timer(2 min)
  const [isEditing] = useState(false);
  const [userPassword, setUserPassword] = useState(false);

  useEffect(() => {
    if (timer > 0 && !isEditing) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timer, isEditing]);

  const userPasswordHandler = () => {
    setUserPassword((prevState) => !prevState);
  };

  return (
    <>
      <AuthTemplate>
        <form>
          <div className="mb-6">
            {userPassword ? (
              <input
                type="tel"
                className="w-full text-right px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-lg"
                placeholder="رمز عبور را وارد کنید"
              />
            ) : (
              <input
                type="tel"
                className="w-full text-right px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-lg"
                placeholder="کد تایید را وارد کنید"
              />
            )}
          </div>

          <Link
            href="/"
            className="inline-block text-center w-full py-3 bg-yellow-500 cursor-pointer text-white font-semibold rounded-lg hover:bg-yellow-600 transition duration-300 text-lg"
          >
            ادامه
          </Link>

          {/* تایمر */}
          {!userPassword ? (
            <>
              {timer === 0 ? (
                <div className="text-end mt-4">
                  <Link
                    href="/auth/verify-code"
                    className="text-xs flex items-center justify-end gap-x-1 hover:underline"
                  >
                    دریافت مجدد کد
                    <RotateCcw className="size-3 text-blue-600" />
                  </Link>
                </div>
              ) : (
                <Timer timer={timer} />
              )}
            </>
          ) : null}

          <div className="flex justify-center text-center mt-4">
            {userPassword ? (
              <Link
                href="/auth/verify-code"
                onClick={userPasswordHandler}
                className="flex cursor-pointer"
              >
                ورود با رمز یک بار مصرف
                <ChevronLeft />
              </Link>
            ) : (
              <Link
                href="/auth/verify-code"
                onClick={userPasswordHandler}
                className="flex cursor-pointer"
              >
                ورود با رمز عبور
                <ChevronLeft />
              </Link>
            )}
          </div>

          <div className="text-center mt-6 text-sm text-gray-600">
            <span>ورود | ثبت نام شما به معنای پذیرش </span>
            <Link href="/about-us#rules" className="text-blue-600 hover:underline">
              قوانین و مقررات
            </Link>
            <span> نیکاوا است.</span>
          </div>
        </form>
      </AuthTemplate>
    </>
  );
}

export default VerifyCode;
