import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import GalleryPreview from "@/components/home/GalleryPreview";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/Faq";
import Location from "@/components/home/Location";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <GalleryPreview />
      <Testimonials />
      <FAQ />
      <Location />
    </>
  );
}