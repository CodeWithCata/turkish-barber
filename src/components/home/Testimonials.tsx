"use client";

import { Star, Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Testimonial {
  name: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Andrei T.",
    text: "Frizer atent la detalii și foarte prietenos. Mereu plec mulțumit, recomand cu încredere!",
  },
  {
    name: "Ferit A.",
    text: "Cel mai bun frizer de până acum! Tunde foarte bine.",
  },
  {
    name: "Dragos O.",
    text: "Un frizer dedicat meseriei sale, pe care o face cu multă pasiune și profesionalism! Recomand!!",
  },
];

export default function Testimonials() {
  const containerRef = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={containerRef}
      id="recenzii"
      className="relative w-full bg-background py-24 px-4 sm:px-8 border-b border-white/5 overflow-hidden"
    >
      {/* Ambient lighting */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(ellipse 80% 50% at 50% 0%, rgba(212, 175, 55, 0.06) 0%, transparent 70%)`,
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 reveal-on-scroll">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[1px] w-12 bg-primary/30" />
            <Star className="w-5 h-5 text-primary fill-primary" />
            <span className="h-[1px] w-12 bg-primary/30" />
          </div>

          <span className="text-primary font-bebas tracking-[0.2em] text-sm uppercase block mb-3">
            Recenzii Clienți
          </span>
          <h2 className="font-bebas text-5xl sm:text-6xl text-foreground tracking-widest uppercase mb-5">
            CE SPUN CLIENȚII NOȘTRI
          </h2>

          {/* Aggregate rating badge */}
          <div className="inline-flex items-center gap-2 bg-surface/80 backdrop-blur-sm border border-primary/30 rounded-full px-5 py-2 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-xs font-sans font-bold text-foreground tracking-wider uppercase">
              5.0 · 137 Recenzii Google
            </span>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="group relative bg-surface border border-primary/25 rounded-sm p-6 sm:p-8 flex flex-col gap-4 hover:border-primary/60 transition-colors reveal-on-scroll"
            >
              <Quote className="w-6 h-6 text-primary/40" />

              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
                ))}
              </div>

              <p className="font-sans text-sm sm:text-base text-muted leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="pt-2 border-t border-primary/10">
                <span className="font-bebas text-lg text-foreground tracking-wide">
                  {t.name}
                </span>
                <span className="block text-xs text-primary/70 font-sans mt-0.5">
                  Recenzie verificată Google
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
