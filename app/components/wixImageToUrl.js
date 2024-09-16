import { media } from '@wix/sdk'
import Image from 'next/image'
import { PLACEHOLDER_IMAGE } from '../constants'

function getImageUrlForMedia(imageId, width, height) {
  if (imageId.startsWith('wix:image')) {
    return media.getScaledToFillImageUrl(imageId, width, height)
  } else {
    return imageId
  }
}

// function getImageUrlForMedia(imageId) {
//   if (imageId.startsWith('wix:image')) {
//     const parts = imageId.split('/')
//     const imagePart = parts[2].split('#')[0]
//     return `https://static.wixstatic.com/media/${imagePart}`
//   } else {
//     return imageId
//   }
// }

export function WixMediaImage({
  imageId,
  height = 500,
  width = 500,
  alt = 'Image not available',
  className = '',
  onClick,
  onLoadingComplete,
  optimize = true,
}) {
  // Generate the image URL or fallback to a placeholder
  const imageUrl = media
    ? getImageUrlForMedia(imageId || '', width, height)
    : PLACEHOLDER_IMAGE

  // Return the image using Next.js Image component for optimization
  return (
    <>
      {optimize ? (
        <Image
          src={imageUrl}
          alt={alt}
          width={width}
          height={height}
          className={className}
          onClick={onClick}
          onLoadingComplete={onLoadingComplete}
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={imageUrl} alt={alt} className={className} onClick={onClick} />
      )}
    </>
  )
}
