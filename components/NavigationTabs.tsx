import { Link } from "next-view-transitions"
import * as React from "react"

interface TAB_BOUNDING_BOX_TYPE {
  left: number
  width: number
}

interface TAB_TYPE {
  content: string
  link: string
}

interface Props {
  navLinks: TAB_TYPE[]
}

const NavigationTabs: React.FC<Props> = ({ navLinks }) => {
  const [tabBoundingBox, setTabBoundingBox] =
    React.useState<TAB_BOUNDING_BOX_TYPE | null>(null)
  const [wrapperBoundingBox, setWrapperBoundingBox] =
    React.useState<TAB_BOUNDING_BOX_TYPE | null>(null)
  const [highlightedTab, setHighlightedTab] = React.useState<TAB_TYPE | null>(
    null
  )
  const [isHoveredFromNull, setIsHoveredFromNull] = React.useState(true)

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

  // A plain wrapper, not a <nav>: the Navbar around it is already the
  // navigation landmark, and a nested one gets announced twice.
  return (
    <div>
      {/* The pointer tracking is presentational, so it lives on the layout
          container rather than on the wrapper. */}
      <div
        className="relative flex gap-1"
        ref={wrapperRef}
        onMouseLeave={resetHighlight}
      >
        <div
          className="bg-hover absolute left-0 h-full rounded-md"
          style={{
            transition: "0.15s ease",
            transitionProperty: "width, transform, opacity",
            ...highlightStyles,
          }}
        />
        {navLinks.map((tab) => (
          <Link
            key={tab.link}
            href={tab.link}
            className="text-strong relative inline-block px-4 py-2 text-xs font-medium outline-hidden active:scale-95"
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
      </div>
    </div>
  )
}

export default NavigationTabs
