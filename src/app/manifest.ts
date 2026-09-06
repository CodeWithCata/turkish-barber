import type { MetadataRoute } from "next"; 
 
export default function manifest(): MetadataRoute.Manifest { 
   return { 
     name: "Turkish Barber Medgidia", 
     short_name: "Turkish Barber", 
     description: 
       "Frizerie tradițională turcească în Medgidia — tuns clasic, fade și bărbierit cu prosop cald.", 
     start_url: "/", 
     display: "standalone", 
     background_color: "#111113", 
     theme_color: "#111113", 
     icons: [ 
       { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" }, 
       { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" }, 
     ], 
   }; 
} 
