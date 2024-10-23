import * as React from "react"

import type { Viewport } from "next"

import { SpeedInsights } from "@vercel/speed-insights/next"
import localFont from "next/font/local"

import Background from "components/Background"
import Bulb from "components/Bulb"
import CommandBar from "components/CommandBar"
import Footer from "components/Footer"
import Navbar from "components/Navbar"
import classNames from "utils/classNames"

import "styles/main.css"

const sansFont = localFont({
  variable: "--sans-font",
  src: [
    {
      path: "../fonts/SpaceGrotesk[wght].woff2",
      style: "normal",
    },
  ],
})

// const monoFont = localFont({
//   variable: "--font-mono",
//   src: [
//     {
//       path: "../fonts/JetBrainsMono-Regular.ttf",
//       weight: "regular",
//       style: "normal",
//     },
//   ],
// })

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
      <body
        className={classNames(
          "bg-zinc-900 overflow-x-hidden font-sans",
          // monoFont.variable,
          sansFont.variable
        )}
      >
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
