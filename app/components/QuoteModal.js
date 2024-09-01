import CustomButton from './CustomButton'
import ScrollAnimationWrapper from './ScrollAnimationWrapper'

export default function QuoteModal({ item, onClose }) {
  return (
    <ScrollAnimationWrapper duration={0.25} variant='scale' className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 backdrop-blur-xl">
      <div className="backdrop-blur-3xl border p-8 w-full md:w-1/2 flex flex-col gap-8 shadow-2xl">

        <h3 className="text-2xl font-bold mb-4">
          Request a Quote for <strong className="italic text-ag-brown">{item.title}</strong>
        </h3>

        <form>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="name">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2  "
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2  "
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              className="w-full px-4 py-2  "
              rows="4"
              required
            />
          </div>
          <div className="flex gap-4 justify-end">
            <CustomButton text={'cancel'} secondary onClick={onClose} />
            <CustomButton text={'submit'} submit />
          </div>
        </form>
      </div>
    </ScrollAnimationWrapper>
  )
}
