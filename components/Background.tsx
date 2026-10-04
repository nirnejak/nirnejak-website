import type * as React from "react"

const Background: React.FC = () => {
  return (
    <svg
      aria-hidden="true"
      // lvh, the viewport with the browser toolbars collapsed, so the noise
      // still covers the page when mobile Safari hides its URL bar.
      className="grain pointer-events-none fixed top-0 left-0 z-999 h-lvh w-full"
    >
      <filter id="noise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency=".8"
          numOctaves="4"
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)" />
    </svg>
  )
}

export default Background
