import type { Metadata } from "next"
import type * as React from "react"
import JsonLd from "@/components/JsonLd"
import UsesImages from "@/components/UsesImages"
import getMetadata from "@/utils/metadata"
import { getBreadcrumbSchema } from "@/utils/schema"

export const metadata: Metadata = getMetadata({
  path: "/uses/",
  title: "Uses — Hardware, Software & Gear | Jitendra Nirnejak",
  description:
    "The hardware, software, and gear Jitendra Nirnejak uses every day for design, development, photography, and writing.",
})

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
        <div>
          <p className="text-muted text-sm font-medium">Productivity</p>
          <p className="text-body mt-1.5 text-lg font-semibold">
            Apple Notes, Notion & Slack
          </p>
        </div>
        <div>
          <p className="text-muted text-sm font-medium">Design Tools</p>
          <p className="text-body mt-1.5 text-lg font-semibold">
            Figma, Paper & Rive
          </p>
        </div>
        <div>
          <p className="text-muted text-sm font-medium">Tech Stack</p>
          <p className="text-body mt-1.5 text-lg font-semibold">
            TypeScript, React & Motion
          </p>
        </div>
        <div>
          <p className="text-muted text-sm font-medium">AI & Editor</p>
          <p className="text-body mt-1.5 text-lg font-semibold">
            Conductor, Claude Code & Zed
          </p>
        </div>
        <div>
          <p className="text-muted text-sm font-medium">Audio & Accessories</p>
          <p className="text-body mt-1.5 text-lg font-semibold">
            RØDE NT-USB Mini & JBL Charge
          </p>
        </div>
        <div>
          <p className="text-muted text-sm font-medium">Computer</p>
          <p className="text-body mt-1.5 text-lg font-semibold">
            MacBook Air & Studio Display
          </p>
        </div>
        <div className="md:col-span-2">
          <p className="text-muted text-sm font-medium">Camera & Gear</p>
          <p className="text-body mt-1.5 text-lg font-semibold">
            iPhone 14 Pro, Insta360 X3 & DJI Osmo Mobile
          </p>
        </div>
      </section>
    </main>
  )
}

export default UsesPage
