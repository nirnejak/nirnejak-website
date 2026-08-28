"use client"

import * as RadixTooltip from "@radix-ui/react-tooltip"
import type * as React from "react"

interface Props {
  label: string
  children: React.ReactNode
  delayDuration?: number
  sideOffset?: number
}

const Tooltip: React.FC<Props> = ({
  label,
  children,
  delayDuration = 200,
  sideOffset = 6,
}) => (
  <RadixTooltip.Provider delayDuration={delayDuration}>
    <RadixTooltip.Root>
      <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
      <RadixTooltip.Portal>
        <RadixTooltip.Content
          className="data-[state=delayed-open]:data-[side=bottom]:animate-slide-up-and-fade data-[state=delayed-open]:data-[side=left]:animate-slide-right-and-fade data-[state=delayed-open]:data-[side=right]:animate-slide-left-and-fade data-[state=delayed-open]:data-[side=top]:animate-slide-down-and-fade bg-surface-raised text-body border-line rounded-md border px-3.5 py-2.5 text-sm leading-none font-medium shadow-lg will-change-[transform,opacity] select-none"
          sideOffset={sideOffset}
        >
          {label}
          <RadixTooltip.Arrow className="fill-surface-raised" />
        </RadixTooltip.Content>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  </RadixTooltip.Provider>
)

export default Tooltip
