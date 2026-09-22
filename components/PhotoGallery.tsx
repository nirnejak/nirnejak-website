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

const PhotoGallery: React.FC<Props> = ({ photos }) => {
  const { isOpen, content, openModal, closeModal } =
    useModalWithContent<Photo>()

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
                      width="360"
                      height="640"
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
          <div className="fixed inset-0 z-30 flex items-center justify-center p-4 md:p-6">
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
            {/* The photo shrink-wraps its own frame, and the caps are in
                viewport units so the box is definite from the first frame —
                sizing off the decoded bitmap instead would hand Motion a 0×0
                box to morph from and the expand would snap rather than fly. */}
            <motion.div
              layoutId={content.image.src}
              transition={MORPH}
              style={{ borderRadius: 12 }}
              className="pointer-events-none relative w-fit overflow-hidden"
            >
              <Image
                src={content.image}
                alt={content.alt}
                width={content.image.width}
                height={content.image.height}
                placeholder="blur"
                className="h-auto max-h-[calc(100dvh-2rem)] w-auto max-w-[calc(100vw-2rem)] md:max-h-[calc(100dvh-3rem)] md:max-w-[calc(100vw-3rem)]"
              />
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
