// app/components/SpecificationsForm.js
import { useState } from 'react'
import CustomButton from './CustomButton'
import FieldWrapper from './FieldWrapper'

export default function SpecificationsForm({ category, onSubmit }) {
  const [formData, setFormData] = useState({
    style: '',
    colors: '',
    dimensions: '',
    description: '',
    referenceImages: [],
  })

  const [isCustomDimensions, setIsCustomDimensions] = useState(false)

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

  return (
    <form className="specifications-form flex flex-col items-center gap-8" onSubmit={handleSubmit}>
      <FieldWrapper
        label="Art Style"
        name="style"
        type="text"
        value={formData.style}
        onChange={handleInputChange}
        placeholder="Describe your desired style"
      />

      <FieldWrapper
        label="Preferred Colors"
        name="colors"
        type="text"
        value={formData.colors}
        onChange={handleInputChange}
        placeholder="List preferred colors"
      />

      {!isCustomDimensions && (
        <FieldWrapper
          label="Dimensions"
          name="dimensions"
          type="select"
          value={formData.dimensions}
          onChange={handleDimensionsChange}
          options={['30x40 cm', '50x70 cm', '70x100 cm', 'Custom']}
        />
      )}

      {isCustomDimensions && (
        <div className='w-full flex flex-col items-start gap-4'>
          <FieldWrapper
            label="Custom Dimensions"
            name="dimensions"
            type="text"
            value={formData.dimensions}
            onChange={handleInputChange}
            placeholder="Enter custom dimensions (e.g., 100x150 cm)"
          />
          <button
            type="button"
            onClick={handleSwitchToPredefined}
            className="text-ag-brown underline text-sm mt-2"
          >
            Switch to predefined dimensions
          </button>
        </div>
      )}

      <FieldWrapper
        label="Description"
        name="description"
        type="textarea"
        value={formData.description}
        onChange={handleInputChange}
        placeholder="Describe your vision in detail"
      />

      <FieldWrapper
        label="Reference Images"
        name="referenceImages"
        type="file"
        onChange={handleInputChange}
        multiple
        accept="image/*"
      />

      <CustomButton text="Submit Specifications" ariaLabel="Submit your specifications" />
    </form>
  )
}