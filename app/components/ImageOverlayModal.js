// app/components/ImageOverlayModal.js

import React, { useState } from 'react'
import Image from 'next/image'
import ScrollAnimationWrapper from './ScrollAnimationWrapper'
import Loader from './Loader'
import { WixMediaImage } from './wixImageToUrl'

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

      <div className="w-full h-full flex items-center justify-center relative">
        
        {isLoading && (
          <div className="absolute">
            <Loader />
          </div>
        )}

        <WixMediaImage
          media={imageSrc}
          alt={imageAlt}
          width={500}
          height={500}
          className="object-contain w-full h-full"
          onLoadingComplete={() => setIsLoading(false)}
        />
      </div>
    </ScrollAnimationWrapper>
  )
}

export default ImageOverlayModal
