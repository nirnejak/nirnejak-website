import * as React from "react"

import { LinkOut } from "akar-icons"
import { useRouter } from "next/router"

import Container from "./atoms/Container"
import AppLink from "./atoms/Link"

const Footer: React.FC = () => {
  const router = useRouter()

  const isFixed = React.useMemo(() => {
    return !router.pathname.includes("blogs")
  }, [router.pathname])

  return (
    <footer className={isFixed ? "fixed bottom-0 w-full" : ""}>
      <Container>
        <div className="flex w-full flex-col justify-between gap-4 py-3 text-xs text-zinc-500 md:flex-row">
          <div className="text-center md:text-left">
            Designed with ❤️ and a lot of ☕️
          </div>
          <div className="flex justify-center gap-4 md:justify-end">
            <AppLink
              href="https://unsplash.com/@nirnejak/"
              className="flex items-center gap-1 text-zinc-500"
            >
              Unsplash
              <LinkOut size={12} />
            </AppLink>
            <AppLink
              href="https://www.producthunt.com/@nirnejak"
              className="flex items-center gap-1 text-zinc-500"
            >
              ProductHunt
              <LinkOut size={12} />
            </AppLink>
            <AppLink
              href="https://www.linkedin.com/in/nirnejak/"
              className="flex items-center gap-1 text-zinc-500"
            >
              LinkedIn
              <LinkOut size={12} />
            </AppLink>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
