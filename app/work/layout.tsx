import * as React from "react"

import { type Metadata } from "next"

import generateMetadata from "utils/seo"

interface Props {
  children: React.ReactNode
}

export const metadata: Metadata = generateMetadata({
  path: "/work/",
  title: "Work | Jitendra Nirnejak",
  description: "Projects built by Jitendra Nirnejak",
})

const WorkLayout: React.FC<Props> = ({ children }) => {
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

export default WorkLayout
