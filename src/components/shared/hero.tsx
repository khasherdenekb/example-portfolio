import React from "react";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-[url(/assets/travel-world.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-[750px] lg:items-center lg:px-8">
        <div className="max-w-xl text-center shadow-lg bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 p-10 mx-auto lg:mx-0">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-white stroke-slate-950">
            Тавтай морилно уу
            <strong className="block font-extrabold text-green-500">
              Шинэ Аялал.
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed text-black mx-auto lg:mx-0">
            Our North American Field Guides provide tips for identifying birds
            in all of the regions of the United States and Canada. Download any
            of our guides for free now!
          </p>

          <div className="text-center pt-2">
            <Button className="bg-[#2A6F37] w-48 md:w-96" size={"lg"}>
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
