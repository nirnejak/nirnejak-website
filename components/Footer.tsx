import * as React from "react"

import { LinkOut } from "akar-icons"
import { useRouter } from "next/router"

import Container from "./atoms/Container"
import AppLink from "./atoms/Link"

const Footer: React.FC = () => {
  const router = useRouter()

  const footerClass = React.useMemo(() => {
    if (router.pathname.includes("blogs")) {
      return ""
    } else if (router.pathname.includes("uses")) {
      return "md:fixed bottom-0 w-full"
    } else {
      return "fixed bottom-0 w-full"
    }
  }, [router.pathname])

  return (
    <footer className={footerClass}>
      <Container>
        <div className="flex w-full flex-col justify-between gap-4 py-3 text-xs text-zinc-500 md:flex-row">
          <div className="text-center md:text-left">
            Designed with ❤️ and a lot of ☕️
          </div>
          <div className="flex justify-center gap-4 md:justify-end">
            <AppLink
              href="https://github.com/nirnejak/nirnejak-website"
              className="flex items-center gap-1 text-zinc-500"
              target="_blank"
            >
              Source Code
              <LinkOut size={12} />
            </AppLink>
            {/* <AppLink
              href="https://unsplash.com/@nirnejak/"
              className="flex items-center gap-1 text-zinc-500"
              target="_blank"
            >
              Unsplash
              <LinkOut size={12} />
            </AppLink> */}
            <AppLink
              href="https://www.producthunt.com/@nirnejak"
              className="flex items-center gap-1 text-zinc-500"
              target="_blank"
            >
              ProductHunt
              <LinkOut size={12} />
            </AppLink>
            <AppLink
              href="https://www.linkedin.com/in/nirnejak/"
              className="flex items-center gap-1 text-zinc-500"
              target="_blank"
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
