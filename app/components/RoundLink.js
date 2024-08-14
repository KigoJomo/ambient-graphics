import Link from 'next/link'

const RoundLink = ({ href, text }) => {
  return (
    <Link href={href} className="h-24 md:h-40 aspect-square flex flex-col items-center justify-center rounded-full border hover:text-ag-brown">
      <div className="arrow-button w-10 md:w-24 aspect-square"></div>
      <p className="uppercase text-xs md:text-base peer-hover:text-ag-brown group-hover:text-ag-brown">{text}</p>
    </Link>
  )
}

export default RoundLink;