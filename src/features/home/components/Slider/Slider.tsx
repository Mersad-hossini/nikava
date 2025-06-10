"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Modules
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Slider() {
  return (
    <div className="relative w-full overflow-hidden mt-5">
      <button className="swiper-button-next-slider absolute top-1/2 cursor-pointer -translate-y-1/2 right-6 z-10 bg-white shadow-md rounded-full p-2">
        <ChevronRight className="w-5 h-5 text-gray-600" />
      </button>

      <button className="swiper-button-prev-slider absolute top-1/2 cursor-pointer -translate-y-1/2 left-6 z-10 bg-white shadow-md rounded-full p-2">
        <ChevronLeft className="w-5 h-5 text-gray-600" />
      </button>
      <Swiper
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        grabCursor={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next-slider",
          prevEl: ".swiper-button-prev-slider",
        }}
        className="w-full rounded-lg"
      >
        <SwiperSlide>
          <div className="h-60 md:h-70 flex items-center justify-center text-white text-xl font-bold rounded-lg">
            <Image
              src="/images/slider1.jpg"
              width={1000}
              height={1000}
              className="w-full object-cover h-70"
              priority
              alt="test"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-60 md:h-70 flex items-center justify-center text-white text-xl font-bold rounded-lg">
            <Image
              src="/images/slider2.webp"
              width={1000}
              height={1000}
              className="w-full object-cover h-70"
              priority
              alt="test"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
