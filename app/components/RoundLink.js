import Link from 'next/link'

const RoundLink = ({ href, text, className = " ", dark =false }) => {
  return (
    <Link href={href} className={`h-24 w-24 md:h-40 md:w-40 flex flex-col items-center justify-center rounded-full border ${dark && 'border-ag-black'} hover:border-ag-brown hover:text-ag-brown ${className}`}>
      <div className={`arrow-button ${dark && 'arrow-button-dark'} w-10 md:w-24 aspect-square`}></div>
      <p className={`uppercase text-xs md:text-base ${dark && 'text-ag-black'}`}>{text}</p>
    </Link>
  )
}

export default RoundLink;