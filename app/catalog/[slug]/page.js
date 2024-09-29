// app/catalog/[slug]/page.js
'use client'

import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import QuoteModal from '@/app/components/QuoteModal'
import SplitWord from '@/app/components/SplitWord'
import ScrollAnimationWrapper from '@/app/components/ScrollAnimationWrapper'
import Loader from '@/app/components/Loader'
import ImageOverlayModal from '@/app/components/ImageOverlayModal'
import Link from 'next/link'
import { RiFullscreenFill } from 'react-icons/ri'
import { wixClient } from '@/app/hooks/wixClient'
import { WixMediaImage } from '@/app/components/wixImageToUrl'

function Capitalize(string) {
  return string[0].toUpperCase() + string.substring(1)
}

export default function CategoryPage() {
  const pathname = usePathname()
  const slug = pathname.split('/').pop()

  const [isModalOpen, setModalOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  const [isOverlayOpen, setOverlayOpen] = useState(false)
  const [overlayImage, setOverlayImage] = useState(null)

  const [isLoading, setIsLoading] = useState(true)
  const [collectionItems, setCollectionItems] = useState([])

  async function fetchItems() {
    try {
      const client = await wixClient()
      const data = await client.items
        .queryDataItems({
          dataCollectionId: Capitalize(slug.replace(/%20/g, '')),
        })
        .find()
      setCollectionItems(data.items)
      console.log(data.items)
      setIsLoading(false)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchItems()
  }, [slug])

  const handleRequestQuote = (item) => {
    setSelectedItem(item)
    setModalOpen(true)
  }

  const handleImageClick = (imageSrc, imageAlt, height, width, title, description, price) => {
    setOverlayImage({ src: imageSrc, alt: imageAlt, height: height, width: width, title: title, description: description, price: price })
    setOverlayOpen(true)
  }

  return (
    <section className="category-page h-fit flex flex-col gap-8">
      <div className="w-full flex flex-col items-center">
        <div className="w-full flex items-center">
          <button
            onClick={() => window.history.back()}
            className="text-ag-ash hover:text-white flex items-end"
          >
            <p className="text-2xl h-1 flex items-end">&larr;</p>
            <p>Back</p>
          </button>
        </div>

        <h1 className="text-4xl md:text-[11.5rem] md:leading-[11.5rem] text-center">
          {slug.replace(/%20/g, ' ')}
        </h1>
        <p className="text-center text-ag-ash mt-2">
          Explore our exclusive collection of {slug.replace(/%20/g, ' ')}
        </p>
      </div>

      {isLoading ? (
        <div className="w-full h-[50vh] flex items-center">
          <Loader />
        </div>
      ) : (
        <>
          <div className="w-full md:mt-12 columns-2 md:columns-3 gap-4 md:gap-12">
            {collectionItems.map((piece, index) => {
              const item = piece.data

              return (
                <ScrollAnimationWrapper
                  variant="slideInBottom"
                  key={index}
                  className="item break-inside-avoid mb-8 md:mb-12 flex-shrink-0 flex flex-col gap-4"
                  onClick={() =>
                    handleImageClick(item.images[0].src, item.title, item.images[0].settings.height, item.images[0].settings.width, item.title, item.description, item.price)
                  }
                >
                  <WixMediaImage
                    imageId={item.images[0].src}
                    alt={`ambient graphics ${item.description}`}
                    width={item.images[0].settings.width}
                    height={item.images[0].settings.height}
                    className="w-full"
                  />
                </ScrollAnimationWrapper>
              )
            })}
          </div>
        </>
      )}

      {isModalOpen && (
        <QuoteModal item={selectedItem} onClose={() => setModalOpen(false)} />
      )}

      {isOverlayOpen && overlayImage && (
        <ImageOverlayModal
          imageSrc={overlayImage.src}
          imageAlt={overlayImage.alt}
          height={overlayImage.height}
          width={overlayImage.width}
          title={overlayImage.title}
          description={overlayImage.description}
          price={overlayImage.price}
          onClose={() => setOverlayOpen(false)}
        />
      )}
    </section>
  )
}
