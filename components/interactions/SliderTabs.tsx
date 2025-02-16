"use client"
import * as React from "react"

import Tabs from "../atoms/Tabs"

const SliderTabs: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState(0)

  return (
    <div className="flex items-center justify-center gap-6 bg-black min-h-96 rounded-lg">
      <Tabs
        className="text-zinc-200"
        tabsOptions={["Tab 1", "Tab 2", "Tab 3"]}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </div>
  )
}

export default SliderTabs
