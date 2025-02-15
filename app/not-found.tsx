import * as React from "react"

import type { Metadata } from "next"

import Image from "next/image"

import AppLink from "@/components/atoms/Link"
import getMetadata from "@/utils/metadata"

export const metadata: Metadata = getMetadata({
  path: "/",
  title: "Not Found | Jitendra Nirnejak",
  description: "Portfolio Website of Jitendra Nirnejak, Developer and Designer",
})

const GIFs = [
  "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWFlN2tteTk4Y3N2NGUycHpnOThlZmQ3M3U2Z3I5MDFoZmk0aXBlNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1EmBoG0IL50VIJLWTs/giphy.gif",
  "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXI4ZnA5ZDJ5d2llNGRyNXNrdWVkY2p3MWZkY2xxYXhvaW91dW0xayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RHInHY2dInc6uMI2ET/giphy.gif",
  "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXBraHp2MzhpODI5Z3oxNmlyNWt4c2l3aGF2MjcxaWRpeGkzdmMxdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ji6zzUZwNIuLS/giphy.gif",
  "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExemxhMGZ1Z2sydGFiZXZzOTB6NTRyMGU4cjl5YzE5amczOHh3eXVyeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mPytjcsG3XS4o/giphy.gif",
  "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWJkY3E2c2FpcjduMGk0OWFjb2F4ZHh5ejd6M3JhdXEydnJhOHF5eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6G4lHr2Lv6vQoqWTw4/giphy.gif",
]

const NotFound: React.FC = () => {
  const index = Math.floor(Math.random() * 5)

  return (
    <main className="container">
      <section className="grid min-h-dvh place-content-center">
        <div className="">
          <Image src={GIFs[index]} alt="Lost" width={480} height={270} />
          <h1 className="mb-3 mt-10 text-center text-3xl font-bold tracking-tight text-zinc-300 md:text-4xl">
            You lost buddy?
          </h1>
          <p className="text-center text-zinc-400">
            Let me take you{" "}
            <AppLink href="/" className="font-semibold">
              home
            </AppLink>
          </p>
        </div>
      </section>
    </main>
  )
}

export default NotFound
