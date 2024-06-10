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

type PropType = {
  slides: [];
  options?: EmblaOptionsType;
  isLoading: boolean;
  isError: boolean;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options, slides, isLoading, isError } = props;

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [ClassNames()]);

  const { selectedIndex } = useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading sliders</div>;
  }

  return (
    <div className="embla py-16">
      <div className="flex justify-between">
        <div className="flex">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
        <div className="flex items-center text-muted-foreground font-bold tracking-normal text-xl">
          {selectedIndex + 1} / {slides?.length}
        </div>
      </div>
      <div className="embla__viewport " ref={emblaRef}>
        <div className="embla__container z-[-1] relative">
          {slides?.map((item: string, index: React.Key) => (
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
    </div>
  );
};

export default EmblaCarousel;
