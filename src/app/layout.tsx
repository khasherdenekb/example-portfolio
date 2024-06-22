import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/shared/layout/footer/footer";
import Navbar from "@/components/shared/layout/navbar/navbar";
import GoToTopButton from "@/components/custom/go-to-top";
import "@/css/globals.css";
import "@/css/embla.css";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Baasanjav & Herbalife",
  description: "Welcome to my portfolio",
  openGraph: {
    images: [
      {
        url: "/assets/landing-page.jpg",
        width: 1200,
        height: 630,
        alt: "home",
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
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50`}>
        <Toaster richColors position="top-right" />
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
