import Image from "next/image";
import { ArrowDown, Check, MapPin } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[780px] overflow-hidden pt-[110px] sm:pt-[125px] lg:flex lg:min-h-screen lg:items-center lg:pt-[90px]">
      <span aria-hidden="true" className="absolute -left-44 top-48 size-[370px] rounded-full border border-gold/15" />
      <span aria-hidden="true" className="absolute left-[43%] top-0 h-full w-px bg-gradient-to-b from-transparent via-gold/15 to-transparent" />

      <div className="relative z-10 mx-auto grid w-[min(1180px,calc(100%-32px))] items-center gap-12 lg:grid-cols-[.94fr_1.06fr] lg:gap-20">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p className="mb-5 flex items-center gap-3 text-[12px] font-bold uppercase tracking-[.22em] text-gold before:h-px before:w-9 before:bg-gold">Patrícia Vianna · Estilista Capilar</p>
          <h1 className="max-w-[650px] font-serif text-[clamp(3.7rem,8vw,7rem)] font-normal leading-[.92] tracking-[-.045em] text-ink">
            Cuidar do seu cabelo é <em className="block font-serif font-normal text-gold">cuidar de você.</em>
          </h1>
          <p className="mt-7 max-w-[575px] text-[17px] leading-8 text-ink/68 sm:text-[18px]">
            Seu cabelo comunica quem você é. Com Patrícia Vianna, cada atendimento é realizado com atenção, técnica e respeito à saúde dos fios, em Alípio de Melo, Belo Horizonte.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex min-h-14 items-center justify-center bg-brown px-6 text-sm font-bold text-white shadow-[0_16px_30px_rgba(73,55,43,.18)] transition hover:-translate-y-1 hover:bg-olive">Agendar pelo WhatsApp</a>
            <a href="#servicos" className="inline-flex min-h-14 items-center justify-center gap-2 border border-brown/25 px-6 text-sm font-bold text-brown transition hover:border-gold hover:text-gold">Conhecer os serviços <ArrowDown size={16} /></a>
          </div>

          <p className="mt-6 flex items-center gap-2 text-sm font-semibold text-brown"><MapPin size={17} className="text-gold" /> Alípio de Melo • Belo Horizonte</p>

          <div className="mt-7 grid gap-3 border-t border-brown/10 pt-5 text-sm text-ink/70 sm:grid-cols-3">
            {["Atendimento personalizado", "Técnicas seguras", "Resultados visíveis"].map((item) => <p key={item} className="flex items-start gap-2"><Check size={16} className="mt-1 shrink-0 text-olive" />{item}</p>)}
          </div>
        </div>

        <div className="relative mx-auto min-h-[540px] w-full max-w-[580px] animate-in fade-in slide-in-from-right-5 duration-1000 lg:min-h-[670px]">
          <div className="absolute inset-x-[7%] bottom-0 top-0 overflow-hidden rounded-t-[48%] border border-gold/20 bg-champagne shadow-[0_35px_90px_rgba(73,55,43,.18)]">
            <Image src="/hero-salon.png" alt="Mulher com cabelos longos, saudáveis e bem cuidados" fill priority sizes="(max-width: 1024px) 90vw, 47vw" className="object-cover object-[60%_center]" />
            <div className="absolute inset-0 bg-gradient-to-t from-brown/30 via-transparent to-transparent" />
          </div>
          <div className="absolute -left-1 bottom-8 border border-brown/10 bg-[#FAF6EE]/95 px-5 py-4 shadow-xl backdrop-blur-md sm:-left-5">
            <small className="block text-[10px] font-bold uppercase tracking-[.18em] text-gold">Primeira visita</small>
            <strong className="mt-1 block font-serif text-xl font-normal text-brown">Avaliação capilar gratuita</strong>
          </div>
          <span aria-hidden="true" className="absolute -right-2 top-[18%] text-3xl text-gold">✦</span>
        </div>
      </div>
    </section>
  );
}
