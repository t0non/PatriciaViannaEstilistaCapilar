import { MessageCircle } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/faq";
import { WHATSAPP_URL } from "@/lib/site";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

export function FAQ() {
  return (
    <section className="section-space bg-background">
      <div className="site-container grid gap-10 lg:grid-cols-[.82fr_1.18fr] lg:gap-16">
        <Reveal>
          <SectionTitle eyebrow="Dúvidas frequentes" title="Antes de agendar com uma estilista capilar, veja o que você precisa saber." description="Informações simples para quem procura Patrícia Vianna Estilista Capilar em Alípio de Melo, Belo Horizonte." />
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="button-base button-primary mt-8"><MessageCircle size={18} /> Tirar dúvida pelo WhatsApp</a>
        </Reveal>

        <div className="border-t border-brown/15">
          {FAQ_ITEMS.map((item, index) => (
            <Reveal key={item.question} delay={index * 70}>
              <article className="border-b border-brown/15 py-6">
                <h3 className="font-serif text-xl font-light text-brown">{item.question}</h3>
                <p className="mt-3 text-[15px] leading-7 text-ink/65">{item.answer}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
