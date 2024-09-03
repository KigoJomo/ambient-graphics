import React from 'react'
import PropTypes from 'prop-types'

const CustomButton = ({ secondary = false, text, onClick, submit = false, ariaLabel }) => {
  return (
    <button
      className={`${
        secondary
          ? 'bg-ag-black border border-white'
          : 'bg-ag-white text-ag-black'
      } px-4 py-2 font-lato w-fit`}
      onClick={onClick}
      type={`${submit ? 'submit' : 'button'}`}
      aria-label={ariaLabel}
    >
      {text}
    </button>
  )
}

CustomButton.propTypes = {
  secondary: PropTypes.bool,
  text: PropTypes.string.isRequired,
}

export default CustomButton
