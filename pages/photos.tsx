import * as React from "react"

import Container from "components/atoms/Container"
import SEO from "components/SEO"

// TODO: Photo gallery and preview

const PhotosPage: React.FC = () => {
  return (
    <Container>
      <SEO
        title="Photos | Jitendra Nirnejak"
        description="A gallery of Photos captured by Jitendra Nirnejak"
        path="/photos/"
      />
      <section className="flex min-h-screen items-start pt-32 md:pt-40">
        <div className="w-full">
          <h1 className="text-5xl font-bold text-zinc-300">Photos</h1>

          <div className="mt-10 flex flex-col gap-1 pb-16 md:mt-16">
            <p className="my-16 text-center text-zinc-500">Soon ✨</p>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default PhotosPage
