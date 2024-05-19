"use client"
import React from "react";
import {
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const images = [
  { src: "./images/atrium.jpg", alt: "University Campus" },
  { src: "./images/maroon-bg.png", alt: "University Campus" },
  { src: "/images/UP-logo.png", alt: "University Campus" },
];

const MainCarousel: React.FC = () => {
  return (
    <Carousel
      className="rounded-xl overflow-hidden"
      plugins={[Autoplay({ delay: 2000})]}
      opts={{ loop: true }}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <img
              alt={image.alt}
              className="w-full h-full object-cover"
              height="500"
              src={image.src}
              style={{
                aspectRatio: "800/500",
                objectFit: "cover",
              }}
              width="800"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default MainCarousel;
