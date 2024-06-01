import Link from "next/link";
import React from "react";
import { NavbarMenu } from "./navbar-menu";
import { NavbarMobile } from "./navbar-mobile";

const Navbar = () => {
  return (
    <header className="py-4 backdrop-blur-lg flex items-center border-b justify-between z-[50]">
      <aside>
        <Link href={"/"}>
          <h2 className="scroll-m-20 text-sm lg:text-xl font-semibold tracking-tight first:mt-0 ">
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
