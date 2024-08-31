import Link from 'next/link'
import Image from 'next/image' // Import the 'Image' component from 'next/image'

const collections = [
  {
    title: 'Paintings',
    description: 'Explore our collection of beautiful paintings.',
    coverImage: '/images/paintings/cover.jpg',
    slug: 'paintings',
  },
  {
    title: 'Pencil Sketches',
    description: 'Discover intricate pencil sketches.',
    coverImage: '/images/sketches/cover.jpg',
    slug: 'pencil-sketches',
  },
  {
    title: 'Digital Art',
    description: 'Modern and abstract digital art pieces.',
    coverImage: '/images/digital-art/cover.jpg',
    slug: 'digital-art',
  },
  // Add more collections here
]

export default function CatalogPage() {
  return (
    <section className="catalog-page grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {collections.map((collection) => (
        <div
          key={collection.slug}
          className="collection p-4 bg-transparent border shadow"
        >
          <h2 className="text-2xl font-bold mb-2">{collection.title}</h2>
          <p className="text-gray-700 mb-4">{collection.description}</p>
          <Image
            src={collection.coverImage}
            alt={collection.title}
            className="mb-4 w-full h-auto object-cover rounded"
            width={300}
            height={200}
          />
          <Link
            href={`/catalog/${collection.slug}`}
            className="inline-block text-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            View More
          </Link>
        </div>
      ))}
    </section>
  )
}
