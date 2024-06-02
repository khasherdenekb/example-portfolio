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

export function NavbarMenu() {
  return (
    <NavigationMenu className="text-[#266431] !z-[9999] relative">
      <NavigationMenuList className="!z-[9999] relative">
        <NavigationMenuItem>
          <Link href="/information" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Мэдээлэл
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/links" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Холбоосууд
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="z-[50]">
          <NavigationMenuTrigger>Үндсэн цэс</NavigationMenuTrigger>
          <NavigationMenuContent className="!z-[9999]">
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/business-journey"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Миний бизнесийн түүх
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Миний бизнесийн түүх ололт амжилтын талаар.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/" title="Нүүр хуудас">
                Нүүр хуудас
              </ListItem>
              <ListItem href="/gallery" title="Зургийн цомог">
                Зургийн цомог
              </ListItem>
              <ListItem href="/videos" title="Бичлэг">
                Бичлэг
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            Олон улс болон бүтээгдэхүүнүүд
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem
                href="/product-program"
                title="Бүтээгдэхүүний хөтөлбөрүүд"
              >
                Бүтээгдэхүүний хөтөлбөрүүдийн тухай
              </ListItem>
              <ListItem
                href="/product-introduction"
                title="Бүтээгдэхүүний танилцуулга"
              >
                Бүтээгдэхүүний тухай танилцуулга
              </ListItem>
              <ListItem href="/international-travel" title="Олон улсын аялал">
                Олон улсын аялалуудын талаар
              </ListItem>
              <ListItem
                href="/international-training"
                title="Олон улсын сургалт"
              >
                Олон улсын сургалтуудын талаар
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact-us" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Холбоо барих
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
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
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
