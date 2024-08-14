'use client'
import { delay } from 'framer-motion'
import React from 'react'
import Typewriter from 'typewriter-effect'

const TypewriterComponent = ({ text }) => {
  return (
    <Typewriter
      options={{
        delay: 30,
      }}
      onInit={(typewriter) => {
        typewriter.typeString(text).pauseFor(500).start()
      }}
    />
  )
}

export default TypewriterComponent
