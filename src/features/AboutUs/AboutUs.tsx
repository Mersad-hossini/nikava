import React from "react";
import AboutIcons from "./AboutIcons";
import TitleSection from "@/components/ui/TitleSection";
import Team from "./Team";
import AboutDitails from "./AboutDitails";

const aboutDetailsData = [
  {
    title: "حریم خصوصی",
    text: "نیکاوا متعهد به حفظ و حراست از اطلاعات شخصی کاربران خود است. اطلاعاتی که در هنگام ثبت‌نام، ثبت سفارش یا ارتباط با پشتیبانی ارائه می‌کنید صرفاً جهت بهبود تجربه کاربری و ارائه خدمات بهتر استفاده می‌شود. این اطلاعات هرگز بدون رضایت شما در اختیار شخص یا سازمان ثالث قرار نخواهد گرفت، مگر در مواردی که به حکم قانون الزام‌آور باشد.",
    id: "privacy",
  },
  {
    title: "رویه‌های بازگرداندن کالا",
    text: "در صورت مغایرت کالای دریافتی با سفارش ثبت‌شده یا وجود ایراد فنی، مشتریان می‌توانند حداکثر تا ۷ روز پس از دریافت کالا، درخواست بازگشت آن را ثبت کنند. بازگرداندن کالا تنها در صورت حفظ سلامت فیزیکی و بسته‌بندی اولیه مورد پذیرش قرار می‌گیرد. هزینه ارسال مجدد طبق شرایط بررسی خواهد شد.",
    id: "returning-goods",
  },
  {
    title: "نحوه ثبت سفارش",
    text: "برای ثبت سفارش در نیکاوا، کافی است محصول مورد نظر را به سبد خرید اضافه کرده و اطلاعات تماس و نشانی خود را وارد نمایید. پس از تأیید نهایی، سفارش شما به صورت سیستمی ثبت شده و از طریق پیامک و پنل کاربری قابل پیگیری خواهد بود.",
    id: "order-registration",
  },
  {
    title: "رویه ارسال سفارش",
    text: "نیکاوا سفارشات را از طریق پست، تیپاکس یا پیک ویژه در بازه‌های زمانی مشخص ارسال می‌کند. زمان تحویل بسته به شهر مقصد متفاوت است و اطلاعات مربوط به ارسال، در پنل کاربری شما قابل مشاهده خواهد بود. در صورت تأخیر، تیم پشتیبانی در سریع‌ترین زمان ممکن موضوع را پیگیری خواهد کرد.",
    id: "sending-product",
  },
  {
    title: "شیوه‌های پرداخت",
    text: "برای راحتی شما، امکان پرداخت به صورت آنلاین از طریق درگاه‌های بانکی، کارت به کارت، و پرداخت در محل (در شهرهای مشخص) فراهم شده است. تمامی تراکنش‌ها با پروتکل‌های امن انجام می‌شود و اطلاعات بانکی شما به هیچ عنوان در سرورهای نیکاوا ذخیره نخواهد شد.",
    id: "payment",
  },
];

const aboutIconsData = [
  "پشتیبانی اختصاصی",
  "ارسال سریع",
  "ضمانت بازگشت",
  "پرداخت امن",
];

const teamData = [
  { name: "مرصاد محمد حسینی", role: "مدیر", img: "/images/mersad.jpg" },
  { name: "محمد علی منصوری", role: "مدیر", img: "/images/reza.jpg" },
];

function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-10 space-y-14">
      {/* About us text */}
      <section>
        <AboutDitails
          title="درباره ما"
          text="
          نیکاوا با هدف ارائه تجربه‌ای متفاوت از خرید آنلاین ایجاد شده است. ما
          با تمرکز بر تنوع محصولات، شفافیت قیمت‌ها و پشتیبانی مستمر تلاش می‌کنیم
          تا رضایت کامل مشتریان را جلب نماییم. تعهد ما به کیفیت خدمات، نوآوری و
          احترام به حقوق مصرف‌کننده، اساس فعالیت‌های ماست.
        "
          id="/about-us"
        />
      </section>

      {/* About supports */}
      <section>
        <TitleSection title="ویژگی ما" />
        <div className="flex flex-wrap gap-y-8 gap-x-12 items-center justify-center mt-8">
          {aboutIconsData.map((title, idx) => (
            <AboutIcons key={idx} title={title} />
          ))}
        </div>
      </section>

      {/* About our team */}
      <section id="team">
        <TitleSection title="تیم ما" />
        <div className="flex flex-wrap items-center gap-x-16 gap-y-10 justify-center mt-8">
          {teamData.map((member, idx) => (
            <Team key={idx} {...member} />
          ))}
        </div>
      </section>

      {/* About details sections */}
      <section className="space-y-10">
        {aboutDetailsData.map((item, index) => (
          <AboutDitails
            key={index}
            id={item.id}
            title={item.title}
            text={item.text}
          />
        ))}
      </section>
    </div>
  );
}

export default AboutUs;
