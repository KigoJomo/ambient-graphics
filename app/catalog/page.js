import Link from 'next/link'
import Image from 'next/image' // Import the 'Image' component from 'next/image'
import SplitWord from '../components/SplitWord'
import RoundLink from '../components/RoundLink'
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper'

const collections = [
  {
    title: 'Paintings',
    description: 'Explore our collection of beautiful paintings.',
    coverImage: '/images/paintings/painting1.webp',
    slug: 'paintings',
  },
  {
    title: 'Pencil Sketches',
    description: 'Discover intricate pencil sketches.',
    coverImage: '/images/sketches/sketch1.webp',
    slug: 'pencil-sketches',
  },
  {
    title: 'Digital Art',
    description: 'Modern and abstract digital art pieces.',
    coverImage: '/images/digital-art/digital-art1.webp',
    slug: 'digital-art',
  },
  // Add more collections here
]

export default function CatalogPage() {
  return (
    <section className="catalog-page h-fit flex flex-col gap-12">
      <SplitWord word={'catalog'} tight />
      {collections.map((collection, index) => (
        <div
          key={collection.slug}
          className="collection w-full bg-transparent flex flex-col md:flex-row gap-4 md:py-8"
        >
          <ScrollAnimationWrapper className={`w-full md:w-3/5 aspect-video md:aspect-[21/9] ${index % 2 && 'md:order-2'} overflow-hidden flex`}>
            <Image
              src={collection.coverImage}
              alt={collection.title}
              className="w-full hover:scale-110"
              width={500}
              height={500}
            />
          </ScrollAnimationWrapper>
          <div className="w-full md:w-2/5 flex flex-col gap-4 flex-grow-0 flex-shrink-0">
            <ScrollAnimationWrapper className={'-mt-11 md:mt-0'} variant='slideInBottom' duration={0.5}>
              <h2 className="text-5xl md:text-7xl mix-blend-exclusion md:tracking-wider md:text-nowrap">{collection.title}</h2>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper variant='slideInBottom' duration={1.0}>
              <p className="">{collection.description}</p>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper variant='slideInBottom' duration={1.5} className="w-full flex justify-end">
              <RoundLink href={`/catalog/${collection.slug}`} text='explore'  />
            </ScrollAnimationWrapper>
          </div>
        </div>
      ))}
    </section>
  )
}
