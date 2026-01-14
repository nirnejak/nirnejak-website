"use client"
import * as React from "react"

import useLinkHighlight from "@/hooks/useLinkHighlight"

interface Props {
  tabsOptions: string[]
  activeTab: number
  setActiveTab: (value: number) => void
}

const Tabs: React.FC<Props> = ({ tabsOptions, activeTab, setActiveTab }) => {
  const { wrapperRef, highlightStyles } = useLinkHighlight(activeTab)

  return (
    <nav className={"relative flex gap-1 text-zinc-200"} ref={wrapperRef}>
      <div
        style={highlightStyles}
        className="absolute left-0 h-full rounded-lg bg-zinc-900 transition-all"
      />
      {tabsOptions.map((tab, index) => (
        <button
          key={index}
          className="
            relative inline-block cursor-pointer rounded-lg px-3.5 py-1.5
            outline-hidden
          "
          onClick={() => {
            setActiveTab(index)
          }}
        >
          {tab}
        </button>
      ))}
    </nav>
  )
}

export default Tabs
