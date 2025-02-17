"use client"
import * as React from "react"

import Tabs from "@/components/atoms/Tabs"

const tabOptions = ["Tab 1", "Tab 2", "Tab 3"]

const SliderTabs: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState(0)

  return (
    <div className="flex items-center justify-center gap-6 bg-zinc-800 min-h-96 rounded-lg">
      <Tabs
        tabsOptions={tabOptions}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </div>
  )
}

export default SliderTabs
