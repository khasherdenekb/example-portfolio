import type { Metadata } from "next";

//TODO: url dran env gees avdag bolgoh
export const metadata: Metadata = {
  title: "international travel",
  description: "international travel",
  openGraph: {
    images: [
      {
        url: "/travel-banner1.jpg",
        width: 1200,
        height: 630,
        alt: "international travel",
      },
    ],
  },
  metadataBase: new URL("https://example-portfolio-nine.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
