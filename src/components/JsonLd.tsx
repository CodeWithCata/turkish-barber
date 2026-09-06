// ── JSON-LD Structured Data ─────────────────────────────────────────────── 
// Tells Google exactly what this page/business is. 
// Results in rich snippets: FAQ dropdowns, business info, sitelinks searchbox. 
// Validate at: https://search.google.com/test/rich-results 
 
import { siteConfig } from "@/lib/metadata"; 

interface FaqItem { 
   question: string; 
   answer: string; 
} 
 
interface JsonLdProps { 
   // Optional: override the FAQ items from your real Faq component data 
   faqItems?: FaqItem[]; 
} 
 
export function JsonLd({ faqItems = [] }: JsonLdProps) {
   const schema = { 
     "@context": "https://schema.org/", 
     "@graph": [ 
       // ── WebSite ──────────────────────────────────────────────────────────── 
       // Enables sitelinks searchbox in Google search results. 
       { 
         "@type": "WebSite", 
         "@id": `${siteConfig.url}/#website`, 
         url: `${siteConfig.url}/`, 
         name: siteConfig.name, 
         inLanguage: "ro-RO", 
         potentialAction: { 
           "@type": "SearchAction", 
           target: `${siteConfig.url}/?q={search_term_string}`, 
           "query-input": "required name=search_term_string", 
         }, 
       }, 
 
       // ── Organization / LocalBusiness ─────────────────────────────────────
       // Shows your logo, name, address and contact in Google Knowledge Panel.
       { 
         "@type": "HairSalon", 
         "@id": `${siteConfig.url}/#organization`, 
         url: `${siteConfig.url}/`, 
         name: siteConfig.name, 
         image: `${siteConfig.url}/logo.webp`, 
         logo: { 
           "@type": "ImageObject", 
           url: `${siteConfig.url}/logo.webp`, 
           width: 512, 
           height: 512, 
         }, 
         telephone: siteConfig.phone, 
         priceRange: "50-110 RON", 
         sameAs: [siteConfig.facebook], 
         aggregateRating: { 
           "@type": "AggregateRating", 
           ratingValue: siteConfig.rating.value, 
           reviewCount: siteConfig.rating.count, 
           bestRating: 5, 
           worstRating: 1, 
         }, 
         review: [ 
           { 
             "@type": "Review", 
             author: { "@type": "Person", name: "Andrei T." }, 
             reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 }, 
             reviewBody: "Frizer atent la detalii și foarte prietenos, plec mereu mulțumit.", 
           }, 
           { 
             "@type": "Review", 
             author: { "@type": "Person", name: "Ferit A." }, 
             reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 }, 
             reviewBody: "Cel mai bun frizer de până acum, tunde foarte bine.", 
           }, 
           { 
             "@type": "Review", 
             author: { "@type": "Person", name: "Dragos O." }, 
             reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 }, 
             reviewBody: "Un frizer dedicat meseriei lui, cu multă pasiune și profesionalism.", 
           }, 
         ], 
         contactPoint: { 
           "@type": "ContactPoint", 
           telephone: siteConfig.phone, 
           contactType: "customer service", 
           availableLanguage: ["Romanian", "English"], 
           areaServed: "RO", 
         }, 
         address: { 
           "@type": "PostalAddress", 
           streetAddress: "Strada Republicii 11 A", 
           addressLocality: "Medgidia", 
           addressRegion: "Constanța", 
           addressCountry: "RO", 
         }, 
         geo: { 
           "@type": "GeoCoordinates", 
           latitude: 44.245884, 
           longitude: 28.269209, 
         }, 
         openingHoursSpecification: [ 
           { 
             "@type": "OpeningHoursSpecification", 
             dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], 
             opens: "10:00", 
             closes: "18:00", 
           }, 
           { 
             "@type": "OpeningHoursSpecification", 
             dayOfWeek: ["Sunday"], 
             opens: "10:00", 
             closes: "15:00", 
           }, 
         ], 
       }, 
 
       // ── WebPage ───────────────────────────────────────────────────────── 
       // Describes this specific page to Google. 
       { 
         "@type": "WebPage", 
         "@id": `${siteConfig.url}/#webpage`, 
         url: `${siteConfig.url}/`, 
         name: siteConfig.name, 
         isPartOf: { "@id": `${siteConfig.url}/#website` }, 
         about: { "@id": `${siteConfig.url}/#organization` }, 
         inLanguage: "ro-RO", 
         description: siteConfig.description, 
       }, 
 
       // ── FAQPage ───────────────────────────────────────────────────────── 
       // Makes FAQ answers appear as dropdowns directly in Google search results. 
       // Pass your real FAQ data via the faqItems prop. 
       ...(faqItems.length > 0 
         ? [ 
             { 
               "@type": "FAQPage", 
               mainEntity: faqItems.map((item) => ({ 
                 "@type": "Question", 
                 name: item.question, 
                 acceptedAnswer: { 
                   "@type": "Answer", 
                   text: item.answer, 
                 }, 
               })), 
             }, 
           ] 
         : []), 
     ], 
   }; 
 
   return ( 
     <script 
       type="application/ld+json" 
       dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} 
     /> 
   ); 
} 
