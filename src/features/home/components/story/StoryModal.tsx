import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import { StoryModalProps } from "../../types/Types";

const StoryModal = ({ isOpen, story, onClose }: StoryModalProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setCurrentSlide(0);
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !story) return null;

  const slide = story.slides[currentSlide];

  const handleNext = () => {
    if (currentSlide < story.slides.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    } else {
      onClose();
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl w-full max-w-sm h-[90vh] relative shadow-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* دکمه بستن */}
        <button
          onClick={onClose}
          className="absolute top-5 left-2 z-10 text-white transition-colors font-bold cursor-pointer"
        >
          <X />
        </button>

        <div className="absolute top-0 left-0 right-0 flex gap-1 p-3 z-20">
          {story.slides.map((_, index) => (
            <div
              key={index}
              className={`h-1 flex-1 rounded-full
            ${index < currentSlide ? "bg-white" : ""}
            ${
              index === currentSlide
                ? "bg-white transition-all duration-300"
                : "bg-white/30"
            }
          `}
            />
          ))}
        </div>

        {/* تصویر اسلاید */}
        <div className="relative w-full h-full">
          <Image
            src={slide.image}
            alt={slide.text}
            sizes="(max-width: 768px) 100vw, 400px"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* متن اسلاید */}
        <div className="absolute bottom-0 left-0 w-full bg-black/40 text-white text-center py-2 text-sm">
          {slide.text}
        </div>

        {/* دکمه‌ها */}
        {currentSlide > 0 && (
          <button
            onClick={handlePrev}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 cursor-pointer"
          >
            <ChevronRight />
          </button>
        )}
        {currentSlide < story.slides.length - 1 && (
          <button
            onClick={handleNext}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 cursor-pointer"
          >
            <ChevronLeft />
          </button>
        )}
      </div>
    </div>
  );
};

export default StoryModal;
