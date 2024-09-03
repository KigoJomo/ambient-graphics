// app/components/QuoteSummary.js
import CustomButton from './CustomButton'

export default function QuoteSummary({ data, onQuoteRequest }) {
  return (
    <div className="quote-summary p-4 border border-gray-800">
      <h3 className="text-xl font-bold mb-4">Your Customization Summary</h3>
      <ul>
        <li><strong>Art Style:</strong> {data.style}</li>
        <li><strong>Preferred Colors:</strong> {data.colors}</li>
        <li><strong>Dimensions:</strong> {data.dimensions}</li>
        <li><strong>Description:</strong> {data.description}</li>
        <li><strong>Reference Images:</strong> {data.referenceImages.length} files uploaded</li>
      </ul>
      <div className="mt-4">
        <CustomButton text="Request a Quote" ariaLabel="Request a quote for your custom piece" onClick={onQuoteRequest} />
      </div>
    </div>
  )
}
