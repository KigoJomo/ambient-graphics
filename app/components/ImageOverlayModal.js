import React from 'react'
import ScrollAnimationWrapper from './ScrollAnimationWrapper'
import { WixMediaImage } from './wixImageToUrl'

const ImageOverlayModal = ({ imageSrc, imageAlt, onClose }) => {
  return (
    <ScrollAnimationWrapper
      duration={0.3}
      variant="scale"
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-3xl flex items-center justify-center z-50"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-4xl font-bold cursor-pointer font-lato z-50"
      >
        &times;
      </button>

      <div className="w-full h-full flex items-center justify-center relative p-4">
        <WixMediaImage
          imageId={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-contain"
          optimize={false}
        />
      </div>
    </ScrollAnimationWrapper>
  )
}

export default ImageOverlayModal
