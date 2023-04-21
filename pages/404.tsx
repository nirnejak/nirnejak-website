import * as React from "react"

import Image from "next/image"

import Container from "components/atoms/Container"
import AppLink from "components/atoms/Link"
import SEO from "components/SEO"

const NotFound: React.FC = () => {
  return (
    <>
      <SEO title="Not found" path="/404/" description="Page not found" />
      <Container>
        <section className="grid min-h-screen place-content-center">
          <div className="relative">
            <Image
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2YxZTBhOTc4NDE0YmQxYWUwM2M5YmVkYTkzZTgyYzEzYTk2MTYzMSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/1EmBoG0IL50VIJLWTs/giphy.gif"
              alt="Lost"
              width={480}
              height={270}
            />
            <h1 className="mb-1 mt-3 text-center text-3xl font-bold text-zinc-300">
              You lost buddy?
            </h1>
            <p className="text-center text-zinc-500">
              Let me take you <AppLink href="/">home</AppLink>
            </p>
          </div>
        </section>
      </Container>
    </>
  )
}

export default NotFound
