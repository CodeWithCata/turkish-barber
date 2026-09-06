import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galerie Foto",
  description:
    "Portofoliu foto Turkish Barber Medgidia — tunsori, fade-uri și bărbierit tradițional turcesc realizate în salonul nostru.",
  alternates: {
    canonical: "/galerie",
  },
  openGraph: {
    title: "Galerie Foto | Turkish Barber Medgidia",
    description:
      "Portofoliu foto Turkish Barber Medgidia — tunsori, fade-uri și bărbierit tradițional turcesc realizate în salonul nostru.",
    url: "/galerie",
  },
};

export default function GalerieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
