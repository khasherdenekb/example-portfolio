"use client";
import { Product } from "@/components/shared/products";
import { categories, dummyData } from "@/data/dummyData";
import React, { useEffect } from "react";
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
import { useRouter } from "next/navigation";

const CategoryPage = ({ params: { id } }: { params: { id: string } }) => {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  useEffect(() => {
    const matchingCategory = categories.find(
      (category) => category.id.toString() === id
    );
    if (matchingCategory) {
      setValue(matchingCategory.title);
    } else {
      router.push("/404");
    }
  }, [id]);

  return (
    <>
      <div className="flex gap-2 items-center py-5 justify-end">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-56 justify-between"
            >
              {value
                ? categories.find(
                    (category) => category.title.toString() === value
                  )?.title
                : "Ангилалаа сонгоно уу..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search framework..." />
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                <CommandList>
                  {categories.map((category) => (
                    <Link key={category.id} href={`/categories/${category.id}`}>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4 mb-4">
        {dummyData?.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </>
  );
};

export default CategoryPage;
