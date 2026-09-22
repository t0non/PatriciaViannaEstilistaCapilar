import { MapPin, Navigation } from "lucide-react";
import { MAPS_URL, WHATSAPP_URL } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Location() {
  return (
    <section id="contato" className="scroll-mt-20 bg-[#F3E9D8] py-24 sm:py-28 lg:py-32">
      <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
        <Reveal>
          <div className="grid overflow-hidden bg-brown text-white lg:grid-cols-[1.05fr_.95fr]">
            <div className="p-8 sm:p-12 lg:p-16">
              <p className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-[.22em] text-[#E4C98F] before:h-px before:w-9 before:bg-current">Localização</p>
              <h2 className="mt-5 font-serif text-[clamp(3rem,6vw,5.1rem)] font-normal leading-[.98] tracking-[-.035em]">Sua estilista capilar em Alípio de Melo</h2>
              <address className="mt-9 not-italic text-white/70">
                <strong className="block font-serif text-2xl font-normal text-white">Rua Camboriú, 28</strong>
                <span className="mt-2 block">Alípio de Melo<br />Belo Horizonte — MG</span>
                <span className="mt-4 block text-sm text-[#E4C98F]">Em frente ao Shopping Xingu</span>
              </address>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href={MAPS_URL} target="_blank" rel="noreferrer" className="inline-flex min-h-14 items-center justify-center gap-2 bg-[#FAF6EE] px-6 text-sm font-bold text-brown transition hover:-translate-y-1"><Navigation size={17} /> Ver localização</a>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex min-h-14 items-center justify-center border border-white/30 px-6 text-sm font-bold text-white transition hover:border-[#E4C98F] hover:text-[#E4C98F]">Agendar pelo WhatsApp</a>
              </div>
            </div>
            <div className="relative min-h-[390px] overflow-hidden bg-olive">
              <span className="absolute left-1/2 top-1/2 size-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#E4C98F]/20" />
              <span className="absolute left-1/2 top-1/2 size-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#E4C98F]/25" />
              <span className="absolute left-1/2 top-1/2 grid size-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#FAF6EE] text-gold shadow-2xl"><MapPin size={40} strokeWidth={1.3} /></span>
              <span className="absolute left-[15%] top-[24%] text-[#E4C98F]">✦</span><span className="absolute bottom-[18%] right-[18%] text-[#E4C98F]">✦</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
