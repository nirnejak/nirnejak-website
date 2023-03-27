import * as React from "react"

import { LinkOut, ThreeLineHorizontal } from "akar-icons"

import Container from "./atoms/Container"
import AppLink from "./atoms/Link"
import Tabs from "./atoms/Tabs"
import classNames from "utils/classNames"
import { navLinks } from "utils/navigation"

interface Props {
  theme?: string
}

const navLinkClass =
  "font-medium text-xs rounded-md px-4 py-2 hover-bg outline-none"

const Navbar: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "visible"
    }
  }, [isOpen])

  return (
    <nav className="fixed top-0 z-10 w-full">
      <Container className="hidden items-center py-3 md:flex">
        <div className="-mx-3.5">
          <Tabs />
        </div>
        <div className="ml-auto">
          <AppLink
            className={classNames(
              navLinkClass,
              "group flex items-center gap-1.5"
            )}
            href="https://read.cv/nirnejak"
            target="_blank"
          >
            <span className="animate-slideLeft group-hover:animate-slideRight group-focus:animate-slideRight">
              Resumé
            </span>
            <LinkOut
              className="hidden animate-slideLeftAndFade hover:block group-hover:block group-focus-visible:block"
              size={14}
            />
          </AppLink>
        </div>
      </Container>
      <div className="flex md:hidden">
        {isOpen ? (
          <div
            className="flex h-screen w-screen flex-col items-center justify-center gap-5 bg-zinc-900 px-20"
            role="button"
            tabIndex={0}
            onKeyUp={(e) => {
              e.key === "Enter" && setIsOpen(false)
            }}
            onClick={() => {
              setIsOpen(false)
            }}
          >
            {navLinks.map((navLink) => (
              <AppLink
                key={navLink.value}
                className={navLinkClass}
                href={navLink.link}
              >
                {navLink.content}
              </AppLink>
            ))}
            <br />
            <AppLink
              className={navLinkClass}
              href="https://read.cv/nirnejak"
              target="_blank"
            >
              Resumé
            </AppLink>
          </div>
        ) : (
          <div className="flex p-4">
            <button
              onClick={() => {
                setIsOpen(true)
              }}
              aria-label="Open Menu"
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
