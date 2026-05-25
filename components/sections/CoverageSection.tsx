import Image from "next/image";
import { COVERAGE_CITIES } from "@/lib/constants";

export default function CoverageSection() {
  return (
    <section className="bg-ice">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-8 items-start">

          {/* Levo: slika */}
          <div className="relative h-[500px] lg:h-full lg:min-h-[600px] rounded-2xl overflow-hidden">
            <Image
              src="/led2kg.png"
              alt="LED Plus 2kg pakovanje"
              fill
              className="object-contain scale-[1.6] origin-center"
            />
          </div>

          {/* Desno: sadržaj */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-primary font-bold tracking-[0.2em] text-sm mb-3 uppercase">
                Zona dostave
              </p>
              <h2
                className="font-heading text-4xl sm:text-5xl font-bold text-navy uppercase mb-5"
                style={{ fontFamily: "var(--font-barlow), sans-serif" }}
              >
                GDE ISPORUČUJEMO
              </h2>
              <p className="text-navy/60 mb-6 leading-relaxed">
                LED PLUS pokriva Zaječar i celu Istočnu Srbiju. Naša vozila su
                svakodnevno na terenu kako bi vam donela svež led na vreme.
                Kontaktirajte nas i dogovorimo isporuku.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {COVERAGE_CITIES.map((city) => (
                  <div
                    key={city}
                    className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 shadow-sm border border-navy/8"
                  >
                    <LocationDot />
                    <span className="font-semibold text-navy text-sm">{city}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Zašto izabrati nas */}
            <div className="bg-navy rounded-2xl p-8 text-white shadow-xl">
              <h3
                className="font-heading text-2xl font-bold text-white uppercase mb-6"
                style={{ fontFamily: "var(--font-barlow), sans-serif" }}
              >
                ZAŠTO IZABRATI NAS?
              </h3>
              <ul className="space-y-4">
                {reasons.map((r) => (
                  <li key={r.title} className="flex gap-4 items-start">
                    <div className="shrink-0 mt-0.5 p-2 bg-primary/20 rounded-lg text-accent">
                      {r.icon}
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm mb-0.5">{r.title}</div>
                      <div className="text-white/55 text-sm">{r.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

const reasons = [
  {
    icon: <FactoryIcon />,
    title: "Lokalna proizvodnja",
    desc: "Proizvodnja u Zaječaru – svež led direktno od izvora",
  },
  {
    icon: <ClockIcon />,
    title: "Pouzdana isporuka",
    desc: "Dogovoreni termini, nikad zakašnjenja, uvek na vreme",
  },
  {
    icon: <QualityIcon />,
    title: "Vrhunski kvalitet",
    desc: "100% prirodan led od filtrirane vode, bez aditiva",
  },
  {
    icon: <SupportIcon />,
    title: "Lična usluga",
    desc: "Direktan kontakt, brz odgovor, dostava po dogovoru",
  },
];

function LocationDot() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-primary shrink-0">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  );
}

function FactoryIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H7v-2h5v2zm5 0h-4v-2h4v2zm0-4H7v-2h10v2zm0-4H7V7h10v2z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
    </svg>
  );
}

function QualityIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
    </svg>
  );
}
