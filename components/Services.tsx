import { Brush, Droplets, Palette, Scissors, Sparkle, Waves } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

const services = [
  { icon: Scissors, name: "Corte feminino", text: "Corte pensado para combinar com seu rosto, seu cabelo e sua rotina." },
  { icon: Waves, name: "Cachos", text: "Finalização, definição e cuidado para valorizar cachos com leveza e movimento." },
  { icon: Sparkle, name: "Penteados", text: "Produções para festas, eventos, fotos e ocasiões em que você quer se sentir ainda mais bonita." },
  { icon: Droplets, name: "Mechas sem descolorante", text: "Iluminação dos fios com uma proposta mais cuidadosa para quem busca mudança sem agressão intensa." },
  { icon: Palette, name: "Correção de cor", text: "Avaliação para ajustar manchas, tons indesejados e resultados que não ficaram como você esperava." },
  { icon: Brush, name: "Tratamento capilar", text: "Cuidado para fortalecer, recuperar brilho, maciez e melhorar a aparência dos fios." },
];

export function Services() {
  return (
    <section id="servicos" className="section-space scroll-mt-20 bg-background">
      <div className="site-container">
        <Reveal><SectionTitle eyebrow="Serviços com estilista capilar" title="Escolha o cuidado que seu cabelo precisa agora." description="Atendimento em Belo Horizonte para quem quer beleza, praticidade e fios mais saudáveis, com orientação profissional antes do serviço." /></Reveal>
        <div className="mt-14 grid gap-px bg-brown/15 border border-brown/15 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.name} delay={(index % 3) * 80} className="h-full bg-background">
              <article className="group flex h-full min-h-[330px] flex-col bg-background p-8 transition duration-300 hover:bg-white sm:p-10">
                <div className="flex items-start justify-between">
                  <service.icon size={34} strokeWidth={1.25} className="text-olive" />
                  <span className="text-[11px] font-medium tracking-[.18em] text-gold">0{index + 1}</span>
                </div>
                <h3 className="mt-12 font-serif text-[26px] font-light leading-[1.22] text-brown">{service.name}</h3>
                <p className="mt-4 flex-1 text-[15px] leading-7 text-ink/62">{service.text}</p>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="mt-7 inline-flex w-fit items-center border-b border-brown/35 pb-1 text-sm font-medium text-brown transition group-hover:border-gold group-hover:text-gold">Agendar este serviço <span aria-hidden="true" className="ml-2">↗</span></a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
