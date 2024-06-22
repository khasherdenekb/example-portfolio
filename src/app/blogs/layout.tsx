import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Блог",
  description: "Блог",
  openGraph: {
    images: [
      {
        url: "/assets/blogs-page.jpg",
        width: 1200,
        height: 630,
        alt: "Blog",
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
