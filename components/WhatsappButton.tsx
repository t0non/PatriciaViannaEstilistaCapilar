import Image from "next/image";
import { WHATSAPP_URL } from "@/lib/site";

export function WhatsappButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Agendar pelo WhatsApp"
      className="fixed bottom-5 right-5 z-40 block size-16 transition hover:-translate-y-1 sm:bottom-6 sm:right-6 sm:size-[72px]"
    >
      <Image src="/widget-whatsapp.png" alt="" fill sizes="72px" className="object-contain" />
    </a>
  );
}
