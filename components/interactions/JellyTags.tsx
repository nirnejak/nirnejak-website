"use client"
import * as React from "react"

import { motion } from "motion/react"
import { CircleCheckFill } from "akar-icons"

import classNames from "@/utils/classNames"

interface ITag {
  value: string
  isSelected: boolean
}

const JellyTags: React.FC = () => {
  const [tags, setTags] = React.useState<ITag[]>([
    { value: "Indian", isSelected: false },
    { value: "Italian", isSelected: false },
    { value: "French", isSelected: false },
    { value: "Spanish", isSelected: false },
    { value: "German", isSelected: false },
    { value: "Japanese", isSelected: false },
    { value: "Chinese", isSelected: false },
    { value: "Portuguese", isSelected: false },
    { value: "Arabic", isSelected: false },
    { value: "Korean", isSelected: false },
    { value: "Dutch", isSelected: false },
    { value: "Swedish", isSelected: false },
    { value: "Russian", isSelected: false },
    { value: "Punjabi", isSelected: false },
    { value: "Finnish", isSelected: false },
    { value: "Danish", isSelected: false },
    { value: "Polish", isSelected: false },
    { value: "Greek", isSelected: false },
    { value: "Thai", isSelected: false },
    { value: "Vietnamese", isSelected: false },
    { value: "Czech", isSelected: false },
    { value: "Indonesian", isSelected: false },
    { value: "Malay", isSelected: false },
    { value: "Bengali", isSelected: false },
    { value: "Filipino", isSelected: false },
    { value: "Hungarian", isSelected: false },
  ])

  const toggleTag = (index: number): void => {
    setTags((currentTags) => {
      return currentTags.map((t, i) => {
        if (i === index) {
          return {
            ...t,
            isSelected: !t.isSelected,
          }
        } else {
          return t
        }
      })
    })
  }

  return (
    <motion.div
      layout
      className="h-96 bg-zinc-800 grid place-content-center rounded-2xl"
    >
      <h1 className="mb-6 text-xl text-zinc-300 font-medium">
        What are your favorite cuisines?
      </h1>
      <div className="flex max-w-[630px] flex-wrap items-start justify-start gap-2">
        {tags.map((tag, index) => (
          <motion.button
            layout
            key={index}
            initial={false}
            transition={{
              type: "spring",
              mass: 1,
              stiffness: 600.4,
              damping: 15,
            }}
            className={classNames(
              tag.isSelected
                ? "bg-zinc-200 text-zinc-900"
                : "hover:bg-zinc-200/10 text-gray-300",
              "flex items-center gap-1 rounded-full border border-zinc-200 px-3 py-2 text-sm"
            )}
            onClick={() => {
              toggleTag(index)
            }}
          >
            <p className="max-w-min">{tag.value}</p>

            {tag.isSelected && <CircleCheckFill size={20} />}
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}

export default JellyTags
