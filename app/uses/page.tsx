import * as React from "react"

import type { Metadata } from "next"

import UsesImages from "@/components/UsesImages"
import getMetadata from "@/utils/metadata"

export const metadata: Metadata = getMetadata({
  path: "/uses/",
  title: "Uses | Jitendra Nirnejak",
  description: "Gears, tools and technologies used by Jitendra Nirnejak",
})

const UsesPage: React.FC = () => {
  return (
    <main className="max-w-[100vw] overflow-hidden">
      <section
        className="
          container mt-32
          md:mt-40
        "
      >
        <h1
          className="
            text-4xl font-bold tracking-tight text-zinc-300
            md:text-5xl
          "
        >
          Uses
        </h1>
      </section>
      <UsesImages />
      <section
        className="
          container mt-10 mb-16 grid grid-cols-1 gap-8
          md:mt-16 md:grid-cols-2
        "
      >
        <div>
          <p className="text-sm font-medium text-zinc-500">Computer</p>
          <p className="mt-1.5 text-lg font-semibold text-zinc-300">
            iPad Pro 11, MacBook Air & <br />
            Apple Studio Display
          </p>
        </div>
        <div>
          <p className="text-sm font-medium text-zinc-500">Camera & Gear</p>
          <p className="mt-1.5 text-lg font-semibold text-zinc-300">
            iPhone 14 Pro, Insta 360 X3 & <br />
            DJI Osmo Mobile 4 SE
          </p>
        </div>
        <div>
          <p className="text-sm font-medium text-zinc-500">Audio</p>
          <p className="mt-1.5 text-lg font-semibold text-zinc-300">
            Rode NT Mini, JBL Charge 4 <br />
            Marshall Major IV
          </p>
        </div>
        <div>
          <p className="text-sm font-medium text-zinc-500">Accessories</p>
          <p className="mt-1.5 text-lg font-semibold text-zinc-300">
            Keychron K4 V2 (Hot Swappable)
            <br /> Apple Magic Mouse
          </p>
        </div>
        <div>
          <p className="text-sm font-medium text-zinc-500">Design Tools</p>
          <p className="mt-1.5 text-lg font-semibold text-zinc-300">
            Figma, Rive & Procreate
          </p>
        </div>
        <div>
          <p className="text-sm font-medium text-zinc-500">
            Languages & Frameworks
          </p>
          <p className="mt-1.5 text-lg font-semibold text-zinc-300">
            TypeScript, React & Node.js
          </p>
        </div>
      </section>
    </main>
  )
}

export default UsesPage
