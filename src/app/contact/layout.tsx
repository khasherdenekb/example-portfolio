import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Холбоо барих",
  description: "Холбоо барих",
  openGraph: {
    images: [
      {
        url: "/assets/contact-page.jpg",
        width: 1200,
        height: 630,
        alt: "contact",
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
