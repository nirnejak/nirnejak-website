import * as React from "react"

import { type Metadata } from "next"

import AirbnbCards from "components/craft/AirbnbCards"
import generateMetadata from "utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/airbnb-cards/",
  title: "Airbnb Cards | Interactive Components",
  description: "Airbnb cards loading animation",
})

const AirbnbCardsPage: React.FC = () => {
  return (
    <main className="grid h-screen place-content-center">
      <AirbnbCards />
    </main>
  )
}

export default AirbnbCardsPage
