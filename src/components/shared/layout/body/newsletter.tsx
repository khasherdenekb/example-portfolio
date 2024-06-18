"use client";
import { Button } from "../../../ui/button";
import { Input } from "../../../ui/input";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export const Newsletter = () => {
  const pathname = usePathname();
  const [email, setEmail] = useState<string>("");
  const router = useRouter();
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  if (pathname === "/contact") return;

  return (
    <>
      <div className="container py-24 sm:py-32">
        <h3 className="text-center text-4xl md:text-5xl font-bold">
          Та имэйлээ үлдээж бидэнтэй{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Харилцаарай
          </span>
        </h3>
        <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
          Имэйлээ үлдээнэ үү
        </p>

        <form
          className="flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
          onSubmit={handleSubmit}
        >
          <Input
            placeholder="Имэйл оруулах..."
            className="bg-muted/50 dark:bg-muted/80 "
            aria-label="email"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <Button
            onClick={() => {
              router.push(`/contact?email=${email}`);
            }}
            className="bg-[#2A6F37]"
          >
            Бүртгүүлэх
          </Button>
        </form>
      </div>
    </>
  );
};
