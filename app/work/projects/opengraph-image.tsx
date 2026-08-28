import renderOgImage, { contentType, size } from "@/utils/og"

export const alt = "Projects by Jitendra Nirnejak"
export { contentType, size }

export default function Image() {
  return renderOgImage({
    title: "Projects",
    subtitle:
      "Side projects and shipped builds — full-stack apps and design-led marketing sites.",
  })
}
