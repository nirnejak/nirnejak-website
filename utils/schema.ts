import config from "@/config"

const { baseUrl } = config

const PERSON_ID = `${baseUrl}/#person`
const WEBSITE_ID = `${baseUrl}/#website`

const jobTitle = "Design Engineer"

const bio =
  "Design engineer based in Bangalore, crafting tasteful websites, user-interfaces, and web animations for ambitious product teams."

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": PERSON_ID,
  name: config.author,
  alternateName: "Jeet",
  url: baseUrl,
  image: `${baseUrl}/jitendra-nirnejak.jpg`,
  jobTitle,
  description: bio,
  email: `mailto:${config.CONTACT_EMAIL}`,
  knowsAbout: config.keywords,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangalore",
    addressCountry: "IN",
  },
  sameAs: [
    "https://x.com/jeetnirnejak/",
    "https://github.com/nirnejak/",
    "https://dribbble.com/nirnejak/",
    "https://www.producthunt.com/@nirnejak",
    "https://unsplash.com/@nirnejak/",
    "https://www.instagram.com/jeetnirnejak/",
  ],
}

// Declared alongside Person so search engines can attribute the site to a
// named author — this is what earns branded sitelinks.
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: config.appName,
  url: baseUrl,
  description: bio,
  inLanguage: "en",
  publisher: { "@id": PERSON_ID },
  author: { "@id": PERSON_ID },
}

interface BreadcrumbItem {
  name: string
  path: string
}

export const getBreadcrumbSchema = (
  items: BreadcrumbItem[]
): Record<string, unknown> => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${baseUrl}${item.path}`,
  })),
})

interface CollectionArgs {
  name: string
  description: string
  path: string
  items: { title: string; url: string }[]
}

// The listed articles are hosted on other domains, so they are referenced as
// plain URLs in an ItemList rather than marked up as Articles we own.
export const getCollectionPageSchema = ({
  name,
  description,
  path,
  items,
}: CollectionArgs): Record<string, unknown> => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name,
  description,
  url: `${baseUrl}${path}`,
  isPartOf: { "@id": WEBSITE_ID },
  author: { "@id": PERSON_ID },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      url: item.url,
    })),
  },
})
