'use client'
import { useRef, useEffect } from 'react'
import Typewriter from 'typewriter-effect/dist/core'
import React from 'react'

const TypewriterComponent = ({
  textLevel = 'p',
  text,
  className = ' ',
  delay = 25,
}) => {
  const typewriterRef = useRef(null)
  const observerRef = useRef(null)

  const stringText = text.toString()

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const typewriter = new Typewriter(typewriterRef.current, {
            loop: false,
            delay: delay,
          })
          typewriter
            .pauseFor(1500)
            .typeString(stringText)
            .pauseFor(1000)
            .start()
          // Stop observing after starting the animation
          observerRef.current.disconnect()
        }
      })
    }

    observerRef.current = new IntersectionObserver(observerCallback, {
      threshold: 0.1, // Trigger when 10% of the component is visible
    })

    if (typewriterRef.current) {
      observerRef.current.observe(typewriterRef.current)
    }

    return () => {
      // Cleanup observer on component unmount
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [delay, stringText])

  return React.createElement(
    textLevel,
    { ref: typewriterRef, className: className },
    ''
  )
}

export default TypewriterComponent
