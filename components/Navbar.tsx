"use client"
import * as React from "react"

import { LinkOut, ThreeLineHorizontal } from "akar-icons"

import AppLink from "./atoms/Link"
import NavigationTabs from "./NavigationTabs"
import classNames from "utils/classNames"
import { navLinks } from "utils/navigation"

interface Props {
  theme?: string
}

const SCHEDULE_CALL_LINK = "https://cal.com/nirnejak/15min"

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
      <div className="container hidden items-center py-3 md:flex">
        <div className="-mx-3.5">
          <NavigationTabs />
        </div>
        <div className="ml-auto">
          <AppLink
            className={classNames(
              navLinkClass,
              "group flex items-center gap-1.5"
            )}
            href={SCHEDULE_CALL_LINK}
            target="_blank"
          >
            <span className="animate-slideLeft group-hover:animate-slideRight group-focus:animate-slideRight">
              Schedule call
            </span>
            <LinkOut
              className="hidden animate-slideLeftAndFade hover:block group-hover:block group-focus-visible:block"
              size={14}
            />
          </AppLink>
        </div>
      </div>
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
              href={SCHEDULE_CALL_LINK}
              target="_blank"
            >
              Schedule call
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
              <ThreeLineHorizontal className="text-zinc-50" />
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
