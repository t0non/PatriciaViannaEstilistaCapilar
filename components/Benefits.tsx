import { HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

const benefits = [
  { icon: HeartHandshake, title: "Atendimento personalizado", text: "Cada cabelo recebe uma avaliação e um cuidado pensado para suas necessidades." },
  { icon: ShieldCheck, title: "Técnicas seguras", text: "Procedimentos realizados priorizando a saúde e a integridade dos fios." },
  { icon: Sparkles, title: "Cuidado que você percebe", text: "Tratamentos e serviços pensados para devolver beleza, confiança e bem-estar." },
];

export function Benefits() {
  return (
    <section className="section-space bg-champagne">
      <div className="site-container">
        <Reveal>
          <div className="grid items-end gap-8 lg:grid-cols-[1fr_.8fr]">
            <SectionTitle eyebrow="Nossa forma de cuidar" title="Beleza começa na raiz e se reflete nos fios." />
            <p className="max-w-xl text-[17px] leading-8 text-ink/65">Cada cabelo tem sua história, sua textura e suas necessidades. Por isso, cada atendimento é pensado individualmente para valorizar sua beleza natural e cuidar da saúde dos seus fios.</p>
          </div>
        </Reveal>
        <div className="mt-14 grid border-l border-t border-brown/15 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Reveal key={benefit.title} delay={index * 90} className="h-full">
              <article className="group h-full min-h-[290px] border-b border-r border-brown/15 bg-background/50 p-8 transition duration-300 hover:bg-background sm:p-10">
                <benefit.icon size={32} strokeWidth={1.3} className="text-gold transition group-hover:-translate-y-1" />
                <p className="mt-12 text-[11px] font-medium tracking-[.18em] text-gold">0{index + 1}</p>
                <h3 className="mt-4 font-serif text-2xl font-light leading-tight text-brown">{benefit.title}</h3>
                <p className="mt-4 text-[15px] leading-7 text-ink/62">{benefit.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
