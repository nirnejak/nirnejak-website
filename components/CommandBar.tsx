"use client"

import {
  ArrowDown,
  ArrowForward,
  ArrowUp,
  Briefcase,
  Calendar,
  Camera,
  Check,
  Copy,
  Envelope,
  GithubFill,
  Headphone,
  HomeAlt1,
  LaptopDevice,
  LinkedinBoxFill,
  LinkOut,
  Pencil,
  Phone,
  XFill,
} from "akar-icons"
import { Command } from "cmdk"
import { useLenis } from "lenis/react"
import { useTransitionRouter } from "next-view-transitions"
import * as React from "react"

import CONFIG from "@/config"
import isExternal from "@/utils/isExternal"

const COMMAND_ITEM_CLASS =
  "command-item px-3 py-2.5 cursor-pointer hover-bg hover-bg-dark flex items-center gap-2 outline-hidden"

const CommandBar: React.FC = () => {
  const router = useTransitionRouter()
  const lenis = useLenis()

  const [isOpen, setIsOpen] = React.useState(false)
  const [hasCopiedEmail, setHasCopiedEmail] = React.useState(false)

  // Copying is the only command here with no visible result of its own, so the
  // dialog stays open just long enough to confirm it before dismissing itself.
  const dismissTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null)

  React.useEffect(
    () => () => {
      if (dismissTimer.current !== null) clearTimeout(dismissTimer.current)
    },
    []
  )

  React.useEffect(() => {
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
  // Only ever undoes its own stop: an unconditional start() on close would
  // also release a lock the lightbox or mobile menu is still holding.
  React.useEffect(() => {
    if (!isOpen) return
    lenis?.stop()
    return () => lenis?.start()
  }, [isOpen, lenis])

  const handleOpenChange = (open: boolean): void => {
    // Dismissing by hand cancels a pending auto-dismiss, so reopening straight
    // after a copy does not get closed again by the old timer.
    if (dismissTimer.current !== null) {
      clearTimeout(dismissTimer.current)
      dismissTimer.current = null
    }
    setHasCopiedEmail(false)
    setIsOpen(open)
  }

  const copyEmail = (): void => {
    void navigator.clipboard.writeText(CONFIG.CONTACT_EMAIL).then(
      () => {
        setHasCopiedEmail(true)
        dismissTimer.current = setTimeout(() => {
          setIsOpen(false)
          setHasCopiedEmail(false)
        }, 900)
      },
      () => {
        // Clipboard denied or unavailable — close rather than confirm a copy
        // that did not happen.
        setIsOpen(false)
      }
    )
  }

  const navigate = (href: string): void => {
    if (isExternal(href)) {
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
        onOpenChange={handleOpenChange}
        loop={true}
        label="Global Command Menu"
        className="animate-rise bg-surface-raised border-line fixed top-1/2 left-1/2 z-30 w-11/12 max-w-[560px] -translate-1/2 rounded-2xl border p-2 text-[13px] shadow-2xl select-none md:w-full"
      >
        <Command.Input
          className="bg-surface text-body placeholder:text-placeholder border-line w-full rounded-xl border px-3 py-2.5 text-[13px] outline-hidden"
          placeholder="Search Link"
        />
        <Command.Empty className="text-body mt-8 mb-6 w-full text-center">
          No results found.
        </Command.Empty>
        <Command.List
          className="text-body my-1.5 max-h-[240px] overflow-y-scroll overscroll-contain"
          data-lenis-prevent
        >
          <Command.Item
            className={COMMAND_ITEM_CLASS}
            tabIndex={0}
            value={CONFIG.SCHEDULE_CALL_LINK}
            onSelect={() => {
              navigate(CONFIG.SCHEDULE_CALL_LINK)
            }}
          >
            <Calendar size={14} />
            <span>Schedule Call</span>
            <LinkOut size={12} className="ml-auto" />
          </Command.Item>
          <Command.Item
            className={COMMAND_ITEM_CLASS}
            tabIndex={0}
            value="Copy Email"
            onSelect={copyEmail}
          >
            <Envelope size={14} />
            <span>{hasCopiedEmail ? "Copied" : "Copy Email"}</span>
            {hasCopiedEmail ? (
              <Check size={12} className="ml-auto" />
            ) : (
              <Copy size={12} className="ml-auto" />
            )}
          </Command.Item>
          <Command.Separator className="bg-line my-1 h-[0.5px]" />
          {SOCIAL_LINKS.map((link) => (
            <Command.Item
              key={link.content}
              className={COMMAND_ITEM_CLASS}
              tabIndex={0}
              value={link.content}
              onSelect={() => {
                navigate(link.href)
              }}
            >
              {link.icon}
              <span>{link.content}</span>
              <LinkOut size={12} className="ml-auto" />
            </Command.Item>
          ))}
          <Command.Separator className="bg-line my-1 h-[0.5px]" />
          {SITE_LINKS.map((link) => (
            <Command.Item
              key={link.content}
              className={COMMAND_ITEM_CLASS}
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
            className={COMMAND_ITEM_CLASS}
            tabIndex={0}
            value="View Source"
            onSelect={() => {
              navigate(CONFIG.SOURCE_URL)
            }}
          >
            <GithubFill size={14} />
            <span>View Source</span>
            <LinkOut size={12} className="ml-auto" />
          </Command.Item>
        </Command.List>
        <div className="border-line text-body -mx-2 -mb-2 flex justify-between rounded-b-xl border-t-[0.5px] p-2.5 text-[11px]">
          <p className="flex items-center gap-1">
            <span>Navigate with</span>
            <span className="bg-surface-inset rounded-lg p-0.5">
              <ArrowUp size={9} />
            </span>
            <span className="bg-surface-inset rounded-lg p-0.5">
              <ArrowDown size={9} />
            </span>
          </p>
          <p className="flex items-center gap-1">
            <span>Open Link</span>
            <span className="bg-surface-inset rotate-180 rounded-lg p-0.5">
              <ArrowForward size={9} />
            </span>
          </p>
        </div>
      </Command.Dialog>
    </Command>
  )
}

export default CommandBar

const SOCIAL_LINKS = [
  { content: "X", href: CONFIG.SOCIALS.X, icon: <XFill size={14} /> },
  {
    content: "Github",
    href: CONFIG.SOCIALS.GITHUB,
    icon: <GithubFill size={14} />,
  },
  {
    content: "LinkedIn",
    href: CONFIG.SOCIALS.LINKEDIN,
    icon: <LinkedinBoxFill size={14} />,
  },
]

const SITE_LINKS = [
  { content: "Home", link: "/", icon: <HomeAlt1 size={14} /> },
  { content: "Work", link: "/work/", icon: <LaptopDevice size={14} /> },
  {
    content: "Projects",
    link: "/work/projects/",
    icon: <Briefcase size={14} />,
  },
  { content: "Writing", link: "/blogs/", icon: <Pencil size={14} /> },
  { content: "Photos", link: "/photos/", icon: <Camera size={14} /> },
  { content: "Uses", link: "/uses/", icon: <Headphone size={14} /> },
  { content: "Contact", link: "/contact/", icon: <Phone size={14} /> },
]
