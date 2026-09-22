import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://espelho-meu-patricia-bh.eduardosoarestonon.chatgpt.site"),
  title: "Patrícia Vianna Estilista Capilar | Belo Horizonte",
  description:
    "Cortes, cachos, mechas, correção de cor, penteados e tratamentos capilares com Patrícia Vianna, estilista capilar em Alípio de Melo, Belo Horizonte.",
  keywords: [
    "Patrícia Vianna estilista capilar",
    "estilista capilar em Belo Horizonte",
    "cabeleireira em Belo Horizonte",
    "cabeleireira no Alípio de Melo",
    "salão de beleza Alípio de Melo",
    "tratamento capilar Belo Horizonte",
    "corte feminino",
    "cachos",
    "mechas sem descolorante",
    "correção de cor",
  ],
  authors: [{ name: "Patrícia Vianna" }],
  creator: "Patrícia Vianna",
  category: "beleza e cuidados capilares",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Patrícia Vianna Estilista Capilar | Belo Horizonte",
    description: "Cuidado personalizado para cortes, cachos, mechas, correção de cor, penteados e tratamentos capilares em Alípio de Melo, Belo Horizonte.",
    type: "website",
    locale: "pt_BR",
    siteName: "Espelho Meu by Patrícia Vianna",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
