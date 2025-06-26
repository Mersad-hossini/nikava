import Link from "next/link";

export function CheckoutSuccess() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-green-50 px-4 py-10">
      <div className="bg-white border border-green-200 rounded-2xl shadow p-6 w-full max-w-lg text-center space-y-4">
        <h2 className="text-2xl font-bold text-green-700">🎉 پرداخت موفق</h2>
        <p className="text-gray-700">سفارش شما با موفقیت ثبت شد.</p>
        <p className="text-sm text-gray-500">
          شماره سفارش: <span className="font-semibold">XPJ-9123</span>
        </p>
        <p className="text-sm text-gray-600">
          لینک پیگیری برای شما پیامک خواهد شد.
        </p>

        <Link
          href="/"
          className="flex items-center justify-center h-11 w-full text-white bg-teal-600 rounded-xl hover:bg-teal-700 transition"
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </div>
  );
}

export default CheckoutSuccess;