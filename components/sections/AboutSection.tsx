import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="o-nama" className="bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <p className="text-accent font-bold tracking-[0.2em] text-sm mb-3 uppercase">
            Ko smo mi
          </p>
          <h2
            className="font-heading text-4xl sm:text-5xl font-bold text-white uppercase mb-4"
            style={{ fontFamily: "var(--font-barlow), sans-serif" }}
          >
            LED ZA SVAKU NAMENU
          </h2>
          <p className="text-white/55 max-w-xl mx-auto">
            LED PLUS je vaš pouzdan partner za kristalno čist led u Zaječaru i
            celoj Istočnoj Srbiji.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Profesionalci */}
          <div className="relative rounded-2xl overflow-hidden group">
            <div className="aspect-[4/3] relative">
              <Image
                src="/1000008382.png"
                alt="LED Plus – dostava leda za noćne klubove i ugostiteljske objekte"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy/50 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="inline-flex items-center gap-2 bg-primary/25 border border-primary/40 rounded-full px-3 py-1 mb-3">
                <span className="text-accent text-xs font-bold tracking-widest">
                  UGOSTITELJSTVO
                </span>
              </div>
              <h3
                className="font-heading text-3xl font-bold text-white uppercase mb-2"
                style={{ fontFamily: "var(--font-barlow), sans-serif" }}
              >
                LED ZA PROFESIONALCE
              </h3>
              <p className="text-white/65 text-sm leading-relaxed">
                Idealan za pića, kafiće, klubove, hotele i sve ugostiteljske
                objekte. Tačna isporuka, uvek na vreme.
              </p>
            </div>
          </div>

          {/* Svaka Prilika */}
          <div className="relative rounded-2xl overflow-hidden group">
            <div className="aspect-[4/3] relative">
              <Image
                src="/Gemini_Generated_Image_2zfz9e2zfz9e2zfz.png"
                alt="LED Plus – pouzdan partner za sve vaše proslave i evente"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy/50 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="inline-flex items-center gap-2 bg-primary/25 border border-primary/40 rounded-full px-3 py-1 mb-3">
                <span className="text-accent text-xs font-bold tracking-widest">
                  EVENTI I PROSLAVE
                </span>
              </div>
              <h3
                className="font-heading text-3xl font-bold text-white uppercase mb-2"
                style={{ fontFamily: "var(--font-barlow), sans-serif" }}
              >
                IDEALNO ZA SVAKU PRILIKU
              </h3>
              <p className="text-white/65 text-sm leading-relaxed">
                Bilo da pravite koktel, organizujete proslavu ili žurite kod
                kuće – LED Plus je tu za vas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
