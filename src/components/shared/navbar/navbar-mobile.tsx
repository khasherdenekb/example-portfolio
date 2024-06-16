"use client";
import { Button } from "@/components/ui/button";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { getMenuData } from "./_actions";
import { LoadingSpinner } from "@/components/custom/loading-spinner";
import { ERROR_MSG } from "@/lib/constants";

export function NavbarMobile() {
  const { menuData, isLoading, isError } = getMenuData();

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
            <>
              <li>
                <Link className="text-[#266431]" href={menuItem?.url}>
                  {menuItem?.title}
                </Link>
              </li>
              {menuItem.subMenu.length > 0
                ? menuItem.subMenu.map((subMenuItem) => (
                    <li>
                      <Link className="text-[#266431]" href={subMenuItem?.url}>
                        {subMenuItem?.title}
                      </Link>
                    </li>
                  ))
                : null}
            </>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
