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

  return (
    <MotionConfig reducedMotion="user">
      <section>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {photos.map((photo, index) => {
            // While a photo is expanded its thumbnail leaves the grid so the
            // two never exist at once — that handoff is what Motion morphs.
            // The cell keeps its 9:16 slot either way, so the grid never
            // reflows underneath the animation.
            const isExpanded = content?.image.src === photo.image.src

            return (
              <motion.button
                key={photo.image.src}
                type="button"
                aria-label={`Expand photo: ${photo.alt}`}
                onClick={() => {
                  openModal(photo)
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
                onAnimationComplete={() => {
                  setHasEntered(true)
                }}
                className="after:border-frame bg-surface-inset relative block aspect-[9/16] cursor-pointer overflow-hidden rounded-3xl after:absolute after:inset-0 after:rounded-3xl after:border-8 hover:shadow-2xl"
              >
                {!isExpanded && (
                  <motion.div
                    layoutId={photo.image.src}
                    transition={MORPH}
                    // Motion only corrects corner distortion during a morph
                    // when the radius is an inline pixel value.
                    style={{ borderRadius: 24 }}
                    className="absolute inset-0 overflow-hidden"
                  >
                    <Image
                      src={photo.image}
                      alt={photo.alt}
                      placeholder="blur"
                      width={THUMB_WIDTH}
                      height={THUMB_HEIGHT}
                      priority={index < 11}
                      className="h-full w-full object-cover"
                    />
                  </motion.div>
                )}
              </motion.button>
            )
          })}
        </div>
      </section>

      <AnimatePresence>
        {isOpen && content !== null && (
          <div
            className="fixed inset-0 z-30 flex items-center justify-center"
            style={{ padding: INSET }}
          >
            <motion.button
              type="button"
              aria-label="Close photo"
              onClick={() => {
                closeModal()
              }}
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
              layoutId={content.image.src}
              transition={MORPH}
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
                  onLoad={() => {
                    setLoadedSrc(content.image.src)
                  }}
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </motion.div>
            <motion.button
              type="button"
              aria-label="Close photo"
              onClick={() => {
                closeModal()
              }}
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
