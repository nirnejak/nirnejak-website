import { ImageResponse } from "next/og"
import type * as React from "react"

import config from "@/config"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

interface OgArgs {
  title: string
  subtitle: string
}

const OgCard: React.FC<OgArgs> = ({ title, subtitle }) => (
  <div
    style={{
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      backgroundColor: "#1D1D20",
      padding: 80,
    }}
  >
    <div style={{ display: "flex", fontSize: 30, color: "#8B8B94" }}>
      {config.author}
    </div>

    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          fontSize: 84,
          fontWeight: 700,
          letterSpacing: "-0.03em",
          color: "#FAFAFA",
        }}
      >
        {title}
      </div>
      <div
        style={{
          display: "flex",
          maxWidth: 960,
          marginTop: 24,
          fontSize: 32,
          lineHeight: 1.4,
          color: "#8B8B94",
        }}
      >
        {subtitle}
      </div>
    </div>

    <div style={{ display: "flex", alignItems: "center" }}>
      <div
        style={{
          display: "flex",
          width: 14,
          height: 14,
          marginRight: 16,
          borderRadius: 999,
          backgroundColor: "#0099CC",
        }}
      />
      <div style={{ display: "flex", fontSize: 28, color: "#0099CC" }}>
        {config.baseUrl.replace("https://", "")}
      </div>
    </div>
  </div>
)

// Rendered in Satori's default face: GeneralSans ships as woff2 only, and
// Satori parses ttf/otf/woff. Dropping a .ttf copy into fonts/ and passing it
// through `fonts` here would switch these cards to the brand typeface.
const renderOgImage = (args: OgArgs): ImageResponse =>
  new ImageResponse(<OgCard {...args} />, size)

export default renderOgImage
