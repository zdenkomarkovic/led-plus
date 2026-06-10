import Image from "next/image";

const partners = [
  {
    src: "/tis.jpg",
    alt: "LED Plus u Tis marketima – led za rashladu pića",
  },
  {
    src: "/tekijanka.jpg",
    alt: "LED Plus u Tekijanka marketima – led za rashladu pića",
  },
  {
    src: "/sova.jpg",
    alt: "LED Plus u Sova marketima – led za rashladu pića",
  },
];

export default function PartnersSection() {
  return (
    <section id="nasi-partneri" className="bg-navy-card">
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
            Veruju nam marketi, noćni klubovi, festivali i ugostiteljski objekti širom Istočne
            Srbije.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          {partners.map((p) => (
            <div key={p.src} className="relative rounded-xl overflow-hidden group aspect-square">
              <Image
                src={p.src}
                alt={p.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-navy/10 group-hover:bg-navy/0 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
