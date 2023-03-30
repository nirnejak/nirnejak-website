import * as React from "react"

import {
  CodepenFill,
  DribbbleFill,
  GithubFill,
  LinkedinFill,
  LinkOut,
  TwitterFill,
} from "akar-icons"
import { Command } from "cmdk"
import { useRouter } from "next/router"
import useSound from "use-sound"

import { navLinks } from "utils/navigation"

const commandItemClass =
  "px-3 py-2.5 cursor-pointer hover-bg hover-bg-dark flex items-center gap-1.5 outline-0"

// TODO: Add keyboard navigation with arrows

const socialLinks = [
  {
    title: "Twitter",
    href: "https://twitter.com/jeetnirnejak/",
    icon: <TwitterFill size={13} />,
  },
  {
    title: "Github",
    href: "https://github.com/nirnejak/",
    icon: <GithubFill size={13} />,
  },
  {
    title: "Codepen",
    href: "https://codepen.io/nirnejak/",
    icon: <CodepenFill size={13} />,
  },
  {
    title: "Dribbble",
    href: "https://dribbble.com/nirnejak",
    icon: <DribbbleFill size={13} />,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/nirnejak/",
    icon: <LinkedinFill size={13} />,
  },
]

const CommandBar: React.FC = () => {
  const router = useRouter()

  const listRef = React.useRef(null)

  const [isOpen, setIsOpen] = React.useState(false)

  const [playWhoop] = useSound("../sounds/whoop.wav")
  const [playBlow] = useSound("../sounds/blow.mp3")

  React.useEffect(() => {
    if (isOpen && playBlow !== undefined) {
      playBlow()
    }
  }, [isOpen, playBlow])

  React.useEffect(() => {
    const eventHandler = (e: any | React.KeyboardEvent): void => {
      if ((e as KeyboardEvent).key === "k" && (e as KeyboardEvent).metaKey) {
        setIsOpen(true)
      }
    }

    document.addEventListener("keydown", eventHandler)
    return () => {
      document.removeEventListener("keydown", eventHandler)
    }
  }, [setIsOpen])

  const navigate = (href: string): void => {
    if (href.includes("http") || href.includes("mailto")) {
      window.open(href, "_blank")
    } else {
      router.push(href) // eslint-disable-line @typescript-eslint/no-floating-promises
    }
    playWhoop()
    setIsOpen(false)
  }

  return (
    <div
      className={
        isOpen ? "fixed left-0 top-0 z-50 h-screen w-full bg-zinc-900/90" : ""
      }
    >
      <Command.Dialog
        open={isOpen}
        onOpenChange={setIsOpen}
        label="Global Command Menu"
        className="fixed left-1/2 top-1/2 z-50 w-full max-w-[680px] -translate-x-1/2 -translate-y-1/2 animate-rise rounded-lg bg-zinc-800 p-3 text-sm font-light"
      >
        <Command.Input
          className="w-full rounded-lg bg-zinc-900 px-3.5 py-2.5 text-sm text-zinc-300 outline-none placeholder:text-zinc-600"
          placeholder="Search Command"
        />
        <Command.Empty className="mt-5 w-full text-center text-zinc-300">
          No results found.
        </Command.Empty>
        <Command.List
          className="max-h-[280px] overflow-y-scroll pt-2 text-zinc-300"
          ref={listRef}
        >
          {navLinks.map((link, index) => (
            <Command.Item
              key={index}
              className={commandItemClass}
              tabIndex={0}
              onSelect={() => {
                navigate(link.link)
              }}
            >
              {link.icon}
              <span>{link.content}</span>
            </Command.Item>
          ))}
          <Command.Separator className="my-1 h-[0.5px] bg-zinc-700" />
          {socialLinks.map((link, index) => (
            <Command.Item
              key={index}
              className={commandItemClass}
              onSelect={() => {
                navigate(link.href)
              }}
              tabIndex={0}
            >
              {link.icon}
              <span>{link.title}</span>
              <LinkOut size={13} className="ml-auto" />
            </Command.Item>
          ))}
          <Command.Separator className="my-1 h-[0.5px] bg-zinc-700" />
          <Command.Item
            className={commandItemClass}
            onSelect={() => {
              window.open(
                "https://github.com/nirnejak/nirnejak-website",
                "_blank"
              )
            }}
            tabIndex={0}
          >
            <GithubFill size={13} />
            <span>View Source</span>
            <LinkOut size={13} className="ml-auto" />
          </Command.Item>
        </Command.List>
      </Command.Dialog>
    </div>
  )
}

export default CommandBar
