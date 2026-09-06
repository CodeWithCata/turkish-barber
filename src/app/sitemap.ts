import type { MetadataRoute } from "next"; 
 
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://turkishbarber.vercel.app"; 
 
export default function sitemap(): MetadataRoute.Sitemap { 
   return [ 
     { 
       url: siteUrl, 
       lastModified: new Date(), 
       changeFrequency: "monthly", 
       priority: 1, 
     }, 
     { 
       url: `${siteUrl}/galerie`, 
       lastModified: new Date(), 
       changeFrequency: "monthly", 
       priority: 0.8, 
     }, 
     { 
       url: `${siteUrl}/privacy`, 
       lastModified: new Date(), 
       changeFrequency: "yearly", 
       priority: 0.3, 
     }, 
     { 
       url: `${siteUrl}/terms`, 
       lastModified: new Date(), 
       changeFrequency: "yearly", 
       priority: 0.3, 
     }, 
     { 
       url: `${siteUrl}/cookies`, 
       lastModified: new Date(), 
       changeFrequency: "yearly", 
       priority: 0.3, 
     }, 
   ]; 
} 
