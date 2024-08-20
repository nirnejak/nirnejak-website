import * as React from "react"

import { type Metadata } from "next"

import GradualContentLoading from "components/craft/GradualContentLoading"
import generateMetadata from "utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/craft/gradual-content-loading/",
  title: "Gradual Content Loading | Crafts | Jitendra Nirnejak",
  description:
    "Gradual content loading animation built with React and Framer Motion built by Jitendra Nirnejak",
})

const GradualContentLoadingPage: React.FC = () => {
  return (
    <main className="grid h-screen place-content-center">
      <GradualContentLoading />
    </main>
  )
}

export default GradualContentLoadingPage
