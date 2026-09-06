import Link from "next/link"; 

export const metadata = { 
   title: "Politica de Confidentialitate", 
   robots: { index: false }, 
}; 
 
export default function PrivacyPage() { 
   return ( 
     <main className="max-w-2xl mx-auto py-24 px-6 prose"> 
       <h1>Politica de Confidentialitate</h1> 
       <p>Ultima actualizare: {new Date().getFullYear()}</p> 
       <h2>1. Cine suntem</h2> 
       <p>Operatorul de date cu caracter personal este <strong>Turkish Barber Medgidia</strong>, cu sediul in Strada Republicii 11 A, Medgidia, Romania. Ne puteti contacta la telefon: +40 734 073 823</p> 
       <h2>2. Ce date colectam</h2> 
       <p>Acest site nu are un formular de contact si nu colecteaza date personale direct de la dvs. Programarile se fac prin apel telefonic sau prin WhatsApp, folosind link-urile afisate pe site — aceste conversatii au loc in afara site-ului nostru si sunt supuse politicii de confidentialitate a Meta/WhatsApp.</p> 
       <p>Site-ul foloseste module de tip cookie strict necesare (a se vedea <Link href="/cookies">Politica de Cookies</Link>) si afiseaza o harta Google Maps incorporata pentru locatia noastra, care poate seta propriile cookie-uri furnizate de Google atunci cand este incarcata.</p> 
       <h2>3. De ce colectam datele</h2> 
       <p>Nu prelucram date cu caracter personal prin intermediul site-ului. Singurele date tehnice implicate provin din functionarea normala a browserului dvs. (ex: preferinta de consimtamant pentru cookie-uri, stocata local pe dispozitivul dvs.) si din incarcarea hartii Google Maps.</p> 
       <h2>4. Cat timp pastram datele</h2> 
       <p>Nu pastram date cu caracter personal, intrucat nu sunt colectate de site. Preferinta dvs. privind cookie-urile ramane stocata local pe dispozitiv pana cand o stergeti din setarile browserului.</p> 
       <h2>5. Drepturile dvs.</h2> 
       <p>Conform GDPR, aveti dreptul la: acces, rectificare, stergere, restrictionarea prelucrarii, portabilitatea datelor si opozitie. Puteti depune o plangere la ANSPDCP (http://www.dataprotection.ro/).</p> 
       <h2>6. Transferuri internationale</h2> 
       <p>Nu transferam datele dvs. in afara Spatiului Economic European.</p> 
     </main> 
   ); 
} 
