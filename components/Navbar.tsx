"use client"
import * as React from "react"

import { LinkOut, ThreeLineHorizontal } from "akar-icons"

import config from "@/config"

import classNames from "@/utils/classNames"

import AppLink from "@/components/atoms/Link"
import NavigationTabs from "@/components/NavigationTabs"

interface Props {
  theme?: string
}

export const navLinks = [
  { content: "Home", link: "/" },
  { content: "Work", link: "/work/" },
  { content: "Blogs", link: "/blogs/" },
  { content: "Photos", link: "/photos/" },
  { content: "Uses", link: "/uses/" },
  { content: "Contact", link: "/contact/" },
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

  return (
    <nav className="fixed top-0 z-10 w-full backdrop-blur-lg">
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
            href={config.SCHEDULE_CALL_LINK}
            target="_blank"
          >
            <span className="animate-slide-left group-hover:animate-slide-right group-focus:animate-slide-right">
              Schedule call
            </span>
            <LinkOut
              className="hidden animate-slide-left-and-fade hover:block group-hover:block group-focus-visible:block"
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
            {navLinks.map((navLink, index) => (
              <AppLink key={index} className={navLinkClass} href={navLink.link}>
                {navLink.content}
              </AppLink>
            ))}
            <br />
            <AppLink
              className={navLinkClass}
              href={config.SCHEDULE_CALL_LINK}
              target="_blank"
              onClick={() => {
                window.plausible("Schedule a call Clicked")
              }}
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
