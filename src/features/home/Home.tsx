"use client";

import React, { useState } from "react";
import StoryCarousel from "./components/story/StoryCarousel";
import Slider from "./components/Slider/Slider";
import StoryModal from "./components/story/StoryModal";
import { StoryType } from "./types/Types";
import HomeCategories from "./components/HomeCategories/HomeCategories";
import MultiBanner from "./components/Banner/MultiBanner";
import SingleBanner from "./components/Banner/SingleBanner";
import Brands from "./components/Brands/Brands";
import Blog from "./components/Blog/Blog";
import ProductCarousel from "./components/ProductCarousel/ProductCarousel";

const storiesApi = [
  {
    id: 1,
    cover: "/images/mersad.jpg",
    slides: [
      {
        id: 11,
        image: "/images/mersad.jpg",
        text: "متن توضیحابت برای اسلایدر اولی متن توضیحابت برای اسلایدر اولی  ",
      },
      { id: 12, image: "/images/reza.jpg", text: "اسلاید دوم" },
    ],
    title: "استوری شماره ۱",
  },
  {
    id: 2,
    cover: "/images/storyCover1.jpg",
    slides: [{ id: 21, image: "/images/story.jpg", text: "استوری دوم" }],
    title: "استوری شماره ۲",
  },
  {
    id: 3,
    cover: "/images/storyCover2.jpg",
    slides: [{ id: 22, image: "/images/story.jpg", text: "استوری دوم" }],
    title: "استوری شماره ۲",
  },
  {
    id: 4,
    cover: "/images/storyCover3.jpg",
    slides: [{ id: 23, image: "/images/story.jpg", text: "استوری دوم" }],
    title: "استوری شماره ۲",
  },
  {
    id: 5,
    cover: "/images/storyCover4.jpg",
    slides: [{ id: 24, image: "/images/story.jpg", text: "استوری دوم" }],
    title: "استوری شماره ۲",
  },
  {
    id: 6,
    cover: "/images/storyCover5.jpg",
    slides: [{ id: 25, image: "/images/story.jpg", text: "استوری دوم" }],
    title: "استوری شماره ۲",
  },
  {
    id: 7,
    cover: "/images/storyCover6.jpg",
    slides: [{ id: 26, image: "/images/story.jpg", text: "استوری دوم" }],
    title: "استوری شماره ۲",
  },
  {
    id: 8,
    cover: "/images/storyCover4.jpg",
    slides: [{ id: 27, image: "/images/story.jpg", text: "استوری دوم" }],
    title: "استوری شماره ۲",
  },
  {
    id: 9,
    cover: "/images/storyCover2.jpg",
    slides: [{ id: 28, image: "/images/story.jpg", text: "استوری دوم" }],
    title: "استوری شماره ۲",
  },
]; // Api

const products1 = [
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

const products2 = [
  {
    id: "1",
    title: "بخاری فرانسوی",
    price: 850000,
    discountedPrice: 690000,
    discountPercent: 19,
    rating: 4.3,
    image: "/images/product6.webp",
  },
  {
    id: "2",
    title: "قهوی ساز Samsung",
    price: 1250000,
    discountedPrice: 980000,
    discountPercent: 22,
    rating: 4.1,
    image: "/images/product7.webp",
  },
  {
    id: "3",
    title: "عیبی ندارد اگر حالت خوب نیست",
    price: 190000,
    discountedPrice: 159000,
    discountPercent: 16,
    rating: 4.7,
    image: "/images/product8.webp",
  },
  {
    id: "4",
    title: "تصمیم گرفتم بیخیال باشم",
    price: 460000,
    discountedPrice: 389000,
    discountPercent: 15,
    rating: 4.5,
    image: "/images/product9.webp",
  },
  {
    id: "5",
    title: "ساعت مچی رولکس",
    price: 24500000,
    discountedPrice: 21900000,
    discountPercent: 11,
    rating: 4.8,
    image: "/images/product10.webp",
  },
  {
    id: "6",
    title: "چراغ قوه قوی پروژکتوری حرفه",
    price: 24500000,
    discountedPrice: 21900000,
    discountPercent: 11,
    rating: 4.8,
    image: "/images/product16.webp",
  },
];

const products3 = [
  {
    id: "1",
    title: "پیراهن مشکی",
    price: 850000,
    discountedPrice: 690000,
    discountPercent: 19,
    rating: 4.3,
    image: "/images/product11.webp",
  },
  {
    id: "2",
    title: "اتو شیائومی",
    price: 1250000,
    discountedPrice: 980000,
    discountPercent: 22,
    rating: 4.1,
    image: "/images/product12.webp",
  },
  {
    id: "3",
    title: "کفش اسپورت زنانه",
    price: 190000,
    discountedPrice: 159000,
    discountPercent: 16,
    rating: 4.7,
    image: "/images/product13.webp",
  },
  {
    id: "4",
    title: "کفش اسپورت مردانه",
    price: 460000,
    discountedPrice: 389000,
    discountPercent: 15,
    rating: 4.5,
    image: "/images/product14.webp",
  },
  {
    id: "5",
    title: "صندلی کمپ",
    price: 24500000,
    discountedPrice: 21900000,
    discountPercent: 11,
    rating: 4.8,
    image: "/images/product15.webp",
  },
  {
    id: "6",
    title: "کوله پشتی کمپ",
    price: 24500000,
    discountedPrice: 21900000,
    discountPercent: 11,
    rating: 4.8,
    image: "/images/product17.webp",
  },
];

const banners = [
  "/images/banner3.webp",
  "/images/multiBanner.webp",
  "/images/banner4.webp",
  "/images/banner5.webp",
];

function Home() {
  const [activeStory, setActiveStory] = useState<StoryType | null>(null);
  const [stories] = useState(storiesApi); // const [stories, setStories] = useState(storiesApi);

  return (
    <div className=" mb-10">
      {stories.length > 0 && (
        <div className="flex justify-between">
          <StoryCarousel
            stories={stories}
            onStoryClick={(story) => setActiveStory(story)}
          />
        </div>
      )}

      {activeStory && (
        <StoryModal
          isOpen={true}
          story={activeStory}
          onClose={() => setActiveStory(null)}
        />
      )}

      <Slider />
      <HomeCategories />

      <ProductCarousel products={products1} title="پیشنهادهای شگفت‌انگیز" />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 px-5 sm:px-15 mb-10">
        {banners.map((banner, i) => (
          <MultiBanner key={i + 1} banner={banner} />
        ))}
      </div>
      <ProductCarousel products={products2} title="پرفروش ترین ها" />
      <SingleBanner />
      <ProductCarousel products={products3} title="محبوب‌ترین‌ها" />

      <Brands />
      <Blog />
    </div>
  );
}

export default Home;
