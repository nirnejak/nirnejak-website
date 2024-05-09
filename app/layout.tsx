import * as React from "react"

import { type Metadata } from "next"

import { SpeedInsights } from "@vercel/speed-insights/next"

import generateMetadata from "utils/seo"
import Background from "components/Background"
import Bulb from "components/Bulb"
import CommandBar from "components/CommandBar"
import Footer from "components/Footer"
import Navbar from "components/Navbar"

import "../styles/main.css"

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
      <body className="overflow-x-hidden bg-zinc-900">
        <Navbar />
        {children}
        <Footer />

        <Bulb />
        <Background />
        <CommandBar />

        <SpeedInsights />
      </body>
    </html>
  )
}

export default HomeLayout
