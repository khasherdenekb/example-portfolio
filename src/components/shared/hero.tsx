"use client";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import { getBannerData } from "../_actions";
import { useRouter } from "next/navigation";
import { BlurImage } from "../custom/blur-image";

const Hero = () => {
  const router = useRouter();
  const { bannerData, isLoading, isError } = getBannerData();
  const data = bannerData?.header?.[0];
  const imageUrl = data?.images?.[0];

  if (isError) {
    return <div>Error loading menu</div>;
  }

  return (
    <section className="relative bg-center bg-no-repeat bg-cover h-[750px] w-full mt-5">
      <BlurImage src={imageUrl} alt="Banner Image" isLoading={isLoading} />
      <div className="absolute inset-0">
        <div className="mx-auto my-40 max-w-screen-xl px-4 py-16 sm:px-6 lg:flex lg:h-[750px] lg:items-center lg:px-8">
          {!isLoading && (
            <div className="max-w-xl p-10 mx-auto text-center bg-gray-400 border border-gray-100 rounded-md shadow-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 lg:mx-0">
              <h1 className="text-3xl font-extrabold text-white sm:text-5xl stroke-slate-950">
                Тавтай морилно уу
                <strong className="block font-extrabold text-green-500">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data?.title,
                    }}
                  />
                </strong>
              </h1>

              <p className="max-w-lg mx-auto mt-4 text-black sm:text-xl/relaxed lg:mx-0">
                <div
                  dangerouslySetInnerHTML={{
                    __html: data?.content,
                  }}
                />
              </p>

              <div className="pt-2 text-center">
                <Button
                  onClick={() => router.push(data?.url)}
                  className="bg-[#2A6F37] w-48 md:w-96"
                  size={"lg"}
                >
                  Үзэх
                  <ArrowUpRight className="pl-2" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
