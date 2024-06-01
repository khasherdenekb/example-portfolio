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
];

export const SLIDES2 = [
  "/travel-banner4.jpg",
  "/travel-banner3.jpg",
  "/travel-banner2.jpg",
  "/travel-banner1.jpg",
];

export const globeConfig = {
  pointSize: 4,
  globeColor: "#062056",
  showAtmosphere: true,
  atmosphereColor: "#FFFFFF",
  atmosphereAltitude: 0.1,
  emissive: "#062056",
  emissiveIntensity: 0.1,
  shininess: 0.9,
  polygonColor: "rgba(255,255,255,0.7)",
  ambientLight: "#38bdf8",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff",
  arcTime: 1000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  initialPosition: { lat: 22.3193, lng: 114.1694 },
  autoRotate: true,
  autoRotateSpeed: 0.5,
};

export const galleryCards = [
  {
    id: 1,
    className: "md:col-span-2",
    thumbnail: "/travel-banner3.jpg",
  },
  {
    id: 2,
    className: "col-span-1",
    thumbnail: "/travel-banner1.jpg",
  },
  {
    id: 3,
    className: "col-span-1",
    thumbnail: "/travel-banner2.jpg",
  },
  {
    id: 4,
    className: "md:col-span-2",
    thumbnail: "/travel-banner4.jpg",
  },
  {
    id: 5,
    className: "md:col-span-2",
    thumbnail: "/travel-banner3.jpg",
  },
  {
    id: 6,
    className: "col-span-1",
    thumbnail: "/travel-banner1.jpg",
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
