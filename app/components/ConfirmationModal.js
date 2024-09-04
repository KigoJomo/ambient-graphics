// app/components/ConfirmationModal.js
import CustomButton from './CustomButton'

export default function ConfirmationModal({ onClose, message }) {
  return (
    <div className="fixed inset-0 md:inset-32 bg-black bg-opacity-50 backdrop-blur-xl flex items-center justify-center z-50">
      <div className="p-8 flex flex-col items-end">
        <p className="mb-4">{message}</p>
        <CustomButton text="Close" ariaLabel="Close the confirmation modal" onClick={onClose} secondary />
      </div>
    </div>
  )
}
