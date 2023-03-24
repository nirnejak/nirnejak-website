import * as React from "react"
import { useInView } from "react-intersection-observer"

import { motion, useAnimation } from "framer-motion"

import Container from "components/atoms/Container"

// TODO: Photo gallery and preview
// TODO: Unsplash and/or imgs.so link

const PhotosPage: React.FC = () => {
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
      <section className="flex min-h-screen items-start pt-32 md:pt-40">
        <motion.div
          animate={controls}
          initial="hidden"
          transition={{ delay: 0, duration: 0.2 }}
          variants={variants}
          ref={ref}
          className="w-full"
        >
          <h1 className="text-5xl font-bold text-zinc-300">Photos</h1>

          <div className="mt-10 flex flex-col gap-1 pb-16 md:mt-16">
            <p className="my-16 text-center text-zinc-500">Soon ✨</p>
          </div>
        </motion.div>
      </section>
    </Container>
  )
}

export default PhotosPage
