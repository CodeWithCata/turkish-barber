export const metadata = { 
   title: "Termeni si Conditii", 
   robots: { index: false }, 
}; 
 
export default function TermsPage() { 
   return ( 
     <main className="max-w-2xl mx-auto py-24 px-6 prose"> 
       <h1>Termeni si Conditii</h1> 
       <p>Ultima actualizare: {new Date().getFullYear()}</p> 
       <h2>1. Acceptarea termenilor</h2> 
       <p>Prin accesarea acestui site acceptati prezentii Termeni si Conditii. Daca nu sunteti de acord, va rugam sa nu folositi site-ul.</p> 
       <h2>2. Proprietate intelectuala</h2> 
       <p>Toate continuturile acestui site (texte, imagini, logo-uri) sunt proprietatea <strong>Turkish Barber Medgidia</strong> si sunt protejate de legislatia romana si europeana privind drepturile de autor.</p> 
       <h2>3. Limitarea raspunderii</h2> 
       <p>Site-ul este oferit "ca atare". Nu garantam disponibilitatea continua si nu raspundem pentru daune indirecte rezultate din utilizarea sa.</p> 
       <h2>4. Legea aplicabila</h2> 
       <p>Prezentii termeni sunt guvernati de legislatia romana. Orice litigiu va fi solutionat de instantele competente din Romania.</p> 
       <h2>5. Modificari</h2> 
       <p>Ne rezervam dreptul de a modifica acesti termeni oricand. Continuarea utilizarii site-ului dupa modificari constituie acceptarea acestora.</p> 
     </main> 
   ); 
} 
