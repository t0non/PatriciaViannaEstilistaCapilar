import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";

export function WhatsappButton() {
  return (
    <>
      <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Agendar pelo WhatsApp" className="fixed bottom-5 right-5 z-40 hidden size-14 items-center justify-center rounded-full bg-[#248A4A] text-white shadow-[0_15px_35px_rgba(20,90,50,.35)] transition hover:-translate-y-1 sm:flex"><MessageCircle size={25} fill="currentColor" strokeWidth={1.4} /></a>
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/15 bg-brown/95 p-2.5 backdrop-blur-xl sm:hidden">
        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="flex min-h-12 items-center justify-center gap-2 bg-background px-5 text-sm font-medium text-brown"><MessageCircle size={18} /> Agendar pelo WhatsApp</a>
      </div>
    </>
  );
}
