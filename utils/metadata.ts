import type { Metadata } from "next"

import CONFIG from "@/config"

interface MetadataArgs {
  // Omitted for pages that should not claim a canonical URL, like the 404.
  path?: string
  title: string
  description: string
  ogType?: "website" | "profile"
  noIndex?: boolean
}

const getMetadata = ({
  path,
  title,
  description,
  ogType,
  noIndex,
}: MetadataArgs): Metadata => {
  const metadata: Metadata = {
    title,
    description,

    alternates: path === undefined ? undefined : { canonical: path },

    applicationName: CONFIG.NAME,
    creator: CONFIG.NAME,
    authors: [{ name: CONFIG.NAME, url: `${CONFIG.BASE_URL}/` }],
    robots: noIndex
      ? "noindex, nofollow"
      : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",

    icons: {
      icon: "/favicon.ico",
      apple: "/icons/icon-512x512.png",
    },

    // `images` is deliberately absent from openGraph and twitter: the
    // app/**/opengraph-image.tsx files own og:image and emit its type, width,
    // and height. Declaring it here too would produce duplicate tags.
    openGraph: {
      type: ogType ?? "website",
      url: path === undefined ? undefined : `${CONFIG.BASE_URL}${path}`,
      siteName: CONFIG.NAME,
      title,
      description,
    },

    twitter: {
      card: "summary_large_image",
      site: `@${CONFIG.TWITTER}`,
      creator: `@${CONFIG.TWITTER}`,
      title,
      description,
    },

    // Only the home-screen label, not the document title — iOS truncates
    // anything much past a dozen characters. Matches the manifest. `capable`
    // is spelled out because Next defaults it to true, and there is no PWA:
    // a saved bookmark should open in Safari.
    appleWebApp: { title: "Nirnejak", capable: false },
  }
  return metadata
}

export default getMetadata
