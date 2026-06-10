import Image from "next/image";

export default function ProizvodnjaDoPazaraSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center gap-10">
        <h2
          className="font-heading text-4xl sm:text-5xl font-bold text-navy uppercase text-center"
          style={{ fontFamily: "var(--font-barlow), sans-serif" }}
        >
          LED PLUS – OD PROIZVODNJE DO MARKETA
        </h2>

        <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/IMG-7c47cc1fb7ae260a07eac14ff27a4201-V.jpg"
            alt="LED Plus – od proizvodnje do marketa"
            width={1200}
            height={800}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
