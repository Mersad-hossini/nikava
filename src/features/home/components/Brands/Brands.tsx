"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

import { ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import TitleSection from "@/components/ui/TitleSection";

// Api
const brandList = [
  { id: 1, name: "Brand1", image: "/images/brand1.png", href: "#" },
  { id: 2, name: "Brand2", image: "/images/brand2.png", href: "#" },
  { id: 3, name: "Brand3", image: "/images/brand3.png", href: "#" },
  { id: 4, name: "Brand4", image: "/images/brand4.png", href: "#" },
  { id: 5, name: "Brand5", image: "/images/brand1.png", href: "#" },
  { id: 6, name: "Brand6", image: "/images/brand2.png", href: "#" },
  { id: 7, name: "Brand7", image: "/images/brand3.png", href: "#" },
  { id: 8, name: "Brand8", image: "/images/brand4.png", href: "#" },
  { id: 9, name: "Brand9", image: "/images/brand2.png", href: "#" },
];

export default function BrandCarousel() {
  return (
    <div className="m-5 sm:px-15">
      <div className="relative w-full overflow-hidden">
        <div className="px-5 sm:px-15 mt-10 text-center">
          <TitleSection title="محبوب‌ترین برندها" />
        </div>
        {/* Navigation Buttons */}
        <button className="swiper-button-next-brand absolute top-2/3 -translate-y-1/2 right-2 z-10 bg-white shadow-md rounded-full p-2 cursor-pointer">
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
        <button className="swiper-button-prev-brand absolute top-2/3 -translate-y-1/2 left-2 z-10 bg-white shadow-md rounded-full p-2 cursor-pointer">
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>

        <Swiper
          dir="ltr"
          spaceBetween={20}
          loop={true}
          slidesPerView={8}
          grabCursor={true}
          autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            320: { slidesPerView: 2 },
            380: { slidesPerView: 2 },
            400: { slidesPerView: 3 },
            500: { slidesPerView: 3 },
            560: { slidesPerView: 4 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            992: { slidesPerView: 6 },
            1200: { slidesPerView: 8 },
          }}
          navigation={{
            nextEl: ".swiper-button-next-brand",
            prevEl: ".swiper-button-prev-brand",
          }}
          modules={[Autoplay, Navigation]}
          className="w-full"
        >
          {brandList.map((brand) => (
            <SwiperSlide
              key={brand.id}
              className="flex justify-center py-3 select-none"
            >
              <Link href="#">
                <div className="size-20 lg:size-25 rounded-full overflow-hidden shadow transition-transform hover:scale-105 mx-auto">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    width={112}
                    height={112}
                    className="w-full h-full object-none"
                  />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}