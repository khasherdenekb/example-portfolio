import React from "react";
import { FacebookIcon, LinkedinIcon, YoutubeIcon } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-5 border-t border-t-muted flex justify-between items-start">
      <p className="text-zinc-700 font-normal text-md">С. Баасанжав</p>

      <div className="flex flex-col items-end">
        <div className="text-sm hidden lg:flex gap-2 text-muted-foreground ">
          <Link
            className="hover:text-[#224945] hover:font-medium text-[#266431]"
            href={"#"}
          >
            Бидний тухай
          </Link>
          <p>|</p>
          <Link
            className="hover:text-[#224945] hover:font-medium text-[#266431]"
            href={"#"}
          >
            Холбоосууд
          </Link>
          <p>|</p>
          <Link
            className="hover:text-[#224945] hover:font-medium text-[#266431]"
            href={"#"}
          >
            Холбоо барих
          </Link>
        </div>
        <div className="flex gap-4 pt-1">
          <FacebookIcon className=" text-[#266431] cursor-pointer" />
          <LinkedinIcon className=" text-[#266431] cursor-pointer" />
          <YoutubeIcon className=" text-[#266431] cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
