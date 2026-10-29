import type { MetadataRoute } from "next"

import CONFIG from "@/config"

// Generated here rather than shipped from public/ so Next links it itself,
// relative to whichever origin serves the page — an absolute prod URL made
// preview deploys request a cross-origin manifest the browser rejects.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: CONFIG.NAME,
    short_name: "Nirnejak",
    description: CONFIG.BIO,
    start_url: "/",
    scope: "/",
    // Not "standalone": there is no PWA, so an installed shortcut should open
    // in the browser like any other bookmark.
    display: "browser",
    theme_color: "#FDFDFD",
    background_color: "#FDFDFD",
    icons: [192, 256, 384, 512].map((px) => ({
      src: `/icons/icon-${px}x${px}.png`,
      sizes: `${px}x${px}`,
      type: "image/png",
    })),
  }
}
