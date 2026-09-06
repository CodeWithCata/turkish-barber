import type { Metadata, Viewport } from "next";
import { Montserrat, Bebas_Neue } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/layout/CookieConsent";
import WhatsAppFloatButton from "@/components/layout/WhatsAppFloatButton";
import { JsonLd } from "@/components/JsonLd";
import { baseMetadata } from "@/lib/metadata";
import { faqs } from "@/data/faqs";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

export const metadata: Metadata = baseMetadata;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111113",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ro"
      className={`${montserrat.variable} ${bebasNeue.variable} dark`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground font-sans antialiased selection:bg-primary selection:text-background">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[300] focus:bg-primary focus:text-background focus:px-4 focus:py-2 focus:rounded-xs focus:font-bebas focus:tracking-widest"
        >
          Sari la conținut
        </a>
        <JsonLd faqItems={faqs} />
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFloatButton />
        <CookieConsent />
      </body>
    </html>
  );
}