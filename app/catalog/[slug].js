import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image'; // Import the 'Image' component from the appropriate package
import QuoteModal from '../../components/QuoteModal';

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
  const router = useRouter();
  const { slug } = router.query;
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const categoryItems = items[slug] || [];

  const handleRequestQuote = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  return (
    <div className="category-page grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {categoryItems.map((item, index) => (
        <div key={index} className="item p-4 bg-white rounded shadow">
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
    </div>
  );
}
