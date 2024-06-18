import Link from "next/link";
import { Home } from "lucide-react";
import { Newsletter } from "../body/newsletter";
import { Card } from "@/components/ui/card";
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
} from "@/components/custom/icons";

export default function Footer(): JSX.Element {
  return (
    <Card className="bg-white my-6">
      <div className="py-16">
        <Newsletter />
        <hr className="py-4 mx-10" />
        <div className="flex justify-between px-10">
          <Link className="flex gap-2 items-center" href="#" prefetch={false}>
            <Home className="w-5 h-5" />
            <p className="font-medium text-sm tracking-normal">С. Баасанжав</p>
          </Link>
          <div className="flex items-center space-x-4">
            <Link
              href="#"
              className="text-gray-400 hover:text-gray-300"
              prefetch={false}
            >
              <FacebookIcon className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>

            <Link
              href="#"
              className="text-gray-400 hover:text-gray-300"
              prefetch={false}
            >
              <InstagramIcon className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-gray-300"
              prefetch={false}
            >
              <YoutubeIcon className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
}
