import * as React from "react"

import { type Metadata } from "next"

import generateMetadata from "utils/seo"

interface Props {
  children: React.ReactNode
}

export const metadata: Metadata = generateMetadata({
  path: "/resources/",
  title: "Resources | Jitendra Nirnejak",
  description: "Resources and guides by Jitendra Nirnejak",
})

const ResourcesLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <script
          defer
          data-domain="nirnejak.com"
          src="https://plausible.io/js/script.js"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}

export default ResourcesLayout
