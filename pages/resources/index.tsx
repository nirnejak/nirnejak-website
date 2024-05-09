import * as React from "react"

import Container from "components/atoms/Container"
// import AppLink from "components/atoms/Link"
import SEO from "components/SEO"
// import { allResources } from "utils/data"

const ResourcesPage: React.FC = () => {
  return (
    <Container>
      <SEO
        title="Resources | Jitendra Nirnejak"
        description="Resources by Jitendra Nirnejak"
        path="/resources/"
      />
      <section className="flex min-h-screen items-start pt-32 md:pt-40">
        <div className="my-24 text-center text-zinc-300 w-full">
          Good things are on their way ✨
        </div>
        {/* <div className="w-full">
          <h1 className="text-5xl font-bold text-zinc-300">Resources</h1>

          <div className="mt-10 text-sm md:mt-16">
            <div className="mb-16 flex flex-col md:flex-row">
              <p className="mb-3 flex-1 text-zinc-300 md:mt-2">Guides</p>
              <div className="flex flex-1 flex-col gap-1 md:mx-3">
                {allResources.guides.map((guide, index) => (
                  <AppLink
                    key={index}
                    href={guide.link}
                    target="_blank"
                    className="hover-bg rounded-md px-3 py-2 outline-none"
                  >
                    <p className="mb-1.5 font-bold">{guide.title}</p>
                    <p className="text-xs text-zinc-500">{guide.description}</p>
                  </AppLink>
                ))}
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </Container>
  )
}

export default ResourcesPage
