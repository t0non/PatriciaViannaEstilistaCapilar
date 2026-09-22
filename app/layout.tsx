import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://espelho-meu-patricia-bh.eduardosoarestonon.chatgpt.site"),
  title: "Patrícia Vianna Estilista Capilar em Alípio de Melo | Belo Horizonte",
  description:
    "Agende com Patrícia Vianna Estilista Capilar em Alípio de Melo, Belo Horizonte. Corte feminino, cachos, penteados, cor e tratamento capilar com avaliação profissional.",
  keywords: [
    "Patrícia Vianna estilista capilar",
    "estilista capilar em Belo Horizonte",
    "estilista capilar Alípio de Melo",
    "Patrícia Vianna Alípio de Melo",
    "Patrícia Vianna Belo Horizonte",
    "estilista de cabelo Belo Horizonte",
    "salão de beleza Alípio de Melo",
    "corte feminino Alípio de Melo",
    "tratamento capilar Alípio de Melo",
    "tratamento capilar Belo Horizonte",
    "mechas sem descolorante Belo Horizonte",
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
    title: "Patrícia Vianna Estilista Capilar em Alípio de Melo",
    description: "Patrícia Vianna Estilista Capilar em Belo Horizonte, com avaliação gratuita para novas clientes, corte feminino, cachos, cor, penteados e tratamentos.",
    type: "website",
    locale: "pt_BR",
    siteName: "Espelho Meu by Patrícia Vianna",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
