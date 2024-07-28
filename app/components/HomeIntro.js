"use client";
import Typewriter from "typewriter-effect/dist/core";
import { useRef, useEffect, useState } from "react";
const { default: Image } = require("next/image");

const Paragraph = () => {
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
        delay: 25,
      });

      typewriter
        .pauseFor(2500)
        .typeString(
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim."
        )
        .pauseFor(1000)
        .start();
    }
  }, [isInView]);

  return <p ref={typewriterRef} className="text-ag-white-secondary"></p>;
};


const HomeIntro = () => {
  return (
    <section className="flex flex-col">
      <div className="desc w-full flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <h2>meet the artist</h2>
        <div className="w-full md:w-1/2 md:pt-6 text-right">
          <Paragraph />
        </div>
      </div>
    </section>
  );
};

export default HomeIntro;
