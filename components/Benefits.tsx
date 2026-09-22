import { HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

const benefits = [
  { icon: HeartHandshake, title: "Consultoria antes da técnica", text: "Como estilista capilar, Patrícia entende sua rotina, seu histórico e o resultado que você quer ver no espelho." },
  { icon: ShieldCheck, title: "Beleza com estratégia", text: "Cada escolha de corte, cor ou tratamento é feita pensando no visual e também na saúde do cabelo." },
  { icon: Sparkles, title: "Resultado com orientação", text: "Você sai sabendo como cuidar dos fios em casa e como manter o resultado bonito por mais tempo." },
];

export function Benefits() {
  return (
    <section className="section-space bg-champagne">
      <div className="site-container">
        <Reveal>
          <div className="grid items-end gap-8 lg:grid-cols-[1fr_.8fr]">
            <SectionTitle eyebrow="Posicionamento profissional" title="Mais que executar um serviço, Patrícia desenha o cuidado ideal para o seu cabelo." />
            <p className="max-w-xl text-[17px] leading-8 text-ink/65">O atendimento começa com conversa e avaliação. Como estilista capilar, Patrícia entende o que você deseja, observa a saúde dos fios e indica o melhor caminho antes de realizar qualquer procedimento.</p>
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
