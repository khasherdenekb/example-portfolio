import { PageTitle } from "@/components/custom/page-title";
import Image from "next/image";
import React from "react";

const InternationalTraining = () => {
  return (
    <div className="pb-8">
      <PageTitle title={"Олон улсын сургалт"} />
      <div className=" relative h-[200px] lg:h-[700px] w-full z-[-1] ">
        <Image
          src={"/travel-banner2.jpg"}
          fill
          className="w-full h-full absolute"
          alt="image-banner"
        />
      </div>
    </div>
  );
};

export default InternationalTraining;
