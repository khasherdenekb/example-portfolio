import { cn } from "@/lib/utils";
import React from "react";
import { BlurImage } from "./blur-image";

type PageTitleProps = {
  title: string;
  className?: string;
};

export const PageTitle = ({ title, className }: PageTitleProps) => {
  return (
    <h2
      className={cn(
        className,
        "scroll-m-20 text-xl lg:text-3xl font-semibold first:mt-0 border-b tracking-normal my-5 pb-2"
      )}
    >
      {title}
    </h2>
  );
};

export const PageImage = ({
  title,
  isLoading,
}: {
  title: string;
  isLoading: boolean;
}) => {
  return (
    <section className="relative h-96 my-8">
      <BlurImage
        isLoading={isLoading}
        src="/assets/gallery-background.jpeg"
        alt="Background"
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
