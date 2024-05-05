"use client";
import {
  Carousel,
  CarouselIndicator,
  CarouselMainContainer,
  CarouselNext,
  CarouselPrevious,
  CarouselThumbsContainer,
  SliderMainItem,
} from "@/components/ui/carousel2";
import { cards } from "./image-banner";

const Banner = () => {
  return (
    <Carousel>
      <CarouselNext />
      <CarouselPrevious />
      <div className="relative ">
        <CarouselMainContainer className="h-[700px]">
          {cards?.map((card, index) => (
            <SliderMainItem key={index} className="bg-transparent">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="h-[700px] w-full rounded-lg object-cover"
              />
            </SliderMainItem>
          ))}
        </CarouselMainContainer>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
          <CarouselThumbsContainer className="gap-x-1">
            {Array.from({ length: 4 }).map((_, index) => (
              <CarouselIndicator key={index} index={index} />
            ))}
          </CarouselThumbsContainer>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
