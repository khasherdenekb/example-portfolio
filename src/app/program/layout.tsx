import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Хөтөлбөр",
  description: "Хөтөлбөр",
  openGraph: {
    images: [
      {
        url: "/assets/travel-world.jpg",
        width: 1200,
        height: 630,
        alt: "links",
      },
    ],
  },
  metadataBase: new URL("http://baaskaherbalifeclub.com/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
