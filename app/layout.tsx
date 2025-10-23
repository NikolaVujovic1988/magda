import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Magda Ambulante Pflege - Professionelle Pflegeleistungen in Remscheid",
  description: "Ambulanter Pflegedienst Magda GmbH bietet professionelle Pflege und Betreuung in Remscheid und Umgebung. Kompetent, herzlich und zuverlässig.",
  keywords: "Ambulante Pflege, Pflegedienst, Remscheid, Altenpflege, häusliche Pflege, Behandlungspflege, Grundpflege",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
