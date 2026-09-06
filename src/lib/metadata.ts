import type { Metadata } from "next";

// ── Base Metadata ─────────────────────────────────────────────────────────
// Import and spread this in every page that needs metadata.
// Example: export const metadata: Metadata = { ...baseMetadata, title: "Page Title" };

export const siteConfig = {
  name: "Turkish Barber Medgidia",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://turkishbarber.vercel.app",
  description:
    "Frizerie turcească în Medgidia cu rating 5.0 din 137 recenzii Google. Tuns clasic, fade, bărbierit tradițional cu prosop cald pe Strada Republicii 11 A. Programări rapide pe WhatsApp.",
  phone: "+40734073823",
  phoneDisplay: "+40 734 073 823",
  facebook: "https://www.facebook.com/Trbarber98/",
  rating: {
    value: 5.0,
    count: 137,
  },
  locale: "ro_RO",
  language: "ro",
};

export const baseMetadata: Metadata = {
  // metadataBase is required for OG images and sitemap URLs to resolve correctly.
  metadataBase: new URL(siteConfig.url),

  title: {
    default: `${siteConfig.name} | Tuns & Bărbierit Tradițional`,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,

  keywords: [
    "frizerie Medgidia",
    "barber shop Medgidia",
    "tuns barbati Medgidia",
    "tuns barbati Constanta",
    "barbierit traditional",
    "barbierit cu briciul Medgidia",
    "turkish barber",
    "frizerie turceasca",
    "fade Medgidia",
    "programare frizerie WhatsApp",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  icons: {
    apple: "/apple-touch-icon.png",
  },

  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Turkish Barber",
  },

  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    other: {
      "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION ?? "",
    },
  },

  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    phoneNumbers: [siteConfig.phoneDisplay],
    // Image is supplied automatically by src/app/opengraph-image.tsx
    // (Next.js file-convention metadata) — do not hardcode a static
    // image path here, it would create a second, broken og:image tag.
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    // Falls back to the same auto-generated opengraph-image.tsx.
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: siteConfig.url,
  },
};
