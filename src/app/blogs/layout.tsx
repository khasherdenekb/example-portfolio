import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Блог",
  description: "Блог",
  openGraph: {
    images: [
      {
        url: "/travel-banner3.jpg",
        width: 1200,
        height: 630,
        alt: "Information",
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
