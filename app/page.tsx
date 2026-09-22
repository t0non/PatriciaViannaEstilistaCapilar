import { About } from "@/components/About";
import { Benefits } from "@/components/Benefits";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { FreeEvaluation } from "@/components/FreeEvaluation";
import { HairTreatment } from "@/components/HairTreatment";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Location } from "@/components/Location";
import { Services } from "@/components/Services";
import { WhatsappButton } from "@/components/WhatsappButton";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  "@id": "https://espelho-meu-patricia-bh.eduardosoarestonon.chatgpt.site/#salao",
  name: "Patrícia Vianna Estilista Capilar",
  alternateName: "Espelho Meu by Patrícia Vianna",
  description:
    "Estilista capilar em Alípio de Melo, Belo Horizonte, com atendimento personalizado para cortes, cachos, penteados, mechas sem descolorante, correção de cor e tratamentos capilares.",
  url: "https://espelho-meu-patricia-bh.eduardosoarestonon.chatgpt.site",
  telephone: "+55 31 98735-8464",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Camboriú, 28, Alípio de Melo",
    addressLocality: "Belo Horizonte",
    addressRegion: "MG",
    addressCountry: "BR",
  },
  areaServed: {
    "@type": "City",
    name: "Belo Horizonte",
  },
  hasMap:
    "https://www.google.com/maps/search/?api=1&query=Rua%20Cambori%C3%BA%2C%2028%2C%20Al%C3%ADpio%20de%20Melo%2C%20Belo%20Horizonte%20MG",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+55 31 98735-8464",
    contactType: "agendamentos",
    availableLanguage: "Portuguese",
  },
  employee: {
    "@type": "Person",
    name: "Patrícia Vianna",
    jobTitle: "Estilista Capilar",
  },
  makesOffer: [
    "Corte feminino personalizado",
    "Cuidados para cachos",
    "Penteados para ocasiões especiais",
    "Mechas sem descolorante",
    "Correção de cor",
    "Restauração e tratamento dos fios",
  ].map((name) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name },
  })),
  sameAs: ["https://www.instagram.com/espelhomeubypatriciavianna"],
};

export default function Home() {
  return (
    <>
      <a href="#conteudo" className="fixed -top-20 left-4 z-[100] bg-brown px-4 py-2 text-sm font-bold text-white focus:top-0">Ir para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Benefits />
        <Services />
        <HairTreatment />
        <FreeEvaluation />
        <About />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsappButton />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
