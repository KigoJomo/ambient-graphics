"use client";import Typewriter from "typewriter-effect/dist/core";
import { useRef, useEffect, useState } from "react";

const TypewrittenText = ({ text }) => {
  const typewriterRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsInView(true);
      }
    });

    observer.observe(typewriterRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView) {
      const typewriter = new Typewriter(typewriterRef.current, {
        loop: false,
        delay: 35, // speed of the typewriter
      });

      typewriter
        .pauseFor(800) // start typing after this amount of time
        .typeString(text)
        .pauseFor(1000)
        .start();
    }
  }, [isInView, text]);

  return <p className="w-full" ref={typewriterRef}></p>;
};

export default TypewrittenText;