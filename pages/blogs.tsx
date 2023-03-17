import * as React from "react"

import Container from "components/atoms/Container"
import Layout from "components/atoms/Layout"
import AppLink from "components/atoms/Link"
import { allBlogs } from "utils/data"

const BlogsPage: React.FC = () => {
  return (
    <Layout>
      <Container>
        <section className="flex min-h-screen items-start pt-56">
          <div>
            <h1 className="text-5xl font-bold text-zinc-300">Blogs</h1>

            <div className="-mx-3 mt-16 flex flex-col gap-1 pb-16">
              {allBlogs.map((blog, index) => (
                <AppLink
                  key={index}
                  href={blog.url}
                  target="_blank"
                  className="rounded-lg p-3 hover:bg-zinc-800"
                >
                  <h3 className="font-bold">{blog.title}</h3>
                  <p className="mt-1.5 text-sm font-light text-zinc-500">
                    {blog.description}
                  </p>
                </AppLink>
              ))}
            </div>
          </div>
        </section>
      </Container>
    </Layout>
  )
}

export default BlogsPage
