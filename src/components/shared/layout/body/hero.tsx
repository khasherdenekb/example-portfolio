"use client";
import { Button } from "../../../ui/button";
import { ArrowUpRight } from "lucide-react";
import { getHomeData } from "./_actions";
import { BlurImage } from "../../../custom/blur-image";
import { ERROR_MSG } from "@/lib/constants";
import Link from "next/link";

export const Hero = () => {
  const { bannerData, isLoading, isError } = getHomeData();
  const data = bannerData?.header?.[0];
  const imageUrl = data?.images?.[0];

  if (isError) return <p>{ERROR_MSG}</p>;

  return (
    <section className="relative bg-center bg-no-repeat bg-cover h-[750px] w-full mt-5">
      <BlurImage src={imageUrl} alt={imageUrl} isLoading={isLoading} />
      <div className="absolute inset-0">
        <div className="mx-auto my-80 lg:my-0 lg:justify-end lg:items-center max-w-screen-xl px-4 py-16 sm:px-6 lg:flex lg:h-[750px] lg:px-8">
          {!isLoading && (
            <div className="max-w-xl p-10 mx-auto text-center bg-gray-400 border border-gray-100 rounded-md shadow-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 lg:mx-0">
              <h1 className="text-3xl font-extrabold text-white sm:text-5xl stroke-slate-950">
                Тавтай морилно уу
                <strong
                  className="block font-extrabold text-green-500 pt-2"
                  dangerouslySetInnerHTML={{
                    __html: data?.title,
                  }}
                />
              </h1>

              <div
                className="max-w-lg mx-auto mt-4 sm:text-xl/relaxed lg:mx-0 text-white"
                dangerouslySetInnerHTML={{
                  __html: data?.content,
                }}
              />

              <div className="pt-2 text-center">
                <Link href={data?.url} target="_blank">
                  <Button className="bg-[#2A6F37] w-48 md:w-96" size={"lg"}>
                    Үзэх
                    <ArrowUpRight className="pl-2" />
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
