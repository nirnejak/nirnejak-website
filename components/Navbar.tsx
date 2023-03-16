import * as React from "react"

import Container from "./atoms/Container"
import AppLink from "./atoms/Link"

type Props = {
  theme?: string
}

const navLinkClass = "rounded-md px-3.5 py-1.5 hover:bg-zinc-800"

const Navbar: React.FC<Props> = () => {
  return (
    <nav className="fixed top-0 w-full px-10">
      <Container className="flex py-6">
        <div className="flex">
          <AppLink className={navLinkClass} href="/">
            Home
          </AppLink>
          <AppLink className={navLinkClass} href="/">
            Work
          </AppLink>
          <AppLink className={navLinkClass} href="/">
            Blogs
          </AppLink>
          <AppLink className={navLinkClass} href="/">
            Uses
          </AppLink>
        </div>
        <div className="ml-auto flex">
          <AppLink
            className={navLinkClass}
            href="https://read.cv/nirnejak"
            target="_blank"
          >
            Resumé
          </AppLink>
          <AppLink className={navLinkClass} href="/">
            Contact
          </AppLink>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar
