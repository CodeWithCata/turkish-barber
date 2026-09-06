export const metadata = { 
   title: "Politica de Cookies", 
   robots: { index: false }, 
}; 
 
export default function CookiesPage() { 
   return ( 
     <main className="max-w-2xl mx-auto py-24 px-6 prose"> 
       <h1>Politica de Cookies</h1> 
       <p>Ultima actualizare: {new Date().getFullYear()}</p> 
       <h2>1. Ce sunt cookie-urile</h2> 
       <p>Cookie-urile sunt fisiere text mici stocate pe dispozitivul dvs. atunci cand vizitati un site web. Sunt folosite pentru a face site-urile sa functioneze mai eficient si pentru a furniza informatii proprietarilor site-ului.</p> 
       <h2>2. Ce cookie-uri folosim</h2> 
       <p><strong>Cookie-uri strict necesare</strong> — folosite pentru a retine alegerea dvs. privind acest banner de cookies. Sunt stocate local pe dispozitiv si nu contin informatii personale.</p> 
       <p><strong>Cookie-uri de la terti (Google Maps)</strong> — sectiunea de locatie afiseaza o harta Google Maps incorporata. Atunci cand harta se incarca, Google poate seta propriile cookie-uri, conform politicii sale de confidentialitate. Nu folosim in prezent cookie-uri de analiza sau marketing (ex: Google Analytics, Facebook Pixel) pe acest site.</p> 
       <h2>3. Cum va puteti exprima consimtamantul</h2> 
       <p>La prima vizita, veti vedea un banner de cookies unde puteti accepta sau refuza. Alegerea este retinuta local pe dispozitivul dvs. Daca doriti sa revedeti bannerul, stergeti datele stocate de acest site din setarile browserului (vezi sectiunea 4) si reincarcati pagina.</p> 
       <h2>4. Cum stergeti cookie-urile</h2> 
       <p>Puteti sterge sau bloca cookie-urile din setarile browserului dvs. Retineti ca dezactivarea cookie-urilor poate afecta functionarea site-ului.</p> 
       <h2>5. Mai multe informatii</h2> 
       <p>Pentru intrebari legate de cookie-uri, ne puteti contacta la +40 734 073 823 sau consultati Politica noastra de Confidentialitate.</p> 
     </main> 
   ); 
} 
