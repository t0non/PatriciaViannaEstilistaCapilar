import Image from "next/image";
import { ArrowDown, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-background pt-[108px] text-ink sm:pt-[118px] lg:flex lg:min-h-screen lg:items-center lg:pt-[96px]">
      <span aria-hidden="true" className="absolute -left-44 top-48 hidden size-[370px] rounded-full border border-gold/15 lg:block" />
      <span aria-hidden="true" className="absolute left-[48%] top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-gold/15 to-transparent lg:block" />

      <div className="site-container relative z-10 grid items-center gap-10 pb-16 lg:grid-cols-[minmax(0,540px)_minmax(0,1fr)] lg:gap-20 lg:pb-0 xl:gap-24">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p className="eyebrow mb-5 text-gold">Patrícia Vianna · Estilista Capilar</p>
          <h1 className="max-w-[560px] font-serif text-[clamp(2.75rem,11vw,4.7rem)] font-light leading-[1.02] tracking-[-0.01em] text-ink sm:text-[clamp(3.5rem,8vw,5.1rem)] lg:text-[clamp(3.25rem,5.2vw,5.05rem)] lg:leading-[.98]">
            Sua estilista capilar em Belo Horizonte
          </h1>
          <p className="mt-6 max-w-[520px] text-base leading-8 text-ink/66 sm:text-[18px]">
            Cortes, coloração e cuidados personalizados para valorizar sua beleza com leveza, sofisticação e atendimento exclusivo.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="button-base button-primary shadow-[0_16px_30px_rgba(73,55,43,.16)]"><MessageCircle size={18} /> Agendar horário</a>
            <a href="#servicos" className="button-base button-secondary">Ver serviços <ArrowDown size={16} /></a>
          </div>
        </div>

        <div className="relative mx-auto min-h-[420px] w-full max-w-[560px] animate-in fade-in slide-in-from-right-5 duration-1000 sm:min-h-[560px] lg:min-h-[690px] lg:max-w-[610px] xl:min-h-[720px]">
          <div className="absolute inset-x-[3%] bottom-0 top-0 overflow-hidden rounded-t-[48%] border border-gold/20 bg-champagne shadow-[0_35px_90px_rgba(73,55,43,.18)] lg:inset-x-[5%]">
            <Image src="/hero-salon.png" alt="Mulher com cabelos longos, saudáveis e bem cuidados" fill priority sizes="(max-width: 1024px) 92vw, 48vw" className="object-cover object-[60%_center]" />
            <div className="absolute inset-0 bg-gradient-to-t from-brown/30 via-transparent to-transparent" />
          </div>
          <div className="absolute -left-1 bottom-7 border border-brown/10 bg-background/95 px-5 py-4 shadow-xl backdrop-blur-md sm:-left-5 lg:bottom-8">
            <small className="block text-[10px] font-medium uppercase tracking-[.18em] text-gold">Primeira visita</small>
            <strong className="mt-1 block font-serif text-xl font-light text-brown">Avaliação gratuita para novas clientes</strong>
          </div>
          <span aria-hidden="true" className="absolute -right-2 top-[18%] text-3xl text-gold">✦</span>
        </div>
      </div>
    </section>
  );
}
