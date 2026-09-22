import { AtSign, MessageCircle } from "lucide-react";
import { INSTAGRAM_URL, WHATSAPP_URL } from "@/lib/site";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section className="section-space relative overflow-hidden bg-background text-center">
      <span aria-hidden="true" className="absolute left-1/2 top-1/2 size-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/10" />
      <Reveal className="relative z-10 mx-auto w-[min(850px,calc(100%-32px))]">
        <p className="eyebrow text-gold">Agende agora</p>
        <h2 className="mt-5 font-serif text-4xl font-light leading-[1.08] text-ink sm:text-5xl lg:text-6xl">Vamos cuidar do seu cabelo?</h2>
        <p className="mx-auto mt-6 max-w-xl text-[17px] leading-8 text-ink/65">Chame no WhatsApp, conte o que você quer fazer e veja o melhor horário para ser atendida em Alípio de Melo.</p>
        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="button-base button-primary mt-9 shadow-[0_16px_35px_rgba(73,55,43,.18)]"><MessageCircle size={19} /> Chamar no WhatsApp</a>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 text-sm text-brown/65 sm:flex-row sm:gap-7">
          <a href="tel:+5531987358464" className="transition hover:text-gold">(31) 98735-8464</a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-gold"><AtSign size={16} /> patriciaviannaestilistacapilar</a>
        </div>
      </Reveal>
    </section>
  );
}
