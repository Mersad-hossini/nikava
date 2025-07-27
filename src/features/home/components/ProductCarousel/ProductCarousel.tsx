import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";

import { ChevronRight, ChevronLeft, Ellipsis } from "lucide-react";
import ProductCard from "@/components/ui/ProductCard/ProductCard";
import Link from "next/link";
import { ProductProps } from "@/types/types";

export default function ProductCarousel({
  products,
  title,
}: {
  products: ProductProps[];
  title: string;
}) {
  return (
    <section className="w-full bg-zinc-100 py-10 mb-10">
      <div className="relative mx-auto px-15">
        <div className="flex flex-wrap gap-y-2 items-center justify-between mb-6">
          <h2 className="text-sm sm:text-lg font-semibold text-zinc-800">
            {title}
          </h2>

          <Link
            href="/category/products"
            className="flex items-center gap-1 text-xs sm:text-sm  text-red-600"
          >
            مشاهده همه
            <Ellipsis className="size-4" />
          </Link>
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
          {products?.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard {...product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
