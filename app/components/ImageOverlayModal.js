import React from 'react'
import ScrollAnimationWrapper from './ScrollAnimationWrapper'
import { WixMediaImage } from './wixImageToUrl'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import CloseIcon from '@mui/icons-material/Close';
import CustomButton from './CustomButton'
import Link from 'next/link'

const formatPrice = (number) => {
  if (typeof number !== 'number') {
    throw new Error('Input must be a number');
  }
  
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const ImageOverlayModal = ({
  imageSrc,
  imageAlt,
  onClose,
  height,
  width,
  title,
  description,
  price
}) => {
  return (
    <ScrollAnimationWrapper
      duration={0.3}
      variant="slideInBottom"
      className="fixed inset-0 z-50 bg-ag-black md:bg-black md:bg-opacity-90 flex items-center justify-center md:p-24"
    >
      <button
        onClick={onClose}
        className="absolute md:hidden top-4 left-4 z-50 p-2 rounded-full bg-black bg-opacity-85"
      >
        <ChevronLeftIcon />
      </button>

      <button
        onClick={onClose}
        className="absolute hidden md:flex top-24 right-8 z-50 p-2 rounded-full bg-ag-black bg-opacity-85 border"
      >
        <CloseIcon />
      </button>

      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 place-content-start md:place-content-center overflow-y-scroll scrollbar-hidden md:border border-white border-opacity-25 md:bg-ag-black">

        <div className="w-full h-fit md:h-full md:w-auto md:flex md:items-center md:justify-center md:overflow-hidden">
          <WixMediaImage
            imageId={imageSrc}
            alt={imageAlt}
            width={width}
            height={height}
            className="w-full md:w-auto md:h-full"
          />
        </div>

        <div className="w-full px-4 py-8 flex flex-col md:justify-center gap-6">
          <h2 className="tracking- font-normal">{title}</h2>

          <hr className="border-ag-brown" />

          <p className="text-ag-ash">
            {description}
          </p>

          <p>Quoted for: <span className='text-ag-brown uppercase'>kes {formatPrice(price)}</span></p>

          <Link
            className="w-full bg-ag-white hover:bg-ag-brown text-sm text-ag-black text-center px-4 py-2 font-lato font-normal"
            type="button"
            aria-label={`Request a quote for ${title}`}
            href="/shop"
          >
            get yours
          </Link>
        </div>
      </div>
    </ScrollAnimationWrapper>
  )
}

export default ImageOverlayModal
