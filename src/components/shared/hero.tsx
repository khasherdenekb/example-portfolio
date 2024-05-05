"use client";
import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";
import { globeConfig, sampleArcs } from "@/data/dummyData";

const World = dynamic(
  () => import("@/components/ui/globe").then((m) => m.World),
  {
    ssr: false,
  }
);

const Hero = () => {
  return (
    <div className="relative z-[-1]">
      <div className="flex flex-row items-center justify-center py-20 h-screen md:h-auto dark:bg-black bg-white relative w-full">
        <div className="mx-auto w-full relative overflow-hidden h-full md:h-[40rem] px-4">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="div"
          >
            <h2 className="text-center text-xl md:text-4xl font-bold text-[#224945]">
              Шинэ аялал
            </h2>
            <p className="text-center text-base md:text-lg font-normal cursor-pointer max-w-md mt-2 mx-auto text-[#266431] !z-[1]">
              Our North American Field Guides provide tips for identifying birds
              in all of the regions of the United States and Canada. Download
              any of our guides for free now!{" "}
              <Button className="bg-[#2A6F37]">
                <p>Үзэх</p>
                <ArrowUpRight className="pl-2" />
              </Button>
            </p>
          </motion.div>
          <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
          <div
            onClick={() => console.log("LOGIC GOES HERE")}
            className="absolute w-full -bottom-20 h-72 md:h-full z-[1] cursor-pointer"
          >
            <World data={sampleArcs} globeConfig={globeConfig} />;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
