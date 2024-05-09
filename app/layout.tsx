import * as React from "react"
import type { Viewport } from "next"
// import { SpeedInsights } from "@vercel/speed-insights/next"

import Background from "components/Background"
import Bulb from "components/Bulb"
import CommandBar from "components/CommandBar"
import Footer from "components/Footer"
import Navbar from "components/Navbar"

import "styles/main.css"

interface Props {
  children: React.ReactNode
}

export const viewport: Viewport = {
  themeColor: "#000000",
}

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
      <body>
        <Navbar />
        {children}
        <Footer />

        <Bulb />
        <Background />
        <CommandBar />

        {/* <SpeedInsights /> */}
      </body>
    </html>
  )
}

export default HomeLayout
