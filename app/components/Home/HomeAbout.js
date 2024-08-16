import Image from 'next/image'
import ScrollAnimationWrapper from '../ScrollAnimationWrapper'
import SplitWord from '../SplitWord'

const HomeAbout = () => {
  return (
    <section className="h-fit flex flex-col gap-0">
      <div className="top w-full md:h-[65vh] flex flex-col md:flex-row gap-4 relative">

        <div className="image w-auto absolute opacity-5 -right-36 -top-12 -z-10">
          <Image
            alt="ambient graphics black panther"
            src="/images/panther_emblem_brown.webp"
            width={500}
            height={500}
          />
        </div>

        <ScrollAnimationWrapper className={'image flex-shrink-0 w-3/5 md:w-auto md:h-full aspect-[3/4]'}>
          <Image
            alt="ambient graphics artists"
            src="/images/artists.webp"
            height={750}
            width={750}
          />
        </ScrollAnimationWrapper>

        <div className="w-full flex flex-col md:justify-between gap-8 md:h-full">
          <p className="md:w-2/5">
            Explore a world of captivating art. Uncover the talented artists
            behind our diverse collection of paintings, drawings, and more. Learn
            about our dedication to showcasing unique and inspiring visual
            expressions.
          </p>
          <SplitWord className="w-full justify-end md:justify-start" word={'love'} />
        </div>
      </div>
      {/* .bottom */}
    </section>
  )
}

export default HomeAbout
