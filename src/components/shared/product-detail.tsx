"use client";

import React, { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Minus, Plus } from "lucide-react";

const ProductDetail = () => {
  const [amount, setAmount] = useState<number>(0);
  return (
    <div className="py-5">
      <Card className="text-gray-600 body-font overflow-hidden">
        <div className="lg:py-24 py-8 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="https://www.herbalife.com/dmassets/market-reusable-assets/amer/united-states/images/canister/pc-3110-us.png:pdp-w875h783?fmt=webp-alpha"
            />
            <CardContent className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                Herbalife
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                Бүтээгдэхүүний нэр
              </h1>
              <p className="leading-relaxed">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean shorts keytar banjo tattooed umami
                cardigan.
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex items-center gap-3">
                  <Label>Хэмжээ: </Label>

                  <Button
                    onClick={() => setAmount((prevState) => prevState - 1)}
                    size={"icon"}
                    className=" h-7 w-7 rounded-full"
                  >
                    <Minus className="p-1" />
                  </Button>
                  <Input
                    type="number"
                    className="w-16"
                    value={amount === 0 ? "" : amount}
                    onChange={(e) =>
                      setAmount(
                        e.target.value === "" ? 0 : Number(e.target.value)
                      )
                    }
                  />
                  <Button
                    onClick={() => setAmount((prevState) => prevState + 1)}
                    size={"icon"}
                    className=" h-7 w-7 rounded-full"
                  >
                    <Plus className="p-1" />
                  </Button>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="title-font font-medium text-2xl text-gray-900">
                  $50.00
                </span>
                <Button>Авах</Button>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProductDetail;
