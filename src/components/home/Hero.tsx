"use client";

import { useRef } from "react";
import Image from "next/image";
import { MessageCircle, Phone, MapPin, Star } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(".hero-reveal", { y: 0, opacity: 1 });
        return;
      }

      // Staggered reveal for all elements with the 'hero-reveal' class
      gsap.from(".hero-reveal", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2, // Wait for navbar to drop in
      });
    },
    { scope: containerRef }
  );

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-[85vh] flex items-center justify-center px-4 py-16 sm:px-8 overflow-hidden"
    >
      {/* Background Image with Deep Overlay */}
      <div className="absolute inset-0 z-0 bg-background">
        <Image
          src="/hero-bg.webp"
          alt="Turkish Barber Medgidia Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40 mix-blend-luminosity"
        />
        {/* Gradient overlay to blend image seamlessly into the background color */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center mt-10">
        
        {/* 5.0 Google Rating Badge */}
        <div className="hero-reveal inline-flex items-center gap-2 bg-surface/80 backdrop-blur-sm border border-primary/30 rounded-full px-5 py-2 mb-8 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
            ))}
          </div>
          <span className="text-xs font-sans font-bold text-foreground tracking-wider uppercase">
            5.0 · 137 Recenzii Google
          </span>
        </div>

        {/* Headline */}
        <h1 className="hero-reveal font-bebas text-5xl sm:text-7xl lg:text-8xl tracking-widest text-foreground leading-[0.9] mb-6">
          EXPERTIZĂ TURCEASCĂ, <br />
          <span className="text-primary">STIL FĂRĂ COMPROMIS.</span>
        </h1>

        {/* Body Description */}
        <p className="hero-reveal font-sans text-muted text-base sm:text-lg max-w-2xl leading-relaxed mb-10">
          Experiență premium de îngrijire bărbătească în Medgidia. Tuns clasic, fade precis și bărbierit tradițional cu prosop cald.
        </p>

        {/* Action Buttons */}
        <div className="hero-reveal flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12">
          {/* Primary WhatsApp CTA */}
          <a
            href="https://wa.me/40734073823?text=Salut!%20Vreau%20o%20programare%20la%20frizerie."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-primary text-background font-bebas text-lg px-8 py-4 rounded-sm font-bold tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-primary/20"
          >
            <MessageCircle className="w-5 h-5 fill-background" />
            <span>PROGRAMEAZĂ-TE</span>
          </a>

          {/* Secondary Phone CTA */}
          <a
            href="tel:+40734073823"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-surface border border-surface hover:border-primary text-foreground font-sans text-sm px-6 py-4 rounded-sm font-semibold transition-all group"
          >
            <Phone className="w-4 h-4 text-muted group-hover:text-primary transition-colors" />
            <span className="tracking-wide">+40 734 073 823</span>
          </a>
        </div>

        {/* Address Badge */}
        <div className="hero-reveal flex items-center gap-2 text-sm text-muted font-sans font-medium">
          <MapPin className="w-4 h-4 text-primary shrink-0" />
          <span>Strada Republicii 11 A, Medgidia</span>
        </div>
        
      </div>
    </section>
  );
}