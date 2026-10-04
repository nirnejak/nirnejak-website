import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"
import type * as React from "react"

import CONFIG from "@/config"

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
      fontFamily: "GeneralSans",
      fontWeight: 500,
    }}
  >
    <div style={{ display: "flex", fontSize: 30, color: "#8B8B94" }}>
      {CONFIG.AUTHOR}
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
        {CONFIG.BASE_URL.replace("https://", "")}
      </div>
    </div>
  </div>
)

// Satori can't read woff2 or variable fonts, so these are static instances cut
// from fonts/GeneralSans-Variable.woff2 at the two weights the card uses.
// Read once per build, not once per image.
const loadFont = (file: string): Promise<Buffer> =>
  readFile(join(process.cwd(), "fonts", file))

const FONTS = Promise.all([
  loadFont("GeneralSans-Medium.ttf"),
  loadFont("GeneralSans-Bold.ttf"),
])

const renderOgImage = async (args: OgArgs): Promise<ImageResponse> => {
  const [medium, bold] = await FONTS
  return new ImageResponse(<OgCard {...args} />, {
    ...size,
    fonts: [
      { name: "GeneralSans", data: medium, weight: 500, style: "normal" },
      { name: "GeneralSans", data: bold, weight: 700, style: "normal" },
    ],
  })
}

export default renderOgImage
