import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/css/globals.css";
import "@/css/embla.css";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio example",
  description: "Portfolio example",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="container">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
