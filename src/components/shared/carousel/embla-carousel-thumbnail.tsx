import React, { useState, useEffect, useCallback } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
  indexOfData: number;
};

export const EmblaCarouselWithThumbnail: React.FC<PropType> = (props) => {
  const { slides, options, indexOfData } = props;
  const [selectedIndex, setSelectedIndex] = useState(indexOfData);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();

    emblaMainApi.on("select", onSelect).on("reInit", onSelect);

    // Scroll to the initial index
    emblaMainApi.scrollTo(indexOfData);
  }, [emblaMainApi, onSelect, indexOfData]);

  return (
    <div className="embla2 max-w-xs xs:max-w-md md:max-w-2xl lg:max-w-3xl">
      <div className="embla__viewport" ref={emblaMainRef}>
        <div className="embla__container2">
          {slides.map((index) => (
            <div
              className={`embla__slide2 h-96 ${
                index === selectedIndex ? "!opacity-100 !ml-0" : "!opacity-50"
              }`}
              key={index}
            >
              <div className={`embla__slide2`} key={index}>
                <div className="embla__slide__number relative !h-96">
                  <Image
                    unoptimized
                    src={
                      "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg"
                    }
                    alt="ha"
                    layout="fill"
                    className="object-cover max-w-[860px]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla-thumbs">
        <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="embla-thumbs__container">
            {slides.map((index) => (
              <Thumb
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

type ThumbPropType = {
  selected: boolean;
  index: number;
  onClick: () => void;
};

const Thumb: React.FC<ThumbPropType> = (props) => {
  const { selected, onClick } = props;

  return (
    <div
      className={"embla-thumbs__slide".concat(
        selected ? " embla-thumbs__slide--selected" : ""
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className={`border p-[1.8rem] font-bold text-[1.8rem] flex items-center justify-center w-full !h-20 ${
          selected ? "opacity-100" : "opacity-50"
        } relative`}
      >
        <Image
          unoptimized
          src={
            "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg"
          }
          alt="ha"
          layout="fill"
          className=" object-cover max-w-xl"
        />
      </button>
    </div>
  );
};
