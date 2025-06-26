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
import ProductItem from "./components/ProductItem/ProductItem";

const storiesApi = [
  {
    id: 1,
    cover: "/images/reza.jpg",
    slides: [
      {
        id: 11,
        image: "/images/reza.jpg",
        text: "متن توضیحابت برای اسلایدر اولی متن توضیحابت برای اسلایدر اولی  ",
      },
      { id: 12, image: "/images/mersad.jpg", text: "اسلاید دوم" },
    ],
    title: "استوری شماره ۱",
  },
  {
    id: 2,
    cover: "/images/storyCover1.jpg",
    slides: [{ id: 21, image: "/images/blog1.webp", text: "استوری دوم" }],
    title: "استوری شماره ۲",
  },
  {
    id: 3,
    cover: "/images/storyCover2.jpg",
    slides: [{ id: 22, image: "/images/blog1.webp", text: "استوری دوم" }],
    title: "استوری شماره ۲",
  },
  {
    id: 4,
    cover: "/images/storyCover1.jpg",
    slides: [{ id: 23, image: "/images/blog1.webp", text: "استوری دوم" }],
    title: "استوری شماره ۲",
  },
  {
    id: 5,
    cover: "/images/storyCover2.jpg",
    slides: [{ id: 24, image: "/images/blog1.webp", text: "استوری دوم" }],
    title: "استوری شماره ۲",
  },
  {
    id: 6,
    cover: "/images/storyCover1.jpg",
    slides: [{ id: 25, image: "/images/blog1.webp", text: "استوری دوم" }],
    title: "استوری شماره ۲",
  },
  {
    id: 7,
    cover: "/images/storyCover2.jpg",
    slides: [{ id: 26, image: "/images/blog1.webp", text: "استوری دوم" }],
    title: "استوری شماره ۲",
  },
  {
    id: 8,
    cover: "/images/storyCover1.jpg",
    slides: [{ id: 27, image: "/images/blog1.webp", text: "استوری دوم" }],
    title: "استوری شماره ۲",
  },
  {
    id: 9,
    cover: "/images/storyCover2.jpg",
    slides: [{ id: 28, image: "/images/blog1.webp", text: "استوری دوم" }],
    title: "استوری شماره ۲",
  },
]; // Api

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

      <ProductItem />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 px-5 sm:px-15 mb-10">
        <MultiBanner />
        <MultiBanner />
        <MultiBanner />
        <MultiBanner />
      </div>
      <ProductItem />
      <SingleBanner />
      <ProductItem />
      <Brands />
      <Blog />
    </div>
  );
}

export default Home;
