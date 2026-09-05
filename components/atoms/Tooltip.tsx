"use client"

import * as RadixTooltip from "@radix-ui/react-tooltip"
import * as React from "react"

interface ProviderProps {
  children: React.ReactNode
}

/**
 * Mounted once in the root layout so every tooltip on the site shares one
 * timer. That sharing is the whole point: `skipDelayDuration` lets a second
 * tooltip open instantly when the pointer moves straight from one trigger to
 * the next, which is what makes a row of icons feel quick rather than gated.
 */
export const TooltipProvider: React.FC<ProviderProps> = ({ children }) => (
  <RadixTooltip.Provider delayDuration={200} skipDelayDuration={300}>
    {children}
  </RadixTooltip.Provider>
)

interface Props {
  label: string
  children: React.ReactNode
  side?: RadixTooltip.TooltipContentProps["side"]
  sideOffset?: number
  align?: RadixTooltip.TooltipContentProps["align"]
  alignOffset?: number
  /**
   * Opens the tooltip on tap as well as hover. Off by default because most
   * triggers do something when tapped — a social icon opens a link, and
   * stealing that tap to show a label would be worse than showing nothing.
   * Turn it on for triggers whose only job is to reveal the label, which
   * would otherwise be unreachable on a phone.
   */
  showOnTap?: boolean
}

const Tooltip: React.FC<Props> = ({
  label,
  children,
  side = "top",
  sideOffset = 10,
  align = "center",
  alignOffset = 0,
  showOnTap = false,
}) => {
  const [open, setOpen] = React.useState(false)

  // Guarded on a coarse pointer: on a mouse, Radix already closes the tooltip
  // on pointerdown, so reopening it here would close and reopen on every
  // click and flash the exit animation.
  const handleClick = (): void => {
    if (showOnTap && window.matchMedia("(hover: none)").matches) setOpen(true)
  }

  return (
    // Nothing in here is interactive, so the tooltip should not survive the
    // pointer entering it — it just gets in the way of what is underneath.
    <RadixTooltip.Root
      open={open}
      onOpenChange={setOpen}
      disableHoverableContent
    >
      <RadixTooltip.Trigger asChild onClick={handleClick}>
        {children}
      </RadixTooltip.Trigger>
      <RadixTooltip.Portal>
        <RadixTooltip.Content
          // A raised pill on the site's own elevation ramp rather than an
          // inverted one — light enough to sit quietly over the page, with a
          // hairline and a soft shadow doing the lifting. `tooltip` carries
          // the origin-aware spring — see app/main.css.
          className="tooltip bg-surface-raised text-label border-line rounded-full border px-3.5 py-2 text-[13px] leading-none font-medium tracking-tight select-none"
          side={side}
          sideOffset={sideOffset}
          align={align}
          alignOffset={alignOffset}
          collisionPadding={16}
          // A tap-opened tooltip has no pointer-leave to close it.
          onPointerDownOutside={() => {
            setOpen(false)
          }}
        >
          {label}
        </RadixTooltip.Content>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  )
}

export default Tooltip
