"use client"
import * as React from "react"

import * as RadixSlider from "@radix-ui/react-slider"
import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "motion/react"
import { SoundOff, SoundOn } from "akar-icons"

const MAX_OVERFLOW = 50

interface Props {}

const VolumeSlider: React.FC<Props> = () => {
  let [volume, setVolume] = React.useState(50)

  let ref = React.useRef<React.ComponentRef<typeof RadixSlider.Root>>(null)
  let [region, setRegion] = React.useState("middle")
  let clientX = useMotionValue(0)
  let overflow = useMotionValue(0)
  let scale = useMotionValue(1)

  useMotionValueEvent(clientX, "change", (latest) => {
    if (ref.current) {
      let { left, right } = ref.current.getBoundingClientRect()
      let newValue

      if (latest < left) {
        setRegion("left")
        newValue = left - latest
      } else if (latest > right) {
        setRegion("right")
        newValue = latest - right
      } else {
        setRegion("middle")
        newValue = 0
      }

      overflow.jump(decay(newValue, MAX_OVERFLOW))
    }
  })

  return (
    <div className="flex items-center justify-center gap-6 bg-zinc-800 min-h-96 rounded-2xl">
      <motion.div
        onHoverStart={() => animate(scale, 1.2)}
        onHoverEnd={() => animate(scale, 1)}
        onTouchStart={() => animate(scale, 1.2)}
        onTouchEnd={() => animate(scale, 1)}
        style={{
          scale,
          opacity: useTransform(scale, [1, 1.2], [0.7, 1]),
        }}
        className="flex w-full touch-none select-none items-center justify-center gap-3"
      >
        <motion.div
          animate={{
            scale: region === "left" ? [1, 1.4, 1] : 1,
            transition: { duration: 0.25 },
          }}
          style={{
            x: useTransform(() =>
              region === "left" ? -overflow.get() / scale.get() : 0
            ),
          }}
        >
          <SoundOff className="size-5 translate-x-0 translate-y-0 text-zinc-100" />
        </motion.div>

        <RadixSlider.Root
          ref={ref}
          value={[volume]}
          onValueChange={([v]) => setVolume(Math.floor(v))}
          step={0.01}
          className="relative flex w-full max-w-[200px] grow cursor-grab touch-none select-none items-center py-4 active:cursor-grabbing"
          onPointerMove={(e) => {
            if (e.buttons > 0) {
              clientX.jump(e.clientX)
            }
          }}
          onLostPointerCapture={() => {
            animate(overflow, 0, { type: "spring", bounce: 0.5 })
          }}
        >
          <motion.div
            style={{
              scaleX: useTransform(() => {
                if (ref.current) {
                  let { width } = ref.current.getBoundingClientRect()

                  return 1 + overflow.get() / width
                }
              }),
              scaleY: useTransform(overflow, [0, MAX_OVERFLOW], [1, 0.8]),
              transformOrigin: useTransform(() => {
                if (ref.current) {
                  let { left, width } = ref.current.getBoundingClientRect()

                  return clientX.get() < left + width / 2 ? "right" : "left"
                }
              }),
              height: useTransform(scale, [1, 1.2], [6, 12]),
              marginTop: useTransform(scale, [1, 1.2], [0, -3]),
              marginBottom: useTransform(scale, [1, 1.2], [0, -3]),
            }}
            className="flex grow"
          >
            <RadixSlider.Track className="relative isolate h-full grow overflow-hidden rounded-full bg-gray-500 ">
              <RadixSlider.Range className="absolute h-full bg-zinc-100" />
            </RadixSlider.Track>
          </motion.div>
          <RadixSlider.Thumb />
        </RadixSlider.Root>

        <motion.div
          animate={{
            scale: region === "right" ? [1, 1.4, 1] : 1,
            transition: { duration: 0.25 },
          }}
          style={{
            x: useTransform(() =>
              region === "right" ? overflow.get() / scale.get() : 0
            ),
          }}
        >
          <SoundOn className="size-5 translate-x-0 translate-y-0 text-zinc-100" />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default VolumeSlider

// Sigmoid-based decay function
const decay = (value: number, max: number) => {
  if (max === 0) {
    return 0
  }

  let entry = value / max
  let sigmoid = 2 * (1 / (1 + Math.exp(-entry)) - 0.5)

  return sigmoid * max
}
