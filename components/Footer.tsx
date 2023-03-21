import * as React from "react"

import { LinkOut } from "akar-icons"

import Container from "./atoms/Container"
import AppLink from "./atoms/Link"

const Footer: React.FC = () => {
  return (
    <footer className="border-t-[0.05px] border-zinc-700">
      <Container>
        <div className="flex w-full justify-between py-3 text-xs text-zinc-500">
          <div>© 2023, By Jitendra Nirnejak</div>
          <div className="flex gap-4">
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
