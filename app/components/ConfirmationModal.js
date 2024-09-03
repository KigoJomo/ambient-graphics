// app/components/ConfirmationModal.js
import CustomButton from './CustomButton'

export default function ConfirmationModal({ onClose, message }) {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-md shadow-lg">
        <p className="mb-4">{message}</p>
        <CustomButton text="Close" ariaLabel="Close the confirmation modal" onClick={onClose} />
      </div>
    </div>
  )
}
