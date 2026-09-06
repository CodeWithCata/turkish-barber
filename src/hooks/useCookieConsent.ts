"use client";

import { useEffect, useState } from "react";

export const COOKIE_CONSENT_KEY = "cookie-consent";
export const COOKIE_CONSENT_EVENT = "cookie-consent-change";

export type CookieConsentValue = "accepted" | "declined" | null;

function readConsent(): CookieConsentValue {
  if (typeof window === "undefined") return null;
  const stored = window.localStorage.getItem(COOKIE_CONSENT_KEY);
  return stored === "accepted" || stored === "declined" ? stored : null;
}

/**
 * Reads the visitor's cookie choice and stays in sync with it — including
 * updates fired from CookieConsent in the same tab (via a custom event,
 * since the native "storage" event only fires in *other* tabs) and changes
 * made in other tabs (via "storage").
 */
export function useCookieConsent() {
  const [consent, setConsent] = useState<CookieConsentValue>(null);

  useEffect(() => {
    setConsent(readConsent());

    const handleChange = () => setConsent(readConsent());

    window.addEventListener(COOKIE_CONSENT_EVENT, handleChange);
    window.addEventListener("storage", handleChange);
    return () => {
      window.removeEventListener(COOKIE_CONSENT_EVENT, handleChange);
      window.removeEventListener("storage", handleChange);
    };
  }, []);

  return consent;
}

export function setCookieConsent(value: "accepted" | "declined") {
  window.localStorage.setItem(COOKIE_CONSENT_KEY, value);
  window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT));
}
