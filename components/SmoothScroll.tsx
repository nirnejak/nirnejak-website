"use client"

import { ReactLenis } from "lenis/react"
import * as React from "react"

// Chromium and Gecko both stamp their own token into the UA, including on
// their iOS builds where the engine underneath is WebKit anyway. What is left
// claiming "Safari" is Safari.
const isSafari = (): boolean => {
  const ua = navigator.userAgent
  if (/chrome|chromium|crios|edg|opr|firefox|fxios/i.test(ua)) return false
  return /safari/i.test(ua)
}

// The UA is an external, client-only value, so it is read through a store
// rather than an effect: React takes the server snapshot while hydrating and
// swaps in the real one straight after, with no mismatch and no extra state.
const subscribe = (): (() => void) => () => {}

const useIsSafari = (): boolean =>
  React.useSyncExternalStore(
    subscribe,
    () => isSafari(),
    () => false
  )

const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Safari gets the native scroller. Lenis stays mounted rather than being
  // torn out of the tree — swapping the provider in and out would remount
  // every component under it — but with `smoothWheel` off it returns from its
  // wheel handler before `preventDefault`, so scrolling is the browser's own.
  //
  // `stop()` still preventDefaults, so the command bar, mobile menu and photo
  // lightbox keep their scroll lock either way.
  const smoothWheel = !useIsSafari()

  return (
    <ReactLenis root options={{ smoothWheel }}>
      {children}
    </ReactLenis>
  )
}

export default SmoothScroll
