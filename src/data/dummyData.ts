export type TProduct = {
  id: number;
  images: string[];
  categories: { title: string }[];
  title: string;
  description: string;
  price: number;
  isAvailable: boolean;
};

export const dummyData: TProduct[] = [
  {
    id: 1,
    images: [
      "https://www.herbalife.com/dmassets/market-reusable-assets/amer/united-states/images/canister/pc-3110-us.png:pdp-w875h783?fmt=webp-alpha",
    ],
    categories: [{ title: "Category 1" }],
    title: "Product 1",
    description: "Description of Product 1",
    price: 50,
    isAvailable: true,
  },
  {
    id: 2,
    images: [
      "https://www.herbalife.com/dmassets/market-reusable-assets/amer/united-states/images/canister/pc-3145-us.png:pdp-w875h783?fmt=webp-alpha",
    ],
    categories: [{ title: "Category 2" }],
    title: "Product 2",
    description: "Description of Product 2",
    price: 60,
    isAvailable: true,
  },
  {
    id: 3,
    images: [
      "https://www.herbalife.com/dmassets/market-reusable-assets/amer/united-states/images/canister/pc-3110-us.png:pdp-w875h783?fmt=webp-alpha",
    ],
    categories: [{ title: "Category 1" }],
    title: "Product 1",
    description: "Description of Product 1",
    price: 50,
    isAvailable: true,
  },
  {
    id: 4,
    images: [
      "https://www.herbalife.com/dmassets/market-reusable-assets/amer/united-states/images/canister/pc-3145-us.png:pdp-w875h783?fmt=webp-alpha",
    ],
    categories: [{ title: "Category 2" }],
    title: "Product 2",
    description: "Description of Product 2",
    price: 60,
    isAvailable: true,
  },
  {
    id: 5,
    images: [
      "https://www.herbalife.com/dmassets/market-reusable-assets/amer/united-states/images/canister/pc-3110-us.png:pdp-w875h783?fmt=webp-alpha",
    ],
    categories: [{ title: "Category 1" }],
    title: "Product 1",
    description: "Description of Product 1",
    price: 50,
    isAvailable: true,
  },
  {
    id: 6,
    images: [
      "https://www.herbalife.com/dmassets/market-reusable-assets/amer/united-states/images/canister/pc-3145-us.png:pdp-w875h783?fmt=webp-alpha",
    ],
    categories: [{ title: "Category 2" }],
    title: "Product 2",
    description: "Description of Product 2",
    price: 60,
    isAvailable: true,
  },
];
