'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const CustomCursor = () => {
  const cursorRef = useRef(null)

  useEffect(() => {
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

    const addLinkHover = (e) =>
      cursor.classList.add('custom-cursor--link')
    const removeLinkHover = (e) =>
      cursor.classList.remove('custom-cursor--link')

    links.forEach((link) => {
      link.addEventListener('mouseover', addLinkHover)
      link.addEventListener('mouseout', removeLinkHover)
    })

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseout', onMouseOut)

    return () => {
      links.forEach((link) => {
        link.removeEventListener('mouseover', addLinkHover)
        link.removeEventListener('mouseout', removeLinkHover)
      })
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseout', onMouseOut)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="custom-cursor"></div>
    </>
  )
}

export default CustomCursor
