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
      path: "../fonts/GeneralSans-Variable.woff2",
      weight: "300 800",
      style: "normal",
    },
    {
      path: "../fonts/GeneralSans-VariableItalic.woff2",
      weight: "300 800",
      style: "italic",
    },
  ],
})

interface Props {
  children: React.ReactNode
}

export const viewport: Viewport = {
  themeColor: "#1D1D20",
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
