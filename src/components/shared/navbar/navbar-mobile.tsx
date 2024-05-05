import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

export function NavbarMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size={"icon"} variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <ul className="flex flex-col gap-4">
          <li>
            <Link className="text-[#266431]" href={"/"}>
              Нүүр хуудас
            </Link>
          </li>
          <li>
            <Link className="text-[#266431]" href={"/business-journey"}>
              Миний бизнесийн түүх
            </Link>
          </li>
          <li>
            <Link className="text-[#266431]" href={"/gallery"}>
              Зургийн цомог
            </Link>
          </li>
          <li>
            <Link className="text-[#266431]" href={"/videos"}>
              Бичлэг
            </Link>
          </li>
          <li>
            <Link className="text-[#266431]" href={"/product-program"}>
              Бүтээгдэхүүний хөтөлбөрүүд
            </Link>
          </li>
          <li>
            <Link className="text-[#266431]" href={"/product-introduction"}>
              Бүтээгдэхүүний танилцуулга
            </Link>
          </li>
          <li>
            <Link className="text-[#266431]" href={"/international-travel"}>
              Олон улсын аялал
            </Link>
          </li>
          <li>
            <Link className="text-[#266431]" href={"/international-training"}>
              Олон улсын сургалтуудын талаар
            </Link>
          </li>
          <li>
            <Link className="text-[#266431]" href={"/links"}>
              Холбоосууд
            </Link>
          </li>
          <li>
            <Link className="text-[#266431]" href={"/contact-us"}>
              Холбоо барих
            </Link>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}
