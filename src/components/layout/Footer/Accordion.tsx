"use client";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";

function Accordion() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mt-10">
      <hr className="text-zinc-200" />
      <div className="mt-8">
        <div
          className={`relative overflow-hidden px-4 py-2 transition-all duration-500 ${
            expanded ? "max-h-[600px]" : "h-40"
          }`}
        >
          <div className="space-y-2 text-sm text-zinc-600 leading-relaxed">
            <div>
              <span className="text-lg font-bold block mb-4">
                نیکاوا: بزرگترین فروشگاه اینترنتی ایران
              </span>
              <p className="text-sm text-zinc-600 leading-relaxed">
                نیکاوا با هدف ارائه تجربه‌ای متمایز از خرید آنلاین، فعالیت خود
                را آغاز کرده است. ما با تمرکز بر تنوع محصولات، قیمت‌گذاری شفاف،
                ارسال سریع، و پشتیبانی دائمی، سعی داریم خرید اینترنتی را برای
                کاربران به تجربه‌ای لذت‌بخش و قابل اعتماد تبدیل کنیم. تیم نیکاوا
                همواره تلاش می‌کند تا با تحلیل نیازهای مشتریان، خدماتی نوآورانه
                و متناسب با سلیقه‌ی کاربران ارائه دهد.
              </p>
            </div>

            <div className="mt-6">
              <span className="text-lg font-bold block mb-4">
                چرا نیکاوا را انتخاب کنیم؟
              </span>
              <p className="text-sm text-zinc-600 leading-relaxed">
                نیکاوا تنها یک فروشگاه اینترنتی نیست؛ بلکه همراهی مطمئن در تمام
                مراحل خرید شماست. از بررسی تخصصی کالاها، مقایسه‌ی هوشمندانه
                قیمت‌ها، تا ارسال به‌موقع و پشتیبانی پس از خرید، همه در نیکاوا
                طراحی شده‌اند تا اعتماد شما را جلب کنیم. ما با همکاری با برندهای
                معتبر داخلی و بین‌المللی، اصالت کالا و کیفیت خدمات را تضمین
                می‌کنیم. اگر به دنبال تجربه‌ای سریع، ساده و رضایت‌بخش از خرید
                آنلاین هستید، نیکاوا انتخاب شماست.
              </p>
            </div>
          </div>

          {!expanded && (
            <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent" />
          )}
        </div>

        <div className="flex text-blue-400 mt-4 px-4">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-sm  font-medium hover:underline cursor-pointer"
          >
            {expanded ? "بستن" : "نمایش بیشتر"}
          </button>
          <ChevronLeft />
        </div>
      </div>
    </div>
  );
}

export default Accordion;