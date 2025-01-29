import { type Metadata } from "next"

interface MetadataArgs {
  path: string
  title: string
  description: string
  image?: string
}

const config = {
  baseUrl: "https://nirnejak.com",
  appName: "Jitendra Nirnejak",
  author: "Jitendra Nirnejak",
  authorUrl: "https://nirnejak.com/",
  twitter: "jeetnirnejak",
  keywords: [
    "Designer",
    "Developer",
    "Figma",
    "Rive",
    "Spline",
    "Framer",
    "Webflow",
    "React",
    "Next.js",
    "Gatsby",
    "Node",
    "TypeScript",
    "JavaScript",
    "Postgres",
  ],
}

const getMetadata = ({
  path,
  title,
  description,
  image,
}: MetadataArgs): Metadata => {
  const metaTitle = title
  const metaDescription = description
  const metaImage = image ?? `${config.baseUrl}/cover.png`

  const metadata: Metadata = {
    title: metaTitle,
    description: metaDescription,

    applicationName: config.appName,
    creator: config.author,
    authors: [{ name: config.author, url: config.authorUrl }],
    robots:
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
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
