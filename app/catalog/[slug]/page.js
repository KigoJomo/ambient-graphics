// app/catalog/[slug]/page.js
"use client";
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import QuoteModal from '@/app/components/QuoteModal';
import SplitWord from '@/app/components/SplitWord';

const items = {
  'paintings': [
    { title: 'Sunset', description: 'A beautiful sunset.', image: '/images/paintings/sunset.jpg', price: '$200' },
    { title: 'Ocean Waves', description: 'Calm ocean waves.', image: '/images/paintings/ocean.jpg', price: '$250' },
    // More paintings here
  ],
  'pencil-sketches': [
    { title: 'Portrait', description: 'A detailed portrait.', image: '/images/sketches/portrait.jpg', price: '$150' },
    // More sketches here
  ],
  'digital-art': [
    { title: 'Abstract Lights', description: 'Colorful digital art.', image: '/images/digital-art/abstract.jpg', price: '$300' },
    // More digital art here
  ],
  // Add more categories here
};

export default function CategoryPage() {
  const pathname = usePathname();
  const slug = pathname.split('/').pop();

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const categoryItems = items[slug] || [];

  const handleRequestQuote = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  return (
    <section className="category-page h-fit flex flex-col">

      <div className="w-full flex justify-center">
        <SplitWord word={slug} className='text-4xl md:text-[11.5rem]' />
      </div>

      {categoryItems.map((item, index) => (
        <div key={index} className="item p-4 border">
          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
          <p className="text-gray-700 mb-4">{item.description}</p>
          <Image
            src={item.image}
            alt={item.title}
            className="mb-4 w-full h-auto object-cover rounded"
            width={300}
            height={200}
          />
          <p className="text-lg font-semibold mb-4">{item.price}</p>
          <button
            onClick={() => handleRequestQuote(item)}
            className="inline-block text-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Request Quote
          </button>
        </div>
      ))}
      {isModalOpen && (
        <QuoteModal
          item={selectedItem}
          onClose={() => setModalOpen(false)}
        />
      )}
    </section>
  );
}
