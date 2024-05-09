import * as React from "react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import Background from "components/Background"
import Bulb from "components/Bulb"
import CommandBar from "components/CommandBar"
import Footer from "components/Footer"
import Navbar from "components/Navbar"

interface Props {
  children: React.ReactNode
}

const BaseLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />

      <Bulb />
      <Background />
      <CommandBar />

      <SpeedInsights />
    </div>
  )
}

export default BaseLayout
