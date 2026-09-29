"use client"

import { ReactLenis } from "lenis/react"
import * as React from "react"

// Safari on macOS, and the other WebKit browsers that ship there. iOS is
// deliberately not included: every browser on the phone is WebKit too, and
// Lenis behaves there.
const isDesktopWebKit = (): boolean => {
  const ua = navigator.userAgent

  // Chromium and Gecko stamp their own token in, including their iOS builds.
  if (/chrome|chromium|crios|edg|opr|firefox|fxios/i.test(ua)) return false
  if (!/applewebkit/i.test(ua)) return false

  // iPhone and iPod say so outright. An iPad in its default desktop mode
  // claims to be a Mac and is only given away by its touch points, which no
  // Mac reports.
  if (/iphone|ipad|ipod/i.test(ua)) return false
  if (navigator.maxTouchPoints > 0) return false

  return /macintosh|mac os x/i.test(ua)
}

// The UA is an external, client-only value, so it is read through a store
// rather than an effect: React takes the server snapshot while hydrating and
// swaps in the real one straight after, with no mismatch and no extra state.
const subscribe = (): (() => void) => () => {}

const useIsDesktopWebKit = (): boolean =>
  React.useSyncExternalStore(
    subscribe,
    () => isDesktopWebKit(),
    () => false
  )

const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Desktop Safari gets the native scroller. Lenis stays mounted rather than
  // being torn out of the tree — swapping the provider in and out would
  // remount every component under it — but with `smoothWheel` off it returns
  // from its wheel handler before `preventDefault`, so scrolling is the
  // browser's own.
  //
  // `stop()` still preventDefaults, so the command bar, mobile menu and photo
  // lightbox keep their scroll lock either way.
  const smoothWheel = !useIsDesktopWebKit()

  return (
    <ReactLenis root options={{ smoothWheel }}>
      {children}
    </ReactLenis>
  )
}

export default SmoothScroll
