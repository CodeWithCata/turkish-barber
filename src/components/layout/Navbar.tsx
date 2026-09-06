"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { name: "Servicii", href: "/#servicii" },
  { name: "Galerie", href: "/#galerie" },
  { name: "Recenzii", href: "/#recenzii" },
  { name: "Întrebări", href: "/#faq" },
  { name: "Locație", href: "/#locatie" },
];

export default function Navbar() {
  const containerRef = useRef<HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Mirrors mobileMenuOpen but updates synchronously, so the ScrollTrigger
  // callback below never reads a stale value from before React re-renders.
  const mobileMenuOpenRef = useRef(false);

  const toggleMobileMenu = () => {
    mobileMenuOpenRef.current = !mobileMenuOpenRef.current;
    setMobileMenuOpen(mobileMenuOpenRef.current);
  };

  const closeMobileMenu = () => {
    mobileMenuOpenRef.current = false;
    setMobileMenuOpen(false);
  };

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(containerRef.current, { y: 0, opacity: 1 });
        return;
      }

      // 1. Initial entrance animation
      gsap.from(containerRef.current, {
        y: -30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      // 2. Hide on scroll down / Show on scroll up
      const showAnim = gsap.from(containerRef.current, {
        yPercent: -100,
        paused: true,
        duration: 0.3,
        ease: "power2.inOut",
      }).progress(1);

      ScrollTrigger.create({
        start: "top top",
        end: "max",
        onUpdate: (self) => {
          // Keep visible if mobile menu is open. Reads the ref (always
          // current) instead of the mobileMenuOpen closure value.
          if (mobileMenuOpenRef.current) return;

          if (self.direction === 1) {
            // Scrolling down
            showAnim.reverse();
          } else {
            // Scrolling up
            showAnim.play();
          }
        },
      });
    },
    // No longer re-creating this on every menu toggle: that used to tear down
    // and rebuild the ScrollTrigger each time the drawer opened, and on mobile
    // opening the drawer shifts the page layout enough to fire a scroll/resize
    // event in that gap — which the *old* trigger (still holding
    // mobileMenuOpen = false) read as "scrolling down" and hid the header,
    // making the just-opened menu appear to close itself.
    { scope: containerRef }
  );

  return (
    <header
      ref={containerRef}
      className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-md transition-shadow"
    >
      {/* Navbar Main Body */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 h-20 sm:px-8 border-b-2 border-primary/40">
        
        {/* Brand Logo & Title */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 shrink-0">
            <Image
              src="/logo.webp"
              alt="Turkish Barber Medgidia"
              fill
              sizes="44px"
              className="object-contain transition-transform group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bebas text-2xl tracking-wider text-foreground group-hover:text-primary transition-colors leading-none">
              TURKISH BARBER
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold mt-1">
              Medgidia
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted hover:text-primary transition-colors uppercase tracking-wider relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary hover:after:w-full after:transition-all"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Quick Call Button */}
          <a
            href="tel:+40734073823"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-surface border border-surface text-foreground hover:border-primary hover:text-primary transition-all"
            aria-label="Suna Acum"
          >
            <Phone className="w-4 h-4" />
          </a>

          {/* Primary WhatsApp CTA */}
          <a
            href="https://wa.me/40734073823?text=Salut!%20Vreau%20o%20programare%20la%20frizerie."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 bg-primary text-background font-bebas px-5 py-2.5 rounded-xs font-bold text-base tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-md shadow-primary/10"
          >
            <MessageCircle className="w-4 h-4 fill-background" />
            <span>PROGRAMEAZĂ-TE</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xs bg-surface text-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* COMB TEETH BAR */}
      <div 
        aria-hidden="true"
        className="w-full h-3 overflow-hidden opacity-80"
        style={{
          background: `repeating-linear-gradient(
            90deg,
            var(--color-primary) 0px,
            var(--color-primary) 3px,
            transparent 3px,
            transparent 8px
          )`,
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)"
        }}
      />

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-nav-drawer" className="md:hidden bg-surface border-b border-primary/20 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={closeMobileMenu}
              className="text-lg font-bebas text-foreground hover:text-primary transition-colors tracking-widest uppercase"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://wa.me/40734073823?text=Salut!%20Vreau%20o%20programare%20la%20frizerie."
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden flex items-center justify-center gap-2 bg-primary text-background font-bebas py-3 rounded-xs font-bold text-lg tracking-wider mt-2"
          >
            <MessageCircle className="w-5 h-5 fill-background" />
            <span>PROGRAMEAZĂ-TE</span>
          </a>
        </div>
      )}
    </header>
  );
}