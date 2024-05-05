import Link from "next/link";
import React from "react";
import { NavbarMenu } from "./navbar-menu";

const Navbar = () => {
  return (
    <header className="py-4 backdrop-blur-lg flex items-center border-b justify-between !z-[999999]">
      <aside>
        <Link href={"/"}>
          <h2 className="scroll-m-20 text-xl font-semibold tracking-tight first:mt-0 ">
            С. Баасанжав
          </h2>
        </Link>
      </aside>
      <NavbarMenu />
    </header>
  );
};

export default Navbar;
