import * as React from "react"

import { type Metadata } from "next"

import Image from "next/image"

import SetupImage from "assets/images/setup.png"
import Container from "components/atoms/Container"
import generateMetadata from "utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/uses/",
  title: "Uses | Jitendra Nirnejak",
  description: "Gears, tools and technologies used by Jitendra Nirnejak",
})

const UsesPage: React.FC = () => {
  return (
    <Container>
      <section className="flex min-h-screen items-start pt-32 md:pt-40">
        <div className="w-full">
          <h1 className="text-4xl font-bold tracking-tighter text-zinc-300 md:text-5xl">
            Uses
          </h1>

          <div className="mt-10 flex flex-col-reverse gap-12 pb-16 md:mt-16 md:flex-row">
            <div className="flex-1">
              <Image
                width={700}
                quality={100}
                src={SetupImage}
                alt="Desk Setup"
                className="rounded-lg"
                priority
              />
            </div>
            <div className="flex flex-1 flex-col gap-8">
              <div>
                <p className="text-sm text-zinc-400">Computer</p>
                <p className="mt-1.5 text-lg font-bold text-zinc-300">
                  iPad Pro 11 & MacBook Air
                </p>
              </div>
              <div>
                <p className="text-sm text-zinc-400">Camera & Gear</p>
                <p className="mt-1.5 text-lg font-bold text-zinc-300">
                  iPhone 14 Pro, DJI Osmo Mobile
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; & Insta 360 x3
                </p>
              </div>
              <div>
                <p className="text-sm text-zinc-400">Design Tools</p>
                <p className="mt-1.5 text-lg font-bold text-zinc-300">
                  Figma, Rive & Procreate
                </p>
              </div>
              <div>
                <p className="text-sm text-zinc-400">Languages & Frameworks</p>
                <p className="mt-1.5 text-lg font-bold text-zinc-300">
                  TypeScript, React & Node.js
                </p>
              </div>
              <div>
                <p className="text-sm text-zinc-400">Dev Tools</p>
                <p className="mt-1.5 text-lg font-bold text-zinc-300">
                  iTerm, VS Code & ChatGPT
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default UsesPage
