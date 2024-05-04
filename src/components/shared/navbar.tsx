import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="py-4 backdrop-blur-lg flex items-center border-b justify-between">
      <aside>
        <Link href={"/"}>
          <h2 className="scroll-m-20 text-xl font-semibold tracking-tight first:mt-0 ">
            С. Баасанжав
          </h2>
        </Link>
      </aside>
      <nav className="hidden md:block">
        <ul className="flex items-center gap-4 list-none text-xs">
          <li>
            <Link href={"/"}>Нүүр хуудас</Link>
          </li>
          <li>
            <Link href={"#"}>Бизнесийн түүх</Link>
          </li>
          <li>
            <Link href={"#"}>Олон улсын аялал</Link>
          </li>
          <li>
            <Link href={"#"}>Олон улсын сургалтууд</Link>
          </li>
          <li>
            <Link href={"#"}>Бүтээгдэхүүний хөтөлбөрүүд</Link>
          </li>
          <li>
            <Link href={"#"}>Бүтээгдэхүүний танилцуулга</Link>
          </li>
          <li>
            <Link href={"#"}>Холбоосууд</Link>
          </li>
          <li>
            <Link href={"contact-us"}>Холбоо барих</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
