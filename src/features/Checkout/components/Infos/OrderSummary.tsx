import Image from "next/image";

export default function OrderSummary() {
  return (
    <div className="border-t pt-6 space-y-4">
      <h3 className="text-lg font-semibold text-gray-700">سفارش شما</h3>

      <div className="flex items-center gap-4">
        <Image
          src="/images/AirBuds.webp"
          alt="airbuds"
          width={720}
          height={640}
          className="w-24 h-24 rounded-xl object-cover"
        />

        <div className="flex flex-col gap-1">
          <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
            هندزفری بلوتوثی مدل AirBuds Pro Max
          </h4>
          <span className="text-xs text-gray-400 line-through">
            315,000 تومان
          </span>
          <span className="text-sm text-teal-600">145,000 تومان تخفیف</span>
          <span className="font-bold text-sm sm:text-base text-zinc-800">
            170,000 تومان × 1
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 text-lg font-semibold">
        <span className="text-zinc-700">مبلغ قابل پرداخت</span>
        <span className="text-zinc-800">170,000 تومان</span>
      </div>
    </div>
  );
}