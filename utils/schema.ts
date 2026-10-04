import CONFIG from "@/config"

const { BASE_URL } = CONFIG

const PERSON_ID = `${BASE_URL}/#person`
const WEBSITE_ID = `${BASE_URL}/#website`

const JOB_TITLE = "Design Engineer"

const BIO =
  "Design engineer based in Mumbai, crafting tasteful websites, user-interfaces, and web animations for ambitious product teams."

export const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": PERSON_ID,
  name: CONFIG.AUTHOR,
  alternateName: "Jeet",
  url: BASE_URL,
  image: `${BASE_URL}/jitendra-nirnejak.jpg`,
  jobTitle: JOB_TITLE,
  description: BIO,
  email: `mailto:${CONFIG.CONTACT_EMAIL}`,
  knowsAbout: CONFIG.KEYWORDS,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressCountry: "IN",
  },
  sameAs: Object.values(CONFIG.SOCIALS),
}

// Declared alongside Person so search engines can attribute the site to a
// named author — this is what earns branded sitelinks.
export const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: CONFIG.APP_NAME,
  url: BASE_URL,
  description: BIO,
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
    item: `${BASE_URL}${item.path}`,
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
  url: `${BASE_URL}${path}`,
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
