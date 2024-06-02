"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { useDotButton } from "./EmblaCarouselDotButton";
import { Dot } from "lucide-react";

type PropType = {
  slides: string[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [ClassNames()]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="embla pt-16">
      <div className="flex justify-end">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
      <div className="embla__viewport " ref={emblaRef}>
        <div className="embla__container z-[-1] relative">
          {slides?.map((item, index) => (
            <div className="embla__slide embla__class-names" key={index}>
              <img
                className="embla__slide__img"
                src={item}
                alt={item + index}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="flex flex-wrap">
          {scrollSnaps?.map((_, index) => (
            <Dot
              key={index}
              className={`${
                index === selectedIndex && "text-red-500 font-black"
              } cursor-pointer w-10 h-10`}
              onClick={() => onDotButtonClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
