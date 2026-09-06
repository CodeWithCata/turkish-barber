"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Scissors, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  category: "tuns" | "barba" | "atmosfera";
  categoryLabel: string;
  image: string;
}

// All images updated to use the requested placeholder
const galleryItems: GalleryItem[] = [
  { id: 1, title: "Fade Modern & Contur Precis", category: "tuns", categoryLabel: "Tuns", image: "/person1.webp" },
  { id: 2, title: "Bărbierit Tradițional cu Briciul", category: "barba", categoryLabel: "Barbă", image: "/person1.webp" },
  { id: 3, title: "Atmosferă & Design Turkish Barber", category: "atmosfera", categoryLabel: "Atmosferă", image: "/person1.webp" },
  { id: 4, title: "Styling & Aranjat Barbă Premium", category: "barba", categoryLabel: "Barbă", image: "/person1.webp" },
  { id: 5, title: "Tuns Clasic & Finisaj cu Ceară", category: "tuns", categoryLabel: "Tuns", image: "/person1.webp" },
  { id: 6, title: "Zona de Așteptare & Relaxare", category: "atmosfera", categoryLabel: "Atmosferă", image: "/person1.webp" },
  { id: 7, title: "Skin Fade & Linii Curate", category: "tuns", categoryLabel: "Tuns", image: "/person1.webp" },
  { id: 8, title: "Ritual Prosop Cald & Îngrijire", category: "barba", categoryLabel: "Barbă", image: "/person1.webp" },
  { id: 9, title: "Scaune Barbershop Profesionale", category: "atmosfera", categoryLabel: "Atmosferă", image: "/person1.webp" },
  { id: 10, title: "Crop Top Modern & Textură", category: "tuns", categoryLabel: "Tuns", image: "/person1.webp" },
  { id: 11, title: "Contur Brici & Vopsea Barbă", category: "barba", categoryLabel: "Barbă", image: "/person1.webp" },
  { id: 12, title: "Pachet VIP Turkish Experience", category: "atmosfera", categoryLabel: "Atmosferă", image: "/person1.webp" },
];

const categories = [
  { key: "all", label: "TOATE" },
  { key: "tuns", label: "TUNS" },
  { key: "barba", label: "BARBĂ" },
  { key: "atmosfera", label: "ATMOSFERĂ" },
];

export default function Galerie() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => setSelectedImageIndex(index);
  const closeLightbox = () => setSelectedImageIndex(null);

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  };

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedImageIndex]);

  return (
    <section 
      id="galerie" 
      className="relative w-full bg-background py-24 px-4 sm:px-8 border-b border-white/5 overflow-hidden"
    >
      {/* Soft Ambient Radial Lighting */}
      <div 
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 15%, rgba(212, 175, 55, 0.03) 0%, transparent 60%)`
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[1px] w-12 bg-primary/30" />
            <Scissors className="w-5 h-5 text-primary" />
            <span className="h-[1px] w-12 bg-primary/30" />
          </div>

          <span className="text-primary font-bebas tracking-[0.2em] text-sm uppercase block mb-3">
            Portofoliu & Lucrări
          </span>
          <h2 className="font-bebas text-5xl sm:text-6xl text-foreground tracking-widest uppercase mb-4">
            GALERIE FOTO
          </h2>
          <p className="font-sans text-foreground/60 text-sm sm:text-base max-w-lg mx-auto">
            Apreciază precizia și atenția la detalii în fiecare tuns și bărbierit realizat în salonul nostru.
          </p>
        </div>

        {/* Filter Tabs (Blocky, border-radius match) */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`font-bebas text-sm sm:text-base px-6 py-2.5 rounded-xs tracking-widest transition-all duration-300 border ${
                  isActive
                    ? "bg-primary text-[#111113] border-primary font-bold shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                    : "bg-[#111113] text-foreground/70 border-white/5 hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative aspect-4/5 bg-[#111113] rounded-xs overflow-hidden border border-white/5 hover:border-primary/40 transition-all duration-500 cursor-pointer hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]"
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Rich Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Top Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-[#111113]/90 backdrop-blur-md border border-white/10 text-primary font-bebas text-xs tracking-widest px-3 py-1.5 rounded-xs uppercase">
                  {item.categoryLabel}
                </span>
              </div>

              {/* Zoom Icon trigger on hover */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-[-10px] group-hover:translate-y-0 transition-all duration-300 bg-primary/90 text-[#111113] p-2.5 rounded-xs shadow-lg">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Bottom Caption Title */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-bebas text-2xl text-foreground tracking-wide group-hover:text-white transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Fullscreen Image Modal */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-background/98 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          onClick={closeLightbox}
        >
          {/* Close Button - Now Blocky */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-foreground/70 hover:text-primary bg-[#111113] p-3 rounded-xs border border-white/5 hover:border-primary/50 transition-all duration-300 z-50 shadow-xl"
            aria-label="Închide Galeria"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button - Now Blocky */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 sm:left-8 text-foreground/70 hover:text-primary bg-[#111113] p-3 rounded-xs border border-white/5 hover:border-primary/50 transition-all duration-300 z-50 shadow-xl"
            aria-label="Imaginea Anterioară"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image Container */}
          <div 
            className="relative max-w-5xl w-full max-h-[85vh] aspect-[4/5] sm:aspect-auto sm:h-[85vh] rounded-xs overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-[#111113]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filteredItems[selectedImageIndex].image}
              alt={filteredItems[selectedImageIndex].title}
              fill
              className="object-contain"
              priority
            />
            
            {/* Modal Bottom Bar */}
            <div className="absolute bottom-0 inset-x-0 bg-background/95 backdrop-blur-md p-5 border-t border-white/5 flex items-center justify-between">
              <span className="font-bebas text-2xl text-foreground tracking-widest uppercase">
                {filteredItems[selectedImageIndex].title}
              </span>
              <span className="font-bebas text-lg text-primary tracking-widest bg-[#111113] px-3 py-1 rounded-xs border border-white/5">
                {selectedImageIndex + 1} / {filteredItems.length}
              </span>
            </div>
          </div>

          {/* Next Button - Now Blocky */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 sm:right-8 text-foreground/70 hover:text-primary bg-[#111113] p-3 rounded-xs border border-white/5 hover:border-primary/50 transition-all duration-300 z-50 shadow-xl"
            aria-label="Imaginea Următoare"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
}