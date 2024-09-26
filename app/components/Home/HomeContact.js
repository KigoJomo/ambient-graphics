import Image from 'next/image'
import React from 'react'
import ScrollAnimationWrapper from '../ScrollAnimationWrapper'
import TypewriterComponent from '../TypewriterComponent'

const HomeContact = () => {
  return (
    <section className="h-fit flex flex-col md:flex-row gap-4 pt-8 md:pt-20">
      <div className="w-full md:w-2/3 flex flex-col">
        <ScrollAnimationWrapper className="action flex items-start gap-2">
          <p className="uppercase text-xs text-ag-ash">get in touch</p>
          <p className="font text-2xl leading-[10px]">&#x2198;</p>
        </ScrollAnimationWrapper>

        <div className="h relative">
          <ScrollAnimationWrapper
            variant="slideInBottom"
            className={'relative z-[2]'}
          >
            <h1 className="uppercase tracking-tighter">stay</h1>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper
            variant="rotate"
            duration={2}
            className={'absolute z-[3] top-0 left-32 md:top-12 md:left-72'}
          >
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

          <ScrollAnimationWrapper
            variant="slideInBottom"
            duration={1.5}
            className={'w-full relative z-[4]'}
          >
            <h1 className="uppercase tracking-tighter w-full md:w-fit md:pl-32 text-right">
              artistic
            </h1>
          </ScrollAnimationWrapper>
        </div>
      </div>

      <ScrollAnimationWrapper
        duration={2}
        className="w-full md:w-1/3 mt-12 border-l border-gray-500 pl-2 h-32 flex items-center"
      >
        <TypewriterComponent
          text={
            'Immerse yourself in our world of artistry and inspiration through our newsletter. Follow us on social media for the latest exhibitions, exclusive events, and more. Experience the epitome of creativity with Ambient Graphics.'
          }
        />
      </ScrollAnimationWrapper>
    </section>
  )
}

export default HomeContact
