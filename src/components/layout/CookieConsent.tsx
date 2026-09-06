"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";
import { COOKIE_CONSENT_KEY, setCookieConsent } from "@/hooks/useCookieConsent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const acceptButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Only show if the visitor hasn't already made a choice.
    const stored = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!stored) {
      setVisible(true);
    }
  }, []);

  useEffect(() => {
    if (visible) {
      acceptButtonRef.current?.focus();
    }
  }, [visible]);

  const accept = () => {
    setCookieConsent("accepted");
    setVisible(false);
  };

  const decline = () => {
    setCookieConsent("declined");
    setVisible(false);
  };

  useEffect(() => {
    if (!visible) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") decline();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[200] p-4 sm:p-6"
      role="dialog"
      aria-labelledby="cookie-consent-title"
    >
      <div className="max-w-4xl mx-auto bg-surface border border-primary/30 rounded-sm shadow-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
        <div className="flex items-start gap-4 flex-1">
          <div className="p-2.5 bg-primary/10 text-primary rounded-xs shrink-0">
            <Cookie className="w-5 h-5" />
          </div>
          <div>
            <h2
              id="cookie-consent-title"
              className="font-bebas text-xl text-foreground tracking-wide mb-1"
            >
              FOLOSIM COOKIE-URI
            </h2>
            <p className="font-sans text-sm text-muted leading-relaxed">
              Folosim cookie-uri pentru a-ți oferi cea mai bună experiență pe
              site-ul nostru. Poți accepta toate cookie-urile sau doar pe cele
              strict necesare. Detalii în{" "}
              <Link
                href="/cookies"
                className="text-primary underline underline-offset-2 hover:text-foreground transition-colors"
              >
                Politica de Cookies
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <button
            type="button"
            onClick={decline}
            className="w-full sm:w-auto flex items-center justify-center bg-transparent border border-muted/30 text-muted hover:text-foreground hover:border-foreground/40 font-sans text-sm px-6 py-3 rounded-xs font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Doar cele necesare
          </button>
          <button
            type="button"
            ref={acceptButtonRef}
            onClick={accept}
            className="w-full sm:w-auto flex items-center justify-center bg-primary text-background font-bebas text-base px-6 py-3 rounded-xs font-bold tracking-widest hover:brightness-110 active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
          >
            ACCEPT TOATE
          </button>
        </div>
      </div>
    </div>
  );
}
