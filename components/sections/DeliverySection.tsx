import Image from "next/image";
import { PHONE, PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/constants";

const steps = [
  {
    num: "01",
    title: "Kontaktirajte nas",
    desc: "Pozovite ili pišite na WhatsApp – odmah ćemo odgovoriti.",
  },
  {
    num: "02",
    title: "Dogovorimo termin",
    desc: "Prilagođavamo se vašem rasporedu – jutro, poslepodne ili veče.",
  },
  {
    num: "03",
    title: "Dostava u vašim marketima",
    desc: "Svež, kristalno čist led stiže direktno do vašeg marketa.",
  },
];

export default function DeliverySection() {
  return (
    <section id="dostava" className="bg-ice">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-primary font-bold tracking-[0.2em] text-sm mb-3 uppercase">
              Logistika
            </p>
            <h2
              className="font-heading text-4xl sm:text-5xl font-bold text-navy uppercase mb-5"
              style={{ fontFamily: "var(--font-barlow), sans-serif" }}
            >
              BRZA I POUZDANA
              <br />
              DOSTAVA
            </h2>
            <p className="text-navy/60 mb-10 leading-relaxed">
              Naša vozila su svakodnevno na terenu. Dostavljamo u Zaječar, Bor,
              Knjaževac, Sokobanji, Negotin i širu oblast Istočne Srbije.
              Pouzdano i na vreme – svaki put.
            </p>

            <div className="space-y-6 mb-10">
              {steps.map((s) => (
                <div key={s.num} className="flex gap-5 items-start">
                  <div
                    className="shrink-0 font-heading font-bold text-3xl text-primary/25 leading-none w-10 text-right"
                    style={{ fontFamily: "var(--font-barlow), sans-serif" }}
                  >
                    {s.num}
                  </div>
                  <div>
                    <div className="font-bold text-navy mb-1">{s.title}</div>
                    <div className="text-navy/55 text-sm">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/IMG-7598692a31aeb12b2f901a1a54124254-V.jpg"
              alt="LED Plus dostava – vozilo isporučuje led na event"
              width={600}
              height={500}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="inline-flex items-center gap-3 bg-navy-deep/80 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-3">
                <TruckIcon />
                <div>
                  <div className="text-white font-bold text-sm">
                    Dostupno svaki dan
                  </div>
                  <div className="text-accent text-xs">{PHONE_DISPLAY}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-accent">
      <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
    </svg>
  );
}
