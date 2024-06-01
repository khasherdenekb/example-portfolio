import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar/navbar";
import "@/css/globals.css";
import "@/css/embla.css";

const inter = Inter({ subsets: ["latin"] });

// TODO: end logo orj ireh ystoi
export const metadata: Metadata = {
  title: "Portfolio example",
  description: "Portfolio example",
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
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
