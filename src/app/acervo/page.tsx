import Image from "next/image";
import Link from "next/link";

const collections = [
  { href: "/acervo/objetos-de-axe", number: "Coleção 01", title: "Objetos de axé", description: "Peças ritualísticas e objetos de uso cotidiano.", src: "/imagesmuseu/IMG-20260817-WA0251.jpg", alt: "Fios de conta, objetos de axé do acervo" },
  { href: "/acervo/vestuario", number: "Coleção 02", title: "Vestuário", description: "Indumentárias, tecidos e símbolos de identidade.", src: "/imagesmuseu/IMG-20260817-WA0265.jpg", alt: "Arara com saias vermelhas do acervo" },
  { href: "/acervo/arquivo-oral", number: "Coleção 03", title: "Arquivo oral", description: "Depoimentos, cantos e histórias compartilhadas.", src: "/imagesmuseu/IMG-20260817-WA0262.jpg", alt: "Mão tocando fotografia antiga, memória e transmissão oral" },
];

export default function Acervo() {
  return (
    <main className="museum-page">
      <section className="container page-section">
        <div className="section-intro"><p className="eyebrow">Coleção viva</p><h1>Acervo</h1><p>Objetos, imagens e narrativas que preservam a memória do terreiro e da comunidade. Cada peça poderá receber foto, descrição, origem e créditos.</p></div>
        <div className="editorial-grid">
          {collections.map((collection, index) => <Link className={`editorial-card editorial-card-link relative aspect-[3/4] overflow-hidden p-0 ${index === 0 ? "accent" : ""}`} href={collection.href} key={collection.title}>
            <Image src={collection.src} alt={collection.alt} fill sizes="(max-width: 700px) 100vw, 33vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/60 to-foreground/10" />
            <div className="collection-card-copy relative z-10 p-6 text-white"><span className="eyebrow">{collection.number}</span><h2>{collection.title}</h2><p>{collection.description}</p><span className="card-arrow">Explorar coleção ↗</span></div>
          </Link>)}
        </div>
      </section>
    </main>
  );
}
