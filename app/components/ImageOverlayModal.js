import React, { useState } from 'react'
import Image from 'next/image'
import ScrollAnimationWrapper from './ScrollAnimationWrapper'
import Loader from './Loader'

const ImageOverlayModal = ({ imageSrc, imageAlt, onClose }) => {
  const [isLoading, setIsLoading] = useState(true) // State to manage loading

  return (
    <ScrollAnimationWrapper
      duration={0.3}
      variant="scale"
      className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-3xl flex items-center justify-center z-50"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-4xl font-bold cursor-pointer font-lato z-50"
      >
        &times;
      </button>

      <div className="relative w-full h-full max-w-4xl flex items-center justify-center">
        {/* Loader */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <Loader /> {/* Replace with your actual Loader component */}
          </div>
        )}

        <Image
          src={imageSrc}
          alt={imageAlt}
          width={800}
          height={600}
          className="object-contain h-full"
          onLoadingComplete={() => setIsLoading(false)} // Hide loader on load completion
        />
      </div>
    </ScrollAnimationWrapper>
  )
}

export default ImageOverlayModal
