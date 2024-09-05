import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ScrollAnimationWrapper from '../ScrollAnimationWrapper'
import TypewriterComponent from '../TypewriterComponent'

const recentPieces = [
  { name: 'Gold Triggah', image: '/images/posters/poster3.webp' },
  { name: 'Unwavering Belief', image: '/images/murals/mural1.webp' },
  { name: 'Beyond black and white', image: '/images/portraits/portrait4.webp' },
  { name: 'Aphropatra', image: '/images/posters/poster5.webp' },
  { name: 'Man\'s best friend', image: '/images/portraits/portrait5.webp' },
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

      <div className="w-full flex gap-6 md:gap-16 overflow-y-hidden overflow-x-scroll scrollbar-hidden">

        {recentPieces.map((piece, index) => {
          const baseWidth = 150 // Base width of 150px
          const factors = [1, 1.5, 2, 2.5] // Multiplication factors
          const randomFactor =
            factors[Math.floor(Math.random() * factors.length)] // Randomly select a factor
          const calculatedWidth = baseWidth * randomFactor // Calculate the final width

          return (
            <ScrollAnimationWrapper variant='slideInBottom' duration={index / 1.75}
              key={index}
              className="flex-shrink-0 flex flex-col items-center gap-2 w-1/3 md:w-1/4"
              style={{ width: `${calculatedWidth}px` }}
            >
              <div className="w-full overflow-hidden">
                <Image
                  src={piece.image}
                  alt={piece.name}
                  className="w-full hover:scale-125"
                  width={150}
                  height={150}
                />
              </div>
              <p className="text-xs text-center">{piece.name}</p>
            </ScrollAnimationWrapper>
          )
        })}
      </div>

      <div className="w-full flex flex-col md:flex-row gap-4 pt-8 md:pt-20">
        <div className="w-full md:w-2/3 flex flex-col">
          <ScrollAnimationWrapper className="action flex items-start gap-2">
            <p className="uppercase text-xs text-ag-ash">get in touch</p>
            <p className="font text-2xl leading-[10px]">&#x2198;</p>
          </ScrollAnimationWrapper>
          
          <div className="h relative">
            <ScrollAnimationWrapper variant='slideInBottom' className={"relative z-[2]"}>
              <h1 className="uppercase tracking-tighter">stay</h1>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper variant='rotate' duration={2} className={"absolute z-[3] top-0 left-32 md:top-12 md:left-72"}>
              <Image
                src="/images/panther.webp"
                alt="arrow"
                width={125}
                height={125}
                className="md:hidden"
              />
              
              <Image
                src="/images/panther.webp"
                alt="arrow"
                width={175}
                height={175}
                className="hidden md:block"
              />
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper variant='slideInBottom' duration={1.5} className={"w-full relative z-[4]"}>
              <h1 className="uppercase tracking-tighter w-full md:w-fit md:pl-32 text-right">
                artistic
              </h1>
            </ScrollAnimationWrapper>
          </div>
        </div>

        <ScrollAnimationWrapper duration={2} className="w-full md:w-1/3 mt-12 border-l border-gray-500 pl-2 h-32">
          <TypewriterComponent text={"Immerse yourself in our world of artistry and inspiration through our newsletter. Follow us on social media for the latest exhibitions, exclusive events, and more. Experience the epitome of creativity with Ambient Graphics."} />
        </ScrollAnimationWrapper>

      </div>
    </section>
  )
}

export default HomeContact
