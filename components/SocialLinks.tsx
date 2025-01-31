"use client"
import * as React from "react"
import type { JSX } from "react/jsx-runtime"

import * as Tooltip from "@radix-ui/react-tooltip"
import { ArrowRight, XFill, LinkedinFill, InstagramFill } from "akar-icons"

const renderSocialLink = (
  text: string,
  link: string,
  icon: React.ReactNode
): JSX.Element => {
  return (
    <Tooltip.Root key={text}>
      <Tooltip.Trigger asChild>
        <button
          onClick={() => window.open(link, "_blank")}
          className="hover-bg group rounded-md p-3 text-zinc-500 outline-hidden cursor-pointer"
          aria-label={text}
        >
          {icon}
        </button>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content
          className="select-none rounded-md bg-zinc-800 px-3.5 py-2.5 text-sm leading-none text-zinc-300 will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slide-up-and-fade data-[state=delayed-open]:data-[side=left]:animate-slide-right-and-fade data-[state=delayed-open]:data-[side=right]:animate-slide-left-and-fade data-[state=delayed-open]:data-[side=top]:animate-slide-down-and-fade"
          sideOffset={5}
          side="bottom"
        >
          {text}
          <Tooltip.Arrow className="fill-zinc-800" />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  )
}

const socialLinks = [
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/nirnejak/",
    icon: <LinkedinFill size={21} />,
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/jeetnirnejak/",
    icon: <InstagramFill size={21} />,
  },
]

const SocialLinks: React.FC = () => {
  return (
    <Tooltip.Provider delayDuration={200}>
      <div className="flex justify-between gap-1">
        <div>
          {socialLinks.map(({ title, url, icon }) =>
            renderSocialLink(title, url, icon)
          )}
        </div>
        <div>
          {renderSocialLink(
            "X",
            "https://twitter.com/jeetnirnejak/",
            <span className="flex items-center gap-1.5">
              <XFill
                size={21}
                className="animate-slide-left group-hover:animate-slide-right group-focus:animate-slide-right"
              />
              <ArrowRight
                className="hidden animate-slide-left-and-fade hover:block group-hover:block group-focus-visible:block"
                size={14}
              />
            </span>
          )}
        </div>
      </div>
    </Tooltip.Provider>
  )
}

export default SocialLinks
