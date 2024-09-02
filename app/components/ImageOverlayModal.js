// app/components/ImageOverlayModal.js
import React from 'react'
import Image from 'next/image'
import ScrollAnimationWrapper from './ScrollAnimationWrapper'

const ImageOverlayModal = ({ imageSrc, imageAlt, onClose }) => {
  return (
    <ScrollAnimationWrapper
      duration={0.3}
      variant="scale"
      className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-3xl flex items-center justify-center z-50"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-4xl font-bold cursor-pointer font-lato"
      >
        &times;
      </button>
      <div className="w-full h-full max-w-4xl">
        <Image
          src={imageSrc}
          alt={imageAlt}
          // layout="responsive"
          width={800}
          height={600}
          className="object-contain h-full"
        />
      </div>
    </ScrollAnimationWrapper>
  )
}

export default ImageOverlayModal
