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
import { CheckIcon, ChevronsUpDown, EraserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CommandList } from "cmdk";
import Link from "next/link";
import { GetCategories } from "../_actions";
import { ERROR_MSG } from "@/lib/constants";
import { DynamicSkeleton } from "@/components/custom/skeletons";
import { useSearchParams } from "next/navigation";

export const BlogFilter = () => {
  const searchParams = useSearchParams();
  const { data, isLoading, isError } = GetCategories();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(
    searchParams.get("categoryId") || ""
  );

  if (isError) return <p>{ERROR_MSG}</p>;
  if (isLoading) return <DynamicSkeleton size="50" />;

  const handleSelect = (currentValue: string) => {
    setValue(currentValue);
    setOpen(false);
  };

  return (
    <>
      <div className="flex gap-2 items-center justify-end">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="flex w-full justify-between"
            >
              {value
                ? data?.find((item: { id: string }) => item.id == value)?.title
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
                  {data.map((item: { id: string; title: string }) => (
                    <Link
                      key={item.id}
                      href={`/blogs?page=1&categoryId=${item.id}`}
                    >
                      <CommandItem
                        value={item.title}
                        onSelect={() => handleSelect(item.id)}
                      >
                        <CheckIcon
                          className={cn(
                            "mr-2 h-4 w-4",
                            value == item?.id ? "opacity-100" : "opacity-0"
                          )}
                        />
                        {item?.title}
                      </CommandItem>
                    </Link>
                  ))}
                </CommandList>
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
        <Link href={"/blogs?page=1"}>
          <Button
            onClick={() => {
              setOpen(false);
              setValue("");
            }}
            className="ml-2 bg-red-500 hover:bg-red-700"
            disabled={!value}
            size={"icon"}
          >
            <EraserIcon className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </>
  );
};
