"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const router = useRouter();
  return (
    <div className="h-[80svh]">
      <div className="m-auto flex h-full w-full flex-col items-center justify-center gap-2">
        <h1 className="text-[7rem] font-bold leading-tight">404</h1>
        <span className="font-medium">Хуудас олдсонгүй</span>
        <p className="text-center text-muted-foreground">
          Таны хайж байгаа хуудас байхгүй бололтой
          <br /> эсвэл устсан байж магадгүй.
        </p>
        <div className="mt-6 flex gap-4">
          <Button variant="outline" onClick={() => router.back()}>
            Буцах
          </Button>
          <Button onClick={() => router.push("/")}>Нүүр хуудаст очих</Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
