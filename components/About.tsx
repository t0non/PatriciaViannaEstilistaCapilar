import Image from "next/image";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

export function About() {
  return (
    <section className="section-space bg-background">
      <div className="site-container grid items-center gap-14 lg:grid-cols-[1.08fr_.92fr] lg:gap-24">
        <Reveal>
          <div className="relative aspect-[3/2] overflow-hidden border border-brown/10">
            <Image src="/salao-interior.png" alt="Ambiente elegante e acolhedor de salão de beleza" fill sizes="(max-width: 1024px) 92vw, 52vw" className="object-cover" />
          </div>
        </Reveal>
        <Reveal>
          <SectionTitle eyebrow="Patrícia Vianna · Estilista Capilar" title="Uma profissional para orientar seu cabelo, não só realizar um procedimento." />
          <p className="mt-7 text-[17px] leading-8 text-ink/65">Na Espelho Meu, em Alípio de Melo, Patrícia se posiciona como estilista capilar para mulheres que querem se sentir bem com o próprio cabelo. A proposta é simples: entender sua identidade, cuidar da saúde dos fios e entregar um resultado bonito para a vida real.</p>
          <div className="mt-10 border-t border-brown/15 pt-7">
            <p className="font-serif text-2xl font-light text-gold">Patrícia Vianna</p>
            <small className="mt-1 block text-[11px] font-medium uppercase tracking-[.18em] text-brown/55">Estilista Capilar · Espelho Meu</small>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
