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

  const handleImageClick = (imageSrc, imageAlt) => {
    setOverlayImage({ src: imageSrc, alt: imageAlt })
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
          <div className="w-full flex flex-col md:flex-row md:flex-wrap md:justify-center md:gap-12 gap-6 md border-ag-ash md:pt-8 md:px-12">
            {collectionItems.map((piece, index) => {
              const item = piece.data

              return (
                <ScrollAnimationWrapper
                  variant="slideInBottom"
                  key={index}
                  className="item p-4 border border-gray-800 flex-shrink-0 flex flex-col gap-4 w-full md:w-1/4"
                >
                  <h3 className="font-bold tracking-wider capitalize">
                    {item.title}
                  </h3>

                  <div className="w-full aspect-[1/1] overflow-hidden cursor-pointer relative">
                    <WixMediaImage
                      imageId={item.image}
                      alt={`ambient graphics ${item.description}`}
                      width={300}
                      height={200}
                      className="h-full aspect-[1/1] hover:scale-110"
                    />
                    <div
                      className="absolute bottom-1 right-1 bg-black bg-opacity-50 p-4 rounded-full"
                      onClick={() => handleImageClick(item.image, item.title)}
                    >
                      <RiFullscreenFill />
                    </div>
                  </div>

                  <p className="text-ag-ash">{item.description}</p>

                  <div className="w-full flex items-center justify-end">
                    <Link
                      className="bg-ag-white hover:bg-ag-brown text-sm text-ag-black px-4 py-2 font-lato font-normal"
                      type="button"
                      aria-label={`Request a quote for ${item.title}`}
                      href="/shop"
                    >
                      get yours
                    </Link>
                  </div>
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
          onClose={() => setOverlayOpen(false)}
        />
      )}
    </section>
  )
}
