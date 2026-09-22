import Image from "next/image";
import { Check } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

const benefits = ["Entender a causa antes de indicar o cuidado", "Fortalecer fios frágeis e sem vida", "Criar uma rotina simples para manter o resultado"];

export function HairTreatment() {
  return (
    <section id="tratamentos" className="section-space scroll-mt-20 overflow-hidden bg-olive text-white">
      <div className="site-container grid items-center gap-14 lg:grid-cols-[.92fr_1.08fr] lg:gap-24">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[47%] border border-white/15">
            <Image src="/tratamento-capilar.png" alt="Avaliação cuidadosa do couro cabeludo e dos fios durante tratamento capilar" fill sizes="(max-width: 1024px) 92vw, 42vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#263121]/45 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 right-0 bg-background px-6 py-5 text-brown shadow-2xl sm:-right-6">
            <small className="block text-[10px] font-medium uppercase tracking-[.18em] text-gold">Cuidado integral</small>
            <strong className="mt-1 block font-serif text-xl font-light">Da raiz às pontas</strong>
          </div>
        </Reveal>

        <Reveal className="order-1 lg:order-2">
          <SectionTitle eyebrow="Tratamento capilar" title="Fios fracos, queda ou cabelo sem vida? Comece pela avaliação." light />
          <p className="mt-7 max-w-xl text-[17px] leading-8 text-white/68">Antes de fazer qualquer protocolo, Patrícia avalia o cabelo e o couro cabeludo para indicar um cuidado que faça sentido para você.</p>
          <ul className="mt-9 border-t border-white/15">
            {benefits.map((benefit) => <li key={benefit} className="flex items-center gap-4 border-b border-white/15 py-5"><span className="grid size-8 shrink-0 place-items-center rounded-full border border-gold-soft/50 text-gold-soft"><Check size={15} /></span><span className="font-serif text-lg font-light leading-7">{benefit}</span></li>)}
          </ul>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="button-base button-light mt-9">Quero uma avaliação capilar</a>
          <p className="mt-4 text-xs leading-5 text-white/45">Indicação personalizada conforme a necessidade dos fios e do couro cabeludo.</p>
        </Reveal>
      </div>
    </section>
  );
}
