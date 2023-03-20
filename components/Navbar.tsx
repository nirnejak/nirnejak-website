import * as React from "react"

import { ThreeLineHorizontal } from "akar-icons"

import Container from "./atoms/Container"
import AppLink from "./atoms/Link"

interface Props {
  theme?: string
}

const navLinkClass =
  "font-medium text-xs rounded-md px-3.5 py-1.5 hover:bg-zinc-800"

const Navbar: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <nav className="fixed top-0 w-full">
      <Container className="hidden py-6 md:flex">
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
      <div className="flex md:hidden">
        {isOpen ? (
          <div
            className="flex h-screen w-screen flex-col items-center justify-center gap-5 bg-zinc-900 px-20"
            role={"button"}
            tabIndex={0}
            onKeyUp={(e) => {
              e.key === "Enter" && setIsOpen(false)
            }}
            onClick={() => {
              setIsOpen(false)
            }}
          >
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
            <br />
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
        ) : (
          <div className="flex p-4">
            <button
              onClick={() => {
                setIsOpen(true)
              }}
            >
              <ThreeLineHorizontal className="text-white" />
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
