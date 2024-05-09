import * as React from "react"

import { type Metadata } from "next"

import generateMetadata from "utils/seo"

import "styles/main.css"

interface Props {
  children: React.ReactNode
}

export const metadata: Metadata = generateMetadata({
  path: "/",
  title: "Jitendra Nirnejak - Portfolio Website",
  description: "Portfolio Website of Jitendra Nirnejak, Developer and Designer",
})

const HomeLayout: React.FC<Props> = ({ children }) => {
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

export default HomeLayout
