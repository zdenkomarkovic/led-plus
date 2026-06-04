import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="pocetna"
      className="relative h-screen md:min-h-screen md:h-auto flex items-end overflow-hidden bg-ice"
    >
      {/* Background: mobilni */}
      <div className="absolute inset-0 z-0 md:hidden">
        <Image
          src="/heromob.png"
          alt="LED Plus 2kg i 4kg pakovanje"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
      </div>

      {/* Background: desktop */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <Image
          src="/hero.png"
          alt="LED Plus 2kg i 4kg pakovanje"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
      </div>

      {/* Desktop sadržaj */}
      <div className="hidden md:block relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-20 w-full">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 rounded-full px-4 py-1.5 mb-6">
            <SnowflakeIcon />
            <span className="text-primary text-sm font-bold tracking-[0.15em]">LED ZA RASHLADU PIĆA</span>
          </div>

          <h1
            className="font-heading text-6xl lg:text-7xl font-bold text-navy leading-[1.05] mb-6 uppercase"
            style={{ fontFamily: "var(--font-barlow), sans-serif" }}
          >
            KRISTALNO ČIST
            <br />
            <span className="text-primary">LED ZA PONETI</span>
          </h1>

          <p className="text-navy font-semibold text-lg leading-relaxed mb-8">
            LED PLUS obezbeđuje vrhunski kvalitet leda za restorane, klubove,
            kafiće, prodavnice i sve koji žele savršeno rashlađeno piće.
            Isporuka u Zaječaru i celoj Istočnoj Srbiji.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-7 py-3.5 rounded transition-all duration-200 hover:shadow-lg hover:shadow-primary/30 uppercase tracking-wide"
              style={{ fontFamily: "var(--font-barlow), sans-serif" }}
            >
              KONTAKTIRAJTE NAS
              <ArrowIcon />
            </a>
          </div>

          <div className="flex gap-4 mt-10">
            <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-navy/15 rounded-xl px-4 py-2.5">
              <SnowflakeSmIcon />
              <span className="text-navy font-bold text-sm">2kg pakovanje</span>
            </div>
            <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-navy/15 rounded-xl px-4 py-2.5">
              <SnowflakeSmIcon />
              <span className="text-navy font-bold text-sm">4kg pakovanje</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobilni: naslov gore, dugme + tekst dole */}
      <div className="md:hidden relative z-10 w-full h-full flex flex-col">
        {/* Gore: badge + naslov */}
        <div className="px-4 pt-20">
          <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 rounded-full px-4 py-1.5 mb-4">
            <SnowflakeIcon />
            <span className="text-primary text-sm font-bold tracking-[0.15em]">LED ZA RASHLADU PIĆA</span>
          </div>
          <h1
            className="font-heading text-4xl font-bold text-navy leading-[1.05] uppercase"
            style={{ fontFamily: "var(--font-barlow), sans-serif" }}
          >
            KRISTALNO ČIST
            <br />
            <span className="text-primary">LED ZA PONETI</span>
          </h1>
        </div>

        {/* Dole: dugme + tekst */}
        <div className="mt-auto px-4 pb-[30px] flex flex-col gap-3">
          <div>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-5 py-2.5 rounded transition-colors uppercase tracking-wide text-sm"
              style={{ fontFamily: "var(--font-barlow), sans-serif" }}
            >
              KONTAKTIRAJTE NAS
              <ArrowIcon />
            </a>
          </div>
          <p className="text-navy font-semibold text-sm leading-relaxed">
            LED PLUS obezbeđuje vrhunski kvalitet leda za restorane, klubove,
            kafiće, prodavnice i sve koji žele savršeno rashlađeno piće.
            Isporuka u Zaječaru i celoj Istočnoj Srbiji.
          </p>
        </div>
      </div>
    </section>
  );
}

function SnowflakeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
      <path d="M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22v-2z" />
    </svg>
  );
}

function SnowflakeSmIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
      <path d="M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22v-2z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
    </svg>
  );
}
