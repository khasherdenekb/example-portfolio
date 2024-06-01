import type { Metadata } from "next";

export const metadata: Metadata = {
  openGraph: {
    title: "Business example",
    description: "Business example",
    url: "https://example-portfolio-nine.vercel.app",
    type: "website",
    images: [
      {
        url: "https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg",
        width: 800,
        height: 600,
        alt: "Business example image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
