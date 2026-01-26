import * as React from "react"
import type { Viewport } from "next"
import Script from "next/script"
import localFont from "next/font/local"
import { ViewTransitions } from "next-view-transitions"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { ReactLenis } from "lenis/react"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Background from "@/components/Background"
import CommandBar from "@/components/CommandBar"

import "./main.css"

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
    <ViewTransitions>
      <html lang="en" className={sansFont.variable}>
        <head>
          <Script
            defer
            data-domain="nirnejak.com"
            src="https://plausible.io/js/script.js"
            strategy="afterInteractive"
          />
          <Script
            src="https://analytics.ahrefs.com/analytics.js"
            data-key="gbZIqgdBQxOyNwjN+z3uWA"
            strategy="afterInteractive"
          />
        </head>

        <ReactLenis root>
          <body className="overflow-x-hidden bg-zinc-900 font-sans">
            <Navbar />
            {children}
            <Footer />

            <Background />
            <CommandBar />

            <Analytics />
            <SpeedInsights />
          </body>
        </ReactLenis>
      </html>
    </ViewTransitions>
  )
}

export default HomeLayout
