import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getYouTubeThumbnail(url: string) {
  const videoId = url.split("v=")[1]?.split("&")[0];
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}
