import * as React from "react"

import type { Viewport } from "next"
import localFont from "next/font/local"
import { ViewTransitions } from "next-view-transitions"

import { SpeedInsights } from "@vercel/speed-insights/next"
import Clarity from "@microsoft/clarity"

import Background from "@/components/Background"
import CommandBar from "@/components/CommandBar"
import Bulb from "@/components/Bulb"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

import config from "@/config"

import "@/styles/main.css"

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

// Clarity.init(config.CLARITY_PROJECT_ID)

const HomeLayout: React.FC<Props> = ({ children }) => {
  return (
    <ViewTransitions>
      <html lang="en" className={sansFont.variable}>
        <head>
          <script
            defer
            data-domain="nirnejak.com"
            src="https://plausible.io/js/script.js"
          />
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "rteja4w2ze");
            `,
            }}
          />
        </head>

        <body className="bg-zinc-900 overflow-x-hidden font-sans">
          <Navbar />
          {children}
          <Footer />

          <Bulb />
          <Background />
          <CommandBar />

          <SpeedInsights />
        </body>
      </html>
    </ViewTransitions>
  )
}

export default HomeLayout
