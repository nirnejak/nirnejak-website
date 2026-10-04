"use client"
import { XSmall } from "akar-icons"
import { AnimatePresence, MotionConfig, motion } from "motion/react"
import Image from "next/image"
import * as React from "react"

import useModalWithContent from "@/hooks/useModalWithContent"
import type { Photo } from "@/utils/photos"

interface Props {
  photos: Photo[]
}

// The open and close are one shared-element morph, so the photo, its corners
// and the grid slot it leaves behind all have to settle on the same curve.
// Short with a trace of bounce — enough life to read as physical, not enough
// to read as slow.
const MORPH = { type: "spring", duration: 0.42, bounce: 0.14 } as const
const FADE = { duration: 0.25, ease: "easeOut" } as const
// Arrow keys swap photos in place. Both halves of that handoff — the old photo
// returning to its slot behind the scrim and the new one leaving its own —
// skip the morph, or the swap would fly two photos across the screen.
const SNAP = { duration: 0 } as const

// The grid renders every thumbnail at these exact dimensions. Reusing them in
// the expanded view resolves to the same optimiser URL, so the browser serves
// the already-decoded thumbnail from cache and the expand has something to
// show on its first frame.
const THUMB_WIDTH = 360
const THUMB_HEIGHT = 640

// Viewport padding around an expanded photo, in px. The frame's height is
// derived from it rather than measured, so the box is the right size before
// the full-size image exists — otherwise Motion gets handed a 0×0 box and the
// expand snaps instead of flying.
const INSET = 16

interface TileProps {
  photo: Photo
  index: number
  isExpanded: boolean
  isSwapping: boolean
  hasEntered: boolean
  onOpen: (photo: Photo) => void
  onEntered: () => void
}

// Memoised because opening one photo changes `isExpanded` for exactly one
// tile. Without this every one of the ~134 tiles re-renders on the same click
// that starts the morph, and the resulting long task eats its opening frames.
const PhotoTile = React.memo<TileProps>(
  ({ photo, index, isExpanded, isSwapping, hasEntered, onOpen, onEntered }) => (
    <motion.button
      type="button"
      aria-label={`Expand photo: ${photo.alt}`}
      onClick={() => {
        onOpen(photo)
      }}
      initial={{ opacity: 0, scale: 0.02, rotate: 15 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      whileHover={{ scale: 1.03, rotate: 0, zIndex: 5 }}
      transition={{
        type: "spring",
        stiffness: hasEntered ? 530 : 100,
        damping: hasEntered ? 20 : 10,
        mass: 0.7,
        delay: hasEntered ? 0 : 0.05 * index,
      }}
      onAnimationComplete={onEntered}
      className="after:border-frame bg-surface-inset relative block aspect-[9/16] cursor-pointer overflow-hidden rounded-3xl after:absolute after:inset-0 after:rounded-3xl after:border-8 hover:shadow-2xl"
    >
      {/* While a photo is expanded its thumbnail leaves the grid so the two
          never exist at once — that handoff is what Motion morphs. The cell
          keeps its 9:16 slot either way, so the grid never reflows underneath
          the animation. */}
      {!isExpanded && (
        <motion.div
          layoutId={photo.image.src}
          transition={isSwapping ? SNAP : MORPH}
          // Motion only corrects corner distortion during a morph when the
          // radius is an inline pixel value.
          style={{ borderRadius: 24 }}
          className="absolute inset-0 overflow-hidden"
        >
          <Image
            src={photo.image}
            alt={photo.alt}
            placeholder="blur"
            width={THUMB_WIDTH}
            height={THUMB_HEIGHT}
            // Two full rows at the widest breakpoint load straight away; the
            // rest wait until they near the viewport.
            loading={index < 12 ? "eager" : "lazy"}
            className="h-full w-full object-cover"
          />
        </motion.div>
      )}
    </motion.button>
  )
)

PhotoTile.displayName = "PhotoTile"

const PhotoGallery: React.FC<Props> = ({ photos }) => {
  const { isOpen, content, openModal, closeModal } =
    useModalWithContent<Photo>()

  // Keyed by src rather than a boolean so reopening a photo whose full-size
  // render already arrived skips the crossfade entirely.
  const [loadedSrc, setLoadedSrc] = React.useState<string | null>(null)

  // The entrance plays on a slow, staggered spring; every gesture after it
  // uses a snappier one. Motion captures a transition when it creates the
  // animation, so flipping this once the entrance settles only ever affects
  // the hover animations that come later.
  const [hasEntered, setHasEntered] = React.useState(false)

  const handleEntered = React.useCallback(() => {
    setHasEntered(true)
  }, [])

  const expandedSrc = content?.image.src
  const expandedIndex =
    content === null
      ? -1
      : photos.findIndex((photo) => photo.image.src === content.image.src)

  const gridRef = React.useRef<HTMLDivElement>(null)
  const closeRef = React.useRef<HTMLButtonElement>(null)

  // The photos either side of an arrow-key swap. Only those two tiles get a
  // changed prop, so the swap re-renders two tiles rather than the grid.
  const [swap, setSwap] = React.useState<[string, string] | null>(null)
  const isSwapping = isOpen && swap !== null

  const handleOpen = React.useCallback(
    (photo: Photo) => {
      setSwap(null)
      openModal(photo)
    },
    [openModal]
  )

  React.useEffect(() => {
    if (!isOpen || expandedIndex === -1) return

    // Advanced locally as well as through state, so presses that land before
    // the next render (a held key) still step from the latest photo.
    let current = expandedIndex

    const step = (by: number): void => {
      const nextIndex = (current + by + photos.length) % photos.length
      const next = photos[nextIndex]
      setSwap([photos[current].image.src, next.image.src])
      current = nextIndex
      openModal(next)
      // Bring the new photo's slot on screen behind the scrim, so closing
      // morphs it into a tile you can see rather than one off the bottom.
      // Centred rather than "nearest": a tile still in its entrance is scaled
      // down around its centre, and "nearest" would only reveal that sliver.
      gridRef.current?.children[nextIndex]?.scrollIntoView({
        block: "center",
        behavior: "instant",
      })
    }

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "ArrowRight") step(1)
      else if (event.key === "ArrowLeft") step(-1)
      else if (event.key === "Tab") {
        // The close button is the dialog's only control; keep focus on it
        // rather than letting Tab wander into the page underneath.
        event.preventDefault()
        closeRef.current?.focus()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, expandedIndex, photos, openModal])

  // Hand focus back to the tile of whichever photo was showing last, so a
  // keyboard user picks up where the dialog left them.
  const lastIndex = React.useRef(-1)
  React.useEffect(() => {
    if (expandedIndex !== -1) lastIndex.current = expandedIndex
  }, [expandedIndex])
  React.useEffect(() => {
    if (isOpen) return
    const tile = gridRef.current?.children[lastIndex.current]
    if (tile instanceof HTMLElement) tile.focus({ preventScroll: true })
  }, [isOpen])

  return (
    <MotionConfig reducedMotion="user">
      <section>
        <div
          ref={gridRef}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
        >
          {photos.map((photo, index) => (
            <PhotoTile
              key={photo.image.src}
              photo={photo}
              index={index}
              isExpanded={expandedSrc === photo.image.src}
              isSwapping={isSwapping && swap.includes(photo.image.src)}
              hasEntered={hasEntered}
              onOpen={handleOpen}
              onEntered={handleEntered}
            />
          ))}
        </div>
      </section>

      <AnimatePresence>
        {isOpen && content !== null && (
          <div
            key="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={`Photo ${expandedIndex + 1} of ${photos.length}`}
            className="fixed inset-0 z-30 flex items-center justify-center"
            style={{ padding: INSET }}
          >
            {/* Presentational: Escape closes for keyboard users and the button
                below is the labelled control, so this must not land in the tab
                order as a second "Close photo". */}
            <motion.div
              aria-hidden
              onClick={closeModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={FADE}
              className="bg-scrim-media absolute inset-0 cursor-zoom-out backdrop-blur-lg"
            />
            {/* Contain-fit worked out in CSS: whichever of the two limits
                binds first wins, and the ratio derives the other axis. No
                measurement, so the frame is the right size on frame one. */}
            <motion.div
              // Keyed so an arrow-key swap mounts a fresh frame under the new
              // layoutId instead of retargeting this one mid-flight.
              key={content.image.src}
              layoutId={content.image.src}
              transition={isSwapping ? SNAP : MORPH}
              style={{
                borderRadius: 12,
                aspectRatio: content.image.width / content.image.height,
                height: `min(calc(100dvh - ${INSET * 2}px), calc((100vw - ${
                  INSET * 2
                }px) * ${content.image.height / content.image.width}))`,
              }}
              className="pointer-events-none relative overflow-hidden"
            >
              {/* The grid's own thumbnail, upscaled. It is already decoded, so
                  it carries the expand the whole way while the full-size
                  render is still in flight. */}
              <Image
                src={content.image}
                alt=""
                aria-hidden
                width={THUMB_WIDTH}
                height={THUMB_HEIGHT}
                placeholder="blur"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <motion.div
                initial={false}
                animate={{ opacity: loadedSrc === content.image.src ? 1 : 0 }}
                transition={FADE}
                className="absolute inset-0"
              >
                <Image
                  src={content.image}
                  alt={content.alt}
                  width={content.image.width}
                  height={content.image.height}
                  // The frame's own contain-fit width, so the browser picks a
                  // source for the size it will actually paint rather than the
                  // 3840px one a bare width would resolve to.
                  sizes={`min(calc(100vw - ${INSET * 2}px), calc((100vh - ${
                    INSET * 2
                  }px) * ${content.image.width / content.image.height}))`}
                  onLoad={() => {
                    setLoadedSrc(content.image.src)
                  }}
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </motion.div>
            <motion.button
              ref={closeRef}
              type="button"
              aria-label="Close photo"
              // The dialog's only control, so it takes focus on open.
              autoFocus
              onClick={closeModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={FADE}
              className="bg-surface-inset text-body hover:bg-inset-hover absolute top-5 right-5 rounded-full p-1.5"
            >
              <XSmall />
            </motion.button>
          </div>
        )}
      </AnimatePresence>
    </MotionConfig>
  )
}

export default PhotoGallery
