"use client"

import * as React from "react"

// ⌘ on Apple platforms, Ctrl everywhere else — the command bar listens for
// both. The platform is client-only, so it is read through a store: the server
// render and hydration use ⌘, and the real value swaps in straight after.
const subscribe = (): (() => void) => () => {}

const isApple = (): boolean =>
  /mac|iphone|ipad|ipod/i.test(navigator.platform || navigator.userAgent)

const ModifierKey: React.FC = () => {
  const apple = React.useSyncExternalStore(subscribe, isApple, () => true)
  return apple ? "⌘" : "Ctrl"
}

export default ModifierKey
