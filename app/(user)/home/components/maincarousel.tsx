import React from 'react';
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel";

const images = [
  { src: "./icons/atrium.jpg", alt: "University Campus" },
  { src: "", alt: "University Campus" },
  { src: "/placeholder.svg", alt: "University Campus" },
  { src: "/vercel.svg", alt: "University Campus" },
  { src: "/atrium.jpg", alt: "University Campus" }
];

const MainCarousel: React.FC = () => (
  <Carousel className="rounded-xl overflow-hidden">
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

export default MainCarousel;
