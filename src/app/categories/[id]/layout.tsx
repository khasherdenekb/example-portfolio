import type { Metadata } from "next";

//TODO: url dran env gees avdag bolgoh
export const metadata: Metadata = {
  title: "Category",
  description: "Category",
  openGraph: {
    images: [
      {
        url: "/travel-banner2.jpg",
        width: 1200,
        height: 630,
        alt: "category",
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
