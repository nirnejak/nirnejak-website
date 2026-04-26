import type { Metadata } from "next"

import config from "@/config"

interface MetadataArgs {
  path: string
  title: string
  description: string
  image?: string
  noIndex?: boolean
}

const getMetadata = ({
  path,
  title,
  description,
  image,
  noIndex,
}: MetadataArgs): Metadata => {
  const metaTitle = title
  const metaDescription = description
  const metaImage = image ?? `${config.baseUrl}/cover.png`

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

    openGraph: {
      type: "website",
      url: `${config.baseUrl}${path}`,
      siteName: config.appName,
      title: metaTitle,
      description: metaDescription,
      images: metaImage,
    },

    twitter: {
      card: "summary_large_image",
      site: `@${config.twitter}`,
      creator: `@${config.twitter}`,
      title: metaTitle,
      description: metaDescription,
      images: metaImage,
    },

    appleWebApp: {
      capable: true,
      title: metaTitle,
      startupImage: metaImage,
      statusBarStyle: "black-translucent",
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
