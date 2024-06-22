import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "videos",
  description: "videos",
  openGraph: {
    images: [
      {
        url: "/assets/videos-page.jpg",
        width: 1200,
        height: 630,
        alt: "videos",
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
