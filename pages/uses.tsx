import * as React from "react"

import Image from "next/image"

import SetupImage from "../assets/images/setup.png"
import Container from "components/atoms/Container"
import Layout from "components/atoms/Layout"

const UsesPage: React.FC = () => {
  return (
    <Layout>
      <Container>
        <section className="flex min-h-screen items-start pt-32 md:pt-40">
          <div className="w-full">
            <h1 className="text-5xl font-bold text-zinc-300">Uses</h1>

            <div className="mt-10 flex gap-12 pb-16 md:mt-16">
              <div className="flex-1">
                <Image
                  src={SetupImage}
                  alt="Desk Setup"
                  className="rounded-lg"
                />
              </div>
              <div className="flex flex-1 flex-col gap-8">
                <div>
                  <h4 className="text-lg font-bold text-zinc-300">
                    Design Tools
                  </h4>
                  <p className="mt-1.5 text-sm text-zinc-500">
                    Figma and Procreate
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-zinc-300">
                    Terminal and Editor
                  </h4>
                  <p className="mt-1.5 text-sm text-zinc-500">
                    ZSH + Oh-my-zsh, iTerm, VS Code
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-zinc-300">
                    Languages and Frameworks
                  </h4>
                  <p className="mt-1.5 text-sm text-zinc-500">
                    TypeScript, React and Node.js
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-zinc-300">
                    Gear & Gadgets
                  </h4>
                  <p className="mt-1.5 text-sm text-zinc-500">
                    iPhone 14 Pro, iPad Pro 11, MacBook Air(M2)
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-zinc-300">
                    What&apos;s for 2023
                  </h4>
                  <p className="mt-1.5 text-sm text-zinc-500">
                    TypeScript & Testing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </Layout>
  )
}

export default UsesPage
