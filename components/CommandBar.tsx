import * as React from "react"

import {
  Camera,
  CodepenFill,
  DribbbleFill,
  GithubFill,
  HomeAlt1,
  LaptopDevice,
  LinkedinFill,
  LinkOut,
  Pencil,
  Phone,
  TwitterFill,
} from "akar-icons"
import { Command } from "cmdk"
import { useRouter } from "next/router"

const commandItemClass =
  "px-3 py-2.5 cursor-pointer hover-bg hover-bg-dark flex items-center gap-1.5 outline-0"

// TODO: Fix click action
// TODO: Add keyboard navigation with arrows

const CommandBar: React.FC = () => {
  const router = useRouter()

  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    if (isOpen) {
      // TODO: play spaceship, rise sound
    }
  }, [isOpen])

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
        className="fixed left-1/2 top-1/2 z-50 w-5/12 -translate-x-1/2 -translate-y-1/2 animate-zoomIn rounded-lg bg-zinc-800 p-3 text-sm font-light"
      >
        <Command.Input
          className="w-full rounded-lg bg-zinc-900 px-3.5 py-2.5 text-sm text-zinc-300 outline-none placeholder:text-zinc-600"
          placeholder="Search Command"
        />

        <Command.List className="pt-2 text-zinc-300">
          <Command.Item
            className={commandItemClass}
            tabIndex={0}
            onClick={() => {
              router.push("/") // eslint-disable-line @typescript-eslint/no-floating-promises
            }}
            onKeyUp={(e: React.KeyboardEvent) => {
              if (e.key === "Enter") {
                router.push("/") // eslint-disable-line @typescript-eslint/no-floating-promises
              }
            }}
          >
            <HomeAlt1 size={13} />
            <span>Home</span>
          </Command.Item>
          <Command.Item
            className={commandItemClass}
            tabIndex={0}
            onClick={() => {
              router.push("/work/") // eslint-disable-line @typescript-eslint/no-floating-promises
            }}
            onKeyUp={(e: React.KeyboardEvent) => {
              if (e.key === "Enter") {
                router.push("/work/") // eslint-disable-line @typescript-eslint/no-floating-promises
              }
            }}
          >
            <LaptopDevice size={13} />
            <span>Work</span>
          </Command.Item>
          <Command.Item
            className={commandItemClass}
            tabIndex={0}
            onClick={() => {
              router.push("/blogs/") // eslint-disable-line @typescript-eslint/no-floating-promises
            }}
            onKeyUp={(e: React.KeyboardEvent) => {
              if (e.key === "Enter") {
                router.push("/blogs/") // eslint-disable-line @typescript-eslint/no-floating-promises
              }
            }}
          >
            <Pencil size={13} />
            <span>Blogs</span>
          </Command.Item>
          <Command.Item
            className={commandItemClass}
            tabIndex={0}
            onClick={() => {
              router.push("/photos/") // eslint-disable-line @typescript-eslint/no-floating-promises
            }}
            onKeyUp={(e: React.KeyboardEvent) => {
              if (e.key === "Enter") {
                router.push("/photos/") // eslint-disable-line @typescript-eslint/no-floating-promises
              }
            }}
          >
            <Camera size={13} />
            <span>Photos</span>
          </Command.Item>
          <Command.Item
            className={commandItemClass}
            tabIndex={0}
            onClick={() => {
              router.push("/uses/") // eslint-disable-line @typescript-eslint/no-floating-promises
            }}
            onKeyUp={(e: React.KeyboardEvent) => {
              if (e.key === "Enter") {
                router.push("/uses/") // eslint-disable-line @typescript-eslint/no-floating-promises
              }
            }}
          >
            <LaptopDevice size={13} />
            <span>Uses</span>
          </Command.Item>
          <Command.Item
            className={commandItemClass}
            tabIndex={0}
            onClick={() => {
              router.push("/contact/") // eslint-disable-line @typescript-eslint/no-floating-promises
            }}
            onKeyUp={(e: React.KeyboardEvent) => {
              if (e.key === "Enter") {
                router.push("/contact/") // eslint-disable-line @typescript-eslint/no-floating-promises
              }
            }}
          >
            <Phone size={13} />
            <span>Contact</span>
          </Command.Item>
          <Command.Separator className="my-1 h-[0.5px] bg-zinc-700" />
          <Command.Item
            className={commandItemClass}
            onClick={() => {
              window.open("https://twitter.com/jeetnirnejak/", "_blank")
            }}
            onKeyUp={(e) => {
              if (e.key === "Enter")
                window.open("https://twitter.com/jeetnirnejak/", "_blank")
            }}
            tabIndex={0}
          >
            <TwitterFill size={13} />
            <span>Twitter</span>
            <LinkOut size={13} className="ml-auto" />
          </Command.Item>
          <Command.Item
            className={commandItemClass}
            onClick={() => {
              window.open("https://github.com/nirnejak/", "_blank")
            }}
            onKeyUp={(e) => {
              if (e.key === "Enter")
                window.open("https://github.com/nirnejak/", "_blank")
            }}
            tabIndex={0}
          >
            <GithubFill size={13} />
            <span>Github</span>
            <LinkOut size={13} className="ml-auto" />
          </Command.Item>
          <Command.Item
            className={commandItemClass}
            onClick={() => {
              window.open("https://codepen.io/nirnejak/", "_blank")
            }}
            onKeyUp={(e) => {
              if (e.key === "Enter")
                window.open("https://codepen.io/nirnejak/", "_blank")
            }}
            tabIndex={0}
          >
            <CodepenFill size={13} />
            <span>Codepen</span>
            <LinkOut size={13} className="ml-auto" />
          </Command.Item>
          <Command.Item
            className={commandItemClass}
            onClick={() => {
              window.open("https://dribbble.com/nirnejak", "_blank")
            }}
            onKeyUp={(e) => {
              if (e.key === "Enter")
                window.open("https://dribbble.com/nirnejak", "_blank")
            }}
            tabIndex={0}
          >
            <DribbbleFill size={13} />
            <span>Dribbble</span>
            <LinkOut size={13} className="ml-auto" />
          </Command.Item>
          <Command.Item
            className={commandItemClass}
            onClick={() => {
              window.open("https://www.linkedin.com/in/nirnejak/", "_blank")
            }}
            onKeyUp={(e) => {
              if (e.key === "Enter")
                window.open("https://www.linkedin.com/in/nirnejak/", "_blank")
            }}
            tabIndex={0}
          >
            <LinkedinFill size={13} />
            <span>LinkedIn</span>
            <LinkOut size={13} className="ml-auto" />
          </Command.Item>
          <Command.Separator className="my-1 h-[0.5px] bg-zinc-700" />
          <Command.Item
            className={commandItemClass}
            onClick={() => {
              window.open(
                "https://github.com/nirnejak/nirnejak-website",
                "_blank"
              )
            }}
            onKeyUp={(e) => {
              if (e.key === "Enter")
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
