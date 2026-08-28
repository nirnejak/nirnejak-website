import renderOgImage, { contentType, size } from "@/utils/og"

export const alt = "Photos by Jitendra Nirnejak"
export { contentType, size }

export default function Image() {
  return renderOgImage({
    title: "Photos",
    subtitle:
      "Landscapes, travel, and street photography captured across India and beyond.",
  })
}
