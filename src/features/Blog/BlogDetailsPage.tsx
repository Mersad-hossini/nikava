import Image from "next/image";
import React from "react";

function BlogDetailsPage() {
  return (
    <div
      className="w-full px-3 sm:px-4 md:px-6 lg:px-12 xl:px-32 py-10 max-w-screen-xl mx-auto"
      dir="rtl"
    >
      {/* blog title */}
      <h1 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-4 leading-snug">
        طرز تهیه میلک‌شیک انبه؛ خوشمزه، خنک، حرفه‌ای!
      </h1>

      {/* blog image and writer infos */}
      <div className="mb-6">
        <Image
          src="/images/blog1.webp"
          alt="میلک‌شیک انبه"
          width={1000}
          height={500}
          className="w-full h-auto rounded-lg object-cover"
        />
        <div className="text-xs text-zinc-500 mt-2 flex flex-wrap items-center gap-2">
          <span>نویسنده: مرصاد محمدی</span>
          <span>•</span>
          <span>تاریخ انتشار: ۱۲ دی ۱۴۰۴</span>
        </div>
      </div>

      {/* blog text */}
      <div className="text-md leading-7 text-zinc-700 space-y-4 text-justify">
        <p>
          میلک‌شیک انبه یکی از خوشمزه‌ترین نوشیدنی‌های تابستانی است. طعم شیرین
          انبه در کنار خنکی شیر و بستنی، یک ترکیب دوست‌داشتنی برای روزهای گرم
          ایجاد می‌کند. این نوشیدنی با حداقل مواد، به راحتی در خانه قابل تهیه
          است و کودکان و بزرگ‌سالان به یک اندازه از آن لذت خواهند برد.
        </p>
        <p>
          برای تهیه میلک‌شیک، کافی است دو عدد انبه‌ی رسیده، یک لیوان شیر سرد، و
          چند اسکوپ بستنی وانیلی را در مخلوط‌کن بریزید. با افزودن کمی عسل یا
          شکر، می‌توانید میزان شیرینی آن را تنظیم کنید. ترکیب نهایی باید کاملاً
          یکدست و غلیظ باشد.
        </p>
        <p>
          اگر می‌خواهید نوشیدنی شما ظاهری مجلسی‌تر داشته باشد، می‌توانید آن را
          در لیوان بلند سرو کرده و با خامه، پودر پسته یا حتی چیپس شکلات تزئین
          کنید. همچنین می‌توانید چند تکه یخ به ترکیب اضافه کنید تا بافتی شبیه
          اسموتی پیدا کند.
        </p>
        <p>
          میلک‌شیک انبه، علاوه بر طعم فوق‌العاده، منبعی سرشار از ویتامین C، فیبر
          و آنتی‌اکسیدان‌هاست. این نوشیدنی انتخابی سالم و خوشمزه برای بعد از
          ورزش یا در میان‌وعده‌های تابستانی است. امتحانش کنید و لذت ببرید!
        </p>
      </div>
    </div>
  );
}

export default BlogDetailsPage;