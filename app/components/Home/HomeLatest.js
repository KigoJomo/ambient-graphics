'use client'
import { useState, useEffect, useContext, useRef } from 'react'
import { wixClient } from '@/app/hooks/wixClient'
import { WixMediaImage } from '@/app/components/wixImageToUrl'
import ScrollAnimationWrapper from '../ScrollAnimationWrapper'
import Loader from '../Loader'
import { CollectionsContext } from '@/app/context/CollectionsContext'
import Link from 'next/link'
import { FiChevronLeft, FiChevronRight, FiLink } from 'react-icons/fi'

const HomeLatest = () => {
  const [latestItems, setLatestItems] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const collectionsData = useContext(CollectionsContext)
  const scrollContainerRef = useRef(null)

  // Fetch the latest item from each collection
  const fetchLatestItem = async (collectionType) => {
    try {
      const client = await wixClient()
      const data = await client.items
        .queryDataItems({
          dataCollectionId: collectionType.replace(/ /g, ''),
          sort: [{ fieldName: 'createdDate', order: 'desc' }],
          limit: 1,
        })
        .find()

      return data.items[0] // Return the latest item
    } catch (error) {
      console.error(`Error fetching latest item from ${collectionType}:`, error)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (collectionsData) {
          const latestItemsData = await Promise.all(
            collectionsData.map(async (collection) => {
              const latestItem = await fetchLatestItem(collection.data.title)
              return latestItem
                ? { collectionTitle: collection.data.title, latestItem }
                : null
            })
          )

          setLatestItems(latestItemsData.filter((item) => item !== null))
          setIsLoading(false)
        }
      } catch (error) {
        console.error('Error fetching latest items:', error)
        setIsLoading(false)
      }
    }

    fetchData()
  }, [collectionsData])

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -500,
      behavior: 'smooth',
    })
  }

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 500,
      behavior: 'smooth',
    })
  }

  if (isLoading) {
    return (
      <div className="w-full h-[50vh] flex items-center">
        <Loader />
      </div>
    )
  }

  return (
    <section className="home-latest-section h-fit flex flex-col gap-8 pb-12">
      <div className="heading w-full flex flex-col">
        <h4 className="uppercase text-ag-ash">a-g / 2024</h4>

        <div className="w-full flex items-center justify-between">
          <h2 className="uppercase">latest</h2>
          <Link
            href="/shop"
            className="font-lato text-ag-ash uppercase underline underline-offset-4"
          >
            see all
          </Link>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="latest-items overflow-x-auto overflow-y-hidden flex gap-8 scrollbar-hidden"
      >
        {latestItems &&
          latestItems.map((itemData, index) => (
            <ScrollAnimationWrapper
              key={itemData.collectionTitle}
              variant="slideInBottom"
            >
              <div className="latest-item flex-shrink-0 w-[250px] md:w-[300px] flex flex-col gap-4">
                {itemData.latestItem && (
                  <>
                    <WixMediaImage
                      imageId={itemData.latestItem.data.image}
                      alt={`Latest from ${itemData.collectionTitle}`}
                      width={1000}
                      height={1000}
                      className="w-full h-full hover:scale-105 transition-transform duration-300"
                    />
                    <div className="w-full flex items-center justify-between gap-2">
                      <p className="">{itemData.latestItem.data.title}</p>
                      <Link
                        href={`/catalog/${itemData.collectionTitle.toLowerCase()}`}
                        className="text-lg"
                      >
                        <FiLink size={16} className="text-ag-brown" />
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </ScrollAnimationWrapper>
          ))}
      </div>

      <div className="buttons w-full hidden md:flex items-center justify-between">
        <button
          className="border p-2 rounded-full shadow-md"
          onClick={scrollLeft}
        >
          <FiChevronLeft size={24} />
        </button>

        <button
          className="border p-2 rounded-full shadow-md"
          onClick={scrollRight}
        >
          <FiChevronRight size={24} />
        </button>
      </div>
    </section>
  )
}

export default HomeLatest

// how do I change the color of the link icon?
