import * as React from "react"

import Image from "next/image"

import SetupImage from "../assets/images/setup.png"
import Container from "components/atoms/Container"
import SEO from "components/SEO"

const UsesPage: React.FC = () => {
  return (
    <Container>
      <SEO
        title="Uses | Jitendra Nirnejak"
        description="Tool and Technologies used by Jitendra Nirnejak"
        path="/uses/"
      />
      <section className="flex min-h-screen items-start pt-32 md:pt-40">
        <div className="w-full">
          <h1 className="text-5xl font-bold text-zinc-300">Uses</h1>

          <div className="mt-10 flex flex-col-reverse gap-12 pb-16 md:mt-16 md:flex-row">
            <div className="flex-1">
              <Image
                width={700}
                src={SetupImage}
                alt="Desk Setup"
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-1 flex-col gap-8">
              <div>
                <p className="text-sm text-zinc-500">Gear & Gadgets</p>
                <p className="mt-1.5 text-lg font-bold text-zinc-300">
                  iPhone 14 Pro, iPad Pro 11 & MacBook Air(M2)
                </p>
              </div>
              <div>
                <p className="text-sm text-zinc-500">Design Tools</p>
                <p className="mt-1.5 text-lg font-bold text-zinc-300">
                  Figma & Procreate
                </p>
              </div>
              <div>
                <p className="text-sm text-zinc-500">Languages & Frameworks</p>
                <p className="mt-1.5 text-lg font-bold text-zinc-300">
                  TypeScript, React & Node.js
                </p>
              </div>
              <div>
                <p className="text-sm text-zinc-500">Dev Tools</p>
                <p className="mt-1.5 text-lg font-bold text-zinc-300">
                  iTerm & VS Code
                </p>
              </div>

              <div>
                <p className="text-sm text-zinc-500">What&apos;s for 2024</p>
                <p className="mt-1.5 text-lg font-bold text-zinc-300">
                  SwiftUI
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
