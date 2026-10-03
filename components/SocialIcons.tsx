"use client"

import { GithubFill, XFill } from "akar-icons"
import type * as React from "react"
import Tooltip from "@/components/atoms/Tooltip"
import config from "@/config"

const socialLinks = [
  { title: "Github", url: config.socials.github, Icon: GithubFill },
  { title: "X", url: config.socials.x, Icon: XFill },
]

const SocialIcons: React.FC = () => {
  return (
    <div className="flex items-center gap-1">
      {socialLinks.map(({ title, url, Icon }) => (
        <Tooltip key={title} label={title}>
          {/* Real links rather than buttons calling window.open: crawlable,
              middle-clickable, and they show their URL on hover. `me` ties
              the profiles back to this site for anything that checks. */}
          <a
            href={url}
            target="_blank"
            rel="me noopener"
            className="hover-bg group text-dim rounded-md p-3 outline-hidden"
            aria-label={title}
          >
            <Icon size={18} />
          </a>
        </Tooltip>
      ))}
    </div>
  )
}

export default SocialIcons
