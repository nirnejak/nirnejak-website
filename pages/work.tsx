import * as React from "react"
import { useInView } from "react-intersection-observer"

import { ArrowRight, LinkOut } from "akar-icons"
import { motion, useAnimation } from "framer-motion"

import Container from "components/atoms/Container"
import AppLink from "components/atoms/Link"
import SEO from "components/SEO"
import { allProjects } from "utils/data"

// TODO: find a way to add work description
// TODO: filterable? grouped? visualization or graph of some sort? tags?

const WorkPage: React.FC = () => {
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
        title="Work | Jitendra Nirnejak"
        description="Projects built by Jitendra Nirnejak"
        path="/work/"
      />
      <section className="flex h-screen items-start pt-32 md:pt-40">
        <motion.div
          animate={controls}
          initial="hidden"
          transition={{ delay: 0, duration: 0.2 }}
          variants={variants}
          className="w-full"
          ref={ref}
        >
          <h1 className="text-5xl font-bold text-zinc-300">Work</h1>

          <div className="-mx-3 mt-10 flex flex-col gap-1 pb-16 md:mt-16">
            {allProjects.map((project, index) => (
              <AppLink
                key={index}
                href={project.link}
                target="_blank"
                className="hover-bg group flex items-center justify-between rounded-md px-3 py-2 text-sm text-zinc-500 md:text-base"
              >
                <p>{project.title}</p>
                <ArrowRight
                  size={12}
                  className="hidden animate-slideLeftAndFade hover:block group-hover:block group-focus-visible:block"
                />
              </AppLink>
            ))}
          </div>

          <div className="-mx-3 mb-3 flex">
            <div className="mr-auto">
              <AppLink
                className="hover-bg flex items-center gap-1.5 rounded-md px-4 py-2 text-xs font-medium"
                href="https://layers.to/nirnejak"
                target="_blank"
              >
                <span className="">Designs</span>
                <LinkOut className="" size={14} />
              </AppLink>
            </div>
          </div>
        </motion.div>
      </section>
    </Container>
  )
}

export default WorkPage
