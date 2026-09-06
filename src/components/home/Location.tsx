"use client";

import { MapPin, Phone, Clock, Navigation, ExternalLink, Cookie } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCookieConsent, setCookieConsent } from "@/hooks/useCookieConsent";

export default function Location() {
  const containerRef = useScrollReveal<HTMLElement>();
  const consent = useCookieConsent();
  const mapAllowed = consent === "accepted";

  return (
    <section id="locatie" ref={containerRef} className="w-full bg-background relative py-24 px-4 sm:px-8 overflow-hidden">
      
      {/* TOP SVG TRANSITION WAVE (Flows into Location section) */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-10">
        <svg 
          className="relative block w-full h-8 sm:h-12 text-surface" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,0 C150,90 350,-40 500,50 C650,140 900,10 1200,40 L1200,0 L0,0 Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto pt-6">
        
        {/* Section Title Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 reveal-on-scroll">
          <span className="text-primary font-bebas tracking-[0.25em] text-sm uppercase block mb-1">
            Unde Ne Găsești
          </span>
          <h2 className="font-bebas text-4xl sm:text-6xl text-foreground tracking-widest uppercase leading-none">
            VIZITEAZĂ-NE ÎN MEDGIDIA
          </h2>
          <div className="w-16 h-0.5 bg-primary/60 mx-auto my-4" />
          <p className="font-sans text-muted text-sm sm:text-base leading-relaxed">
            Te așteptăm într-un spațiu dedicat bărbaților, amenajat modern cu o atmosferă relaxantă și servicii la cele mai înalte standarde.
          </p>
        </div>

        {/* 2-Column Grid: Info & Embedded Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Info Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4 reveal-on-scroll">
            
            {/* Address Card */}
            <div className="bg-surface border border-primary/25 p-5 rounded-sm relative group hover:border-primary/60 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 text-primary rounded-xs shrink-0 group-hover:bg-primary group-hover:text-background transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bebas text-xl text-foreground tracking-wide">ADRESĂ LOCAȚIE</h3>
                  <p className="font-sans text-sm text-muted mt-0.5">Strada Republicii 11 A, Medgidia, Constanța</p>
                  <p className="font-sans text-xs text-primary/80 mt-1">Punct de reper: Zona Centrală</p>
                </div>
              </div>
            </div>

            {/* Schedule Card */}
            <div className="bg-surface border border-primary/25 p-5 rounded-sm relative group hover:border-primary/60 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 text-primary rounded-xs shrink-0 group-hover:bg-primary group-hover:text-background transition-colors">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="w-full">
                  <h3 className="font-bebas text-xl text-foreground tracking-wide">PROGRAM DE LUCRU</h3>
                  <div className="flex justify-between text-sm font-sans text-muted mt-1 border-b border-primary/10 pb-1">
                    <span>Luni</span>
                    <span className="text-primary font-medium">Închis</span>
                  </div>
                  <div className="flex justify-between text-sm font-sans text-muted mt-1 border-b border-primary/10 pb-1">
                    <span>Marți - Sâmbătă</span>
                    <span className="text-foreground font-medium">10:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between text-sm font-sans text-muted mt-1">
                    <span>Duminică</span>
                    <span className="text-foreground font-medium">10:00 - 15:00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone Contact Card */}
            <div className="bg-surface border border-primary/25 p-5 rounded-sm relative group hover:border-primary/60 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 text-primary rounded-xs shrink-0 group-hover:bg-primary group-hover:text-background transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bebas text-xl text-foreground tracking-wide">CONTACT DIRECT</h3>
                  <a 
                    href="tel:+40734073823" 
                    className="font-sans text-sm text-muted hover:text-primary transition-colors block mt-0.5 font-medium"
                  >
                    +40 734 073 823
                  </a>
                  <p className="font-sans text-xs text-muted/70 mt-1">Răspundem rapid pentru detalii și indicații.</p>
                </div>
              </div>
            </div>

            {/* Google Maps Action CTA */}
            <a
              href="https://maps.google.com/?cid=17270130438707411934"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-background font-bebas text-lg px-6 py-3.5 rounded-xs font-bold tracking-wider hover:brightness-110 active:scale-95 transition-all w-full shadow-lg shadow-primary/10 mt-2"
            >
              <Navigation className="w-5 h-5 fill-background" />
              <span>DESCHIDE ÎN GOOGLE MAPS</span>
              <ExternalLink className="w-4 h-4 ml-1 opacity-75" />
            </a>

          </div>

          {/* Interactive Map Column (7 cols) */}
          <div className="lg:col-span-7 min-h-[380px] lg:min-h-[100%] relative bg-surface border-2 border-primary/30 rounded-sm overflow-hidden p-2 shadow-2xl reveal-on-scroll">
            
            {/* Inner Foil Accent Border */}
            <div className="absolute inset-2 border border-primary/20 pointer-events-none z-10" />

            {/* Brass Corner Markers */}
            <div className="absolute top-4 left-4 w-3.5 h-3.5 border-t-2 border-l-2 border-primary pointer-events-none z-10" />
            <div className="absolute top-4 right-4 w-3.5 h-3.5 border-t-2 border-r-2 border-primary pointer-events-none z-10" />
            <div className="absolute bottom-4 left-4 w-3.5 h-3.5 border-b-2 border-l-2 border-primary pointer-events-none z-10" />
            <div className="absolute bottom-4 right-4 w-3.5 h-3.5 border-b-2 border-r-2 border-primary pointer-events-none z-10" />

            {/* Google Maps sets third-party cookies, so only load the embed
                once the visitor has accepted cookies. */}
            {mapAllowed ? (
              <iframe
                title="Google Map Location - Turkish Barber Medgidia"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.5!2d28.269209!3d44.245884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40ba9195da26e40b%3A0xefabd42207d0fbde!2sTurkish%20Barber%20Shop!5e0!3m2!1sro!2sro!4v1710000000000!5m2!1sro!2sro"
                className="w-full h-full min-h-[360px] rounded-xs border-0 filter grayscale invert contrast-[1.2] opacity-85 hover:opacity-100 transition-opacity"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="w-full h-full min-h-[360px] flex flex-col items-center justify-center text-center gap-3 px-6">
                <div className="p-3 bg-primary/10 text-primary rounded-full">
                  <Cookie className="w-6 h-6" />
                </div>
                <p className="font-sans text-sm text-muted max-w-xs">
                  Harta este încărcată de Google Maps și necesită acceptarea
                  cookie-urilor pentru a fi afișată.
                </p>
                <button
                  type="button"
                  onClick={() => setCookieConsent("accepted")}
                  className="font-bebas text-sm tracking-widest uppercase bg-primary text-background px-5 py-2.5 rounded-xs font-bold hover:brightness-110 active:scale-95 transition-all"
                >
                  Acceptă cookie-uri
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}