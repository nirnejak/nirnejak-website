import renderOgImage, { contentType, size } from "@/utils/og"

export const alt = "Projects by Jeet Nirnejak"
export { contentType, size }

export default function Image() {
  return renderOgImage({
    title: "Projects",
    subtitle:
      "Shipped client work — product platforms and design-led marketing sites.",
  })
}
