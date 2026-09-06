import { siteConfig } from "@/lib/metadata";

function WhatsAppIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.004 3C9.376 3 4 8.373 4 15c0 2.34.663 4.61 1.92 6.584L4 29l7.594-1.91A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.7a9.62 9.62 0 0 1-4.9-1.34l-.351-.208-4.507 1.134 1.205-4.393-.229-.363A9.63 9.63 0 0 1 6.3 15c0-5.354 4.353-9.7 9.704-9.7 5.353 0 9.696 4.346 9.696 9.7 0 5.353-4.343 9.7-9.696 9.7Zm5.315-7.26c-.29-.145-1.716-.848-1.982-.944-.266-.097-.46-.145-.653.145-.194.29-.75.944-.92 1.138-.169.194-.338.218-.628.073-.29-.146-1.223-.451-2.33-1.44-.861-.768-1.443-1.716-1.612-2.006-.169-.29-.018-.447.127-.591.13-.13.29-.339.435-.508.145-.169.194-.29.29-.484.097-.194.048-.363-.024-.508-.073-.145-.653-1.575-.895-2.158-.236-.567-.475-.49-.653-.5-.169-.008-.363-.01-.556-.01-.194 0-.508.073-.774.363-.266.29-1.016.993-1.016 2.423 0 1.43 1.04 2.812 1.185 3.006.145.194 2.048 3.128 4.964 4.386.694.3 1.235.479 1.657.613.696.221 1.33.19 1.83.115.558-.083 1.716-.702 1.958-1.38.242-.678.242-1.259.169-1.38-.073-.121-.266-.194-.556-.34Z" />
    </svg>
  );
}

export default function WhatsAppFloatButton() {
  return (
    <a
      href={`https://wa.me/${siteConfig.phone.replace("+", "")}?text=${encodeURIComponent(
        "Salut! Vreau o programare la frizerie."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Scrie-ne pe WhatsApp"
      className="md:hidden fixed bottom-5 right-5 z-[90] flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 active:scale-95 transition-transform animate-[pulse_3s_ease-in-out_infinite]"
    >
      <WhatsAppIcon />
    </a>
  );
}
