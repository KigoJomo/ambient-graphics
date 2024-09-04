// app/components/QuoteSummary.js
import React from 'react'
import CustomButton from './CustomButton'
import ScrollAnimationWrapper from './ScrollAnimationWrapper'

export default function QuoteSummary({ data, onQuoteRequest }) {
  const fields = {
    'Art Style': data.style,
    'Preferred Colors': data.colors,
    Dimensions: data.dimensions,
    Description: data.description,
    'Reference Images': `${data.referenceImages.length} files uploaded`,
  }

  return (
    <ScrollAnimationWrapper variant='slideInBottom' className="w-full md:w-3/5 quote-summary flex flex-col items-center gap-4">
      <h3 className="text-lg font-bold tracking-wider text-center">
        Your Customization Summary
      </h3>
      <ul className="w-full flex flex-col items-start gap-4 py-4 md:px-16 bg-ag-gray">
        {Object.entries(fields).map(([label, value]) => (
          <li
            key={label}
            className="w-full py-2 px-4 flex flex-col gap-2 md:gap-0"
          >
            <p className="text-sm">{label}:</p>
            <p className="text-sm text-ag-brown font-italiana font-bold tracking-wider">{value}</p>
          </li>
        ))}
      </ul>
      <div className="">
        <CustomButton
          text="Request a Quote"
          ariaLabel="Request a quote for your custom piece"
          onClick={onQuoteRequest}
        />
      </div>
    </ScrollAnimationWrapper>
  )
}
