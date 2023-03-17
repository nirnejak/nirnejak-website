import * as React from "react"

import Container from "./atoms/Container"
import AppLink from "./atoms/Link"

type Props = {
  theme?: string
}

const navLinkClass =
  "font-medium text-xs rounded-md px-3.5 py-1.5 hover:bg-zinc-800"

const Navbar: React.FC<Props> = () => {
  return (
    <nav className="fixed top-0 w-full px-10">
      <Container className="flex py-6">
        <div className="-mx-3.5 flex gap-1">
          <AppLink className={navLinkClass} href="/">
            Home
          </AppLink>
          <AppLink className={navLinkClass} href="/work/">
            Work
          </AppLink>
          <AppLink className={navLinkClass} href="/blogs/">
            Blogs
          </AppLink>
          <AppLink className={navLinkClass} href="/photos/">
            Photos
          </AppLink>
          <AppLink className={navLinkClass} href="/uses/">
            Uses
          </AppLink>
        </div>
        <div className="ml-auto flex gap-1">
          <AppLink
            className={navLinkClass}
            href="https://read.cv/nirnejak"
            target="_blank"
          >
            Resumé
          </AppLink>
          <AppLink className={navLinkClass} href="/contact/">
            Contact
          </AppLink>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar
