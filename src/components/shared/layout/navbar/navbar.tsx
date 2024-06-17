import Link from "next/link";
import React from "react";
import { NavbarMenu } from "./navbar-menu";
import { NavbarMobile } from "./navbar-mobile";
import { HomeIcon } from "lucide-react";

const Navbar = () => {
  return (
    <header className="right-0 flex items-center justify-between py-4 border-b h-16">
      <aside>
        <Link href={"/"} className="flex items-center gap-2">
          <HomeIcon className="w-5 h-5" />
          <h2 className="text-sm font-semibold tracking-normal scroll-m-20 lg:text-lg first:mt-0">
            С. Баасанжав
          </h2>
        </Link>
      </aside>
      <aside className="flex lg:hidden">
        <NavbarMobile />
      </aside>
      <aside className="hidden lg:flex">
        <NavbarMenu />
      </aside>
    </header>
  );
};

export default Navbar;
