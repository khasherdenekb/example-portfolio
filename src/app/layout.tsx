import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/shared/layout/footer/footer";
import Navbar from "@/components/shared/layout/navbar/navbar";
import GoToTopButton from "@/components/custom/go-to-top";
import "@/css/globals.css";
import "@/css/embla.css";

const inter = Inter({ subsets: ["latin"] });

//TODO: add ssl url after all
export const metadata: Metadata = {
  title: "Baasanjav & Herbalife",
  description: "Welcome to my portfolio",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
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
  metadataBase: new URL("http://baaskaherbalifeclub.com/"),
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
          <Navbar />
          {children}
          <GoToTopButton />
          <Footer />
        </main>
      </body>
    </html>
  );
}
