import React from "react";

const faqData = [
  {
    question: "چگونه می‌توانم در نیکاوا ثبت‌نام کنم؟",
    answer:
      "برای ثبت‌نام، روی دکمه «ورود / ثبت‌نام» در بالای صفحه کلیک کرده و فرم مربوطه را تکمیل کنید.",
  },
  {
    question: "رمز عبورم را فراموش کرده‌ام. چه‌کار کنم؟",
    answer:
      "در صفحه ورود، روی گزینه «فراموشی رمز عبور» کلیک کنید و مراحل بازیابی را از طریق ایمیل دنبال کنید.",
  },
  {
    question: "چطور می‌توانم سفارش خود را پیگیری کنم؟",
    answer:
      "پس از ورود به حساب کاربری، از بخش «سفارش‌های من» می‌توانید وضعیت سفارش‌های خود را مشاهده کنید.",
  },
  {
    question: "مدت زمان ارسال سفارش چقدر است؟",
    answer:
      "ارسال سفارش‌ها بسته به موقعیت جغرافیایی معمولاً بین ۲ تا ۵ روز کاری زمان می‌برد.",
  },
  {
    question: "آیا امکان بازگرداندن کالا وجود دارد؟",
    answer:
      "بله، تا ۷ روز پس از دریافت کالا، در صورت وجود مغایرت یا ایراد، می‌توانید درخواست بازگشت ثبت کنید.",
  },
  {
    question: "چه روش‌هایی برای پرداخت وجود دارد؟",
    answer:
      "پرداخت از طریق درگاه اینترنتی، کارت به کارت و در برخی شهرها پرداخت در محل امکان‌پذیر است.",
  },
];

function Questions() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-6">
      {faqData.map((item, index) => (
        <div
          key={index}
          dir="rtl"
          className="collapse collapse-arrow bg-white border border-gray-200 rounded-xl shadow-sm transition hover:shadow-md"
        >
          <input
            type="checkbox"
            name="faq" 
          />
          <div className="collapse-title text-base md:text-lg font-semibold text-gray-800">
            {item.question}
          </div>
          <div className="collapse-content text-sm text-gray-600 leading-relaxed pr-1">
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Questions;