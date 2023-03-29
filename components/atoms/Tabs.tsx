import * as React from "react"

import Link from "next/link"
import useSound from "use-sound"

import { navLinks } from "utils/navigation"

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

const Tabs: React.FC = () => {
  const [play] = useSound("../sounds/whoop.wav")

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
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>
      | React.FocusEvent<HTMLAnchorElement>,
    tab: any
  ): void => {
    setTabBoundingBox((e.target as HTMLAnchorElement).getBoundingClientRect())
    if (wrapperRef?.current != null)
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
          className="relative inline-block px-4 py-2 text-xs font-medium text-white outline-none"
          onMouseOver={(
            ev: React.MouseEvent<HTMLAnchorElement, MouseEvent>
          ) => {
            repositionHighlight(ev, tab)
          }}
          onFocus={(ev: React.FocusEvent<HTMLAnchorElement>) => {
            repositionHighlight(ev, tab)
          }}
          onClick={() => {
            play()
          }}
        >
          {tab.content}
        </Link>
      ))}
    </nav>
  )
}

export default Tabs
