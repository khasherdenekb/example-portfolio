import type { Metadata } from "next";

//TODO: url dran env gees avdag bolgoh
export const metadata: Metadata = {
  title: "Contact us",
  description: "Contact us",
  openGraph: {
    images: [
      {
        url: "/travel-banner4.jpg",
        width: 1200,
        height: 630,
        alt: "contact us",
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
