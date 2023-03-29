import * as React from "react"

import type { AppProps } from "next/app"

import Background from "components/atoms/Background"
import Bulb from "components/Bulb"
import CommandBar from "components/CommandBar"
import Footer from "components/Footer"
import Navbar from "components/Navbar"

import "../styles/main.css"

// TODO: Add Command Bar
// TODO: Scale Cursor Circle on Hover

const MyApp: React.FC<AppProps> = (props) => {
  const { Component, pageProps } = props

  return (
    <main className="bg-zinc-900">
      <Navbar />
      <Component {...pageProps} />
      <Footer />

      <Bulb />
      <Background />
      <CommandBar />
    </main>
  )
}

export default MyApp
