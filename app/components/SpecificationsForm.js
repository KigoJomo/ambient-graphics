// app/components/SpecificationsForm.js
import { useState } from 'react'
import CustomButton from './CustomButton'

export default function SpecificationsForm({ category, onSubmit }) {
  const [formData, setFormData] = useState({
    style: '',
    colors: '',
    dimensions: '',
    description: '',
    referenceImages: [],
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      referenceImages: [...e.target.files],
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form className="specifications-form flex flex-col gap-4" onSubmit={handleSubmit}>
      <label>
        Art Style:
        <input
          type="text"
          name="style"
          value={formData.style}
          onChange={handleInputChange}
          className="border p-2 w-full"
          placeholder="Describe your desired style"
        />
      </label>

      <label>
        Preferred Colors:
        <input
          type="text"
          name="colors"
          value={formData.colors}
          onChange={handleInputChange}
          className="border p-2 w-full"
          placeholder="List preferred colors"
        />
      </label>

      <label>
        Dimensions:
        <input
          type="text"
          name="dimensions"
          value={formData.dimensions}
          onChange={handleInputChange}
          className="border p-2 w-full"
          placeholder="Enter size dimensions"
        />
      </label>

      <label>
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          className="border p-2 w-full"
          placeholder="Describe your vision in detail"
        />
      </label>

      <label>
        Reference Images:
        <input
          type="file"
          name="referenceImages"
          multiple
          onChange={handleFileChange}
          className="border p-2 w-full"
        />
      </label>

      <CustomButton text="Submit Specifications" ariaLabel="Submit your specifications" />
    </form>
  )
}
