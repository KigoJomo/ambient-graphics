import Image from 'next/image'
import ScrollAnimationWrapper from '../ScrollAnimationWrapper'
import SplitWord from '../SplitWord'
import RoundLink from '../RoundLink'
import TypewriterComponent from '../TypewriterComponent'

const HomeAbout = () => {
  return (
    <section className="h-fit flex flex-col gap-0">
      <div className="top w-full md:h-[65vh] flex flex-col md:flex-row gap-4 relative">
        <div className="image w-auto md:w-[40vw] absolute opacity-5 -right-36 -top-12 md:-right-12 md:-top-24 -z-10">
          <Image
            alt="ambient graphics black panther"
            src="/images/panther_emblem_brown.webp"
            width={500}
            height={500}
          />
        </div>

        <ScrollAnimationWrapper
          className={
            'image flex-shrink-0 w-3/5 md:w-auto md:h-full aspect-[3/4]'
          }
          duration={2.5}
        >
          <Image
            alt="ambient graphics artists"
            src="/images/portraits/portrait3.webp"
            height={750}
            width={750}
          />
        </ScrollAnimationWrapper>

        <div className="w-full flex flex-col md:justify-between gap-8 md:h-full">
          <ScrollAnimationWrapper duration={3} className={"md:w-2/5"}>
            <p className="">
              Explore a world of captivating art. Uncover the talented artist
              behind the diverse collection of paintings, drawings, and more.
              Learn about the dedication to showcasing unique and inspiring visual
              expressions.
            </p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper variant="slideInRight">
            <SplitWord
              className="w-full justify-end pr-8 md:justify-start"
              word={'love'}
            />
          </ScrollAnimationWrapper>
        </div>
      </div>

      <div className="bottom flex flex-col md:flex-row gap-8 md:gap-4 md:justify-end relative">
        <div className="image w-full md:w-[40vw] absolute opacity-5 -left-32 top-[45%] md:-left-24 md:top-0 -z-10">
          <Image
            alt="ambient graphics black panther"
            src="/images/panther_emblem_brown.webp"
            width={500}
            height={500}
          />
        </div>

        <ScrollAnimationWrapper variant="slideInLeft" className={"flex-shrink-0"}>
          <SplitWord word={'art'} className="pl-8" />
        </ScrollAnimationWrapper>

        <div className="w-full md:w-1/3 md:mt-6 flex justify-between md:justify-end relative">
          <div className="md:absolute right-[125%] bottom-[30%]">
            <RoundLink href={'/atelier'} text={'atelier'} />
          </div>

          <div className="image-text w-3/5 md:w-full flex flex-col gap-4 md:flex-row-reverse relative">
            <ScrollAnimationWrapper className="image w-full aspect-[3/4]">
              <Image
                alt="ambient graphics artists"
                width={750}
                height={750}
                src="/images/posters/poster4.webp"
              />
            </ScrollAnimationWrapper>

            <TypewriterComponent
              text={
                'Join us in celebrating timeless artistry and unmatched creativity.'
              }
              className="text-right md:absolute right-[105%] bottom-0 md:w-[25vw] h-16"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeAbout
