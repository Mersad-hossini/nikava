import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";

import { ChevronRight, ChevronLeft } from "lucide-react";
import ProductCard from "@/components/ui/ProductCard/ProductCard";

const products = [
  {
    id: "1",
    title: " هارد مدل XM-22",
    price: 850000,
    discountedPrice: 690000,
    discountPercent: 19,
    rating: 4.3,
    image: "/images/product1.webp",
  },
  {
    id: "2",
    title: "لپ تاپ مدل FitPro T5",
    price: 1250000,
    discountedPrice: 980000,
    discountPercent: 22,
    rating: 4.1,
    image: "/images/product2.webp",
  },
  {
    id: "3",
    title: "ایفون مدل 16 Max Pro ",
    price: 190000,
    discountedPrice: 159000,
    discountPercent: 16,
    rating: 4.7,
    image: "/images/product3.webp",
  },
  {
    id: "4",
    title: "لباس شویی مدل LG",
    price: 460000,
    discountedPrice: 389000,
    discountPercent: 15,
    rating: 4.5,
    image: "/images/product4.webp",
  },
  {
    id: "5",
    title: "سرخ کن شیائومی",
    price: 24500000,
    discountedPrice: 21900000,
    discountPercent: 11,
    rating: 4.8,
    image: "/images/product5.webp",
  },
  {
    id: "6",
    title: "هدفون بلوتوثی مدل XM-22",
    price: 24500000,
    discountedPrice: 21900000,
    discountPercent: 11,
    rating: 4.8,
    image: "/images/AirBuds.webp",
  },
];

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
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}