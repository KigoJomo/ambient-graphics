'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import SplitWord from '../components/SplitWord'
import RoundLink from '../components/RoundLink'
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper'
import Loader from '../components/Loader'

const CatalogPage = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/data/data.json')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error))
  }, [])

  return (
    <section className="catalog-page h-fit flex flex-col gap-12">
      <SplitWord word={'catalog'} tight />

      {data ? (
        <>
          {data.collections.map((collection) => (
            <div
              key={collection.slug}
              className="collection w-full bg-transparent flex flex-col md:flex-row gap-4 md:py-8"
            >
              <ScrollAnimationWrapper
                className={`images w-full md:w-3/5 aspect-[4/3] md:aspect-[21/9] md:order-2 overflow-hidden flex`}
              >
                <Image
                  src={collection.coverImage}
                  alt={collection.title}
                  className="w-full hover:scale-110"
                  width={500}
                  height={500}
                />
              </ScrollAnimationWrapper>

              <div
                className={`details w-full md:w-2/5 flex flex-col gap-4 flex-grow-0 flex-shrink-0`}
              >
                <ScrollAnimationWrapper
                  className={`-mt-11 md:mt-0`}
                  variant="slideInBottom"
                  duration={0.5}
                >
                  <h2 className="text-5xl md:text-7xl mix-blend-exclusion md:tracking-wider md:text-nowrap">
                    {collection.title}
                  </h2>
                </ScrollAnimationWrapper>

                <ScrollAnimationWrapper variant="slideInBottom" duration={1.0}>
                  <p className="">{collection.description}</p>
                </ScrollAnimationWrapper>

                <ScrollAnimationWrapper
                  variant="slideInBottom"
                  duration={1.5}
                  className="w-full flex justify-end"
                >
                  <RoundLink
                    href={`/catalog/${collection.slug}`}
                    text="explore"
                  />
                </ScrollAnimationWrapper>
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className='w-full h-[50vh] flex items-center'>
          <Loader />
        </div>
      )}
    </section>
  )
}

export default CatalogPage
