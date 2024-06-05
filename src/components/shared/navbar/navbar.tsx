import Link from "next/link";
import React from "react";
import { NavbarMenu } from "./navbar-menu";
import { NavbarMobile } from "./navbar-mobile";
import { HomeIcon } from "lucide-react";

const Navbar = () => {
  return (
    <header className="py-4 backdrop-blur-lg flex items-center border-b justify-between">
      <aside>
        <Link href={"/"} className="flex gap-2 items-center">
          <h2 className="scroll-m-20 text-sm lg:text-xl font-semibold tracking-normal first:mt-0">
            С. Баасанжав
          </h2>
          <HomeIcon className="text-muted-foreground w-5 h-5" />
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
