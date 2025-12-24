import type { Metadata } from "next";
import KarrierePixel from "@/components/karriere/KarrierePixel";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: "Karriere bei Magda Ambulante Pflege - Pflegefachkraft gesucht",
  description: "Werden Sie Teil unseres Pflegeteams! Wir suchen engagierte Pflegefachkräfte für Vollzeit & Teilzeit in Remscheid und Umgebung. Attraktive Vergütung und flexible Arbeitszeiten.",
  keywords: "Karriere, Pflegefachkraft, Jobs, Stellenangebote, Remscheid, Ambulante Pflege, Pflegedienst Jobs",
};

export default function KarriereLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CookieBanner />
      <KarrierePixel />
      {children}
    </>
  );
}
