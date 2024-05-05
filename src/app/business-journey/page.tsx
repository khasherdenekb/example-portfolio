import PageTitle from "@/components/custom/page-title";
import Image from "next/image";
import React from "react";

const BusinessJourney = () => {
  return (
    <div className="pb-8">
      <PageTitle title={"Бизнесийн түүх"} />
      <div className=" relative h-[200px] lg:h-[700px] w-full z-[-1] ">
        <Image
          src={"/travel-banner1.jpg"}
          fill
          className="w-full h-full absolute object-cover"
          alt="image-banner"
        />
      </div>
    </div>
  );
};

export default BusinessJourney;
