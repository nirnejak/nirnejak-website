// Retires the service worker next-pwa used to install. That worker precached
// ~100 MB of original photos on a first visit and served JS stale-while-
// revalidate, so returning visitors could run an old build.
//
// Browsers re-fetch this file on navigation, find it changed, and install it.
// It clears every cache the old worker left, unregisters itself, and reloads
// open tabs so they come back straight from the network. Keep it deployed for
// a few months — anyone who visited before it shipped needs one more visit.

self.addEventListener("install", () => {
  self.skipWaiting()
})

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys()
      await Promise.all(keys.map((key) => caches.delete(key)))
      await self.registration.unregister()

      const windows = await self.clients.matchAll({ type: "window" })
      for (const client of windows) client.navigate(client.url)
    })()
  )
})
