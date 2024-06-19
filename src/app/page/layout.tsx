import type { Metadata } from "next";

//TODO: ssl after all
//TODO: title description will be get from backend
export const metadata: Metadata = {
  title: "Contact us",
  description: "Contact us",
  openGraph: {
    images: [
      {
        url: "/assets/travel-world.jpg",
        width: 1200,
        height: 630,
        alt: "contact us",
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
