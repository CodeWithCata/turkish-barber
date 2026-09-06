"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, MessageCircle } from "lucide-react";
import { faqs } from "@/data/faqs";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const containerRef = useScrollReveal<HTMLElement>();

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" ref={containerRef} className="w-full bg-background py-20 px-4 sm:px-8 border-b border-surface">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12 reveal-on-scroll">
          <span className="text-primary font-bebas tracking-widest text-lg uppercase block mb-1">
            Întrebări Frecvente
          </span>
          <h2 className="font-bebas text-4xl sm:text-6xl text-foreground tracking-wide">
            AI NELĂMURIRI? RĂSPUNDEM AICI
          </h2>
          <p className="font-sans text-muted text-sm sm:text-base mt-2">
            Tot ce trebuie să știi despre programări, servicii și locația noastră din Medgidia.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Accordions */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const panelId = `faq-panel-${index}`;
              return (
                <div
                  key={index}
                  className="bg-surface border border-muted/20 rounded-xs overflow-hidden transition-all reveal-on-scroll"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary group"
                  >
                    <span className="font-bebas text-xl sm:text-2xl text-foreground tracking-wide pr-4 group-hover:text-primary transition-colors">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div
                      id={panelId}
                      role="region"
                      className="px-6 pb-6 pt-4 font-sans text-sm text-muted leading-relaxed border-t border-muted/10"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Direct WhatsApp Callout */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="font-sans text-sm text-muted">
                Ai o altă întrebare neacoperită mai sus?
              </p>
              <a
                href="https://wa.me/40734073823?text=Salut!%20Am%20o%20%C3%AEntrebare%20legat%C4%83%20de%20servicii."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-background font-bebas text-base px-5 py-2.5 rounded-xs font-bold tracking-wider hover:brightness-110 active:scale-95 transition-all shrink-0"
              >
                <MessageCircle className="w-4 h-4 fill-background" />
                <span>ÎNTREABĂ PE WHATSAPP</span>
              </a>
            </div>
          </div>

          {/* RIGHT: WebP Image Display */}
          <div className="lg:col-span-5 flex items-center justify-center p-2">
            <div className="relative w-full aspect-4/5 max-w-sm rounded-xs overflow-hidden border border-primary/30 bg-surface shadow-2xl group">
              <Image
                src="/faq.webp"
                alt="Turkish Barber Medgidia FAQ"
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}