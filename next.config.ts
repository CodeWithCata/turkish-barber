import type { NextConfig } from "next"; 
 
const isDev = process.env.NODE_ENV !== "production"; 
const scriptSrc = `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""};`; 
 
const securityHeaders = [ 
   { 
     key: "X-Frame-Options", 
     value: "DENY", 
   }, 
   { 
     key: "X-Content-Type-Options", 
     value: "nosniff", 
   }, 
   { 
     key: "Referrer-Policy", 
     value: "strict-origin-when-cross-origin", 
   }, 
   { 
     key: "Strict-Transport-Security", 
     value: "max-age=63072000; includeSubDomains; preload", 
   }, 
   { 
     key: "Permissions-Policy", 
     value: "camera=(), microphone=(), geolocation=(), interest-cohort=()", 
   }, 
   { 
     key: "Content-Security-Policy", 
     value: 
       `default-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; ${scriptSrc} img-src 'self' data: https:; frame-src https://www.google.com; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self';`, 
   }, 
]; 
 
const nextConfig: NextConfig = { 
   reactCompiler: true, 
   async headers() { 
     return [ 
       { 
         source: "/(.*)", 
         headers: securityHeaders, 
       }, 
     ]; 
   }, 
}; 
 
export default nextConfig; 
