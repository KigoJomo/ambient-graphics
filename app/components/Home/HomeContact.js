import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const recentPieces = [
  { name: 'Echoes of Infinity', image: '/images/art/piece1.webp' },
  { name: 'Luminescent Mirage', image: '/images/art/piece5.webp' },
  { name: 'Ephemeral Dreams', image: '/images/art/piece3.webp' },
  { name: 'Serenade of Shadows', image: '/images/art/piece4.webp' },
  { name: 'Whispers of the Void', image: '/images/art/piece2.webp' },
]

const HomeContact = () => {
  return (
    <section className="h-fit flex flex-col gap-4">
      <div className="heading w-full flex flex-col">
        <h4 className="uppercase text-ag-ash">ag / 2024</h4>

        <div className="w-full flex items-center justify-between">
          <h2 className="uppercase">latest</h2>
          <Link href="/shop" className="font-lato text-ag-ash uppercase">
            see all
          </Link>
        </div>
      </div>

      <div className="w-full flex gap-6 md:gap-12 overflow-x-scroll scrollbar-hidden">
        {recentPieces.map((piece, index) => {
          const baseWidth = 100 // Base width of 100px
          const factors = [1, 1.5, 2, 2.5] // Multiplication factors
          const randomFactor =
            factors[Math.floor(Math.random() * factors.length)] // Randomly select a factor
          const calculatedWidth = baseWidth * randomFactor // Calculate the final width

          return (
            <div
              key={index}
              className="flex-shrink-0 flex flex-col items-center gap-2"
              style={{ width: `${calculatedWidth}px` }} // Apply calculated width
            >
              <Image
                src={piece.image}
                alt={piece.name}
                className="w-full"
                width={150}
                height={150}
              />
              <p className="text-xs text-center">{piece.name}</p>
            </div>
          )
        })}
      </div>

      <div className="pt-8 w-full flex flex-col">
        <div className="action">
          <p className='uppercase text-xs text-ag-ash'>get in touch</p>
          {/* icon */}
        </div>
      </div>

    </section>
  )
}

export default HomeContact
