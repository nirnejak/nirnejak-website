import renderOgImage, { contentType, size } from "@/utils/og"

export const alt = "Jitendra Nirnejak — Design Engineer"
export { contentType, size }

export default function Image() {
  return renderOgImage({
    title: "Design Engineer",
    subtitle:
      "Crafting tasteful, elegant user-interfaces, web-animations, and websites.",
  })
}
