import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PillButton } from "@/components/ui/PillButton";

const galleryImages = [
  {
    src: "/imagesmuseu/pintur1.jpg",
    alt: "Pintura de orixá em moldura dourada no acervo",
    className: "col-span-1 row-span-2",
    height: "h-[420px]",
    objectPosition: "center 42%",
  },
  {
    src: "/imagesmuseu/IMG-20260817-WA0251.jpg",
    alt: "Fios de conta sobre toalha de renda",
    className: "col-span-1",
    height: "h-[200px]",
    objectPosition: "center center",
  },
  {
    src: "/imagesmuseu/IMG-20260817-WA0262.jpg",
    alt: "Mão tocando fotografia antiga emoldurada",
    className: "col-span-2 md:col-span-2",
    height: "h-[200px]",
    objectPosition: "center center",
  },
  {
    src: "/imagesmuseu/IMG-20260817-WA0265.jpg",
    alt: "Saias vermelhas penduradas no acervo",
    className: "col-span-1 row-span-2",
    height: "h-[420px]",
    objectPosition: "center center",
  },
  {
    src: "/imagesmuseu/IMG-20260817-WA0270.jpg",
    alt: "Parede rosa com quadro, vaso turquesa e arara",
    className: "col-span-1",
    height: "h-[420px]",
    objectPosition: "center center",
  },
  {
    src: "/imagesmuseu/IMG-20260817-WA0250.jpg",
    alt: "Visão geral do salão expositivo",
    className: "col-span-1 md:col-span-2",
    height: "h-[200px]",
    objectPosition: "center 40%",
  },
];

export function Gallery() {
  return (
    <section className="relative overflow-hidden px-6 py-16 md:px-12 lg:px-16 lg:py-24">
      <div
  className="absolute inset-0 bg-cover bg-center"
  style={{ backgroundColor: "var(--foreground)" }}
/>
<div className="absolute inset-0 bg-foreground/80" />


      <div className="absolute -top-px left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0C360 80 720 80 1080 0C1260 40 1380 60 1440 80V0H0Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl pt-8">
        <div className="mb-12 text-center text-white">
          <p className="font-script text-2xl text-script-pink md:text-3xl">Acervo</p>
          <h2 className="font-serif text-3xl font-bold uppercase tracking-wide md:text-4xl lg:text-5xl">
            Galeria do Museu
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/70">
            Peças ritualísticas, vestimentas sagradas e objetos que contam a história
            viva do Candomblé brasileiro.
          </p>
        </div>

        <div className="relative">
          <span className="absolute -left-4 top-1/4 z-10 h-6 w-6 rounded-full bg-primary" />
          <span className="absolute right-8 top-12 z-10 h-4 w-4 rounded-full bg-primary" />
          <span className="absolute bottom-20 left-1/3 z-10 h-3 w-3 rounded-full bg-primary" />
          <span className="absolute -right-2 bottom-1/3 z-10 h-8 w-8 rounded-full bg-primary" />

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
            {galleryImages.map((img) => (
              <div
                key={img.alt}
                className={`relative overflow-hidden border border-white/15 ${img.className} ${img.height}`}
              >
                <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" style={{ objectPosition: img.objectPosition }} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <PillButton href="/acervo" variant="primary">
            Ver Acervo Completo
            <ArrowRight size={14} />
          </PillButton>
        </div>
      </div>

      <div className="absolute -bottom-px left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80C360 0 720 0 1080 80C1260 40 1380 20 1440 0V80H0Z"
            fill="#f5f0eb"
          />
        </svg>
      </div>
    </section>
  );
}
