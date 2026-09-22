import { AtSign, MessageCircle } from "lucide-react";
import { INSTAGRAM_URL, WHATSAPP_URL } from "@/lib/site";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#FAF6EE] py-24 text-center sm:py-28 lg:py-36">
      <span aria-hidden="true" className="absolute left-1/2 top-1/2 size-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/10" />
      <Reveal className="relative z-10 mx-auto w-[min(850px,calc(100%-32px))]">
        <p className="text-[12px] font-bold uppercase tracking-[.22em] text-gold">Seu momento</p>
        <h2 className="mt-5 font-serif text-[clamp(3.2rem,7vw,6.2rem)] font-normal leading-[.95] tracking-[-.045em] text-ink">Seu próximo cuidado começa aqui.</h2>
        <p className="mx-auto mt-6 max-w-xl text-[17px] leading-8 text-ink/65">Agende seu horário e descubra o cuidado que o seu cabelo merece.</p>
        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="mt-9 inline-flex min-h-14 items-center justify-center gap-2 bg-brown px-7 text-sm font-bold text-white shadow-[0_16px_35px_rgba(73,55,43,.18)] transition hover:-translate-y-1 hover:bg-olive"><MessageCircle size={19} /> Agendar agora pelo WhatsApp</a>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 text-sm text-brown/65 sm:flex-row sm:gap-7">
          <a href="tel:+5531987358464" className="transition hover:text-gold">(31) 98735-8464</a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-gold"><AtSign size={16} /> espelhomeubypatriciavianna</a>
        </div>
      </Reveal>
    </section>
  );
}
