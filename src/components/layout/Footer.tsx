import Link from "next/link";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

// Social SVG Components
function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TikTokIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-2.22V8.2a6.34 6.34 0 0 0-5.11 6.17A6.34 6.34 0 0 0 10.7 20.7a6.34 6.34 0 0 0 6.32-6.33V9.22a8.16 8.16 0 0 0 4.88 1.6V7.37a4.85 4.85 0 0 1-2.31-.68z" />
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-surface relative overflow-hidden pt-20 pb-8 px-4 sm:px-8">
      
      {/* 1. TOP SVG TRANSITION WAVE (Fades in smoothly from main page background) */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-10">
        <svg 
          className="relative block w-full h-10 sm:h-16 text-background" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,0 C150,90 350,-40 500,50 C650,140 900,10 1200,40 L1200,0 L0,0 Z"></path>
        </svg>
      </div>

      {/* 2. BARBERSHOP VECTOR PATTERN BACKGROUND */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035] z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23D4AF37' fill-opacity='1'%3E%3Cpath d='M0 0h80v80H0z' fill='none'/%3E%3Cpath d='M18 12l2 6h8l2-6h-12zm-3 8h18v4H15v-4zm2 6h14v18h-2v-8h-2v8h-2v-8h-2v8h-2v-8h-2v8h-2V26zm35-14l6 6-6 6-6-6 6-6zm-10 20h20v2H42v-2zm0 6h20v2H42v-2zm0 6h20v2H42v-2zm0 6h20v2H42v-2z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat"
        }}
      />

      {/* 3. VIGNETTE & GOLD LIGHTING OVERLAY */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle at 50% 20%, rgba(212, 175, 55, 0.07) 0%, transparent 75%)"
        }}
      />

      {/* FOOTER CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto pt-4">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-primary/15">
          
          {/* Column 1: Brand & Socials */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex flex-col group w-fit">
              <span className="font-bebas text-3xl tracking-widest text-foreground group-hover:text-primary transition-colors leading-none">
                TURKISH BARBER
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-primary font-bold mt-1">
                Medgidia
              </span>
            </Link>
            <p className="text-sm text-muted font-sans leading-relaxed">
              Experiență autentică de îngrijire bărbătească. Tuns clasic, fade precis și bărbierit tradițional cu prosop cald.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-xs bg-background/80 border border-muted/20 text-foreground hover:border-primary hover:text-primary transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-xs bg-background/80 border border-muted/20 text-foreground hover:border-primary hover:text-primary transition-all"
                aria-label="TikTok"
              >
                <TikTokIcon />
              </a>
              <a
                href="https://www.facebook.com/Trbarber98/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-xs bg-background/80 border border-muted/20 text-foreground hover:border-primary hover:text-primary transition-all"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col space-y-3">
            <h3 className="font-bebas text-xl text-foreground tracking-widest uppercase">
              NAVIGARE RAPIDĂ
            </h3>
            <ul className="flex flex-col space-y-2 text-sm text-muted font-sans">
              <li>
                <Link href="/#servicii" className="hover:text-primary transition-colors">
                  Meniu Servicii & Prețuri
                </Link>
              </li>
              <li>
                <Link href="/#galerie" className="hover:text-primary transition-colors">
                  Galerie Foto
                </Link>
              </li>
              <li>
                <Link href="/#recenzii" className="hover:text-primary transition-colors">
                  Recenzii Clienți
                </Link>
              </li>
              <li>
                <Link href="/#locatie" className="hover:text-primary transition-colors">
                  Contact & Hartă Locație
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="flex flex-col space-y-3">
            <h3 className="font-bebas text-xl text-foreground tracking-widest uppercase">
              PROGRAM & CONTACT
            </h3>
            <div className="flex items-start gap-2.5 text-sm text-muted font-sans">
              <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>Strada Republicii 11 A, Medgidia</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-muted font-sans">
              <Phone className="w-4 h-4 text-primary shrink-0" />
              <a href="tel:+40734073823" className="hover:text-foreground transition-colors font-medium">
                +40 734 073 823
              </a>
            </div>
            <div className="flex items-start gap-2.5 text-sm text-muted font-sans">
              <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <div>
                <p>Luni: Închis</p>
                <p>Marți - Sâmbătă: 10:00 - 18:00</p>
                <p className="text-xs text-muted/70">Duminică: 10:00 - 15:00</p>
              </div>
            </div>
          </div>

          {/* Column 4: Quick WhatsApp CTA */}
          <div className="flex flex-col space-y-3">
            <h3 className="font-bebas text-xl text-foreground tracking-widest uppercase">
              PROGRAMĂRI RAPIDE
            </h3>
            <p className="text-sm text-muted font-sans">
              Rezervă locul direct pe WhatsApp fără cont sau timp pierdut.
            </p>
            <a
              href="https://wa.me/40734073823?text=Salut!%20Vreau%20o%20programare%20la%20frizerie."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-background font-bebas px-5 py-3 rounded-xs font-bold text-base tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-md shadow-primary/10"
            >
              <MessageCircle className="w-4 h-4 fill-background" />
              <span>PROGRAMEAZĂ-TE</span>
            </a>
          </div>

        </div>

        {/* ANPC SOL / SAL Badges — legally required for RO commercial sites.
            Expects sol.svg and sal.svg to be placed in /public. */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Platforma SOL - Soluționarea online a litigiilor"
            className="opacity-90 hover:opacity-100 transition-opacity"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/sol.svg"
              alt="Platforma SOL - Soluționarea online a litigiilor"
              width={200}
              height={40}
              className="w-[180px] h-auto sm:w-[200px]"
            />
          </a>
          <a
            href="https://anpc.ro/ce-este-sal/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="SAL - Soluționarea alternativă a litigiilor"
            className="opacity-90 hover:opacity-100 transition-opacity"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/sal.svg"
              alt="SAL - Soluționarea alternativă a litigiilor"
              width={200}
              height={40}
              className="w-[180px] h-auto sm:w-[200px]"
            />
          </a>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-muted font-sans gap-4">
          <p>© {new Date().getFullYear()} Turkish Barber Medgidia. Toate drepturile rezervate.</p>
          
          <div className="flex flex-wrap gap-6 justify-center items-center">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Confidențialitate
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Termeni și Condiții
            </Link>
            <Link href="/cookies" className="hover:text-foreground transition-colors">
              Cookies
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}