"use client";

import { MessageCircle, Clock, Scissors, Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface ServiceItem {
  title: string;
  price: string;
  duration: string;
  description: string;
  popular?: boolean;
}

const services: ServiceItem[] = [
  {
    title: "Tuns Classic & Styling",
    price: "60 LEI",
    duration: "30 min",
    description: "Tuns personalizat după forma capului, spălat, aranjat și finisare profesională cu produse premium.",
  },
  {
    title: "Tuns & Barbă Tradițională",
    price: "90 LEI",
    duration: "50 min",
    description: "Pachetul complet: tuns modern sau clasic, contur de barbă, tratament cu prosop cald și masaj facial.",
    popular: true,
  },
  {
    title: "Contur & Bărbierit Tradițional",
    price: "50 LEI",
    duration: "30 min",
    description: "Bărbierit clasic cu briciul, prosop cald cu aburi pentru deschiderea porilor și loțiune calmantă.",
  },
  {
    title: "Pachet Tată & Fiu",
    price: "110 LEI",
    duration: "60 min",
    description: "Tuns clasic sau modern pentru tată și fiu (sub 12 ani) într-o atmosferă relaxantă.",
  },
];

export default function Services() {
  const containerRef = useScrollReveal<HTMLElement>();

  return (
    <section 
      ref={containerRef}
      id="servicii" 
      className="relative w-full py-24 px-4 sm:px-8 overflow-hidden bg-background border-b border-surface"
    >
      {/* BACKGROUND BARBERSHOP STRIPES (Candy Stripe Watermark) */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            var(--color-primary) 0,
            var(--color-primary) 2px,
            transparent 0,
            transparent 32px
          )`
        }}
      />

      {/* LIGHTING GRADIENT OVERLAYS */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 80% 60% at 50% 0%, rgba(212, 175, 55, 0.1) 0%, transparent 80%),
            radial-gradient(ellipse 70% 50% at 50% 100%, rgba(17, 17, 19, 0.9) 0%, transparent 100%),
            linear-gradient(to bottom, var(--color-background), transparent 30%, transparent 70%, var(--color-background))
          `
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Glow Backdrop */}
        <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-3xl -z-10 pointer-events-none" />

        {/* BARBER MENU BOARD */}
        <div 
          className="relative bg-surface border-2 border-primary/40 rounded-xs p-6 sm:p-12 shadow-2xl overflow-hidden"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 90% 50% at 50% 0%, rgba(212, 175, 55, 0.14) 0%, transparent 80%),
              repeating-linear-gradient(
                90deg,
                rgba(212, 175, 55, 0.02) 0px,
                rgba(212, 175, 55, 0.02) 1px,
                transparent 1px,
                transparent 40px
              ),
              linear-gradient(180deg, rgba(27, 27, 30, 0.98) 0%, rgba(17, 17, 19, 0.99) 100%)
            `
          }}
        >
          {/* BARBER WATERMARK 1: CROSSED SCISSORS (Top Left Background) */}
          <svg 
            aria-hidden="true"
            className="absolute -top-12 -left-12 w-80 h-80 text-primary/5 pointer-events-none -rotate-12"
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1"
          >
            <circle cx="6" cy="6" r="3" />
            <circle cx="6" cy="18" r="3" />
            <line x1="20" y1="4" x2="8.12" y2="15.88" />
            <line x1="14.47" y1="14.48" x2="20" y2="20" />
            <line x1="8.12" y1="8.12" x2="12" y2="12" />
          </svg>

          {/* BARBER WATERMARK 2: STRAIGHT RAZOR (Bottom Right Background) */}
          <svg 
            aria-hidden="true"
            className="absolute -bottom-16 -right-12 w-96 h-96 text-primary/5 pointer-events-none rotate-45"
            viewBox="0 0 100 100" 
            fill="currentColor"
          >
            <path d="M10 80 Q 40 75, 80 20 L 88 28 Q 48 83, 18 88 Z" />
            <path d="M22 84 Q 50 40, 90 15 L 94 22 Q 54 47, 26 88 Z" opacity="0.6" />
          </svg>

          {/* Inner Decorative Foil Border */}
          <div className="absolute inset-2 border border-primary/20 pointer-events-none" />

          {/* Solid Brass Corner Brackets */}
          <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-primary pointer-events-none" />
          <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-primary pointer-events-none" />
          <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-primary pointer-events-none" />
          <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-primary pointer-events-none" />

          {/* Menu Header */}
          <div className="relative text-center mb-14 z-10 reveal-on-scroll">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="h-[1px] w-12 bg-primary/40" />
              <Scissors className="w-5 h-5 text-primary" />
              <span className="h-[1px] w-12 bg-primary/40" />
            </div>

            <span className="text-primary font-bebas tracking-[0.25em] text-sm uppercase block mb-1">
              Lista de Prețuri
            </span>
            <h2 className="font-bebas text-5xl sm:text-6xl text-foreground tracking-widest uppercase leading-none">
              MENIU SERVICII
            </h2>
            <p className="font-sans text-muted text-sm sm:text-base max-w-md mx-auto mt-3">
              Servicii profesionale de îngrijire bărbătească în Medgidia.
            </p>
          </div>

          {/* Menu Items */}
          <div className="relative z-10 flex flex-col gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`group flex flex-col p-4 rounded-xs transition-all duration-300 reveal-on-scroll ${
                  service.popular 
                    ? "bg-background/85 border border-primary/40 shadow-lg shadow-primary/5 backdrop-blur-xs" 
                    : "hover:bg-background/50 hover:border-muted/20 border border-transparent backdrop-blur-xs"
                }`}
              >
                {/* Title, Leader Dots & Price Row */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-4">
                  
                  {/* Service Name & Badge */}
                  <div className="flex items-center gap-3 shrink-0">
                    <h3 className="font-bebas text-2xl sm:text-3xl text-foreground tracking-wide group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    
                    {service.popular && (
                      <span className="inline-flex items-center gap-1 bg-primary text-background font-bebas text-xs uppercase px-2 py-0.5 rounded-xs font-bold tracking-wider">
                        <Star className="w-3 h-3 fill-background" />
                        RECOMANDAT
                      </span>
                    )}
                  </div>

                  {/* Leader Dotted Line */}
                  <div className="hidden sm:block flex-1 border-b border-dotted border-muted/40 my-auto mx-2" />

                  {/* Price & Booking Trigger */}
                  <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0">
                    <div className="flex items-center gap-1.5 text-xs text-muted font-sans sm:hidden">
                      <Clock className="w-3.5 h-3.5 text-primary" />
                      <span>{service.duration}</span>
                    </div>

                    <span className="font-bebas text-2xl sm:text-3xl text-primary font-bold">
                      {service.price}
                    </span>

                    <a
                      href={`https://wa.me/40734073823?text=Salut!%20Vreau%20o%20programare%20pentru%20${encodeURIComponent(service.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-primary text-background hover:brightness-110 font-bebas text-sm px-3 py-1.5 rounded-xs font-bold tracking-wider transition-all active:scale-95 shrink-0"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-background" />
                      <span>PROGRAMEAZĂ</span>
                    </a>
                  </div>
                </div>

                {/* Duration & Description */}
                <div className="mt-2 flex flex-col sm:flex-row sm:items-center gap-x-4">
                  <div className="hidden sm:flex items-center gap-1 text-xs text-primary font-sans font-semibold shrink-0">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{service.duration}</span>
                  </div>
                  <p className="font-sans text-muted text-sm leading-relaxed max-w-2xl">
                    {service.description}
                  </p>
                </div>

              </div>
            ))}
          </div>

          {/* Menu Board Footer Note */}
          <div className="relative z-10 mt-12 pt-6 border-t border-primary/20 text-center">
            <p className="font-sans text-xs text-muted">
              * Toate serviciile includ spălat și consultare de stil gratuită. Programările se confirmă instant pe WhatsApp.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}