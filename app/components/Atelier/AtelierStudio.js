import Image from 'next/image'
import TypewriterComponent from '../TypewriterComponent'

const { default: ScrollAnimationWrapper } = require('../ScrollAnimationWrapper')

const AtelierStudio = () => {
  return (
    <section className="flex flex-col gap-12 pt-16">
      <ScrollAnimationWrapper>
        <TypewriterComponent
          textLevel="h2"
          className="font-normal text-center text-3xl"
          text={'Welcome to Ambient Graphics studio'}
        />
      </ScrollAnimationWrapper>

      <div className="founder w-full flex flex-col md:items-center">
        <ScrollAnimationWrapper
          variant="slideInLeft"
          className="image w-2/3 md:w-1/3 aspect-square md:aspect-video overflow-hidden border md:mr-[25%]"
        >
          <Image
            src="/images/daniel.webp"
            alt="ambient graphics"
            width={500}
            height={500}
          />
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper
          variant="slideInRight"
          className="w-2/3 md:w-1/3 h-fit bg-ag-gray ml-auto -mt-12 md:ml-[25%] flex flex-col gap-2 p-4 md:py-6"
        >
          <h3>
            meet{' '}
            <span className="text-ag-brown font-italiana italic font-bold">
              daniel
            </span>
          </h3>

          <div className="w-full h-[1px] bg-ag-white opacity-20"></div>
          
          <TypewriterComponent text={"Daniel is the founder of Ambient Graphics. He is a designer, artist, and up-coming architect. He has over 10 years of experience in the art industry."} delay={20} className='text-ag-ash' />
        </ScrollAnimationWrapper>
      </div>
    </section>
  )
}

export default AtelierStudio
