"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b border-brown/10 bg-background/95 shadow-[0_10px_35px_rgba(73,55,43,.07)] backdrop-blur-xl transition-all duration-300 lg:border-b-0 lg:bg-transparent lg:shadow-none ${scrolled ? "lg:border-b lg:border-brown/10 lg:bg-background/95 lg:shadow-[0_10px_35px_rgba(73,55,43,.07)] lg:backdrop-blur-xl" : ""}`}>
      <nav className="site-container flex h-[74px] items-center justify-between" aria-label="Navegação principal">
        <a href="#inicio" className="flex items-center gap-3 no-underline" onClick={() => setOpen(false)}>
          <span className="relative block h-12 w-[156px] sm:w-[190px]">
            <Image src="/logo.png" alt="Espelho Meu by Patrícia Vianna" fill priority sizes="190px" className="object-contain object-left" />
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map(([label, href]) => <a key={href} href={href} className="text-sm font-medium text-ink/75 transition hover:text-gold">{label}</a>)}
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="button-base button-primary min-h-11 px-5 py-2.5">Agendar horário</a>
        </div>

        <button type="button" className="grid size-11 place-items-center text-brown lg:hidden" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <div className={`absolute inset-x-4 top-[70px] border border-brown/10 bg-background p-4 shadow-2xl transition-all lg:hidden ${open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"}`}>
        <div className="flex flex-col">
          {NAV_LINKS.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="border-b border-brown/10 px-2 py-3.5 font-medium">{label}</a>)}
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="button-base button-primary mt-4">Agendar horário</a>
        </div>
      </div>
    </header>
  );
}
