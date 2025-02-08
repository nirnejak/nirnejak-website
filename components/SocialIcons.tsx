"use client"
import * as React from "react"

import * as Tooltip from "@radix-ui/react-tooltip"
import { DribbbleFill, GithubFill, XFill } from "akar-icons"

const socialLinks = [
  {
    title: "Github",
    url: "https://github.com/nirnejak/",
    icon: <GithubFill size={18} />,
  },
  {
    title: "Dribbble",
    url: "https://dribbble.com/nirnejak",
    icon: <DribbbleFill size={18} />,
  },
  {
    title: "X",
    url: "https://x.com/jeetnirnejak",
    icon: <XFill size={18} />,
  },
]

const SocialIcons: React.FC = () => {
  return (
    <Tooltip.Provider delayDuration={200}>
      <div className="flex items-center gap-1">
        {socialLinks.map(({ title, url, icon }) => (
          <Tooltip.Root key={title}>
            <Tooltip.Trigger asChild>
              <button
                onClick={() => window.open(url, "_blank")}
                className="hover-bg group rounded-md p-3 text-zinc-400 outline-hidden cursor-pointer"
                aria-label={title}
              >
                {icon}
              </button>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                className="select-none rounded-md bg-zinc-800 px-3.5 py-2.5 text-sm leading-none text-zinc-300 will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slide-up-and-fade data-[state=delayed-open]:data-[side=left]:animate-slide-right-and-fade data-[state=delayed-open]:data-[side=right]:animate-slide-left-and-fade data-[state=delayed-open]:data-[side=top]:animate-slide-down-and-fade"
                sideOffset={5}
              >
                {title}
                <Tooltip.Arrow className="fill-zinc-800" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        ))}
      </div>
    </Tooltip.Provider>
  )
}

export default SocialIcons
