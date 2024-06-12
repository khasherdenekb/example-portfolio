import { cn } from "@/lib/utils";
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
