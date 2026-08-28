"use client"

import { ArrowRight, ThreeLineHorizontal, XSmall } from "akar-icons"
import * as React from "react"
import AppLink from "@/components/atoms/Link"
import NavigationTabs from "@/components/NavigationTabs"
import classNames from "@/utils/classNames"

interface Props {
  theme?: string
}

export const navLinks = [
  { content: "Home", link: "/" },
  { content: "Work", link: "/work/" },
  { content: "Blogs", link: "/blogs/" },
  { content: "Photos", link: "/photos/" },
  { content: "Uses", link: "/uses/" },
]

const navLinkClass =
  "font-medium text-xs rounded-md px-4 py-2 hover-bg outline-hidden"

const Navbar: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "visible"
    }
  }, [isOpen])

  React.useEffect(() => {
    if (!isOpen) return
    const handleKey = (e: KeyboardEvent): void => {
      if (e.key === "Escape") setIsOpen(false)
    }
    document.addEventListener("keydown", handleKey)
    return () => {
      document.removeEventListener("keydown", handleKey)
    }
  }, [isOpen])

  return (
    <nav className="bg-surface/70 fixed top-0 z-10 w-full backdrop-blur-lg">
      <div className="container hidden items-center py-3 md:flex">
        <div className="-mx-3.5">
          <NavigationTabs navLinks={navLinks} />
        </div>
        <div className="ml-auto">
          <AppLink
            className={classNames(
              navLinkClass,
              "group flex items-center gap-1.5"
            )}
            href={"/contact/"}
          >
            <span className="animate-slide-left group-hover:animate-slide-right group-focus:animate-slide-right">
              Contact
            </span>
            <ArrowRight
              className="animate-slide-left-and-fade hidden group-hover:block group-focus-visible:block hover:block"
              size={14}
            />
          </AppLink>
        </div>
      </div>
      <div className="flex md:hidden">
        {isOpen ? (
          // Closing is handled by a real button, by the links themselves,
          // and by Escape — rather than a role="button" wrapper around
          // interactive children.
          <div className="bg-surface relative flex h-dvh w-screen flex-col items-center justify-center gap-5 px-20">
            <button
              type="button"
              className="hover-bg text-strong absolute top-4 right-4 rounded-md p-2 outline-hidden"
              onClick={() => {
                setIsOpen(false)
              }}
              aria-label="Close Menu"
            >
              <XSmall />
            </button>
            {navLinks.map((navLink) => (
              <AppLink
                key={navLink.link}
                className={navLinkClass}
                href={navLink.link}
                onClick={() => {
                  setIsOpen(false)
                }}
              >
                {navLink.content}
              </AppLink>
            ))}
            <br />
            <AppLink
              className={navLinkClass}
              href={"/contact/"}
              onClick={() => {
                window.plausible("Schedule a call Clicked")
                setIsOpen(false)
              }}
            >
              Contact
            </AppLink>
          </div>
        ) : (
          <div className="flex p-4">
            <button
              type="button"
              onClick={() => {
                setIsOpen(true)
              }}
              aria-label="Open Menu"
            >
              <ThreeLineHorizontal className="text-strong" />
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
