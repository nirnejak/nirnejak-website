import * as React from "react"

import { type Metadata } from "next"

import AnimateHeight from "components/craft/AnimateHeight"
import generateMetadata from "utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/craft/animate-height/",
  title: "Animate Height | Craft | Jitendra Nirnejak",
  description: "Animate height change of the element",
})

const AnimateHeightPage: React.FC = () => {
  return (
    <main className="grid h-screen place-content-center">
      <AnimateHeight />
    </main>
  )
}

export default AnimateHeightPage
