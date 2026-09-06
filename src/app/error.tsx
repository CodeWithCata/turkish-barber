"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log to your error reporting service here if one is configured.
    console.error(error);
  }, [error]);

  return (
    <main className="flex flex-col items-center justify-center min-h-[70vh] gap-4 px-4 text-center bg-background text-foreground">
      <h1 className="font-bebas text-5xl sm:text-6xl tracking-widest text-primary">
        A APĂRUT O EROARE
      </h1>
      <p className="font-sans text-muted text-base sm:text-lg max-w-md">
        Ne pare rău, ceva nu a funcționat corect. Te rugăm să încerci din nou.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 mt-4">
        <button
          onClick={reset}
          className="inline-flex items-center justify-center gap-2 bg-primary text-background font-bebas text-base px-6 py-3 rounded-xs font-bold tracking-widest hover:brightness-110 active:scale-95 transition-all"
        >
          ÎNCEARCĂ DIN NOU
        </button>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 bg-surface border border-muted/30 text-foreground font-sans text-sm px-6 py-3 rounded-xs font-medium hover:border-primary/50 transition-all"
        >
          Înapoi acasă
        </Link>
      </div>
    </main>
  );
}
