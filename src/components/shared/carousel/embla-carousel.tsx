"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./embla-carousel-arrow-buttons";
import { useDotButton } from "./embla-carousel-dot-button";
import { BlurImage } from "@/components/custom/blur-image";

type PropType = {
  slides: string[];
  options?: EmblaOptionsType;
  isLoading: boolean;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options, slides, isLoading } = props;

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [ClassNames()]);

  const { selectedIndex } = useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

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
        <div className="embla__container relative">
          {slides?.map((item: string, index: React.Key) => (
            <div className="embla__slide" key={index}>
              <BlurImage
                className="embla__slide__img !h-[30rem] md:!h-[40rem]  2xl:!h-[50rem]"
                src={item}
                alt={item + index}
                isLoading={isLoading}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
