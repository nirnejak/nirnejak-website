import renderOgImage, { contentType, size } from "@/utils/og"

export const alt = "Contact Jeet Nirnejak"
export { contentType, size }

export default function Image() {
  return renderOgImage({
    title: "Contact",
    subtitle:
      "Taking on a small number of projects at a time. Let’s talk about yours.",
  })
}
