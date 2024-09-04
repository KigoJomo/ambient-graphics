// app/components/ArtCategoryCard.js
import Image from 'next/image'
import ScrollAnimationWrapper from './ScrollAnimationWrapper'

export default function ArtCategoryCard({ category, onSelect }) {
  const handleSelect = () => {
    onSelect(category)
  }

  // Remove the trailing 's' if it exists
  const categoryWithoutTrailingS = category.endsWith('s')
    ? category.slice(0, -1)
    : category

  return (
    <ScrollAnimationWrapper duration={1.5}
      className="art-category-card p-2 md:p-4 border border-gray-800 cursor-pointer hover:bg-gray-900 transition w-[45%] md:w-64"
      onClick={handleSelect}
    >
      <Image
        src={`/images/${category.toLowerCase()}/${categoryWithoutTrailingS.toLowerCase()}3.webp`}
        alt={category}
        width={200}
        height={200}
        className="w-full aspect-square object-cover mb-4"
      />
      <h3 className="text-xl font-semibold capitalize text-center">
        {category}
      </h3>
    </ScrollAnimationWrapper>
  )
}
