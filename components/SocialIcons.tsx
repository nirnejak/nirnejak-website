"use client"

import { GithubFill, XFill } from "akar-icons"
import type * as React from "react"
import Tooltip from "@/components/atoms/Tooltip"
import CONFIG from "@/config"

const SOCIAL_LINKS = [
  { title: "Github", url: CONFIG.SOCIALS.GITHUB, Icon: GithubFill },
  { title: "X", url: CONFIG.SOCIALS.X, Icon: XFill },
]

const SocialIcons: React.FC = () => {
  return (
    <div className="flex items-center gap-1">
      {SOCIAL_LINKS.map(({ title, url, Icon }) => (
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
