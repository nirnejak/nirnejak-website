import * as React from "react"

import { Link } from "next-view-transitions"

import { navLinks } from "@/utils/navigation"

const tabsData = navLinks

interface TAB_BOUNDING_BOX_TYPE {
  left: number
  width: number
}

interface TAB_TYPE {
  content: string
  value: string
  link: string
}

const NavigationTabs: React.FC = () => {
  const [tabBoundingBox, setTabBoundingBox] =
    React.useState<TAB_BOUNDING_BOX_TYPE | null>(null)
  const [wrapperBoundingBox, setWrapperBoundingBox] =
    React.useState<TAB_BOUNDING_BOX_TYPE | null>(null)
  const [highlightedTab, setHighlightedTab] = React.useState<TAB_TYPE | null>(
    null
  )
  const [isHoveredFromNull, setIsHoveredFromNull] = React.useState(true)

  const highlightRef = React.useRef(null)
  const wrapperRef = React.useRef<HTMLDivElement>(null)

  const repositionHighlight = (
    e:
      | React.MouseEvent<HTMLAnchorElement>
      | React.FocusEvent<HTMLAnchorElement>,
    tab: TAB_TYPE
  ): void => {
    setTabBoundingBox(
      (e.currentTarget as HTMLAnchorElement).getBoundingClientRect()
    )
    if (wrapperRef.current != null)
      setWrapperBoundingBox(wrapperRef.current.getBoundingClientRect())
    setIsHoveredFromNull(highlightedTab == null)
    setHighlightedTab(tab)
  }

  const resetHighlight = (): void => {
    setHighlightedTab(null)
  }

  const highlightStyles: React.CSSProperties = {}

  if (tabBoundingBox != null && wrapperBoundingBox != null) {
    highlightStyles.transitionDuration = isHoveredFromNull ? "0ms" : "150ms"
    highlightStyles.opacity = `${highlightedTab != null ? 1 : 0}`
    highlightStyles.width = `${tabBoundingBox.width}px`
    highlightStyles.transform = `translate(${
      tabBoundingBox.left - wrapperBoundingBox.left
    }px)`
  }

  return (
    <nav
      className="relative flex gap-1"
      ref={wrapperRef}
      onMouseLeave={resetHighlight}
    >
      <div
        className="absolute left-0 h-full rounded-md bg-zinc-800"
        ref={highlightRef}
        style={{
          transition: "0.15s ease",
          transitionProperty: "width, transform, opacity",
          ...highlightStyles,
        }}
      />
      {tabsData.map((tab) => (
        <Link
          href={tab.link}
          key={tab.value}
          className="relative inline-block px-4 py-2 text-xs font-medium text-zinc-50 outline-hidden active:scale-95"
          onMouseOver={(ev: React.MouseEvent<HTMLAnchorElement>) => {
            repositionHighlight(ev, tab)
          }}
          onFocus={(ev: React.FocusEvent<HTMLAnchorElement>) => {
            repositionHighlight(ev, tab)
          }}
        >
          {tab.content}
        </Link>
      ))}
    </nav>
  )
}

export default NavigationTabs
