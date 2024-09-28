'use client'
import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

const CustomCursor = () => {
  const cursorRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768) // Adjust the breakpoint as needed
    }

    // Initial check
    handleResize()
    
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (isMobile) return; // Exit if it's mobile

    const cursor = cursorRef.current
    const links = document.querySelectorAll('a, button')
    let initCursor = false

    const onMouseMove = (e) => {
      const mouseX = e.clientX
      const mouseY = e.clientY

      if (!initCursor) {
        gsap.to(cursor, { duration: 0.3, opacity: 1 })
        initCursor = true
      }

      gsap.set(cursor, { top: mouseY + 'px', left: mouseX + 'px' })
    }

    const onMouseOut = () => {
      gsap.to(cursor, { duration: 0.3, opacity: 0 })
      initCursor = false
    }

    const addLinkHover = () => cursor.classList.add('custom-cursor--link')
    const removeLinkHover = () => cursor.classList.remove('custom-cursor--link')

    links.forEach((link) => {
      link.addEventListener('mouseover', addLinkHover)
      link.addEventListener('mousein', addLinkHover)
      link.addEventListener('mouseout', removeLinkHover)
    })

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseout', onMouseOut)

    return () => {
      links.forEach((link) => {
        link.removeEventListener('mouseover', addLinkHover)
        link.removeEventListener('mousein', addLinkHover)
        link.removeEventListener('mouseout', removeLinkHover)
      })
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseout', onMouseOut)
    }
  }, [isMobile])

  return !isMobile ? (
    <div ref={cursorRef} className="custom-cursor"></div>
  ) : null
}

export default CustomCursor
