"use client"
import * as React from "react"

import { ArrowCounterClockwise, Bell, Cross, Pause, Play } from "akar-icons"
import { motion } from "framer-motion"

import Tabs from "../atoms/Tabs"
import classNames from "utils/classNames"

const initialSeconds = 30

const DynamicIsland: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState(0)

  const [seconds, setSeconds] = React.useState(initialSeconds)
  const [isTimerActive, setIsTimerActive] = React.useState(false)

  React.useEffect(() => {
    let intervalId: NodeJS.Timeout
    if (isTimerActive) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds <= 1) {
            clearInterval(intervalId)
            return 0
          }
          return prevSeconds - 1
        })
      }, 1000)
    }
    return () => {
      clearInterval(intervalId)
    }
  }, [isTimerActive])

  const renderIslandContent = (): React.ReactNode => {
    switch (activeTab) {
      case 0:
        return null
      case 1:
        return (
          <>
            <span className="flex w-10 items-center justify-center rounded-full bg-red-500 py-1.5">
              <Bell size={16} />
            </span>
            <span className="mr-2">Ring</span>
          </>
        )
      case 2:
        return (
          <>
            <div className="flex gap-2">
              <button
                className="ml-2 rounded-full bg-yellow-600/40 p-3 text-yellow-600"
                onClick={() => {
                  if (seconds === 0 && isTimerActive) {
                    setSeconds(initialSeconds)
                  }
                  setIsTimerActive(!isTimerActive)
                }}
              >
                {isTimerActive ? (
                  seconds === 0 ? (
                    <ArrowCounterClockwise />
                  ) : (
                    <Pause strokeWidth={5} />
                  )
                ) : (
                  <Play />
                )}
              </button>
              <button
                className="rounded-full bg-zinc-700 p-3"
                onClick={() => {
                  setActiveTab(0)
                  setSeconds(initialSeconds)
                }}
              >
                <Cross />
              </button>
            </div>
            <span className="mr-3 text-4xl font-light text-yellow-600">
              0:{seconds.toString().padStart(2, "0")}
            </span>
          </>
        )
    }
  }

  const tabDimensions = React.useMemo(() => {
    switch (activeTab) {
      case 0:
        return { height: 40, width: 128 }
      case 1:
        return { height: 40, width: 176 }
      case 2:
        return { height: 80, width: 288 }
    }
  }, [activeTab])

  return (
    <div className="flex flex-col items-center justify-center gap-3 text-white">
      <motion.div
        animate={tabDimensions}
        transition={{ type: "spring", duration: 0.4, bounce: 0 }}
        className={classNames(
          "flex items-center justify-between rounded-full bg-black px-2 text-sm ease-out"
        )}
      >
        {renderIslandContent()}
      </motion.div>
      <Tabs
        className="mt-10 text-zinc-200"
        tabsOptions={["Idle", "Ring", "Timer"]}
        activeTab={activeTab}
        setActiveTab={(nextTab) => {
          if (nextTab !== 2) {
            setSeconds(initialSeconds)
          }
          setIsTimerActive(nextTab === 2)
          setActiveTab(nextTab)
        }}
      />
    </div>
  )
}

export default DynamicIsland
