"use client"

import { DribbbleFill, GithubFill, XFill } from "akar-icons"
import type * as React from "react"
import Tooltip from "@/components/atoms/Tooltip"

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
    <div className="flex items-center gap-1">
      {socialLinks.map(({ title, url, icon }) => (
        <Tooltip key={title} label={title}>
          <button
            type="button"
            onClick={() => window.open(url, "_blank")}
            className="hover-bg group text-dim cursor-pointer rounded-md p-3 outline-hidden"
            aria-label={title}
          >
            {icon}
          </button>
        </Tooltip>
      ))}
    </div>
  )
}

export default SocialIcons
