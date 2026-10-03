import type { Metadata } from "next"

import config from "@/config"

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
  const metaTitle = title
  const metaDescription = description

  const metadata: Metadata = {
    title: metaTitle,
    description: metaDescription,

    alternates: path === undefined ? undefined : { canonical: path },

    applicationName: config.appName,
    creator: config.author,
    authors: [{ name: config.author, url: config.authorUrl }],
    robots: noIndex
      ? "noindex, nofollow"
      : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    keywords: config.keywords,

    icons: {
      icon: "/favicon.ico",
      shortcut: "/icons/icon-512x512.png",
      apple: "/icons/icon-512x512.png",
    },
    manifest: `${config.baseUrl}/manifest.json`,

    // `images` is deliberately absent from openGraph and twitter: the
    // app/**/opengraph-image.tsx files own og:image and emit its type, width,
    // and height. Declaring it here too would produce duplicate tags.
    openGraph: {
      type: ogType ?? "website",
      url: path === undefined ? undefined : `${config.baseUrl}${path}`,
      siteName: config.appName,
      title: metaTitle,
      description: metaDescription,
    },

    twitter: {
      card: "summary_large_image",
      site: `@${config.twitter}`,
      creator: `@${config.twitter}`,
      title: metaTitle,
      description: metaDescription,
    },

    appleWebApp: {
      capable: true,
      // The home-screen label, not the document title — iOS truncates
      // anything much past a dozen characters. Matches the manifest.
      title: "Nirnejak",
      // "black-translucent" forces white status-bar text, which disappears
      // against a light page. "default" follows the system scheme.
      statusBarStyle: "default",
    },
  }
  return metadata
}

export default getMetadata
