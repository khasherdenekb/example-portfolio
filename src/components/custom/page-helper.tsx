import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type PageTitleProps = {
  title: string;
  className?: string;
};

export const PageTitle = ({ title, className }: PageTitleProps) => {
  return (
    <h2
      className={cn(
        className,
        "scroll-m-20 text-3xl font-semibold first:mt-0 border-b tracking-normal my-5 pb-2"
      )}
    >
      {title}
    </h2>
  );
};

export const PageImage = ({ title }: { title: string }) => {
  return (
    <section className="relative h-96 my-8">
      <Image
        unoptimized
        src="/assets/gallery-background.jpeg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="z-0"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl text-white font-mono">
            {title}
          </p>
        </div>
      </div>
    </section>
  );
};
