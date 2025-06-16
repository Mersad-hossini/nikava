import Image from "next/image";
import React from "react";
import { Archive, Instagram } from "lucide-react";
import FooterSection from "./FooterSection";
import Accordion from "./Accordion";

const footerIcons = ["متن مرتبط", "متن مرتبط", "متن مرتبط", "متن مرتبط"];

const aboutLinks = [
  "اتاق خبر نیکاوا",
  "فروش در نیکاوا",
  "فرصت‌های شغلی",
  "گزارش تخلف در نیکاوا",
  "تماس با نیکاوا",
  "درباره نیکاوا",
];

const customerLinks = [
  "پاسخ به پرسش‌های متداول",
  "رویه‌های بازگرداندن کالا",
  "شرایط استفاده",
  "حریم خصوصی",
  "گزارش باگ",
];

const guideLinks = ["نحوه ثبت سفارش", "رویه ارسال سفارش", "شیوه‌های پرداخت"];

function Footer() {
  return (
    <footer className="border-t border-zinc-200">
      <div className="px-5 pt-6">
        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/images/nikava-logo.png"
            width={120}
            height={120}
            alt="لوگوی نیکاوا"
            priority
            className="h-auto"
          />
        </div>

        {/* Icons */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-5 my-6">
          {footerIcons.map((text, index) => (
            <div key={index} className="flex flex-col items-center py-3">
              <Archive className="size-12" />
              <span className="text-sm text-zinc-500 mt-2">{text}</span>
            </div>
          ))}
        </div>

        {/* Links */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center xs:justify-items-normal text-center md:text-right">
          <FooterSection title="با نیکاوا" links={aboutLinks} />
          <FooterSection title="خدمات مشتریان" links={customerLinks} />
          <FooterSection title="راهنمای خرید از نیکاوا" links={guideLinks} />

          {/* Social & Email */}
          <div>
            <span className="text-lg font-bold">همراه ما باشید!</span>
            <div className="flex gap-x-8 mt-5 justify-center md:justify-start">
              {[...Array(4)].map((_, i) => (
                <Instagram key={i} className="size-10 text-zinc-400" />
              ))}
            </div>
            <span className="text-md font-bold block my-8 text-center">
              با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید
            </span>
            <form className="flex flex-wrap justify-center gap-2">
              <input
                type="text"
                placeholder="ایمیل شما"
                className="rounded-lg flex-1 h-10 bg-zinc-100 px-5 outline-0"
              />
              <button className="btn py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition">
                ثبت
              </button>
            </form>
          </div>
        </div>


        <Accordion />

        {/* Copyright */}
        <div className="mt-8 mb-8 lg:mb-0">
          <hr className="text-zinc-200" />
          <p className="text-center text-sm text-zinc-400 py-8 leading-relaxed">
            برای استفاده از مطالب نیکاوا، داشتن «هدف غیرتجاری» و ذکر «منبع»
            کافیست. تمام حقوق این وب‌سایت برای شرکت نوآوران فن آوازه (فروشگاه
            آنلاین نیکاوا) محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
