import Image from "next/image";
import React from "react";
import FooterSection from "./FooterSection";
import Accordion from "./Accordion";
import Link from "next/link";
import GoToTop from "@/components/ui/GoToTop";

// Footer icons Text
const footerIcons = [
  { title: "سوالات متداول", img: "/images/question.png", href: "/questions" },
  { title: "ارتباط با ما", img: "/images/chat.png", href: "/contact-us" },
  {
    title: "روش ارسال",
    img: "/images/cash-on-delivery.png",
    href: "/about-us#sending-product",
  },
  {
    title: "حریم شخصی",
    img: "/images/insurance.png",
    href: "/about-us#privacy",
  },
];

// Social Icons
const socialIcons = [
  {
    img: "/images/telegram.png",
    href: "https://web.telegram.org/a/",
    alt: "telegram",
  },
  {
    img: "/images/instagram.png",
    href: "https://www.instagram.com/",
    alt: "instagram",
  },
  {
    img: "/images/whatsapp.png",
    href: "https://web.whatsapp.com/",
    alt: "whatsApp",
  },
];

// Footer Links
const aboutLinks = [
  { title: "درباره نیکاوا", href: "/about-us" },
  { title: "مدیریت نیکاوا", href: "/about-us#team" },
  { title: "ارتباط با نیکاوا", href: "/contact-us" },
  { title: "وبلاگ ها", href: "/blog" },
  { title: "علاقه مندی ها", href: "/wishlist" },
];
// Footer Links
const customerLinks = [
  { title: "پاسخ به پرسش‌های متداول", href: "/questions" },
  { title: "رویه‌های بازگرداندن کالا", href: "/about-us#returning-goods" },
  { title: "شیوه‌های پرداخت", href: "/about-us#payment" },
  { title: "نحوه ثبت سفارش", href: "/about-us#order-registration" },
  { title: "رویه ارسال سفارش", href: "/about-us#sending-product" },
];

const guideLinks = [
  "دیجیتال",
  "آلات موسیقی",
  "سوپر مارکت",
  "مد و پوشاک",
  "لپ تاپ",
];
function Footer() {
  return (
    <footer className="border-t border-zinc-200">
      <div className="px-5 pt-6">
        {/* Nikava Logo */}
        <div className="flex flex-wrap justify-between items-center md:items-start">
          <div className="flex flex-col items-center">
            <Link href="/">
              <Image
                src="/images/nikava-logo.png"
                width={120}
                height={120}
                alt="لوگوی نیکاوا"
                priority
                className="h-auto"
              />
            </Link>
            <div className="mt-5">
              <span className="text-sm text-zinc-500">شماره تماس: </span>
              <span className="text-md text-zinc-500">09217045099</span>
            </div>
            <div className="mt-3">
              <span className="text-sm text-zinc-500">شماره پیگیری: </span>
              <span className="text-md text-zinc-500">555-110</span>
            </div>
            <div className="mt-3">
              <span className="text-sm text-zinc-500">ایمیل: </span>
              <span className="text-md text-zinc-500">nikava@gmail.com</span>
            </div>
          </div>
          <GoToTop />
        </div>

        {/* Footer socials Icon */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-5 my-6">
          {footerIcons.map((item, index) => (
            <div key={index} className="flex flex-col items-center py-3">
              <Link href={item.href} className="flex flex-col items-center">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={128}
                  height={128}
                  className="size-14"
                />
                <span className="text-sm text-zinc-500 mt-2">{item.title}</span>
              </Link>
            </div>
          ))}
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center xs:justify-items-normal text-center md:text-right">
          <FooterSection title="با نیکاوا" links={aboutLinks} />
          <FooterSection title="خدمات مشتریان" links={customerLinks} />
          <FooterSection title="دسته بندی ها" links={guideLinks} />

          {/* Social & Email */}
          <div>
            <span className="text-lg font-bold">همراه ما باشید!</span>
            <div className="flex gap-x-6 mt-5 justify-center md:justify-start">
              {socialIcons.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={item.img}
                    alt={item.alt}
                    width={40}
                    height={40}
                    className="cursor-pointer"
                  />
                </Link>
              ))}
            </div>
            <span className="text-md font-bold block my-8 text-center">
              با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید
            </span>
            <form className="flex flex-wrap justify-center gap-2">
              <input
                type="text"
                placeholder="ایمیل شما"
                className="rounded-lg flex-1 h-10 bg-zinc-100 lg:px-4 outline-0"
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
