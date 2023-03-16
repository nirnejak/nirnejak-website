import * as React from "react"

import Container from "./atoms/Container"
import AppLink from "./atoms/Link"

type Props = {
  theme?: string
}

const Navbar: React.FC<Props> = () => {
  return (
    <nav className="fixed top-0 w-full px-10">
      <Container className="flex py-6" size="normal">
        <div className="flex gap-5">
          <AppLink className="" href="/">
            Home
          </AppLink>
          <AppLink className="" href="/">
            Blogs
          </AppLink>
          <AppLink className="" href="/">
            Work
          </AppLink>
          <AppLink className="" href="/">
            Uses
          </AppLink>
        </div>
        <div className="ml-auto flex gap-5">
          <AppLink className="" href="/">
            Resumé
          </AppLink>
          <AppLink className="" href="/">
            Contact
          </AppLink>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar
