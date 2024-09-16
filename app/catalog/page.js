// app/catalog/page.js

'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import SplitWord from '../components/SplitWord'
import RoundLink from '../components/RoundLink'
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper'
import Loader from '../components/Loader'
import { wixClient } from '../hooks/wixClient'
import { WixMediaImage } from '../components/wixImageToUrl'

const CatalogPage = () => {
  const [collections, setCollections] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  // Fetch data from 'Collections' collection first
  const fetchCollections = async () => {
    try {
      const client = await wixClient() // initialize wixClient
      const collectionsData = await client.items
        .queryDataItems({
          dataCollectionId: 'Collections',
        })
        .find()

      return collectionsData.items // Return array of collections
    } catch (error) {
      console.error('Error fetching collections:', error)
    }
  }

  // Fetch individual items for each art collection (Murals, Paintings, etc.)
  const fetchCollectionItems = async (collectionType) => {
    try {
      const client = await wixClient()
      const data = await client.items
        .queryDataItems({
          dataCollectionId: collectionType,
        })
        .find()

      return data.items // Return fetched items for a particular collection
    } catch (error) {
      console.error(`Error fetching items from ${collectionType}:`, error)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Step 1: Fetch overall collections data (categories)
        const collectionsData = await fetchCollections()

        if (collectionsData) {
          // Step 2: Fetch items for each category
          const collectionsWithItems = await Promise.all(
            collectionsData.map(async (collection) => {
              const items = await fetchCollectionItems(collection.data.title) // assuming 'tag' corresponds to the collection type like 'paintings'
              return {
                ...collection,
                items: items || [], // Add fetched items to the collection data
              }
            })
          )

          // Step 3: Set the full data (categories + items)
          setCollections(collectionsWithItems)
          setIsLoading(false)
        }
      } catch (error) {
        console.error('Error fetching collections and items:', error)
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <section className="catalog-page h-fit flex flex-col gap-16">
      <SplitWord word={'catalog'} tight />

      {isLoading ? (
        <div className="w-full h-[50vh] flex items-center">
          <Loader />
        </div>
      ) : (
        collections &&
        collections.map((collection, collectionIndex) => (
          <div
            key={collection.data.title}
            className="collection w-full bg-transparent flex flex-col gap-4 pb-16"
          >
            <div className="details w-full flex flex-col gap-4 flex-grow-0 flex-shrink-0">
              <div className="w-full flex flex-col gap-4">
                <ScrollAnimationWrapper
                  className={``}
                  variant="slideInBottom"
                  duration={0.5}
                >
                  <h2
                    className={`text-5xl md:text-7xl md:tracking-wider md:text-nowrap `}
                  >
                    {collection.data.title}
                  </h2>
                </ScrollAnimationWrapper>
                <ScrollAnimationWrapper
                  variant="slideInBottom"
                  duration={1.0}
                  className=""
                >
                  <p className={`w-[90%] md:w-3/5 text-ag-ash`}>
                    {collection.data.description}
                  </p>
                </ScrollAnimationWrapper>
              </div>

              <div className="images w-full aspect-[3/4] md:aspect-[21/7] overflow-hidden flex flex-col md:flex-row flex-wrap md:flex-nowrap gap-x-[5%] gap-y-6">
                {collection.items.slice(0, 3).map((item, itemIndex) => (
                  <ScrollAnimationWrapper
                    key={item.data.title}
                    duration={1 + itemIndex / 2}
                    variant="slideInBottom"
                    className={`aspect-[2/3] overflow-hidden ${
                      (collectionIndex % 2 === 0 && itemIndex === 2) ||
                      (collectionIndex % 2 === 1 && itemIndex === 0)
                        ? 'w-[59%] md:w-1/4'
                        : 'w-[39%] md:w-1/4'
                    } 
                      ${
                        collectionIndex % 2 === 1 &&
                        itemIndex === 1 &&
                        'order-3 md:order-2'
                      }
                      ${
                        collectionIndex % 2 === 1 &&
                        itemIndex === 2 &&
                        'order-4 md:order-3'
                      }
                      ${
                        collectionIndex % 2 === 0 &&
                        itemIndex === 2 &&
                        'md:order-3'
                      }
                      ${
                        collectionIndex % 2 === 0 &&
                        itemIndex === 1 &&
                        'md:order-3'
                      }
                    `}
                  >
                    <WixMediaImage
                      imageId={item.data.image}
                      alt={`ambient graphics ${item.data.description}`}
                      width={1000}
                      height={1000}
                      className="w-full h-full hover:scale-110"
                    />
                  </ScrollAnimationWrapper>
                ))}

                <ScrollAnimationWrapper
                  variant="slideInBottom"
                  duration={1.5}
                  className={`flex justify-center ${
                    collectionIndex % 2 === 0
                      ? 'order-4 md:order-2'
                      : 'order-2 md:order-4'
                  }`}
                >
                  <RoundLink
                    href={`/catalog/${collection.data.title.toLowerCase()}`}
                    text="explore"
                  />
                </ScrollAnimationWrapper>
              </div>
            </div>
          </div>
        ))
      )}
    </section>
  )
}

export default CatalogPage
