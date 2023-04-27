import * as React from "react"

import type { AppProps } from "next/app"

import Background from "components/Background"
import Bulb from "components/Bulb"
import CommandBar from "components/CommandBar"
import Footer from "components/Footer"
import Navbar from "components/Navbar"

import "../styles/main.css"

const MyApp: React.FC<AppProps> = (props) => {
  const { Component, pageProps } = props

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />

      <Bulb />
      <Background />
      <CommandBar />
    </>
  )
}

export default MyApp
