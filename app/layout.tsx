import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";
import { SITE_NAME, SITE_URL, PHONE, EMAIL, INSTAGRAM, FACEBOOK } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLd";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-barlow",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const OG_DESCRIPTION =
  "LED Plus proizvodi i dostavlja kristalno čist led za restorane, kafiće, klubove i prodavnice u Zaječaru, Boru, Knjaževcu, Sokobanji, Negotinu i celoj Istočnoj Srbiji.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "LED Plus – Kristalno čist led za rashladu pića",
    template: `%s | ${SITE_NAME}`,
  },
  description: OG_DESCRIPTION,
  keywords: [
    "led za poneti",
    "ugostiteljski led",
    "led za piće",
    "kristalno čist led",
    "led Zaječar",
    "led Bor",
    "led Knjaževac",
    "led Sokobanja",
    "led Negotin",
    "led Istočna Srbija",
    "LED Plus",
    "dostava leda",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "LED Plus – Kristalno čist led za rashladu pića",
    description: OG_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "LED Plus – Kristalno čist led za rashladu pića",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LED Plus – Kristalno čist led za rashladu pića",
    description: OG_DESCRIPTION,
    images: [`${SITE_URL}/og-image.png`],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: SITE_NAME,
  description:
    "Proizvođač i distributer kristalno čistog leda za ugostiteljske objekte i maloprodaju u Istočnoj Srbiji.",
  url: SITE_URL,
  telephone: PHONE,
  email: EMAIL,
  image: `${SITE_URL}/og-image.png`,
  logo: `${SITE_URL}/logo.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Nikole Pašića 169",
    addressLocality: "Zaječar",
    postalCode: "19000",
    addressCountry: "RS",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.9011,
    longitude: 22.2939,
  },
  areaServed: [
    { "@type": "City", name: "Zaječar" },
    { "@type": "City", name: "Bor" },
    { "@type": "City", name: "Knjaževac" },
    { "@type": "City", name: "Sokobanja" },
    { "@type": "City", name: "Negotin" },
  ],
  sameAs: [INSTAGRAM, FACEBOOK],
  priceRange: "$$",
  currenciesAccepted: "RSD",
  paymentAccepted: "Gotovina",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="sr"
      className={`${barlowCondensed.variable} ${inter.variable}`}
    >
      <body
        className="antialiased"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        <JsonLd data={localBusinessSchema} />
        {children}
      </body>
    </html>
  );
}
