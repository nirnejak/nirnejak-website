import * as React from "react"
import { useInView } from "react-intersection-observer"

import { motion, useAnimation } from "framer-motion"
import Image from "next/image"

import SetupImage from "../assets/images/setup.png"
import Container from "components/atoms/Container"
import SEO from "components/SEO"

const UsesPage: React.FC = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  React.useEffect(() => {
    if (inView) {
      controls.start("visible").catch((err) => {
        console.log(err)
      })
    }
  }, [controls, inView])

  const variants = {
    visible: { opacity: 1, translateY: 0 },
    hidden: { opacity: 0, translateY: 10 },
  }

  return (
    <Container>
      <SEO
        title="Uses | Jitendra Nirnejak"
        description="Tool and Technologies used by Jitendra Nirnejak"
        path="/uses/"
      />
      <section className="flex min-h-screen items-start pt-32 md:pt-40">
        <motion.div
          animate={controls}
          initial="hidden"
          transition={{ delay: 0, duration: 0.2 }}
          variants={variants}
          className="w-full"
          ref={ref}
        >
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
                <h4 className="text-sm text-zinc-500">Design Tools</h4>
                <p className="mt-1.5 text-lg font-bold text-zinc-300">
                  Figma and Procreate
                </p>
              </div>
              <div>
                <h4 className="text-sm text-zinc-500">Terminal and Editor</h4>
                <p className="mt-1.5 text-lg font-bold text-zinc-300">
                  ZSH, iTerm & VS Code
                </p>
              </div>
              <div>
                <h4 className="text-sm text-zinc-500">
                  Languages and Frameworks
                </h4>
                <p className="mt-1.5 text-lg font-bold text-zinc-300">
                  TypeScript, React & Node.js
                </p>
              </div>
              <div>
                <h4 className="text-sm text-zinc-500">Gear & Gadgets</h4>
                <p className="mt-1.5 text-lg font-bold text-zinc-300">
                  iPhone 14 Pro, iPad Pro 11 & MacBook Air(M2)
                </p>
              </div>
              <div>
                <h4 className="text-sm text-zinc-500">What&apos;s for 2023</h4>
                <p className="mt-1.5 text-lg font-bold text-zinc-300">
                  TypeScript & Fastify
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </Container>
  )
}

export default UsesPage
