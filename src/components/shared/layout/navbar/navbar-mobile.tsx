"use client";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { GetMenuData } from "./_actions";
import { LoadingSpinner } from "@/components/custom/loading-spinner";
import { ERROR_MSG } from "@/lib/constants";
import React from "react";
import { usePathname } from "next/navigation";

export function NavbarMobile() {
  const pathname = usePathname();
  const { menuData, isLoading, isError } = GetMenuData();

  if (isLoading) {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }

  if (isError) return <p>{ERROR_MSG}</p>;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size={"icon"} variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <ul className="flex flex-col gap-4">
          {menuData.map((menuItem) => (
            <React.Fragment key={menuItem?.id}>
              <SheetClose asChild>
                <Link
                  className={`text-[#266431] p-1 ${
                    pathname === menuItem?.url && "!bg-muted text-black"
                  }`}
                  href={menuItem?.url}
                >
                  {menuItem?.title}
                </Link>
              </SheetClose>
              {menuItem.subMenu.length > 0 &&
                menuItem.subMenu.map((subMenuItem) => (
                  <SheetClose key={subMenuItem?.id} asChild>
                    <Link
                      className={`text-[#266431] p-1 ${
                        pathname === subMenuItem?.url && "!bg-muted text-black"
                      }`}
                      href={subMenuItem?.url}
                    >
                      {subMenuItem?.title}
                    </Link>
                  </SheetClose>
                ))}
            </React.Fragment>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
