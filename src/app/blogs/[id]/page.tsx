"use client";
import { BlurImage } from "@/components/custom/blur-image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const InformationDetail = () => {
  const router = useRouter();

  return (
    <Card className="my-8">
      <CardContent>
        <section className="w-full pt-8">
          <div className="relative">
            <BlurImage
              isLoading={false}
              src="/travel-banner3.jpg"
              alt="Hero Image"
              className="mx-auto rounded-lg aspect-[2/1] object-cover w-full !h-[450px]"
            />
            <Button
              onClick={() => router.push("/blogs")}
              className="absolute top-4 left-4 rounded-full"
              size={"icon"}
            >
              <ArrowLeft />
            </Button>
          </div>
        </section>
        <article className="py-12 md:py-16 lg:py-24">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              The Future of Web Development: Embracing the Power of Tailwind CSS
            </h1>
            <section className="mt-8">
              <h2 className="text-2xl font-bold tracking-tight">
                The Rise of Tailwind CSS
              </h2>
              <p>
                In the ever-evolving landscape of web development, one tool has
                emerged as a game-changer: Tailwind CSS. This utility-first CSS
                framework has taken the industry by storm, transforming the way
                developers approach styling and building user interfaces.
              </p>
              <p>
                Tailwind CSS offers a unique approach to CSS, moving away from
                the traditional class-based styling and embracing a more
                functional approach. By providing a comprehensive set of
                pre-defined utility classes, Tailwind empowers developers to
                quickly and efficiently style their components, without the need
                for complex CSS architectures or lengthy class names.
              </p>
            </section>
            <section className="mt-8">
              <h2 className="text-2xl font-bold tracking-tight">
                The Benefits of Tailwind CSS
              </h2>
              <p>
                One of the primary advantages of Tailwind CSS is its ability to
                promote consistency and maintainability in your codebase. By
                leveraging a standardized set of utility classes, developers can
                ensure that their UI elements adhere to a unified design system,
                reducing the risk of inconsistencies and making it easier to
                scale and iterate on the project.
              </p>
              <p>
                Moreover, Tailwind CSS encourages a more modular and
                component-driven approach to web development. Instead of relying
                on complex CSS selectors and cascading rules, developers can
                focus on building reusable components that encapsulate both the
                structure and the styling, making the codebase more organized
                and easier to reason about.
              </p>
            </section>
            <section className="mt-8">
              <h2 className="text-2xl font-bold tracking-tight">
                Embracing the Future of Web Development
              </h2>
              <p>
                As the web development landscape continues to evolve, the
                adoption of Tailwind CSS is a clear indicator of the industry's
                shift towards more efficient and scalable styling solutions. By
                embracing the power of Tailwind, developers can unlock a new
                level of productivity, creativity, and maintainability in their
                projects, paving the way for the future of web development.
              </p>
              <p>
                Whether you're a seasoned developer or just starting your
                journey in the world of web development, exploring the
                capabilities of Tailwind CSS can be a transformative experience.
                By leveraging this powerful tool, you can unlock new
                possibilities, streamline your workflow, and create stunning
                user experiences that stand the test of time.
              </p>
            </section>
          </div>
        </article>
      </CardContent>
    </Card>
  );
};

export default InformationDetail;
