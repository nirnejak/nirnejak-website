import type { Metadata } from "next"
import type * as React from "react"
import UsesImages from "@/components/UsesImages"
import getMetadata from "@/utils/metadata"

export const metadata: Metadata = getMetadata({
  path: "/uses/",
  title: "Uses | Jitendra Nirnejak",
  description:
    "The hardware, software, and gear Jitendra Nirnejak uses every day for design, development, photography, and writing.",
})

const UsesPage: React.FC = () => {
  return (
    <main className="max-w-[100vw] overflow-hidden">
      <section className="container mt-32 md:mt-40">
        <h1 className="text-title text-4xl font-bold tracking-tight md:text-5xl">
          Uses
        </h1>
      </section>
      <UsesImages />
      <section className="container mt-10 mb-16 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2">
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
          <p className="text-muted text-sm font-medium">Computer</p>
          <p className="text-body mt-1.5 text-lg font-semibold">
            iPad Pro 11", MacBook Air & <br />
            Apple Studio Display
          </p>
        </div>
        <div>
          <p className="text-muted text-sm font-medium">Camera & Gear</p>
          <p className="text-body mt-1.5 text-lg font-semibold">
            iPhone 14 Pro, Insta 360 X3 & <br />
            DJI Osmo Mobile
          </p>
        </div>
        <div>
          <p className="text-muted text-sm font-medium">Audio</p>
          <p className="text-body mt-1.5 text-lg font-semibold">
            Rode NT Mini, JBL Charge <br />
            Marshall Major IV
          </p>
        </div>
        <div>
          <p className="text-muted text-sm font-medium">Accessories</p>
          <p className="text-body mt-1.5 text-lg font-semibold">
            Keychron K4 V2 (Hot Swappable)
            <br /> Apple Magic Mouse
          </p>
        </div>
      </section>
    </main>
  )
}

export default UsesPage
