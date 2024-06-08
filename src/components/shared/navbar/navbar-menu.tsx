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
import { getMenuData } from "./_actions";

export function NavbarMenu() {
  const { menuData, isLoading, isError } = getMenuData();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading menu</div>;
  }

  return (
    <NavigationMenu className="text-[#266431] z-50">
      <NavigationMenuList className="z-[9999] relative">
        {menuData.map((menuItem) => (
          <NavigationMenuItem key={menuItem.id}>
            {menuItem.subMenu.length > 0 ? (
              <>
                <NavigationMenuTrigger>{menuItem.title}</NavigationMenuTrigger>
                <NavigationMenuContent className="z-[9999]">
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    {menuItem.subMenu.map((subMenuItem) => (
                      <ListItem
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
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
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
