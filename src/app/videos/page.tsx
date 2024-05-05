import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

const Videos = () => {
  return (
    <div className="py-5">
      <Card>
        <CardHeader>
          <CardTitle>
            <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 pb-2 text-[#266431]">
              Бидний талаарх контент
            </h2>
          </CardTitle>
          <CardDescription>
            <p>Та бидний талаарх контентуудыг нэг дороос харах боломжтой.</p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            <div className="h-[650px]">
              <iframe
                className="flex-1 w-full h-full"
                src="https://www.youtube.com/embed/wCYR2tUQlaw?si=IB3_truxFna2OJXn"
                frameBorder="0"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Videos;
