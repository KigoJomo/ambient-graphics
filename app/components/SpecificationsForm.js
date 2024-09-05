import { useState } from 'react'
import CustomButton from './CustomButton'
import FieldWrapper from './FieldWrapper'
import TipsAndPreview from './shop/TipsAndPreview'
import ScrollAnimationWrapper from './ScrollAnimationWrapper'

export default function SpecificationsForm({ category, onSubmit }) {
  const [formData, setFormData] = useState({
    style: '',
    colors: '',
    dimensions: '',
    description: '',
    referenceImages: [],
  })

  const [isCustomDimensions, setIsCustomDimensions] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)

  const handleInputChange = (e) => {
    const { name, value, files } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: files ? [...files] : value,
    }))
  }

  const handleDimensionsChange = (e) => {
    const value = e.target.value
    setFormData((prev) => ({
      ...prev,
      dimensions: value === 'Custom' ? '' : value,
    }))
    setIsCustomDimensions(value === 'Custom')
  }

  const handleSwitchToPredefined = () => {
    setIsCustomDimensions(false)
    setFormData((prev) => ({
      ...prev,
      dimensions: '', // Reset the custom dimensions input
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const handleNext = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1))
  }

  const handlePrevious = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0))
  }

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (currentStep < steps.length - 1) {
        handleNext() // Move to the next step
      } else {
        handleSubmit(e) // Submit the form on the last step
      }
    }
  }

  // Define all the steps in an array
  const steps = [
    {
      component: (
        <ScrollAnimationWrapper variant="slideInRight" className="w-full">
          <FieldWrapper
            label="Art Style"
            name="style"
            type="text"
            value={formData.style}
            onChange={handleInputChange}
            placeholder="Describe your desired style"
            onKeyDown={handleKeyPress}
          />
        </ScrollAnimationWrapper>
      ),
    },
    {
      component: (
        <ScrollAnimationWrapper variant="slideInRight" className="w-full">
          <FieldWrapper
            label="Preferred Colors"
            name="colors"
            type="text"
            value={formData.colors}
            onChange={handleInputChange}
            placeholder="List preferred colors"
            onKeyDown={handleKeyPress}
          />
        </ScrollAnimationWrapper>
      ),
    },
    {
      component: !isCustomDimensions ? (
        <ScrollAnimationWrapper variant="slideInRight" className="w-full">
          <FieldWrapper
            label="Dimensions"
            name="dimensions"
            type="select"
            value={formData.dimensions}
            onChange={handleDimensionsChange}
            options={['30x40 cm', '50x70 cm', '70x100 cm', 'Custom']}
            onKeyDown={handleKeyPress}
          />
        </ScrollAnimationWrapper>
      ) : (
        <div className="w-full">
          <ScrollAnimationWrapper variant="slideInRight" className="w-full">
            <FieldWrapper
              label="Custom Dimensions"
              name="dimensions"
              type="text"
              value={formData.dimensions}
              onChange={handleInputChange}
              placeholder="Enter custom dimensions (e.g., 100x150 cm)"
              onKeyDown={handleKeyPress}
            />
          </ScrollAnimationWrapper>
          <button
            type="button"
            onClick={handleSwitchToPredefined}
            className="text-ag-brown underline text-xs mt-4 font-lato"
          >
            Switch to predefined dimensions
          </button>
        </div>
      ),
    },
    {
      component: (
        <ScrollAnimationWrapper variant="slideInRight" className="w-full">
          <FieldWrapper
            label="Description"
            name="description"
            type="textarea"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Describe your vision in detail"
            onKeyDown={handleKeyPress}
          />
        </ScrollAnimationWrapper>
      ),
    },
    {
      component: (
        <ScrollAnimationWrapper variant="slideInRight" className="w-full">
          <FieldWrapper
            label="Reference Images"
            name="referenceImages"
            type="file"
            onChange={handleInputChange}
            multiple
            accept="image/*"
            onKeyDown={handleKeyPress}
          />
        </ScrollAnimationWrapper>
      ),
    },
  ]

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-8 w-full md:px-32">
      
      <TipsAndPreview currentStep={currentStep} formData={formData} />

      <form
        className="w-full specifications-form flex flex-col items-center gap-4"
        onSubmit={handleSubmit}
      >
        {steps[currentStep].component}

        <div className="flex justify-between w-full mt-4">
          <button
            type="button"
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className={`px-4 py-2 font-lato bg-transparent border text-white ${
              currentStep === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            &#x1f850;
          </button>

          {currentStep < steps.length - 1 ? (
            <button
              type="button"
              onClick={handleNext}
              className="px-4 py-2 border bg-transparent text-white font-lato"
            >
              &#x1f852;
            </button>
          ) : (
            <CustomButton
              text="Submit"
              ariaLabel="Submit your specifications"
              submit
            />
          )}
        </div>
      </form>
    </div>
  )
}
