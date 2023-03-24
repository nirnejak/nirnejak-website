import * as React from "react"

import type { AppProps } from "next/app"

import "../styles/main.css"
import Background from "components/atoms/Background"
import Footer from "components/Footer"
import Navbar from "components/Navbar"

// TODO: Add Command Bar
// TODO: Scale Cursor Circle on Hover

const MyApp: React.FC<AppProps> = (props) => {
  const { Component, pageProps } = props

  return (
    <main className="bg-zinc-900">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <Background />
    </main>
  )
}

export default MyApp
