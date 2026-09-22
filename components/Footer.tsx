import Image from "next/image";
import { INSTAGRAM_URL, NAV_LINKS, WHATSAPP_URL } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-brown pb-24 pt-16 text-white sm:pb-8">
      <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-10 border-b border-white/12 pb-12 md:grid-cols-[1fr_1fr_auto]">
        <div>
          <div className="relative h-20 w-[260px] max-w-full bg-background px-4">
            <Image src="/logo.png" alt="Espelho Meu by Patrícia Vianna" fill sizes="260px" className="object-contain" />
          </div>
          <small className="mt-4 block text-[10px] tracking-[.16em] text-white/50">PATRÍCIA VIANNA · ESTILISTA CAPILAR</small>
        </div>
        <div className="text-sm leading-7 text-white/60">
          <p>Rua Camboriú, 28<br />Alípio de Melo<br />Belo Horizonte, MG</p>
          <p className="mt-3"><a href="tel:+5531987358464" className="hover:text-gold-soft">(31) 98735-8464</a><br /><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-gold-soft">@patriciaviannaestilistacapilar</a></p>
        </div>
        <nav className="flex flex-col gap-2 text-sm" aria-label="Links do rodapé">
          {NAV_LINKS.map(([label, href]) => <a key={href} href={href} className="text-white/65 hover:text-gold-soft">{label}</a>)}
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="mt-2 text-gold-soft">Agendar horário</a>
        </nav>
      </div>
      <div className="mx-auto flex w-[min(1180px,calc(100%-32px))] flex-col gap-3 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Patrícia Vianna Estilista Capilar · Espelho Meu.</p>
        <a href="#inicio" className="hover:text-white">Voltar ao topo ↑</a>
      </div>
    </footer>
  );
}
