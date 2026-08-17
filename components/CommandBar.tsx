"use client"

import {
  ArrowDown,
  ArrowForward,
  ArrowUp,
  Calendar,
  Camera,
  DribbbleFill,
  Frame,
  GithubFill,
  HomeAlt1,
  LaptopDevice,
  LinkOut,
  Pencil,
  Phone,
  ProductHuntFill,
  UnsplashFill,
  XFill,
} from "akar-icons"
import { Command } from "cmdk"
import { useLenis } from "lenis/react"
import { useTransitionRouter } from "next-view-transitions"
import * as React from "react"

import config from "@/config"

const commandItemClass =
  "command-item px-3.5 py-3 cursor-pointer hover-bg hover-bg-dark flex items-center gap-2.5 outline-hidden"

const CommandBar: React.FC = () => {
  const router = useTransitionRouter()
  const lenis = useLenis()

  const listRef = React.useRef(null)
  const inputRef = React.useRef<HTMLInputElement | null>(null)

  const [value, setValue] = React.useState("X")
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    inputRef.current?.focus()

    const eventHandler = (e: KeyboardEvent): void => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        setIsOpen(true)
      }
    }

    document.addEventListener("keydown", eventHandler)
    return () => {
      document.removeEventListener("keydown", eventHandler)
    }
  }, [])

  // Lenis hijacks wheel events on the whole page, so pause it while the
  // command bar is open — the list opts back in via `data-lenis-prevent`.
  React.useEffect(() => {
    if (isOpen) lenis?.stop()
    else lenis?.start()
  }, [isOpen, lenis])

  const navigate = (href: string): void => {
    if (href.includes("http") || href.includes("mailto")) {
      window.open(href, "_blank")
    } else {
      router.push(href)
    }
    setIsOpen(false)
  }

  return (
    <Command
      className={
        isOpen
          ? `bg-scrim fixed top-0 left-0 z-30 h-dvh w-full backdrop-blur-lg`
          : ""
      }
    >
      <Command.Dialog
        open={isOpen}
        onOpenChange={setIsOpen}
        loop={true}
        value={value}
        onValueChange={(v) => {
          setValue(v)
        }}
        label="Global Command Menu"
        className="animate-rise bg-surface-raised border-line fixed top-1/2 left-1/2 z-30 w-11/12 max-w-[680px] -translate-1/2 rounded-lg border p-3 text-sm shadow-2xl select-none md:w-full"
      >
        <Command.Input
          className="bg-surface text-body placeholder:text-placeholder border-line w-full rounded-lg border px-4 py-3 text-sm outline-hidden"
          placeholder="Search Link"
          ref={inputRef}
        />
        <Command.Empty className="text-body mt-10 mb-8 w-full text-center">
          No results found.
        </Command.Empty>
        <Command.List
          className="text-body my-2 max-h-[280px] overflow-y-scroll overscroll-contain"
          ref={listRef}
          data-lenis-prevent
        >
          <Command.Item
            className={commandItemClass}
            tabIndex={0}
            value={config.SCHEDULE_CALL_LINK}
            onSelect={() => {
              navigate(config.SCHEDULE_CALL_LINK)
            }}
          >
            <Calendar size={15} />
            <span>Schedule Call</span>
            <LinkOut size={13} className="ml-auto" />
          </Command.Item>
          <Command.Separator className="bg-line my-1 h-[0.5px]" />
          {socialLinks.map((link) => (
            <Command.Item
              key={link.content}
              className={commandItemClass}
              tabIndex={0}
              value={link.content}
              onSelect={() => {
                navigate(link.href)
              }}
            >
              {link.icon}
              <span>{link.content}</span>
              <LinkOut size={13} className="ml-auto" />
            </Command.Item>
          ))}
          <Command.Separator className="bg-line my-1 h-[0.5px]" />
          {siteLinks.map((link) => (
            <Command.Item
              key={link.content}
              className={commandItemClass}
              tabIndex={0}
              value={link.content}
              onSelect={() => {
                navigate(link.link)
              }}
            >
              {link.icon}
              <span>{link.content}</span>
            </Command.Item>
          ))}
          <Command.Separator className="bg-line my-1 h-[0.5px]" />
          <Command.Item
            className={commandItemClass}
            tabIndex={0}
            value="View Source"
            onSelect={() => {
              window.open(
                "https://github.com/nirnejak/nirnejak-website",
                "_blank"
              )
            }}
          >
            <GithubFill size={15} />
            <span>View Source</span>
            <LinkOut size={13} className="ml-auto" />
          </Command.Item>
        </Command.List>
        <div className="border-line text-body -mx-3 -mb-3 flex justify-between rounded-b-lg border-t-[0.5px] p-3 text-xs">
          <p className="flex items-center gap-1.5">
            <span>Navigate with</span>
            <span className="bg-surface-inset rounded-md p-1">
              <ArrowUp size={10} />
            </span>
            <span className="bg-surface-inset rounded-md p-1">
              <ArrowDown size={10} />
            </span>
          </p>
          <p className="flex items-center gap-1.5">
            <span>Open Link</span>
            <span className="bg-surface-inset rotate-180 rounded-md p-1">
              <ArrowForward size={10} />
            </span>
          </p>
        </div>
      </Command.Dialog>
    </Command>
  )
}

export default CommandBar

export const socialLinks = [
  {
    content: "X",
    href: "https://twitter.com/jeetnirnejak/",
    icon: <XFill size={15} />,
  },
  {
    content: "Github",
    href: "https://github.com/nirnejak/",
    icon: <GithubFill size={15} />,
  },
  {
    content: "Layers",
    href: "https://layers.to/nirnejak/",
    icon: <Frame size={15} />,
  },
  {
    content: "Dribbble",
    href: "https://dribbble.com/nirnejak/",
    icon: <DribbbleFill size={15} />,
  },
  {
    content: "ProductHunt",
    href: "https://www.producthunt.com/@nirnejak",
    icon: <ProductHuntFill size={15} />,
  },
  {
    content: "Unsplash",
    href: "https://unsplash.com/@nirnejak/",
    icon: <UnsplashFill size={15} />,
  },
]

export const siteLinks = [
  {
    content: "Home",
    value: "home",
    link: "/",
    icon: <HomeAlt1 size={15} />,
  },
  {
    content: "Work",
    value: "work",
    link: "/work/",
    icon: <LaptopDevice size={15} />,
  },
  {
    content: "Blogs",
    value: "blogs",
    link: "/blogs/",
    icon: <Pencil size={15} />,
  },
  {
    content: "Photos",
    value: "photos",
    link: "/photos/",
    icon: <Camera size={15} />,
  },
  {
    content: "Uses",
    value: "uses",
    link: "/uses/",
    icon: <LaptopDevice size={15} />,
  },
  {
    content: "Contact",
    value: "contact",
    link: "/contact/",
    icon: <Phone size={15} />,
  },
]
