import Image from "next/image";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

export function About() {
  return (
    <section className="bg-[#FAF6EE] py-24 sm:py-28 lg:py-36">
      <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] items-center gap-14 lg:grid-cols-[1.08fr_.92fr] lg:gap-24">
        <Reveal>
          <div className="relative aspect-[3/2] overflow-hidden border border-brown/10">
            <Image src="/salao-interior.png" alt="Ambiente elegante e acolhedor de salão de beleza" fill sizes="(max-width: 1024px) 92vw, 52vw" className="object-cover" />
          </div>
        </Reveal>
        <Reveal>
          <SectionTitle eyebrow="Patrícia Vianna · Estilista Capilar" title="Seu cabelo merece atenção de verdade." />
          <p className="mt-7 text-[17px] leading-8 text-ink/65">Na Espelho Meu by Patrícia Vianna, em Belo Horizonte, cada atendimento começa entendendo você e o seu cabelo. O objetivo é unir beleza, técnica e cuidado para valorizar sua identidade sem deixar de lado a saúde dos fios.</p>
          <div className="mt-10 border-t border-brown/15 pt-7">
            <p className="font-serif text-3xl italic text-gold">Patrícia Vianna</p>
            <small className="mt-1 block text-[11px] font-bold uppercase tracking-[.18em] text-brown/55">Estilista Capilar · Espelho Meu</small>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
