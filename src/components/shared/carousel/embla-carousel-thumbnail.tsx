import React, { useState, useEffect, useCallback } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

type SlideType = {
  item_id: number;
  group_name: string;
  title: string;
  content: string;
  url: string;
  image: string;
};

type PropType = {
  slides: SlideType[];
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
  }, [emblaMainApi, emblaThumbsApi]);

  useEffect(() => {
    if (!emblaMainApi) return;
    emblaMainApi.on("select", onSelect).on("reInit", onSelect);

    // Scroll to the initial index
    emblaMainApi.scrollTo(indexOfData);
  }, [emblaMainApi, onSelect, indexOfData]);

  return (
    <div className="embla2 relative max-w-xs xs:max-w-md md:max-w-2xl lg:max-w-3xl w-full">
      {/* Title and description */}
      <div className="pb-2 text-center">
        <p className="text-xl">{slides && slides[selectedIndex]?.title}</p>
      </div>
      <div className="embla__viewport" ref={emblaMainRef}>
        <div className="embla__container2">
          {slides?.map((item, index) => (
            <div
              className={`embla__slide2 h-96 ${
                index === selectedIndex ? "!opacity-100 !ml-0" : "!opacity-50"
              }`}
              key={index}
            >
              <div className="embla__slide2">
                <div className="embla__slide__number relative !h-96">
                  <Image
                    unoptimized
                    src={item?.image}
                    alt={item?.item_id?.toString()}
                    layout="fill"
                    className="object-cover max-w-[860px]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button
        size={"icon"}
        onClick={() => onThumbClick(selectedIndex - 1)}
        className="absolute -left-4 text-green-500 top-[45%] transform -translate-y-1/2 w-8 h-8 rounded-full"
      >
        <ChevronLeftIcon className="text-white" />
      </Button>
      <Button
        className="absolute -right-4 top-[45%] transform -translate-y-1/2 text-green-500 w-8 h-8 rounded-full"
        size={"icon"}
        onClick={() => onThumbClick(selectedIndex + 1)}
      >
        <ChevronRightIcon className="text-white" />
      </Button>

      <div className="embla-thumbs">
        <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="embla-thumbs__container">
            {slides?.map((item, index) => (
              <Thumb
                item={item}
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Footer description */}
      <div className="pt-2 flex justify-end">
        <p className="text-muted-foreground text-base">
          <span className="text-slate-700 font-normal">
            {selectedIndex + 1}
          </span>
          / {slides?.length}
        </p>
      </div>
    </div>
  );
};

type ThumbPropType = {
  selected: boolean;
  index: number;
  item: SlideType;
  onClick: () => void;
};

const Thumb: React.FC<ThumbPropType> = (props) => {
  const { selected, onClick, index, item } = props;

  return (
    <div
      className={`embla-thumbs__slide ${
        selected ? "embla-thumbs__slide--selected" : ""
      }`}
      key={index}
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
          src={item?.image}
          alt={item?.item_id.toString()}
          layout="fill"
          className="object-cover max-w-xl"
        />
      </button>
    </div>
  );
};
