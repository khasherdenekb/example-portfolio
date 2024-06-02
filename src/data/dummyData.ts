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

export const SLIDES = [
  "/travel-banner1.jpg",
  "/travel-banner2.jpg",
  "/travel-banner3.jpg",
  "/travel-banner4.jpg",
  "/travel-banner1.jpg",
  "/travel-banner2.jpg",
  "/travel-banner3.jpg",
  "/travel-banner4.jpg",
  "/travel-banner1.jpg",
  "/travel-banner2.jpg",
  "/travel-banner3.jpg",
  "/travel-banner4.jpg",
  "/travel-banner1.jpg",
  "/travel-banner2.jpg",
  "/travel-banner3.jpg",
  "/travel-banner4.jpg",
  "/travel-banner1.jpg",
  "/travel-banner2.jpg",
  "/travel-banner3.jpg",
  "/travel-banner4.jpg",
  "/travel-banner1.jpg",
  "/travel-banner2.jpg",
  "/travel-banner3.jpg",
  "/travel-banner4.jpg",
  "/travel-banner1.jpg",
  "/travel-banner2.jpg",
  "/travel-banner3.jpg",
  "/travel-banner4.jpg",
  "/travel-banner1.jpg",
  "/travel-banner2.jpg",
  "/travel-banner3.jpg",
  "/travel-banner4.jpg",
  "/travel-banner1.jpg",
  "/travel-banner2.jpg",
  "/travel-banner3.jpg",
  "/travel-banner4.jpg",
  "/travel-banner1.jpg",
  "/travel-banner2.jpg",
  "/travel-banner3.jpg",
  "/travel-banner4.jpg",
  "/travel-banner1.jpg",
  "/travel-banner2.jpg",
  "/travel-banner3.jpg",
  "/travel-banner4.jpg",
  "/travel-banner1.jpg",
  "/travel-banner2.jpg",
  "/travel-banner3.jpg",
  "/travel-banner4.jpg",
  "/travel-banner1.jpg",
  "/travel-banner2.jpg",
  "/travel-banner3.jpg",
  "/travel-banner4.jpg",
  "/travel-banner1.jpg",
  "/travel-banner2.jpg",
  "/travel-banner3.jpg",
  "/travel-banner4.jpg",
  "/travel-banner1.jpg",
  "/travel-banner2.jpg",
  "/travel-banner3.jpg",
  "/travel-banner4.jpg",
  "/travel-banner1.jpg",
  "/travel-banner2.jpg",
  "/travel-banner3.jpg",
  "/travel-banner4.jpg",
  "/travel-banner1.jpg",
  "/travel-banner2.jpg",
  "/travel-banner3.jpg",
  "/travel-banner4.jpg",
];

export const SLIDES2 = [
  "/travel-banner4.jpg",
  "/travel-banner3.jpg",
  "/travel-banner2.jpg",
  "/travel-banner1.jpg",
];

export const galleryCards = [
  {
    id: 1,
    thumbnail: "/travel-banner3.jpg",
    title: "Title",
    description: "description ",
  },
  {
    id: 2,
    thumbnail: "/travel-banner1.jpg",
    title: "Title",
    description: "description ",
  },
  {
    id: 3,
    thumbnail: "/travel-banner2.jpg",
    title: "Title",
    description: "description ",
  },
  {
    id: 4,
    thumbnail: "/travel-banner4.jpg",
    title: "Title",
    description: "description ",
  },
  {
    id: 5,
    thumbnail: "/travel-banner3.jpg",
    title: "Title",
    description: "description ",
  },
  {
    id: 6,
    thumbnail: "/travel-banner1.jpg",
    title: "Title",
    description: "description ",
  },
];

export const categories = [
  {
    id: 1,
    image: "/travel-banner1.jpg",
    title: "Category 1",
  },
  {
    id: 2,
    image: "/travel-banner2.jpg",
    title: "Category 2",
  },
  {
    id: 3,
    image: "/travel-banner3.jpg",
    title: "Category 3",
  },
  {
    id: 4,
    image: "/travel-banner4.jpg",
    title: "Category 4",
  },
];

export const informationDetails = [
  {
    id: 1,
    image: "/travel-banner3.jpg",
    title: "The Power of Gratitude: Cultivating a Positive Mindset",
    description:
      "Learn how practicing gratitude can transform your outlook on life and foster a more positive and fulfilling existence.",
  },
  {
    id: 2,
    image: "/travel-banner2.jpg",
    title: "The Power of Gratitude: Cultivating a Positive Mindset",
    description:
      "Learn how practicing gratitude can transform your outlook on life and foster a more positive and fulfilling existence.",
  },
  {
    id: 3,
    image: "/travel-banner1.jpg",
    title: "The Power of Gratitude: Cultivating a Positive Mindset",
    description:
      "Learn how practicing gratitude can transform your outlook on life and foster a more positive and fulfilling existence.",
  },
];
