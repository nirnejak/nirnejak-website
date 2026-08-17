import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ReactLenis } from "lenis/react"
import localFont from "next/font/local"
import Script from "next/script"
import { ViewTransitions } from "next-view-transitions"
import type * as React from "react"
import Background from "@/components/Background"
import CommandBar from "@/components/CommandBar"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

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

const HomeLayout: React.FC<Props> = ({ children }) => {
  return (
    <ViewTransitions>
      <html lang="en" className={sansFont.variable}>
        <head>
          {/* Rendered here rather than via the `viewport` export: Next unmounts
              metadata tags during client navigation, which flashes the browser
              theme bar back to its default until the new page commits. */}
          <meta
            name="theme-color"
            media="(prefers-color-scheme: light)"
            content="#FAFAFA"
          />
          <meta
            name="theme-color"
            media="(prefers-color-scheme: dark)"
            content="#1D1D20"
          />

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
          <body className="bg-surface overflow-x-hidden font-sans">
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
