import Image from "next/image";

const partners = [
  {
    src: "/1000008350.png",
    alt: "LED Plus u Sokopromer marketima – led za rashladu pića",
  },
  {
    src: "/1000008378.png",
    alt: "LED Plus snabdeva Buna Festival – dostava leda na event",
  },
  {
    src: "/1000008352.png",
    alt: "LED Plus u Beli Dren marketu – led za poneti",
  },
  {
    src: "/1000008711.png",
    alt: "LED Plus u Marketi Bogdanović – ugostiteljski led",
  },
];

export default function PartnersSection() {
  return (
    <section className="bg-navy-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <p className="text-accent font-bold tracking-[0.2em] text-sm mb-3 uppercase">
            Naši klijenti
          </p>
          <h2
            className="font-heading text-4xl sm:text-5xl font-bold text-white uppercase mb-4"
            style={{ fontFamily: "var(--font-barlow), sans-serif" }}
          >
            NAŠI PARTNERI
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Veruju nam marketi, noćni klubovi, festivali i ugostiteljski objekti
            širom Istočne Srbije.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {partners.map((p) => (
            <div
              key={p.src}
              className="relative rounded-xl overflow-hidden group aspect-square"
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-navy/30 group-hover:bg-navy/10 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
