import React from "react";
import AuthTemplate from "./components/AuthTemplate";
import Link from "next/link";

function Auth() {
  return (
    <>
      <AuthTemplate>
        <form>
          <div className="mb-6">
            <input
              type="tel"
              className="w-full text-right px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-lg"
              placeholder="شماره موبایل خود را وارد کنید"
            />
          </div>

          <Link
            href="/auth/verify-code"
            className="inline-block text-center w-full py-3 bg-yellow-500 cursor-pointer text-white font-semibold rounded-lg hover:bg-yellow-600 transition duration-300 text-lg"
          >
            ادامه
          </Link>

          <div className="text-center mt-6 text-sm text-gray-600">
            <span>ورود | ثبت نام شما به معنای پذیرش </span>
            <Link href="#" className="text-blue-600 hover:underline">
              قوانین و مقررات
            </Link>
            <span> نیکاوا است.</span>
          </div>
        </form>
      </AuthTemplate>
    </>
  );
}

export default Auth;