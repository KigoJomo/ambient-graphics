"use client";
import React, { useState, useEffect, useRef } from "react";
import TechButton from "./TechButton";
// import TypewriterComponent from "typewriter-effect";
import Typewriter from "typewriter-effect/dist/core";

const Paragraph = () => {
  const typewriterRef = useRef(null);

  useEffect(() => {
    const typewriter = new Typewriter(typewriterRef.current, {
      loop: false,
      delay: 15,
    });

    typewriter
      .pauseFor(2500)
      .typeString(
        "Discover a captivating collection of digital art, illustrations, and unique designs that transform everyday moments into extraordinary experiences. Find the perfect piece to inspire and elevate your space."
      )
      .pauseFor(1000)
      .start();
  }, []);

  return <p className="md:w-2/5" ref={typewriterRef}></p>;
};

const HomeHero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = document.body.scrollTop;
      setScrollPosition(position);
    };

    document.body.addEventListener("scroll", handleScroll);
    return () => {
      document.body.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const zoomLevel = scrollPosition / 300;

  return (
    <section
      id="hero"
      className="flex flex-col items-start justify-between gap-8 relative"
      style={{ backgroundSize: `${100 + zoomLevel * 100}%` }}
    >
      <div className="absolute right-9 top-1/2 transform -translate-y-1/2 z-10">
      </div>
      <div className="line absolute h-screen w-0 border border-ag-brown top-0 right-9 md:right-24 -z-0 opacity-50"></div>
      <div className="z-10">
        <h1 className="uppercase split-text">
          <span>A</span>
          <span>m</span>
          <span>b</span>
          <span>i</span>
          <span>e</span>
          <span>n</span>
          <span>t</span>
        </h1>
        <h1 className="uppercase split-text">
          <span>G</span>
          <span>r</span>
          <span>a</span>
          <span>p</span>
          <span>h</span>
          <span>i</span>
          <span>c</span>
          <span>s</span>
        </h1>
      </div>
      <div className="bottom w-full flex flex-col gap-4">
        <div className="w-full flex flex-col-reverse md:flex-row items-start md:items-center justify-start gap-9">
          <Paragraph />
        <TechButton to={"/gallery"} />
        </div>
        <div className="w-full h-8 bg-ag-brown"></div>
      </div>
    </section>
  );
};

export default HomeHero;
