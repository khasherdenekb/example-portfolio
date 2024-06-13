import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar/navbar";
import "@/css/globals.css";
import "@/css/embla.css";
import GoToTopButton from "@/components/custom/go-to-top";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio example",
  description: "Portfolio example",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    images: [
      {
        url: "/travel-banner1.jpg",
        width: 1200,
        height: 630,
        alt: "home",
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
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50`}>
        <main className="container relative">
          {/* <Image height={400} width={300} src="/travel-banne1.jpg" alt="aa" /> */}
          <Navbar />
          {children}
          <GoToTopButton />
          <Footer />
        </main>
      </body>
    </html>
  );
}
