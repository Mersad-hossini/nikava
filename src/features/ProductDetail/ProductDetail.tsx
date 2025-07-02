"use client";

import { useState } from "react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { Star, Plus, Heart } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import ProductTabs from "./components/ProductTabs";
import ProductCarousel from "./components/ProductCard";
import SocialShare from "./components/socialIcons";

export default function ProductDetail() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const images = [
    "/images/AirBuds.webp",
    "/images/AirBuds2.webp",
    "/images/AirBuds.webp",
    "/images/AirBuds2.webp",
  ];

  return (
    <div className="container py-6 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left Section: Image Gallery */}
        <div className="md:w-1/3 space-y-4">
          <Swiper
            modules={[Thumbs]}
            thumbs={{ swiper: thumbsSwiper }}
            spaceBetween={10}
            className="rounded-xl border border-gray-100 shadow"
          >
            {images.map((src, i) => (
              <SwiperSlide key={i}>
                <Image
                  src={src}
                  alt={`main-${i}`}
                  width={600}
                  height={600}
                  className="w-full object-cover rounded-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            onSwiper={setThumbsSwiper}
            modules={[Thumbs]}
            spaceBetween={10}
            slidesPerView={4}
            watchSlidesProgress
            className="mt-2"
          >
            {images.map((src, i) => (
              <SwiperSlide key={i}>
                <Image
                  src={src}
                  alt={`thumb-${i}`}
                  width={100}
                  height={100}
                  className="rounded-lg cursor-pointer border border-gray-200 hover:border-gray-300 transition object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right Section: Product Info */}
        <div className="md:w-2/3 space-y-6">
          <Breadcrumb
            items={[
              { title: "خانه", href: "/" },
              { title: "فروشگاه", href: "/category/head-phone" },
              { title: "مک‌بوک ایر M3" },
            ]}
          />

          <h1 className="text-2xl font-semibold text-gray-800 leading-relaxed">
            مک‌بوک ایر M3
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-1 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400" />
            ))}
            <span className="text-sm text-gray-600 mr-2">(7 دیدگاه)</span>
          </div>

          {/* Price */}
          <div className="text-2xl font-bold text-green-600">۵۸۰,۰۰۰ تومان</div>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-7">
            این محصول با بهره‌گیری از فناوری حذف نویز فعال (ANC)، صدای محیط را
            به حداقل می‌رساند. باتری قدرتمند آن تا ساعت‌ها استفاده مداوم را
            تضمین می‌کند. همچنین، اتصال سریع و پایدار از طریق بلوتوث، استفاده از
            آن را بسیار ساده و لذت‌بخش کرده است.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="inline-flex cursor-pointer items-center gap-2 px-5 py-2.5 bg-black text-white rounded-xl hover:bg-zinc-800 transition text-sm">
              <Plus className="w-4 h-4" />
              افزودن به سبد خرید
            </button>
            <button className="inline-flex cursor-pointer items-center gap-2 px-4 py-2.5 text-sm border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-100 transition">
              <Heart className="w-4 h-4" />
              افزودن به علاقه‌مندی‌ها
            </button>
          </div>

          <hr className="border-gray-200" />

          {/* Additional Info */}
          <div className="flex flex-col gap-2 text-sm">
            <div className="flex gap-2">
              <span className="font-semibold text-gray-800">دسته‌بندی:</span>
              <span className="text-gray-600">
                جدیدترین محصولات، محصولات ویژه، همه موارد
              </span>
            </div>

            <div className="flex gap-2">
              <span className="font-semibold text-gray-800">برچسب‌ها:</span>
              <span className="text-gray-600">
                خرید , هدفون، فروش، فروش هدفون
              </span>
            </div>

            {/* Social Share */}
            <SocialShare />
          </div>
        </div>
      </div>
      <ProductTabs />
      <hr className="border-gray-200" />
      <ProductCarousel />
    </div>
  );
}
