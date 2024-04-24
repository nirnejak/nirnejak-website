import * as React from "react"

import Head from "next/head"

interface Props {
  path: string
  title: string
  description: string
  image?: string
}

const SEO: React.FC<Props> = ({
  path,
  title = "Jitendra Nirnejak - Portfolio Website",
  description = "Jitendra Nirnejak is a developer and designer based out of Bangalore, India. He has expertise in React, TypeScript, Node.js, UI Design and Prototyping.",
  image,
}) => {
  const baseUrl = "https://nirnejak.com"
  const metaTitle = title
  const metaDescription = description
  const metaImage = image ?? `${baseUrl}/cover.png`

  return (
    <Head>
      <title>{title}</title>
      {/* Basic Meta */}
      <meta name="image" content={metaImage} />
      <meta name="description" content={description} />
      <link rel="canonical" href={`${baseUrl}${path}`} />
      {/* Schema.org for Google */}
      <meta itemProp="description" content={metaDescription} />
      {/* Open Graph */}
      <meta property="og:url" content={`${baseUrl}${path}`} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:image:type" content={"image/png"} />
      {/* Twitter */}
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
    </Head>
  )
}

export default SEO
