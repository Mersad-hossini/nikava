import Image from "next/image";
import Link from "next/link";

export default function PaymentSection() {
  return (
    <>
      <Link
        className="flex items-center justify-center h-11 w-full text-white bg-teal-600 rounded-xl cursor-pointer transition hover:bg-teal-700"
        href="/checkout-success" //checkout-success, checkout-failed
      >
        تایید و تکمیل سفارش
      </Link>

      <div className="flex justify-center mt-4">
        <div className="border-2 border-yellow-500 rounded-lg shadow">
          <Image
            src="/svg/img-zarinpallogo.svg"
            alt="زرین‌پال درگاه پرداخت"
            width={150}
            height={40}
            className="opacity-80 size-16"
          />
        </div>
      </div>
    </>
  );
}