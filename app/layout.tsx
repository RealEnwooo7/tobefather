import type { Metadata } from "next";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import NavBar from "@/components/NavBar";
import SkipToContent from "@/components/SkipToContent";
import CookiesBanner from "@/components/CookiesBanner";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "To Be Father – L’app copilote de la paternité",
  description: "To Be Father accompagne les pères dès la grossesse jusqu’aux premières années. IA spécialisée, checklists, conseils experts. Lancement juillet 2026.",
  openGraph: {
    title: "To Be Father – L’app copilote de la paternité",
    description: "IA spécialisée, checklists, conseils experts. Lancement juillet 2026.",
    url: "https://example.com",
    siteName: "To Be Father",
    locale: "fr_FR",
    type: "website"
  },
  twitter: { card: "summary_large_image", site: "@tobefather_off" },
  robots: { index: true, follow: true }
};

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ weight: ["600","700"], subsets: ["latin"], variable: "--font-poppins" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "To Be Father",
    "url": "https://example.com",
    "logo": "https://example.com/favicon.svg",
    "sameAs": [
      "https://www.instagram.com/tobefather.off",
      "https://www.linkedin.com/company/tobefather",
      "https://www.facebook.com/tobefather.off",
      "https://www.tiktok.com/@tobefather.off"
    ]
  };
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "To Be Father – Application",
    "category": "Parenting App",
    "offers": [{
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    },{
      "@type": "Offer",
      "price": "4.39",
      "priceCurrency": "EUR",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": 4.39,
        "priceCurrency": "EUR",
        "unitText": "mois"
      }
    }]
  };
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <SkipToContent />
        <NavBar />
        {children}
        <CookiesBanner />
        <BackToTop />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      </body>
    </html>
  );
}
