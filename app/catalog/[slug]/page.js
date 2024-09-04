// app/catalog/[slug]/page.js
'use client'

import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import QuoteModal from '@/app/components/QuoteModal'
import SplitWord from '@/app/components/SplitWord'
import CustomButton from '@/app/components/CustomButton'
import ScrollAnimationWrapper from '@/app/components/ScrollAnimationWrapper'
import Loader from '@/app/components/Loader'
import ImageOverlayModal from '@/app/components/ImageOverlayModal'
import RoundLink from '@/app/components/RoundLink'
import Link from 'next/link'

export default function CategoryPage() {
  const pathname = usePathname()
  const slug = pathname.split('/').pop()

  const [isModalOpen, setModalOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  const [isOverlayOpen, setOverlayOpen] = useState(false)
  const [overlayImage, setOverlayImage] = useState(null)
  const [data, setData] = useState(null)
  const [categoryItems, setCategoryItems] = useState([])

  useEffect(() => {
    fetch('/data/data.json')
      .then((response) => response.json())
      .then((data) => {
        setData(data)

        // Find the collection that matches the current slug
        const collection = data.collections.find(
          (collection) => collection.slug === slug
        )

        // If the collection exists, set its items to categoryItems state
        if (collection) {
          setCategoryItems(collection.items)
        } else {
          setCategoryItems([]) // Empty if no matching collection is found
        }
      })
      .catch((error) => console.error('Error fetching data:', error))
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
            <p className='text-2xl h-1 flex items-end'>&larr;</p>
            <p>Back</p>
          </button>
        </div>
        <SplitWord
          word={slug}
          className="text-4xl md:text-[11.5rem] md:leading-[11.5rem]"
        />
        <p className="text-center text-ag-ash mt-2">Explore our exclusive collection of {slug}</p>
      </div>

      {data ? (
        <>
          <div className="w-full flex flex-col md:flex-row md:flex-wrap md:justify-around md:gap-12 gap-6 md:border-t border-ag-ash md:pt-8">
            {categoryItems.map((item, index) => (
              <ScrollAnimationWrapper
                variant="slideInBottom"
                key={index}
                className="item p-4 border border-gray-800 flex-shrink-0 flex flex-col gap-4 w-full md:w-1/4"
              >
                <h3 className="font-bold tracking-wider capitalize">
                  {item.title}
                </h3>

                <div className="w-full aspect-[1/1] overflow-hidden cursor-pointer relative">
                  <Image
                    src={item.image}
                    alt={`Artwork titled ${item.title} from the ${slug} collection`}
                    className="w-full aspect-[1/1] hover:scale-110"
                    width={300}
                    height={200}
                    onClick={() => handleImageClick(item.image, item.title)}
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tl from-gray-950 via-transparent to-transparent flex items-end justify-end p-2 md:p-0 pointer-events-none">
                    <div className="pointer-events-none h-12 w-12 md:w-24 md:h-24">
                      <RoundLink
                        className="pointer-events-none w-full h-full scale-75 md:w-full md:h-full md:scale-[0.35] md:ml-4 md:mt-4"
                        href={'/'}
                      />
                    </div>
                  </div>
                </div>

                <p className="text-ag-ash">{item.description}</p>

                <div className="w-full flex items-center justify-end">
                  <Link class="bg-ag-white hover:bg-ag-brown text-sm text-ag-black px-4 py-2 font-lato font-normal" type="button" aria-label="Request a quote for Introspection" href='/shop'>get yours</Link>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </>
      ) : (
        <div className="w-full h-[50vh] flex items-center">
          <Loader />
        </div>
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
