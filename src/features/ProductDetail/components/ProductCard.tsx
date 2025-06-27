import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";

import { ChevronRight, ChevronLeft } from "lucide-react";
import ProductCard from "@/components/ui/ProductCard/ProductCard";

export default function ProductCarousel() {
  return (
    <div className="relative mt-5">
      <div className="flex flex-wrap gap-y-2 items-center justify-between mb-6">
        <h2 className="text-sm sm:text-lg font-semibold text-zinc-800">
          محصولات مشابه
        </h2>
      </div>

      <button className="swiper-button-next-story absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 z-10 bg-white shadow-md rounded-full p-2 hover:bg-zinc-100 transition cursor-pointer">
        <ChevronRight className="w-5 h-5 text-gray-600" />
      </button>

      <button className="swiper-button-prev-story absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 z-10 bg-white shadow-md rounded-full p-2 hover:bg-zinc-100 transition cursor-pointer">
        <ChevronLeft className="w-5 h-5 text-gray-600" />
      </button>

      <Swiper
        dir="ltr"
        spaceBetween={20}
        loop={true}
        freeMode={true}
        grabCursor={true}
        navigation={{
          nextEl: ".swiper-button-next-story",
          prevEl: ".swiper-button-prev-story",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, FreeMode, Navigation]}
        breakpoints={{
          320: { slidesPerView: 1 },
          480: { slidesPerView: 2 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
      >
        {[...Array(6)].map((_, index) => (
          <SwiperSlide key={index}>
            <ProductCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}