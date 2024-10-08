// app/components/Home/CollectionOverview.js

'use client'
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import RoundLink from '../RoundLink'
import ScrollAnimationWrapper from '../ScrollAnimationWrapper'
import { WixMediaImage } from '../wixImageToUrl'

const CollectionOverview = ({ collections }) => {
  const [openIndex, setOpenIndex] = useState(null)
  const detailsRefs = useRef([])

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  useEffect(() => {
    if (openIndex !== null) {
      const details = detailsRefs.current[openIndex]
      // details.style.height = `${details.scrollHeight}px`;
      details.style.height = `fit-content`
      details.style.opacity = 1
    }
  }, [openIndex])

  return (
    <div className="w-full flex flex-col gap-0">
      {collections.map((collection, index) => {
        return (
          <div key={index} className="flex flex-col gap-0 border-t">
            <div
              className="heading w-full flex items-center justify-between py-4 cursor-pointer"
              onClick={() => handleToggle(index)}
            >
              <h4 className="uppercase">{collection.data.tag}</h4>
              <p className="text-xl">{openIndex === index ? '−' : '+'}</p>
            </div>

            <div
              ref={(el) => (detailsRefs.current[index] = el)}
              className={`details transition-all duration-500 ease-in-out overflow-hidden flex flex-col gap-4 px-4 py-0 md:pl-32 md:pr-8 md:py-0 bg-ag-white`}
              style={{
                padding: openIndex === index ? '1rem 1rem' : '0 1rem',
                // height: openIndex === index ? `${detailsRefs.current[index]?.scrollHeight}px` : '0',
                height: openIndex === index ? `fit-content` : '0',
                opacity: openIndex === index ? 1 : 0,
              }}
            >
              <h5 className="text-ag-brown font-italiana font-bold uppercase md:hidden">
                {collection.data.title}
              </h5>

              <div className="flex flex-col md:flex-row gap-6 md:gap-24">
                <div className="pic w-full md:w-1/4 flex-shrink-0 flex flex-row-reverse items-center justify-between">
                  <RoundLink
                    href={`/catalog/`}
                    text={'Discover'}
                    dark={true}
                    className="md:hidden"
                  />

                  <ScrollAnimationWrapper className="image w-3/5 md:w-full aspect-[2/3] md:aspect-[3/4] shadow-md shadow-ag-black">
                    <WixMediaImage
                      imageId={collection.data.coverImage}
                      alt={`ambient graphics ${collection.data.title}`}
                      width={1000}
                      height={1000}
                    />
                  </ScrollAnimationWrapper>
                </div>

                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-32">
                  <div className="flex flex-col gap-4">
                    <h5 className="text-ag-brown text-2xl  font-italiana font-extrabold uppercase hidden md:flex">
                      {collection.data.title}
                    </h5>
                    <p className="text-ag-gray">
                      {collection.data.description}
                    </p>
                  </div>
                  <RoundLink
                    href={`/catalog/${collection.data.title.toLowerCase()}`}
                    text={'Discover'}
                    dark={true}
                    className="hidden md:flex flex-shrink-0"
                  />
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CollectionOverview
