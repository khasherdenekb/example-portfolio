"use client";
import React from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CheckIcon, ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CommandList } from "cmdk";
import Link from "next/link";

const categories = [
  {
    id: 1,
    image: "/travel-banner1.jpg",
    title: "Category 1",
  },
  {
    id: 2,
    image: "/travel-banner2.jpg",
    title: "Category 2",
  },
  {
    id: 3,
    image: "/travel-banner3.jpg",
    title: "Category 3",
  },
  {
    id: 4,
    image: "/travel-banner4.jpg",
    title: "Category 4",
  },
];

export const BlogFilter = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <>
      <div className="flex gap-2 items-center py-5 justify-end">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="flex w-full justify-between"
            >
              {value
                ? categories.find(
                    (category) => category.title.toString() === value
                  )?.title
                : "Ангилалаа сонгоно уу..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="flex w-[276px] lg:w-96 p-0">
            <Command>
              <CommandInput placeholder="Ангилалаа сонгоно уу..." />
              <CommandEmpty>Ангилалаа олдсонгүй.</CommandEmpty>
              <CommandGroup>
                <CommandList>
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      href={`/categories?category=${category.id}`}
                    >
                      <CommandItem
                        value={category.title}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? "" : currentValue);
                          setOpen(false);
                        }}
                      >
                        <CheckIcon
                          className={cn(
                            "mr-2 h-4 w-4",
                            value === category?.title
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                        {category?.title}
                      </CommandItem>
                    </Link>
                  ))}
                </CommandList>
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
};
