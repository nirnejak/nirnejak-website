import * as React from "react"
import { useInView } from "react-intersection-observer"

import { motion, useAnimation } from "framer-motion"

import Container from "components/atoms/Container"
import AppLink from "components/atoms/Link"
import SEO from "components/SEO"
import { allBlogs } from "utils/data"

// TODO: maybe add blog images

const BlogsPage: React.FC = () => {
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
        title="Blogs | Jitendra Nirnejak"
        description="Blogs and articles written by Jitendra Nirnejak"
        path="/blogs/"
      />
      <section className="flex min-h-screen items-start pt-32 md:pt-40">
        <motion.div
          animate={controls}
          initial="hidden"
          transition={{ delay: 0, duration: 0.15, type: "spring" }}
          variants={variants}
          ref={ref}
        >
          <h1 className="text-5xl font-bold text-zinc-300">Blogs</h1>

          <div className="mt-10 flex flex-col gap-10 pb-16 md:mt-16">
            <div className="flex flex-col gap-12 md:flex-row md:gap-24">
              <div className="text-sm text-zinc-300 md:mt-3">2023</div>
              <div className="flex flex-col gap-1 md:mx-3">
                {allBlogs[2023].map((blog, index) => (
                  <AppLink
                    key={index}
                    href={blog.url}
                    target="_blank"
                    className="hover-bg -mx-3 p-3 outline-none md:mx-0"
                  >
                    <h2 className="text-sm font-bold">{blog.title}</h2>
                    <p className="mt-1.5 text-xs text-zinc-500">
                      {blog.description}
                    </p>
                  </AppLink>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-12 md:flex-row md:gap-24">
              <div className="text-sm text-zinc-300 md:mt-3">2022</div>
              <div className="flex flex-col gap-1 md:mx-3">
                {allBlogs[2022].map((blog, index) => (
                  <AppLink
                    key={index}
                    href={blog.url}
                    target="_blank"
                    className="hover-bg -mx-3 p-3 outline-none md:mx-0"
                  >
                    <h2 className="text-sm font-bold">{blog.title}</h2>
                    <p className="mt-1.5 text-xs text-zinc-500">
                      {blog.description}
                    </p>
                  </AppLink>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-12 md:flex-row md:gap-24">
              <div className="text-sm text-zinc-300 md:mt-3">2021</div>
              <div className="flex flex-col gap-1 md:mx-3">
                {allBlogs[2021].map((blog, index) => (
                  <AppLink
                    key={index}
                    href={blog.url}
                    target="_blank"
                    className="hover-bg -mx-3 p-3 outline-none md:mx-0"
                  >
                    <h2 className="text-sm font-bold">{blog.title}</h2>
                    <p className="mt-1.5 text-xs text-zinc-500">
                      {blog.description}
                    </p>
                  </AppLink>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-12 md:flex-row md:gap-24">
              <div className="text-sm text-zinc-300 md:mt-3">2020</div>
              <div className="flex flex-col gap-1 md:mx-3">
                {allBlogs[2020].map((blog, index) => (
                  <AppLink
                    key={index}
                    href={blog.url}
                    target="_blank"
                    className="hover-bg -mx-3 p-3 outline-none md:mx-0"
                  >
                    <h2 className="text-sm font-bold">{blog.title}</h2>
                    <p className="mt-1.5 text-xs text-zinc-500">
                      {blog.description}
                    </p>
                  </AppLink>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-12 md:flex-row md:gap-24">
              <div className="text-sm text-zinc-300 md:mt-3">2019</div>
              <div className="flex flex-col gap-1 md:mx-3">
                {allBlogs[2019].map((blog, index) => (
                  <AppLink
                    key={index}
                    href={blog.url}
                    target="_blank"
                    className="hover-bg -mx-3 p-3 outline-none md:mx-0"
                  >
                    <h2 className="text-sm font-bold">{blog.title}</h2>
                    <p className="mt-1.5 text-xs text-zinc-500">
                      {blog.description}
                    </p>
                  </AppLink>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </Container>
  )
}

export default BlogsPage
