import renderOgImage, { contentType, size } from "@/utils/og"

export const alt = "Writing by Jitendra Nirnejak"
export { contentType, size }

export default function Image() {
  return renderOgImage({
    title: "Writing",
    subtitle:
      "Long-form writing on React, TypeScript, design engineering, animation, and Postgres.",
  })
}
