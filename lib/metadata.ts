import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./constants";

interface BuildMetadataOptions {
  title?: string;
  description?: string;
  /** Putanja do slike za OG (relativna od /public ili apsolutna URL) */
  image?: string;
  /** Canonical URL - ako nije naveden, koristi SITE_URL */
  url?: string;
  /** Da li da noindex ova stranica */
  noIndex?: boolean;
  /** Tip stranice za OG */
  type?: "website" | "article";
  /** Datum objave (za blog postove) */
  publishedTime?: string;
  /** Ako true, naslov se ne formatira kroz template (%s | Site Name) */
  absoluteTitle?: boolean;
}

/**
 * Helper za generisanje Next.js Metadata objekta.
 * Koristiti u svakom page.tsx fajlu.
 *
 * @example
 * // U page.tsx:
 * export const metadata = buildMetadata({
 *   title: "O nama",
 *   description: "Kratki opis stranice",
 * });
 */
export function buildMetadata({
  title,
  description,
  image,
  url,
  noIndex = false,
  type = "website",
  publishedTime,
  absoluteTitle = false,
}: BuildMetadataOptions = {}): Metadata {
  const fullTitle = absoluteTitle
    ? title ?? SITE_NAME
    : title
      ? `${title} | ${SITE_NAME}`
      : SITE_NAME;
  const canonicalUrl = url ?? SITE_URL;
  const ogImage = image ?? `${SITE_URL}/og-image.png`;

  return {
    title: absoluteTitle ? { absolute: fullTitle } : fullTitle,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      type,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      ...(publishedTime && { publishedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
