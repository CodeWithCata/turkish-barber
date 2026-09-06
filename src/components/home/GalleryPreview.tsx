"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Scissors } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const previewItems = [
  { title: "Skin Fade Modern", category: "Tuns & Styling" },
  { title: "Bărbierit cu Briciul", category: "Tradițional" },
  { title: "Classic Pompadour", category: "Tuns Clasic" },
];

export default function GalleryPreview() {
  const containerRef = useScrollReveal<HTMLElement>();

  return (
    <section id="galerie" ref={containerRef} className="relative w-full bg-background py-24 px-4 sm:px-8 border-b border-white/5">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 reveal-on-scroll">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-[1px] w-8 bg-primary/50" />
              <span className="text-primary font-bebas tracking-[0.2em] text-sm uppercase">
                Galerie Lucrări
              </span>
            </div>
            <h2 className="font-bebas text-5xl sm:text-6xl text-foreground tracking-widest uppercase">
              STILUL TĂU, SEMNĂTURA NOASTRĂ
            </h2>
          </div>
          <Link
            href="/galerie"
            className="group inline-flex items-center gap-2 text-primary font-bebas text-lg tracking-widest transition-colors hover:text-foreground w-fit pb-1 border-b border-primary/30 hover:border-foreground"
          >
            <span>VEZI TOATĂ GALERIA</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Grid Preview */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {previewItems.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-xs overflow-hidden bg-[#111113] h-[350px] flex flex-col justify-end p-6 md:p-8 transition-all duration-500 border border-white/5 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] cursor-pointer reveal-on-scroll"
            >
              {/* Background Image Placeholder */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/person1.webp"
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Rich Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-95 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Top Right Icon */}
              <div className="absolute top-5 right-5 bg-background/90 backdrop-blur-md p-2.5 rounded-xs border border-white/5 text-primary z-10 transition-all duration-500 group-hover:bg-primary group-hover:text-background group-hover:border-primary shadow-xl">
                <Scissors className="w-5 h-5" />
              </div>

              {/* Text Content */}
              <div className="relative z-10 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-xs uppercase tracking-[0.2em] text-primary font-sans font-bold block mb-2 opacity-90">
                  {item.category}
                </span>
                <h3 className="font-bebas text-3xl text-foreground tracking-wide group-hover:text-white transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}