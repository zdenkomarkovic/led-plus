import Image from "next/image";
import { WHATSAPP_URL } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section
      id="pocetna"
      className="relative h-screen md:min-h-screen md:h-auto flex items-start overflow-hidden bg-ice"
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
      <div className="hidden md:block relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 rounded-full px-4 py-1.5 mb-6">
            <SnowflakeIcon />
            <span className="text-primary text-sm font-bold tracking-[0.15em]">LED ZA PONETI</span>
          </div>

          <h1
            className="font-heading text-6xl lg:text-7xl font-bold text-navy leading-[1.05] mb-6 uppercase"
            style={{ fontFamily: "var(--font-barlow), sans-serif" }}
          >
            KRISTALNO ČIST
            <br />
            <span className="text-primary">LED ZA RASHLADU</span>
            <br />
            PIĆA
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
              PORUČI ODMAH
              <ArrowIcon />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-primary/50 hover:border-primary hover:bg-primary hover:text-white text-primary font-bold px-7 py-3.5 rounded transition-all duration-200 uppercase tracking-wide bg-white/60"
              style={{ fontFamily: "var(--font-barlow), sans-serif" }}
            >
              <WhatsAppSmIcon />
              WHATSAPP
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

      {/* Mobilni: naslov gore, dugmici + tekst dole */}
      <div className="md:hidden relative z-10 w-full h-full flex flex-col">
        {/* Gore: badge + naslov */}
        <div className="px-4 pt-20">
          <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 rounded-full px-4 py-1.5 mb-4">
            <SnowflakeIcon />
            <span className="text-primary text-sm font-bold tracking-[0.15em]">LED ZA PONETI</span>
          </div>
          <h1
            className="font-heading text-4xl font-bold text-navy leading-[1.05] uppercase"
            style={{ fontFamily: "var(--font-barlow), sans-serif" }}
          >
            KRISTALNO ČIST
            <br />
            <span className="text-primary">LED ZA RASHLADU</span>
            <br />
            PIĆA
          </h1>
        </div>

        {/* Dole: dugmici + tekst */}
        <div className="mt-auto px-4 pb-[30px] flex flex-col gap-3">
          <div className="flex flex-wrap gap-3">
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-5 py-2.5 rounded transition-colors uppercase tracking-wide text-sm"
              style={{ fontFamily: "var(--font-barlow), sans-serif" }}
            >
              PORUČI ODMAH
              <ArrowIcon />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-primary/50 text-primary font-bold px-5 py-2.5 rounded transition-colors uppercase tracking-wide bg-white/60 text-sm"
              style={{ fontFamily: "var(--font-barlow), sans-serif" }}
            >
              <WhatsAppSmIcon />
              WHATSAPP
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

function WhatsAppSmIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
