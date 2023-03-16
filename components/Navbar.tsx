import * as React from "react"

import Container from "./atoms/Container"
import AppLink from "./atoms/Link"

type Props = {
  theme?: string
}

const Navbar: React.FC<Props> = () => {
  return (
    <nav className="fixed top-0 w-full px-10">
      <Container className="flex py-6">
        <div className="flex gap-5">
          <AppLink href="/">Home</AppLink>
          <AppLink href="/">Blogs</AppLink>
          <AppLink href="/">Work</AppLink>
          <AppLink href="/">Uses</AppLink>
        </div>
        <div className="ml-auto flex gap-5">
          <AppLink href="/">Resumé</AppLink>
          <AppLink href="/">Contact</AppLink>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar
