import Link from "next/link";

export const metadata = {
  title: "Pagina nu a fost găsită",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[70vh] gap-4 px-4 text-center bg-background text-foreground">
      <h1 className="font-bebas text-7xl sm:text-8xl tracking-widest text-primary">
        404
      </h1>
      <p className="font-sans text-muted text-base sm:text-lg">
        Pagina nu a fost găsită.
      </p>
      <Link
        href="/"
        className="mt-4 inline-flex items-center gap-2 bg-primary text-background font-bebas text-base px-6 py-3 rounded-xs font-bold tracking-widest hover:brightness-110 active:scale-95 transition-all"
      >
        ÎNAPOI ACASĂ
      </Link>
    </main>
  );
}
