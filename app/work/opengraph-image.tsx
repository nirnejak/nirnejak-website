import renderOgImage, { contentType, size } from "@/utils/og"

export const alt = "Work by Jitendra Nirnejak"
export { contentType, size }

export default function Image() {
  return renderOgImage({
    title: "Work",
    subtitle:
      "Design engineering and frontend for product teams across the US, UK, Australia, and India.",
  })
}
