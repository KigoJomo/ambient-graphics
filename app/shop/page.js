// app/shop/page.js
'use client'

import { useContext, useEffect, useState, useRef } from 'react'
import CustomButton from '@/app/components/CustomButton'
import ArtCategoryCard from '@/app/components/ArtCategoryCard'
import SpecificationsForm from '@/app/components/SpecificationsForm'
import QuoteSummary from '@/app/components/QuoteSummary'
import ConfirmationModal from '@/app/components/ConfirmationModal'
import SplitWord from '../components/SplitWord'
import { wixClient } from '../hooks/wixClient'
import { CollectionsContext } from '../context/CollectionsContext'

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [customizationData, setCustomizationData] = useState(null)
  const [isQuoteRequested, setIsQuoteRequested] = useState(false)
  const [isConfirmationOpen, setConfirmationOpen] = useState(false)

  // const [collections, setCollections] = useState([])

  // const fetchCollections = async () => {
  //   try {
  //     const client = await wixClient() // initialize wixClient
  //     const collectionsData = await client.items
  //       .queryDataItems({
  //         dataCollectionId: 'Collections',
  //       })
  //       .find()

  //     setCollections(collectionsData.items)
  //   } catch (error) {
  //     console.error('Error fetching collections:', error)
  //   }
  // }

  // useEffect(() => {
  //   fetchCollections()
  // }, [])

  const collections = useContext(CollectionsContext)

  const quoteSummaryRef = useRef(null)
  const customizationsRef = useRef(null)

  const handleCategorySelect = (category) => {
    setSelectedCategory(category)
    customizationsRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSpecificationsSubmit = (data) => {
    setCustomizationData(data)
    setIsQuoteRequested(true)
    quoteSummaryRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const handleQuoteRequest = () => {
    setConfirmationOpen(true)
  }

  return (
    <section className="shop-page h-fit flex flex-col gap-12">
      <div className="landing-section text-center p-8 flex flex-col items-center gap-4">
        <h1 className="text-4xl md:text-8xl hidden">
          Bring Your Vision to Life
        </h1>
        <div className="w-full flex flex-wrap gap-2 md:gap-6 items-center justify-center text-4xl">
          <SplitWord className="text-4xl md:text-8xl" word={'Bring'} />
          <SplitWord className="text-4xl md:text-8xl" word={'your'} />
          <SplitWord className="text-4xl md:text-8xl" word={'vision'} />
          <SplitWord className="text-4xl md:text-8xl" word={'to'} />
          <SplitWord className="text-4xl md:text-8xl" word={'life'} />
        </div>
        <p className="text-ag-ash">
          Get a custom piece of art tailored just for you.
        </p>
        <CustomButton
          text="Start Your Custom Order"
          ariaLabel="Start your custom order"
          onClick={() =>
            document
              .getElementById('categories')
              .scrollIntoView({ behavior: 'smooth' })
          }
        />
      </div>

      <div
        id="categories"
        className="categories-section p-8 flex flex-col gap-6"
      >
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Select Your Art Type
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {collections.map((collection, index) => (
            <ArtCategoryCard
              key={index}
              category={collection.data.title}
              imageId={collection.data.coverImage}
              onSelect={handleCategorySelect}
            />
          ))}
        </div>
      </div>

      <div
        ref={customizationsRef}
        className="h-2 w-full opacity-0 bg-ag-white -mt-6 -mb-6 md:mt-0 md:mb-0"
      ></div>

      {selectedCategory && (
        <div className="specifications-section p-8 flex flex-col items-center gap-4 md:gap-8">
          <h2 className="text-2xl md:text-4xl font-bold text-center">
            Customize Your{' '}
            {selectedCategory.endsWith('s')
              ? selectedCategory.slice(0, -1)
              : selectedCategory}
          </h2>
          <SpecificationsForm
            category={selectedCategory}
            onSubmit={handleSpecificationsSubmit}
          />
        </div>
      )}

      <div
        ref={quoteSummaryRef}
        className="h-2 w-full opacity-0 bg-ag-white -mt-6 -mb-6 md:mt-0 md:mb-0"
      ></div>

      {customizationData && (
        <div className="quote-summary-section flex flex-col items-center gap-6 p-8">
          <h2 className="text-2xl md:text-4xl font-bold text-center">
            Review Your Specifications
          </h2>
          <QuoteSummary
            data={customizationData}
            onQuoteRequest={handleQuoteRequest}
          />
        </div>
      )}

      {isConfirmationOpen && (
        <ConfirmationModal
          onClose={() => setConfirmationOpen(false)}
          message="Your quote request has been submitted! We'll get back to you soon."
        />
      )}
    </section>
  )
}
