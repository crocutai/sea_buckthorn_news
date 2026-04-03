"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface ImageSliderProps {
  imageSet?: "set1" | "set2";
}

const imagesSet1 = [
  "/sea_buckthorn_health1.webp",
  "/sea_buckthorn_health2.webp",
  "/sea_buckthorn_health3.webp",
];

const imagesSet2 = [
  "/sea_buckthorn_health4.webp",
  "/sea_buckthorn_health5.jpg",
  "/sea_buckthorn_health6.jpg",
];

export default function ImageSlider({ imageSet = "set1" }: ImageSliderProps) {
  const images = imageSet === "set2" ? imagesSet2 : imagesSet1;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative h-[400px] w-full rounded-lg overflow-hidden bg-white dark:bg-[#3D2418]">
        <Image
          src={images[currentIndex]}
          alt={`沙棘圖片 ${currentIndex + 1}`}
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#FF8C00]/80 text-white flex items-center justify-center hover:bg-[#FF8C00] transition-colors"
        aria-label="上一張"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#FF8C00]/80 text-white flex items-center justify-center hover:bg-[#FF8C00] transition-colors"
        aria-label="下一張"
      >
        →
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex
                ? "bg-[#FF8C00] dark:bg-[#FFA500]"
                : "bg-[#FFD4A3] dark:bg-[#5C3D2E]"
            }`}
            aria-label={`跳到圖片 ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
