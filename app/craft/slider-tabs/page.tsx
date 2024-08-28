import * as React from "react"

import { type Metadata } from "next"

import SliderTabs from "components/craft/SliderTabs"
import generateMetadata from "utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/craft/slider-tabs/",
  title: "Slider Tabs | Craft | Jitendra Nirnejak",
  description: "Tabs with active state indicator that moves",
})

const SliderTabsPage: React.FC = () => {
  return (
    <main className="grid h-screen place-content-center">
      <SliderTabs />
    </main>
  )
}

export default SliderTabsPage
