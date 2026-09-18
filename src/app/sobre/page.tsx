import Image from "next/image";

export default function Sobre() {
  return (
    <main className="museum-page">
      <section className="page-hero">
        <div className="container page-hero-content">
          <p className="eyebrow">Nossa casa, nossa memória</p>
          <h1>Um museu vivo de cultura e ancestralidade</h1>
          <p className="lead">Um espaço de acolhimento, pesquisa e educação dedicado à força da cultura afro-brasileira.</p>
        </div>
      </section>
      <section className="relative aspect-[2/1] w-full overflow-hidden" aria-label="Fachada visual do museu">
        <Image src="/imagesmuseu/banner.jpg" alt="Logo do Museu Ilè Asè Alaketù Oyá Igbalè e atabaques" fill sizes="100vw" className="object-cover" />
      </section>
      <section className="container content-grid section-space">
        <div><p className="eyebrow">O Museu</p><h2 className="display-heading">A história que continua sendo escrita</h2></div>
        <div className="prose-block"><p>Este é o lugar para contar a história do museu, do barracão e das entidades que dão sentido a este território.</p><p>Inclua aqui a trajetória da comunidade, os marcos importantes e as pessoas que preservam estes saberes para as próximas gerações.</p></div>
      </section>
      <section className="container feature-grid section-space">
        {[
          { title: 'Memória', src: '/imagesmuseu/IMG-20260817-WA0262.jpg', alt: 'Mão tocando fotografia antiga emoldurada, gesto de memória' },
          { title: 'Acolhimento', src: '/imagesmuseu/IMG-20260817-WA0277.jpg', alt: 'Garrafa térmica e xícaras coloridas em uma bandeja' },
          { title: 'Educação', src: '/imagesmuseu/IMG-20260817-WA0250.jpg', alt: 'Salão expositivo onde acontecem as visitas guiadas' },
        ].map(({ title, src, alt }, index) => <article className="feature-card" key={title}><div className="relative aspect-square overflow-hidden"><Image src={src} alt={alt} fill sizes="(max-width: 700px) 100vw, 33vw" className="object-cover" /></div><span className="feature-number">0{index + 1}</span><h3>{title}</h3><p>Conteúdo editorial, imagens e depoimentos entram aqui para apresentar a essência do museu.</p></article>)}
      </section>
    </main>
  );
}
