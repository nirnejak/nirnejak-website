import type { Metadata } from "next"
import type * as React from "react"
import JsonLd from "@/components/JsonLd"
import UsesImages from "@/components/UsesImages"
import getMetadata from "@/utils/metadata"
import { getBreadcrumbSchema } from "@/utils/schema"

export const metadata: Metadata = getMetadata({
  path: "/uses/",
  title: "Uses — Hardware, Software & Gear | Jeet Nirnejak",
  description:
    "The hardware, software, and gear Jeet Nirnejak uses every day for design, development, photography, and writing.",
})

// `wide` items span both columns from md up — their lists run longer.
const USES = [
  { label: "Productivity", items: "Apple Notes, Notion & Slack" },
  { label: "Design Tools", items: "Figma, Paper & Rive" },
  { label: "Tech Stack", items: "TypeScript, React & Motion" },
  { label: "AI & Editor", items: "Conductor, Claude Code & Zed" },
  {
    label: "Audio & Accessories",
    items: "RØDE NT-USB Mini, JBL Charge 4, Apple AirPods 4",
    wide: true,
  },
  {
    label: "Camera & Gear",
    items: "Fujifilm X100VI, Insta360 X3, iPhone 14 Pro & DJI Osmo Mobile",
    wide: true,
  },
]

const UsesPage: React.FC = () => {
  return (
    <main className="max-w-[100vw] overflow-hidden">
      <JsonLd
        schema={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Uses", path: "/uses/" },
        ])}
      />
      <section className="container mt-32 md:mt-40">
        <h1 className="text-title text-2xl font-bold tracking-tight md:text-3xl">
          Uses
        </h1>
      </section>
      <UsesImages />
      <section className="container mt-10 mb-16 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2">
        {USES.map(({ label, items, wide }) => (
          <div key={label} className={wide ? "md:col-span-2" : undefined}>
            <p className="text-muted text-sm font-medium">{label}</p>
            <p className="text-body mt-1.5 text-lg font-semibold">{items}</p>
          </div>
        ))}
      </section>
    </main>
  )
}

export default UsesPage
