import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/shared";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TechZone",
  description:
    "Descubre en TechZone los mejores productos tecnológicos: computadoras, smartphones, gaming, smart home y más. Envíos rápidos y precios competitivos. Tu tienda de tecnología de confianza con las últimas novedades y ofertas exclusivas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable}`}
        style={{ position: "relative" }}
      >
        
        {children}
      </body>
    </html>
  );
}
