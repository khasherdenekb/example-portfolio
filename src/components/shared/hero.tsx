import React from "react";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section>
      <div className="mx-auto px-4 py-32 lg:flex lg:h-[700px] lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Тавтай морилно уу
            <strong className="font-extrabold text-green-700 sm:block">
              {" "}
              Шинэ Аялал{" "}
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Our North American Field Guides provide tips for identifying birds
            in all of the regions of the United States and Canada. Download any
            of our guides for free now!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button className="bg-[#2A6F37] w-96" size={"lg"}>
              Үзэх
              <ArrowUpRight className="pl-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
