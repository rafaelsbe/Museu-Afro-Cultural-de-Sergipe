import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Dancing_Script } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ToastProvider } from "@/components/ToastProvider";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dancing = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://museu-afro-cultural-de-sergipe.vercel.app"
  ),
  title: {
    default: "Museu Afro-Cultural de Sergipe | Memória, Cultura e Educação",
    template: "%s | Museu Afro-Cultural de Sergipe",
  },
  description:
    "Conheça o Museu Afro-Cultural de Sergipe: acervo, memória, cultura afro-brasileira, educação, programação e informações para visitar o museu.",
  openGraph: {
    title: "Museu Afro-Cultural de Sergipe",
    description: "Museu vivo de memória, acolhimento e educação sobre a cultura afro-brasileira em Aracaju.",
    images: [{ url: "/imagesmuseu/banner.jpg", width: 1280, height: 640, alt: "Museu Ilè Asè Alaketù Oyá Igbalè com atabaques" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/imagesmuseu/banner.jpg"],
  },
  icons: {
    icon: "/logo-museu.png",
    shortcut: "/logo-museu.png",
    apple: "/logo-museu.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${montserrat.variable} ${dancing.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <a href="#main-content" className="skip-link">
          Pular para o conteúdo
        </a>
        <ToastProvider>
          <Navbar />
          <div id="main-content" className="flex-1">{children}</div>
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
