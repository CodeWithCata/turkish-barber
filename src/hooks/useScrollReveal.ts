"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Fades + slides in every element matching `selector` inside the returned
 * container as it scrolls into view. Mirrors the reveal treatment already
 * used in the Hero/Navbar, kept consistent across the rest of the page.
 * No-ops (elements just render at full opacity) if the visitor has
 * prefers-reduced-motion enabled.
 */
export function useScrollReveal<T extends HTMLElement>(
  selector = ".reveal-on-scroll"
) {
  const containerRef = useRef<T>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const targets = gsap.utils.toArray<HTMLElement>(
        selector,
        containerRef.current
      );
      if (targets.length === 0) return;

      if (prefersReducedMotion) {
        gsap.set(targets, { y: 0, opacity: 1 });
        return;
      }

      targets.forEach((el, i) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.7,
          delay: (i % 4) * 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      });
    },
    { scope: containerRef }
  );

  return containerRef;
}
