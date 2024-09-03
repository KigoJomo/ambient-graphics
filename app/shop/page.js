// app/shop/page.js
'use client'

import { useState } from 'react'
import CustomButton from '@/app/components/CustomButton'
import ArtCategoryCard from '@/app/components/ArtCategoryCard'
import SpecificationsForm from '@/app/components/SpecificationsForm'
import QuoteSummary from '@/app/components/QuoteSummary'
import ConfirmationModal from '@/app/components/ConfirmationModal'

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [customizationData, setCustomizationData] = useState(null)
  const [isQuoteRequested, setIsQuoteRequested] = useState(false)
  const [isConfirmationOpen, setConfirmationOpen] = useState(false)

  const handleCategorySelect = (category) => {
    setSelectedCategory(category)
  }

  const handleSpecificationsSubmit = (data) => {
    setCustomizationData(data)
    setIsQuoteRequested(true)
  }

  const handleQuoteRequest = () => {
    setConfirmationOpen(true)
  }

  return (
    <section className="shop-page h-fit flex flex-col gap-8">
      <div className="landing-section text-center p-8 flex flex-col items-center gap-4">
        <h1 className="text-4xl md:text-8xl">Bring Your Vision to Life</h1>
        <p className="text-ag-ash">Get a custom piece of art tailored just for you.</p>
        <CustomButton
          text="Start Your Custom Order"
          ariaLabel="Start your custom order"
          onClick={() => document.getElementById('categories').scrollIntoView({ behavior: 'smooth' })}
        />
      </div>

      <div id="categories" className="categories-section p-8 flex flex-col gap-6">
        <h2 className="text-2xl md:text-4xl font-bold text-center">Select Your Art Type</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <ArtCategoryCard category="Murals" onSelect={handleCategorySelect} />
          <ArtCategoryCard category="Portraits" onSelect={handleCategorySelect} />
          <ArtCategoryCard category="Paintings" onSelect={handleCategorySelect} />
        </div>
      </div>

      {selectedCategory && (
        <div className="specifications-section p-8">
          <h2 className="text-2xl md:text-4xl font-bold text-center">Customize Your {selectedCategory}</h2>
          <SpecificationsForm category={selectedCategory} onSubmit={handleSpecificationsSubmit} />
        </div>
      )}

      {customizationData && (
        <div className="quote-summary-section p-8">
          <h2 className="text-2xl md:text-4xl font-bold text-center">Review Your Specifications</h2>
          <QuoteSummary data={customizationData} onQuoteRequest={handleQuoteRequest} />
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
