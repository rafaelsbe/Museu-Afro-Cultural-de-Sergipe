import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const collections = {
  "objetos-de-axe": {
    number: "Coleção 01",
    title: "Objetos de axé",
    summary: "Peças ritualísticas e objetos de uso cotidiano que guardam gestos, histórias e vínculos com a comunidade.",
    description: "Esta coleção reúne objetos que atravessam o cuidado, a celebração e a transmissão de saberes no terreiro. Cada peça é apresentada com atenção à sua materialidade, aos seus usos e às pessoas que ajudam a manter sua memória viva.",
    items: ["Ferramentas e objetos de cuidado", "Peças ligadas às celebrações", "Objetos de uso cotidiano"],
    accent: "var(--secondary-dark)",
  },
  vestuario: {
    number: "Coleção 02",
    title: "Vestuário",
    summary: "Indumentárias, tecidos e símbolos de identidade que expressam pertencimento, proteção e ancestralidade.",
    description: "Tecidos, cores, amarrações e adornos formam uma linguagem própria. Neste conjunto, o vestir aparece como prática de memória e como modo de marcar presenças, histórias e responsabilidades dentro da comunidade.",
    items: ["Tecidos e técnicas de amarração", "Adornos e elementos simbólicos", "Memórias de quem veste"],
    accent: "var(--primary)",
    gallery: [
      { src: "/vestuario/WhatsApp Image 2026-09-18 at 12.55.09.jpeg", alt: "Peça de vestuário do acervo, vista frontal" },
      { src: "/vestuario/WhatsApp Image 2026-09-18 at 12.55.11.jpeg", alt: "Detalhe de tecido e adorno da coleção de vestuário" },
      { src: "/vestuario/WhatsApp Image 2026-09-18 at 12.55.12 (1).jpeg", alt: "Indumentária da coleção de vestuário" },
      { src: "/vestuario/WhatsApp Image 2026-09-18 at 12.55.12 (2).jpeg", alt: "Detalhe de uma peça de vestuário do acervo" },
      { src: "/vestuario/WhatsApp Image 2026-09-18 at 12.55.12.jpeg", alt: "Peças e tecidos da coleção de vestuário" },
      { src: "/vestuario/WhatsApp Image 2026-09-18 at 13.04.01.jpeg", alt: "Fotografia histórica emoldurada com pessoa vestida de branco" },
    ],
  },
  "arquivo-oral": {
    number: "Coleção 03",
    title: "Arquivo oral",
    summary: "Depoimentos, cantos e histórias compartilhadas por quem constrói a memória do museu.",
    description: "O arquivo oral preserva vozes, ritmos e lembranças que não cabem apenas em objetos. São narrativas registradas com a comunidade para que diferentes gerações possam escutar e continuar contando essas histórias.",
    items: ["Depoimentos de mestras e mestres", "Cantos e registros sonoros", "Histórias do território"],
    accent: "var(--gold)",
  },
} as const;

type CollectionSlug = keyof typeof collections;

type Props = {
  params: Promise<{ colecao: string }>;
};

export default async function CollectionPage({ params }: Props) {
  const { colecao } = await params;

  if (!(colecao in collections)) {
    notFound();
  }

  const collection = collections[colecao as CollectionSlug];

  return (
    <main className="museum-page">
      <section className="page-hero">
        <div className="container page-hero-content">
          <Link className="back-link" href="/acervo">← Voltar ao acervo</Link>
          <p className="eyebrow">{collection.number}</p>
          <h1>{collection.title}</h1>
          <p className="hero-summary">{collection.summary}</p>
        </div>
      </section>

      {"gallery" in collection && collection.gallery.length > 0 && (
        <section className="container collection-gallery section-space" aria-labelledby="vestuario-galeria">
          <div className="section-intro">
            <p className="eyebrow">Registro visual</p>
            <h2 id="vestuario-galeria">Peças da coleção</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[220px_220px_260px]">
            {collection.gallery.map((image, index) => (
              <figure className={`relative min-h-[260px] overflow-hidden border-[10px] border-[#5b3024] bg-[#eadfce] p-2 shadow-[0_18px_32px_rgba(72,45,28,0.22)] ring-1 ring-[#3e211a]/35 transition-transform duration-300 hover:-translate-y-1 sm:aspect-[4/5] lg:min-h-0 lg:aspect-auto ${
                index === 0 ? "lg:col-span-1 lg:row-span-2" : ""
              } ${
                index === 5 ? "lg:col-span-3 lg:row-span-1" : ""
              }`} key={image.src}>
                <div className="absolute inset-2 overflow-hidden border border-[#b89062] bg-[#f7f1e8]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </figure>
            ))}
          </div>
        </section>
      )}

      <section className="container collection-detail section-space">
        <div className="collection-detail-copy">
          <p className="eyebrow">Sobre a coleção</p>
          <p className="prose-block">{collection.description}</p>
        </div>
        <div className="collection-items" style={{ borderTopColor: collection.accent }}>
          <p className="eyebrow">Nesta coleção</p>
          <ul>
            {collection.items.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

    </main>
  );
}
