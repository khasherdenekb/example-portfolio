import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

const ProductDetail = () => {
  return (
    <div className="py-4">
      <Card className="text-gray-600 body-font overflow-hidden">
        <div className="lg:py-24 py-8 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="https://www.herbalife.com/dmassets/market-reusable-assets/amer/united-states/images/canister/pc-3110-us.png:pdp-w875h783?fmt=webp-alpha"
            />
            <CardContent className="lg:w-1/2 w-full flex justify-center flex-col">
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
                cardigan. juiceramps cornhole raw denim forage brooklyn.
                Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle
                austin listicle pour-over, neutra jean shorts keytar banjo
                tattooed umami cardigan.
              </p>
            </CardContent>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProductDetail;
