import type { Metadata } from "next"

import config from "@/config"

interface MetadataArgs {
  path: string
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
    metadataBase: new URL(config.baseUrl),
    title: metaTitle,
    description: metaDescription,

    alternates: {
      canonical: path,
    },

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
      url: `${config.baseUrl}${path}`,
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
      title: metaTitle,
      startupImage: `${config.baseUrl}/icons/icon-512x512.png`,
      // "black-translucent" forces white status-bar text, which disappears
      // against a light page. "default" follows the system scheme.
      statusBarStyle: "default",
    },

    formatDetection: {
      telephone: true,
      date: true,
      address: true,
      email: true,
      url: true,
    },

    appLinks: {},
  }
  return metadata
}

export default getMetadata
