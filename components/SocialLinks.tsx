"use client"
import * as React from "react"

import * as Tooltip from "@radix-ui/react-tooltip"
import { XFill, InstagramFill } from "akar-icons"

const SocialLinks: React.FC = () => {
  return (
    <Tooltip.Provider delayDuration={200}>
      <div className="flex justify-between gap-1">
        <div>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <button
                onClick={() =>
                  window.open("https://x.com/jeetnirnejak/", "_blank")
                }
                className="hover-bg group rounded-md p-3 text-zinc-500 outline-hidden cursor-pointer"
                aria-label="X"
              >
                <XFill size={21} />
              </button>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                className="select-none rounded-md bg-zinc-800 px-3.5 py-2.5 text-sm leading-none text-zinc-300 will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slide-up-and-fade data-[state=delayed-open]:data-[side=left]:animate-slide-right-and-fade data-[state=delayed-open]:data-[side=right]:animate-slide-left-and-fade data-[state=delayed-open]:data-[side=top]:animate-slide-down-and-fade"
                sideOffset={5}
                side="bottom"
              >
                X
                <Tooltip.Arrow className="fill-zinc-800" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <button
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/jeetnirnejak/",
                    "_blank"
                  )
                }
                className="hover-bg group rounded-md p-3 text-zinc-500 outline-hidden cursor-pointer"
                aria-label={"Instagram"}
              >
                <InstagramFill size={21} />
              </button>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                className="select-none rounded-md bg-zinc-800 px-3.5 py-2.5 text-sm leading-none text-zinc-300 will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slide-up-and-fade data-[state=delayed-open]:data-[side=left]:animate-slide-right-and-fade data-[state=delayed-open]:data-[side=right]:animate-slide-left-and-fade data-[state=delayed-open]:data-[side=top]:animate-slide-down-and-fade"
                sideOffset={5}
                side="bottom"
              >
                Instagram
                <Tooltip.Arrow className="fill-zinc-800" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </div>
      </div>
    </Tooltip.Provider>
  )
}

export default SocialLinks
