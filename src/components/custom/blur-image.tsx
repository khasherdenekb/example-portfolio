import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";

type Card = {
  alt: string;
  src: string;
  className?: string;
  isLoading: boolean;
};

export const BlurImage = ({ src, alt, className, isLoading }: Card) => {
  return (
    <motion.div
      className={cn(
        className,
        "relative overflow-hidden",
        "bg-white rounded-xl h-full w-full"
      )}
      layout
    >
      <Image
        unoptimized
        src={src}
        className={cn(
          "object-cover object-top absolute inset-0 h-full w-full transition duration-200",
          !isLoading ? "blur-none" : "blur-md"
        )}
        layout="fill"
        alt={alt}
      />
    </motion.div>
  );
};
