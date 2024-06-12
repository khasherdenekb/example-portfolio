import { PageTitle } from "@/components/custom/page-title";
import Image from "next/image";
import React from "react";

const Links = () => {
  return (
    <div className="pb-8">
      <PageTitle title={"Холбоосууд"} />
      <div className=" relative h-[200px] lg:h-[700px] w-full z-[-1] ">
        <Image
          src={"/travel-banner4.jpg"}
          fill
          className="w-full h-full absolute"
          alt="image-banner"
        />
      </div>
    </div>
  );
};

export default Links;
