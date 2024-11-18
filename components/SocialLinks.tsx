"use client"
import * as React from "react"

import * as Tooltip from "@radix-ui/react-tooltip"
import {
  ArrowRight,
  ProductHuntFill,
  DribbbleFill,
  GithubFill,
  XFill,
} from "akar-icons"

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
          className="hover-bg group rounded-md p-3 text-zinc-500 outline-none"
          aria-label={text}
        >
          {icon}
        </button>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content
          className="select-none rounded-md bg-zinc-800 px-3.5 py-2.5 text-sm leading-none text-zinc-300 will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade"
          sideOffset={5}
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
    title: "Github",
    url: "https://github.com/nirnejak/",
    icon: <GithubFill size={21} />,
  },
  {
    title: "Dribbble",
    url: "https://dribbble.com/nirnejak",
    icon: <DribbbleFill size={21} />,
  },
  {
    title: "ProductHunt",
    url: "https://www.producthunt.com/@nirnejak",
    icon: <ProductHuntFill size={21} />,
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
                className="animate-slideLeft group-hover:animate-slideRight group-focus:animate-slideRight"
              />
              <ArrowRight
                className="hidden animate-slideLeftAndFade hover:block group-hover:block group-focus-visible:block"
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
