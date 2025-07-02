import Link from "next/link";

function CheckoutFailure() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-red-50 px-4 py-10">
      <div className="bg-white border border-red-200 rounded-2xl shadow p-6 w-full max-w-md text-center space-y-4">
        <h2 className="text-2xl font-bold text-red-700">❌ پرداخت ناموفق</h2>
        <p className="text-gray-700">پرداخت شما انجام نشد یا لغو گردید.</p>
        <p className="text-sm text-gray-500">
          در صورت کسر وجه، مبلغ طی ۲۴ ساعت آینده بازگردانده خواهد شد.
        </p>

        <div className="flex flex-col gap-3 mt-4">
          <Link
            href="/checkout/cart"
            className="h-11 flex items-center justify-center w-full border border-red-500 text-red-600 rounded-xl hover:bg-red-50 transition"
          >
            بازگشت به سبد خرید
          </Link>

          <Link
            href="/checkout/info"
            className="h-11 flex items-center justify-center w-full bg-red-600 text-white rounded-xl hover:bg-red-700 transition"
          >
            تلاش مجدد برای پرداخت
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CheckoutFailure;
