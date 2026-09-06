"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="ro">
      <body
        style={{
          background: "#111113",
          color: "#F4F4F6",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          fontFamily: "sans-serif",
          textAlign: "center",
          padding: "1rem",
        }}
      >
        <h1 style={{ fontSize: "2rem", fontWeight: 700 }}>
          A apărut o eroare neașteptată
        </h1>
        <p style={{ color: "#9E9EA8" }}>
          Te rugăm să reîmprospătezi pagina.
        </p>
        <button
          onClick={reset}
          style={{
            background: "#D4AF37",
            color: "#111113",
            fontWeight: 700,
            padding: "0.75rem 1.5rem",
            border: "none",
            borderRadius: "2px",
            cursor: "pointer",
          }}
        >
          Încearcă din nou
        </button>
      </body>
    </html>
  );
}
