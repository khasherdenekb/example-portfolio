"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { GetMenuData } from "./_actions";
import { LoadingSpinner } from "@/components/custom/loading-spinner";
import { ERROR_MSG } from "@/lib/constants";
import { usePathname } from "next/navigation";

export function NavbarMenu() {
  const { menuData, isLoading, isError } = GetMenuData();
  const pathname = usePathname();

  if (isLoading) {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }

  if (isError) return <p>{ERROR_MSG}</p>;

  return (
    <NavigationMenu className="text-[#266431] z-50">
      <NavigationMenuList className="relative">
        {menuData.map((menuItem) => (
          <NavigationMenuItem key={menuItem.id}>
            {menuItem?.subMenu?.length > 0 ? (
              <>
                <NavigationMenuTrigger>{menuItem.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    {menuItem?.subMenu?.map((subMenuItem) => (
                      <ListItem
                        className={`${
                          subMenuItem.url === pathname && "!bg-muted border"
                        }`}
                        key={subMenuItem.id}
                        href={subMenuItem.url}
                        title={subMenuItem.title}
                      >
                        {subMenuItem.title}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <Link href={menuItem.url} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    pathname === menuItem.url
                      ? "!bg-muted border text-black"
                      : ""
                  )}
                >
                  {menuItem.title}
                </NavigationMenuLink>
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            " block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-[#266431]">
            {title}
          </div>
          <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
