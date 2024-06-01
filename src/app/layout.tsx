import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar/navbar";
import "@/css/globals.css";
import "@/css/embla.css";
import GoToTopButton from "@/components/custom/go-to-top";

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
      <body className={inter.className}>
        <main className="container">
          <Navbar />
          {children}
          <Footer />
          <GoToTopButton />
        </main>
      </body>
    </html>
  );
}
