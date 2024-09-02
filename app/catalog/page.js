// app/catalog/page.js

'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import SplitWord from '../components/SplitWord'
import RoundLink from '../components/RoundLink'
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper'
import Loader from '../components/Loader'

// Utility function to shuffle array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

const CatalogPage = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/data/data.json')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error))
  }, [])

  return (
    <section className="catalog-page h-fit flex flex-col gap-16">
      <SplitWord word={'catalog'} tight />

      {data ? (
        <>
          {data.collections.map((collection, collectionIndex) => (
            <div
              key={collection.slug}
              className="collection w-full bg-transparent flex flex-col gap-4 pb-16"
            >
              <div
                className={`details w-full md:w-2/5 flex flex-col gap-4 flex-grow-0 flex-shrink-0`}
              >
                <ScrollAnimationWrapper
                  className={``}
                  variant="slideInBottom"
                  duration={0.5}
                >
                  <h2 className={`text-5xl md:text-7xl mix-blend-exclusion md:tracking-wider md:text-nowrap ${collectionIndex % 2 === 1 && 'text-right'}`}>
                    {collection.title}
                  </h2>
                </ScrollAnimationWrapper>

                <ScrollAnimationWrapper variant="slideInBottom" duration={1.0} className={`${collectionIndex % 2 === 1 && 'flex justify-end'}`}>
                  <p className={`${collectionIndex % 2 === 1 && 'text-right'} w-[90%]`}>{collection.description}</p>
                </ScrollAnimationWrapper>

                <div className="images w-full max-h-[70vh] flex flex-col flex-wrap gap-x-[5%] gap-y-6">
                  {collection.items.slice(0, 3).map((item, itemIndex) => (
                    <ScrollAnimationWrapper
                      key={item.title}
                      duration={1 + (itemIndex/2)}
                      variant='slideInBottom'
                      className={`aspect-[2/3] overflow-hidden ${
                        (collectionIndex % 2 === 0 && itemIndex === 2) || (collectionIndex % 2 === 1 && itemIndex === 0)
                          ? 'w-[59%]'
                          : 'w-[39%]'
                      } 
                        ${collectionIndex % 2 === 1 && itemIndex === 1 && 'order-3'}
                        ${collectionIndex % 2 === 1 && itemIndex === 2 && 'order-4'}
                      `}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full hover:scale-110"
                        width={500}
                        height={500}
                      />
                    </ScrollAnimationWrapper>
                  ))}

                  <ScrollAnimationWrapper
                    variant="slideInBottom"
                    duration={1.5}
                    className={`flex justify-center ${collectionIndex % 2 === 0 ? 'order-4' : 'order-2'}`}
                  >
                    <RoundLink
                      href={`/catalog/${collection.slug}`}
                      text="explore"
                    />
                  </ScrollAnimationWrapper>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className="w-full h-[50vh] flex items-center">
          <Loader />
        </div>
      )}
    </section>
  )
}

export default CatalogPage
