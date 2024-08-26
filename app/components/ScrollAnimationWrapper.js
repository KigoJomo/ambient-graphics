"use client";
import { motion } from "framer-motion";
import React from "react";

const ScrollAnimationWrapper = ({ children, variant = 'fadeIn', className, duration = 1 }) => {
  const variants = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration } },
    },
    slideInLeft: {
      hidden: { opacity: 0, x: -200 },
      visible: { opacity: 1, x: 0, transition: { duration } },
    },
    slideInRight: {
      hidden: { opacity: 0, x: 200 },
      visible: { opacity: 1, x: 0, transition: { duration } },
    },
    slideInBottom: {
      hidden: { opacity: 0, y: 200 },
      visible: { opacity: 1, y: 0, transition: { duration } },
    },
    slideInTop: {
      hidden: { opacity: 0, y: -200 },
      visible: { opacity: 1, y: 0, transition: { duration } },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={variants[variant]}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimationWrapper;