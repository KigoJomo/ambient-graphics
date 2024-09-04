'use client'

import { useMemo } from 'react'
import IdeaIcon from '../IdeaIcon'
import ScrollAnimationWrapper from '../ScrollAnimationWrapper'
import TypewriterComponent from '../TypewriterComponent'

export default function TipsAndPreview({ currentStep, formData }) {
  // Tips for each step
  const tips = [
    "Choose a style that resonates with your vision.",
    "Consider the color scheme and how it will match your space.",
    "Select dimensions that fit well within your desired location.",
    "Provide as much detail as possible to ensure your vision is realized.",
    "Upload reference images that capture the essence of your idea."
  ]

  // Generate a live preview (e.g., SVG representation of the customization)
  const livePreview = useMemo(() => {
    // Dynamically create an SVG or some other visual based on formData
    // This is a placeholder. Replace with your actual SVG rendering logic.
    return <svg width="100%" height="100%"></svg>
  }, [formData])

  // Dynamically calculate the price based on formData (This is just a placeholder)
  const calculatedPrice = useMemo(() => {
    return 5000; // Replace with your price calculation logic
  }, [formData])

  return (
    <div className="tips-preview-wrapper w-full flex flex-col items-start gap-4">

      <div className="preview-section flex flex-col items-center gap-2 md:order-2">
        <h3 className="text-xl font-bold">Sample Preview</h3>
        <div className="preview-container w-full aspect-[4/3] md:aspect-square bg-ag-gray">{livePreview}</div>
      </div>

      <div className="price-section md:order-3">
        <h3 className="text-xs font-bold">Estimated Price: <span className='text-ag-brown'>KES {calculatedPrice}</span></h3>
      </div>

      <div className="tips-section text-ag-ash md:order-1 md:w-3/5 flex items-start gap-2">
        <div className="h-6">
          <IdeaIcon />
        </div>
        <TypewriterComponent text={tips[currentStep]} className='text-xs text-ag-brown' />
      </div>
    </div>
  )
}
