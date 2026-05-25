import Image from "next/image";
import { WHATSAPP_URL } from "@/lib/constants";

const features2kg = [
  "Kristalno čist, bez mirisa i aditiva",
  "Idealno za barove, kafiće i restorane",
  "Praktično za nošenje – ručka na kesi",
  "Dostupno u Zaječaru i okolini",
  "Direktna dostava na vrata",
];

const features4kg = [
  "Za veće ugostiteljske objekte",
  "Hoteli, noćni klubovi, pabovi",
  "Ekonomičnija opcija za veće količine",
  "Kristalno čist led, kao i 2kg",
];

export default function PackagingSection() {
  return (
    <section id="pakovanja" className="bg-ice">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <p className="text-primary font-bold tracking-[0.2em] text-sm mb-3 uppercase">
            Naša ponuda
          </p>
          <h2
            className="font-heading text-4xl sm:text-5xl font-bold text-navy uppercase mb-4"
            style={{ fontFamily: "var(--font-barlow), sans-serif" }}
          >
            NAŠA PAKOVANJA
          </h2>
          <p className="text-navy/60 max-w-xl mx-auto">
            Praktična pakovanja za kućnu upotrebu i za profesionalce u
            ugostiteljstvu. Kristalno čist led, uvek spreman.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* 2kg – featured */}
          <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-primary/20 flex flex-col">
            <div className="absolute top-4 right-4 z-10 bg-primary text-white text-sm font-bold px-3 py-1 rounded-full">
              NAJPOPULARNIJE
            </div>
            <div className="flex items-center justify-center py-10 px-8">
              <Image
                src="/1000008348.png"
                alt="LED Plus 2kg – ugostiteljski led za rashladu pića"
                width={340}
                height={340}
                className="h-64 w-auto object-contain rounded-lg"
              />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-baseline gap-3 mb-4">
                <h3
                  className="font-heading text-4xl font-bold text-navy uppercase"
                  style={{ fontFamily: "var(--font-barlow), sans-serif" }}
                >
                  PAKOVANJE 2KG
                </h3>
                <span className="text-primary font-bold text-lg">
                  Ugostiteljski led
                </span>
              </div>
              <p className="text-navy/60 mb-6">
                Savršeno za restorane, kafiće, barove i svakodnevnu upotrebu.
                Lako za nošenje, ručka na kesi. Dostupno u prodavnicama i
                direktnom dostavom.
              </p>
              <ul className="space-y-2 mb-8 flex-1">
                {features2kg.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <CheckIcon />
                    <span className="text-navy/70">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 uppercase tracking-wide"
                style={{ fontFamily: "var(--font-barlow), sans-serif" }}
              >
                NARUČI NA WHATSAPP
              </a>
            </div>
          </div>

          {/* 4kg */}
          <div className="relative bg-navy rounded-2xl overflow-hidden shadow-xl flex flex-col">
            <div className="flex items-center justify-center py-10 px-8">
              <Image
                src="/1000008904.png"
                alt="LED Plus 4kg – kristalno čist ugostiteljski led za rashladu pića"
                width={340}
                height={340}
                className="h-64 w-auto object-contain rounded-lg"
              />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-baseline gap-3 mb-4">
                <h3
                  className="font-heading text-4xl font-bold text-white uppercase"
                  style={{ fontFamily: "var(--font-barlow), sans-serif" }}
                >
                  PAKOVANJE 4KG
                </h3>
                <span className="text-accent font-bold text-lg">
                  Veće količine
                </span>
              </div>
              <p className="text-white/55 mb-6">
                Idealno za veće ugostiteljske objekte kojima je potrebna veća
                količina leda. Ekonomičnija opcija, isti kvalitet.
              </p>
              <ul className="space-y-2 mb-8 flex-1">
                {features4kg.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <CheckIconLight />
                    <span className="text-white/65">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-white/30 hover:border-accent hover:text-accent text-white font-bold py-3.5 rounded-xl transition-all duration-200 uppercase tracking-wide"
                style={{ fontFamily: "var(--font-barlow), sans-serif" }}
              >
                NARUČI NA WHATSAPP
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-primary shrink-0"
    >
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
    </svg>
  );
}

function CheckIconLight() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-accent shrink-0"
    >
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
    </svg>
  );
}
