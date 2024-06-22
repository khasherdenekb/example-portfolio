import { Newsletter } from "../body/newsletter";
import { Card } from "@/components/ui/card";
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
} from "@/components/custom/icons";
import Link from "next/link";
import { FB_URL, IG_URL, YT_URL } from "@/lib/constants";

export default function Footer(): JSX.Element {
  return (
    <Card className="bg-white my-6">
      <div className="py-16">
        <Newsletter />
        <hr className="py-4 mx-10" />
        <div className="flex flex-col lg:flex-row text-center lg:text-left gap-5 justify-between px-10">
          <div className="flex gap-2 items-center justify-center">
            <p className="font-medium text-sm tracking-normal text-slate-600">
              С. Баасанжав бүх зүйл хуулиар хамгаалагдсан болно 2024.
            </p>
          </div>
          <div className="flex items-center space-x-4 justify-center lg:justify-end">
            <Link
              href={FB_URL}
              target="_blank"
              className="text-gray-400 hover:text-gray-300"
            >
              <FacebookIcon className="h-7 w-7" />
              <span className="sr-only">Facebook</span>
            </Link>

            <Link
              href={IG_URL}
              target="_blank"
              className="text-gray-400 hover:text-gray-300"
            >
              <InstagramIcon className="h-7 w-7" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href={YT_URL}
              target="_blank"
              className="text-gray-400 hover:text-gray-300"
            >
              <YoutubeIcon className="h-7 w-7" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
}
