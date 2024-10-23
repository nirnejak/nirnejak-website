import * as React from "react"

import { type Metadata } from "next"

import Container from "components/atoms/Container"
import AppLink from "components/atoms/Link"
import { allBlogs } from "utils/data"
import generateMetadata from "utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/blogs/",
  title: "Blogs | Jitendra Nirnejak",
  description: "Blogs and articles written by Jitendra Nirnejak",
})

const BlogsPage: React.FC = () => {
  return (
    <Container>
      <section className="flex min-h-screen items-start pt-32 md:pt-40">
        <div>
          <h1 className="text-4xl font-bold tracking-tighter text-zinc-300 md:text-5xl">
            Blogs
          </h1>

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
                    <p className="mt-1.5 text-xs text-zinc-400">
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
                    <p className="mt-1.5 text-xs text-zinc-400">
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
                    <p className="mt-1.5 text-xs text-zinc-400">
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
                    <p className="mt-1.5 text-xs text-zinc-400">
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
                    <p className="mt-1.5 text-xs text-zinc-400">
                      {blog.description}
                    </p>
                  </AppLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default BlogsPage
