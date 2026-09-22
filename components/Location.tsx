import { MapPin, Navigation } from "lucide-react";
import { MAPS_URL, WHATSAPP_URL } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Location() {
  return (
    <section id="contato" className="section-space scroll-mt-20 bg-champagne">
      <div className="site-container">
        <Reveal>
          <div className="grid overflow-hidden bg-brown text-white lg:grid-cols-[1.05fr_.95fr]">
            <div className="p-8 sm:p-12 lg:p-16">
              <p className="eyebrow text-gold-soft">Localização em Belo Horizonte</p>
              <h2 className="mt-5 font-serif text-4xl font-light leading-[1.08] sm:text-5xl lg:text-6xl">Atendimento fácil de encontrar em Alípio de Melo.</h2>
              <address className="mt-9 not-italic text-white/70">
                <strong className="block font-serif text-2xl font-light text-white">Rua Camboriú, 28</strong>
                <span className="mt-2 block">Alípio de Melo<br />Belo Horizonte, MG</span>
                <span className="mt-4 block text-sm text-gold-soft">Em frente ao Shopping Xingu</span>
              </address>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href={MAPS_URL} target="_blank" rel="noreferrer" className="button-base button-light"><Navigation size={17} /> Ver localização</a>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="button-base border border-white/30 text-white hover:border-gold-soft hover:text-gold-soft">Agendar pelo WhatsApp</a>
              </div>
              <p className="mt-5 text-sm leading-6 text-white/55">Procure por Patrícia Vianna Estilista Capilar ou Espelho Meu by Patrícia Vianna em Belo Horizonte.</p>
            </div>
            <div className="relative min-h-[390px] overflow-hidden bg-olive">
              <span className="absolute left-1/2 top-1/2 size-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold-soft/20" />
              <span className="absolute left-1/2 top-1/2 size-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold-soft/25" />
              <span className="absolute left-1/2 top-1/2 grid size-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-background text-gold shadow-2xl"><MapPin size={40} strokeWidth={1.3} /></span>
              <span className="absolute left-[15%] top-[24%] text-gold-soft">✦</span><span className="absolute bottom-[18%] right-[18%] text-gold-soft">✦</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
