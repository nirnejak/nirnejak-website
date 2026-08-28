import renderOgImage, { contentType, size } from "@/utils/og"

export const alt = "The gear Jitendra Nirnejak uses"
export { contentType, size }

export default function Image() {
  return renderOgImage({
    title: "Uses",
    subtitle:
      "The hardware, software, and gear behind the design and engineering work.",
  })
}
