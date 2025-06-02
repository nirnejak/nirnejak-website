"use client"
import * as React from "react"

import Clarity from "@microsoft/clarity"

import config from "@/config"

interface Props {}

const MicrosoftClarity: React.FC<Props> = () => {
  React.useEffect(() => {
    Clarity.init(config.CLARITY_PROJECT_ID)
  }, [])
  return <div></div>
}

export default MicrosoftClarity
