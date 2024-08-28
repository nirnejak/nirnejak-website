import * as React from "react"

import { type Metadata } from "next"

import PhotoCards from "components/craft/PhotoCards"
import generateMetadata from "utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/craft/photo-cards/",
  title: "Photo Cards | Crafts | Jitendra Nirnejak",
  description:
    "Photo cards loading animation with React and Framer Motion built by Jitendra Nirnejak",
})

const PhotoCardsPage: React.FC = () => {
  return (
    <main className="grid h-screen place-content-center">
      <PhotoCards />
    </main>
  )
}

export default PhotoCardsPage
