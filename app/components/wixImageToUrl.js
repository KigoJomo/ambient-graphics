// app/components/wixImageToUrl.js
import { media as wixMedia } from '@wix/sdk';
import Image from 'next/image';
import { PLACEHOLDER_IMAGE } from '../constants';

function getImageUrlForMedia(media, width, height) {
  if (media.startsWith('wix:image')) {
    return wixMedia.getScaledToFillImageUrl(media, width, height, {});
  } else {
    return media;
  }
}

export function WixMediaImage({
  media,
  height = 1000,
  width = 1000,
  alt = 'Image not available',
  sizes = '100vw',
  className = '', 
  onClick,
  onLoadingComplete
}) {
  // Generate the image URL or fallback to a placeholder
  const imageUrl = media
    ? getImageUrlForMedia(media || '', width, height)
    : PLACEHOLDER_IMAGE;

  // Return the image using Next.js Image component for optimization
  return (
    <Image
      src={imageUrl}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      className={className}
      onClick={onClick}
      onLoadingComplete={onLoadingComplete}
    />
  );
}
