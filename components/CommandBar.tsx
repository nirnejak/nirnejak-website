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
import { useTransitionRouter } from "next-view-transitions"
import * as React from "react"

import config from "@/config"

const commandItemClass =
  "command-item px-3.5 py-3 cursor-pointer hover-bg hover-bg-dark flex items-center gap-2.5 outline-hidden"

const CommandBar: React.FC = () => {
  const router = useTransitionRouter()

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
          ? `fixed top-0 left-0 z-30 h-dvh w-full bg-zinc-900/30 backdrop-blur-lg`
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
        className="-translate-1/2 fixed top-1/2 left-1/2 z-30 w-11/12 max-w-[680px] animate-rise select-none rounded-lg bg-zinc-800 p-3 text-sm md:w-full"
      >
        <Command.Input
          className="w-full rounded-lg bg-zinc-900 px-4 py-3 text-sm text-zinc-300 outline-hidden placeholder:text-zinc-700"
          placeholder="Search Link"
          ref={inputRef}
        />
        <Command.Empty className="mt-10 mb-8 w-full text-center text-zinc-300">
          No results found.
        </Command.Empty>
        <Command.List
          className="my-2 max-h-[280px] overflow-y-scroll overscroll-contain text-zinc-300"
          ref={listRef}
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
          <Command.Separator className="my-1 h-[0.5px] bg-zinc-700" />
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
          <Command.Separator className="my-1 h-[0.5px] bg-zinc-700" />
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
          <Command.Separator className="my-1 h-[0.5px] bg-zinc-700" />
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
        <div className="-mx-3 -mb-3 flex justify-between rounded-b-lg border-zinc-700 border-t-[0.5px] p-3 text-xs text-zinc-300">
          <p className="flex items-center gap-1.5">
            <span>Navigate with</span>
            <span className="rounded-md bg-zinc-700 p-1">
              <ArrowUp size={10} />
            </span>
            <span className="rounded-md bg-zinc-700 p-1">
              <ArrowDown size={10} />
            </span>
          </p>
          <p className="flex items-center gap-1.5">
            <span>Open Link</span>
            <span className="rotate-180 rounded-md bg-zinc-700 p-1">
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
