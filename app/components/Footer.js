import Image from 'next/image'
import Link from 'next/link'

const username = 'ambientgraphics'

const socialHandles = [
  { name: 'Twitter', link: `https://twitter.com/${username}` },
  { name: 'Instagram', link: `https://instagram.com/${username}` },
  { name: 'Facebook', link: `https://facebook.com/${username}` },
  { name: 'LinkedIn', link: `https://linkedin.com/in/${username}` },
  { name: 'YouTube', link: `https://youtube.com/user/${username}` },
]

const Footer = () => {
  return (
    <footer className="w-full flex flex-col pt-8 md:pt-0">
      
      <div className="top w-full px-6 md:px-12 py-8 flex items-start md:items-end justify-between md:gap-4">
        <div className="hidden md:flex flex-col w-1/2 h-32">
          <h1 className="text-xl">
            ambient
            <br />
            graphics
          </h1>
        </div>

        <div className="flex flex-col gap-4 justify-between w-1/2 md:w-1/6 md:h-32 border-l border-gray-500 pl-2">
          <p className="capitalize text-sm">
            studio <br />
            contact
          </p>
          <Link
            href='mailto:ambientgraphics@gmail.com'
            className="text-sm lowercase hover:text-ag-brown"
          >
            @ambientgraphics
          </Link>
        </div>

        <div className="flex flex-col justify-between w-2/5 md:w-1/6 h-32 border-l border-gray-500 pl-2">
          {socialHandles.map((handle, index) => (
            <Link
              key={index}
              href={handle.link}
              target="_blank"
              className="text-sm hover:text-ag-brown font-lato font-normal"
            >
              {handle.name}
            </Link>
          ))}
        </div>

        <Image
          className="hidden md:flex flex-col w-1/6 aspect-[3/4] border border-gray-500 rotate-12 hover:-rotate-12 transition-all duration-1000"
          alt="ambient graphics"
          src="/images/mascot.webp"
          width={200}
          height={200}
        />
      </div>

      <div className="bottom border-t-2 border-gray-500 md:pt-10 flex justify-center">
        <h1 className="tracking-tighter md:tracking-widest leading-[8.5rem]">
          exclusive
        </h1>
      </div>
    </footer>
  )
}

export default Footer
