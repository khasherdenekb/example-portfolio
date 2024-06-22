import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Бүтээгдэхүүний холбоос",
  description: "Бүтээгдэхүүний холбоос",
  openGraph: {
    images: [
      {
        url: "/assets/links-page.jpg",
        width: 1200,
        height: 630,
        alt: "links",
      },
    ],
  },
  metadataBase: new URL("http://baaskaherbalifeclub.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
