import EmblaCarousel from "@/components/shared/carousel/EmblaCarousel";
import { SLIDES } from "@/data/dummyData";
import React from "react";

const GalleryPage = () => {
  return (
    <div>
      <EmblaCarousel slides={SLIDES} />
      <div className="mx-auto py-5">
        <div className="mb-8">
          <h1 className="text-xl md:text-4xl font-bold mb-4">
            Энэ хэсэгт зурагтай хамааралтай гарчиг
          </h1>
          <p className="text-lg text-gray-700">
            Энэ хэсэгт зурагтай хамааралтай тайлбар: BaseCreate is pleased to
            announce that it has been commissioned by Leighton Asia reposition
            its brand. We will help Leighton Asia evolve its brand strategy, and
            will be responsible updating Leighton Asia’s brand identity,
            website, and other collaterals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
