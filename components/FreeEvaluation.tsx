import { CalendarHeart, Search, Sparkles } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";
import { Reveal } from "./Reveal";

export function FreeEvaluation() {
  return (
    <section className="bg-[#F3E9D8] py-24 sm:py-28 lg:py-32">
      <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
        <Reveal>
          <div className="relative overflow-hidden border border-brown/15 bg-[#FAF6EE] px-6 py-14 text-center shadow-[0_30px_80px_rgba(73,55,43,.10)] sm:px-12 sm:py-20">
            <span aria-hidden="true" className="absolute -left-32 -top-32 size-72 rounded-full border border-gold/15" />
            <span aria-hidden="true" className="absolute -bottom-32 -right-32 size-72 rounded-full border border-gold/15" />
            <p className="text-[12px] font-bold uppercase tracking-[.22em] text-gold">Para novas clientes</p>
            <h2 className="mx-auto mt-4 max-w-4xl font-serif text-[clamp(3rem,7vw,6rem)] font-normal leading-[.96] tracking-[-.04em] text-ink">Sua primeira avaliação é gratuita.</h2>
            <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-8 text-ink/65">Na primeira visita, você recebe uma avaliação capilar e um diagnóstico do couro cabeludo para entender melhor as necessidades dos seus fios.</p>

            <div className="mx-auto mt-10 grid max-w-3xl items-center gap-5 sm:grid-cols-[1fr_auto_1fr]">
              <div className="border border-brown/15 bg-white/60 px-6 py-6"><CalendarHeart className="mx-auto text-olive" strokeWidth={1.4} /><strong className="mt-3 block text-sm uppercase tracking-[.12em] text-brown">Avaliação capilar</strong></div>
              <span className="font-serif text-3xl text-gold">+</span>
              <div className="border border-brown/15 bg-white/60 px-6 py-6"><Search className="mx-auto text-olive" strokeWidth={1.4} /><strong className="mt-3 block text-sm uppercase tracking-[.12em] text-brown">Diagnóstico do couro cabeludo</strong></div>
            </div>
            <p className="mt-7 inline-flex items-center gap-2 font-serif text-3xl text-gold"><Sparkles size={22} /> Gratuitos</p>
            <div className="mt-8"><a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex min-h-14 items-center justify-center bg-brown px-7 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-olive">Agendar minha avaliação gratuita</a></div>
            <p className="mt-4 text-xs text-ink/50">Entre em contato pelo WhatsApp para consultar horários disponíveis.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
