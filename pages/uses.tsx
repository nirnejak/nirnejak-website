import * as React from "react"

import Container from "components/atoms/Container"
import Layout from "components/atoms/Layout"

const UsesPage: React.FC = () => {
  return (
    <Layout>
      <Container>
        <section className="flex min-h-screen items-start pt-56">
          <div className="w-full">
            <h1 className="text-5xl font-bold text-zinc-300">Uses</h1>

            <div className="mt-16 flex flex-col gap-8 pb-16">
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
                  ZSH + Oh-my-zsh, iTerm, VS Code(Settings Gist)
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-zinc-300">Gear</h4>
                <p className="mt-1.5 text-sm text-zinc-500">
                  iPhone 14 Pro, iPad Pro 11, MacBook Air(M2)
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-zinc-300">
                  Podcasts, I listen to
                </h4>
                <p className="mt-1.5 text-sm text-zinc-500">
                  Typescript and Testing
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-zinc-300">
                  What was 2022 about
                </h4>
                <p className="mt-1.5 text-sm text-zinc-500">
                  Typescript and Testing
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-zinc-300">
                  What&apos;s for 2023
                </h4>
                <p className="mt-1.5 text-sm text-zinc-500">
                  Fastify and Prisma
                </p>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </Layout>
  )
}

export default UsesPage
