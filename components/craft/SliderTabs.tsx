"use client"
import * as React from "react"

import Tabs from "../atoms/Tabs"

const SliderTabs: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState(0)

  return (
    <div className="flex flex-col items-center justify-center gap-6 text-white">
      <div className="grid h-64 w-96 place-content-center rounded-lg bg-black p-4 text-center text-sm transition-all ease-out">
        <Tabs
          className="text-zinc-200"
          tabsOptions={["Tab 1", "Tab 2", "Tab 3"]}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
    </div>
  )
}

export default SliderTabs
