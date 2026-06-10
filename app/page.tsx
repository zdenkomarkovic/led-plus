import { buildMetadata } from "@/lib/metadata";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import PackagingSection from "@/components/sections/PackagingSection";
import CoverageSection from "@/components/sections/CoverageSection";
import PartnersSection from "@/components/sections/PartnersSection";
import ClientTypesSection from "@/components/sections/ClientTypesSection";
import DeliverySection from "@/components/sections/DeliverySection";
import ContactSection from "@/components/sections/ContactSection";
import ProizvodnjaDoPazaraSection from "@/components/sections/ProizvodnjaDoPazaraSection";

export const metadata = buildMetadata({
  title: "LED Plus – Kristalno čist led za rashladu pića",
  description:
    "LED Plus proizvodi i dostavlja kristalno čist led za restorane, kafiće, klubove i prodavnice u Zaječaru, Boru, Knjaževcu, Sokobanji, Negotinu i celoj Istočnoj Srbiji.",
});

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* TAMNA sekcija */}
        <HeroSection />
        {/* TAMNA sekcija */}
        <FeaturesSection />
        {/* TAMNA sekcija */}
        <ClientTypesSection />
        {/* SVETLA sekcija */}
        <PackagingSection />
        {/* SVETLA sekcija */}
        {/* <CoverageSection /> */}
        {/* TAMNA sekcija */}
        <ProizvodnjaDoPazaraSection />
        <PartnersSection />
        {/* SVETLA sekcija */}
        <DeliverySection />
        {/* TAMNA sekcija */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
