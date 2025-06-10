// Swiprt Imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";

import StoryCard from "./StoryCard";
import { ChevronRight, ChevronLeft } from "lucide-react";

import { StoryCarouselProps } from "../../types/Types";

export default function StoryCarousel({
  stories,
  onStoryClick,
}: StoryCarouselProps) {    
  return (
    <div className="relative w-full overflow-hidden px-8 flex">
      <button className="swiper-button-next-story absolute top-1/2 cursor-pointer -translate-y-1/2 right-6 z-10 bg-white shadow-md rounded-full p-2">
        <ChevronRight className="w-5 h-5 text-gray-600" />
      </button>

      <button className="swiper-button-prev-story absolute top-1/2 cursor-pointer -translate-y-1/2 left-6 z-10 bg-white shadow-md rounded-full p-2">
        <ChevronLeft className="w-5 h-5 text-gray-600" />
      </button>

      <Swiper
        dir="rtl"
        spaceBetween={20}
        loop={true}
        freeMode={true}
        grabCursor={true}
        navigation={{
          nextEl: ".swiper-button-next-story",
          prevEl: ".swiper-button-prev-story",
        }}
        modules={[Autoplay, FreeMode, Navigation]}
        breakpoints={{
          320: { slidesPerView: 1.5 },
          400: { slidesPerView: 2.5 },
          560: { slidesPerView: 3.5 },
          640: { slidesPerView: 4.5 },
          768: { slidesPerView: 5.5 },
          992: { slidesPerView: 6.5 },
          1200: { slidesPerView: 8 },
        }}
        className="w-full flex"
      >
        {stories.map((story) => (
          <SwiperSlide key={story.id} className="flex story-slider">
            <StoryCard story={story} onClick={() => onStoryClick(story)} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
