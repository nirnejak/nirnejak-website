"use client"
import * as React from "react"

import { motion } from "framer-motion"

import classNames from "utils/classNames"

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
    <div className="flex flex-col items-center justify-center gap-6 text-white">
      <div className="h-full w-[calc(100vw-40px)] rounded-lg bg-white p-6 text-sm md:h-[560px] md:w-[984px] md:p-4 md:pl-[95px] md:pt-[110px]">
        <h1 className="mb-6 font-instrument-serif text-[40px] leading-[48px] text-gray-900">
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
                  ? "bg-[#F66A0A] text-[#F6F8FA]"
                  : "hover:bg-[#F66A0A26] text-gray-700",
                "flex items-center gap-1 rounded-full border border-[#F66A0A] px-3 py-2 text-sm"
              )}
              onClick={() => {
                toggleTag(index)
              }}
            >
              <p className="max-w-min">{tag.value}</p>

              {tag.isSelected && (
                <div className="w-[20px]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 18.3334C14.6025 18.3334 18.3334 14.6025 18.3334 10C18.3334 5.39752 14.6025 1.66669 10 1.66669C5.39752 1.66669 1.66669 5.39752 1.66669 10C1.66669 14.6025 5.39752 18.3334 10 18.3334Z"
                      fill="#F6F8FA"
                    />
                    <path
                      d="M5.83331 10.4166L8.33331 12.9166L14.1666 7.08331"
                      stroke="#F66A0A"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default JellyTags
