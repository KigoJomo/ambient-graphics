// app/catalog/[slug]/page.js
"use client";
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import QuoteModal from '@/app/components/QuoteModal';
import SplitWord from '@/app/components/SplitWord';
import CustomButton from '@/app/components/CustomButton';

const items = {
  'paintings': [
    { title: 'Sunset', description: 'A beautiful sunset.', image: '/images/paintings/painting1.webp', price: 'KES 20,000' },
    { title: 'Ocean Waves', description: 'Calm ocean waves.', image: '/images/paintings/painting2.webp', price: 'KES 25,000' },
    { title: 'Mountain Range', description: 'A majestic mountain range.', image: '/images/paintings/painting3.webp', price: 'KES 30,000' },
    { title: 'Forest Path', description: 'A serene forest path.', image: '/images/paintings/painting4.webp', price: 'KES 22,000' },
    { title: 'City Skyline', description: 'A vibrant city skyline.', image: '/images/paintings/painting5.webp', price: 'KES 28,000' },
    { title: 'Desert Dunes', description: 'Golden desert dunes under the sun.', image: '/images/paintings/painting6.webp', price: 'KES 24,000' },
  ],
  'pencil-sketches': [
    { title: 'Portrait', description: 'A detailed portrait.', image: '/images/sketches/sketch1.webp', price: 'KES 15,000' },
    { title: 'Wildlife', description: 'A sketch of wildlife in its natural habitat.', image: '/images/sketches/sketch2.webp', price: 'KES 18,000' },
    { title: 'Old Man', description: 'A sketch of an old man with deep wrinkles.', image: '/images/sketches/sketch3.webp', price: 'KES 12,000' },
    { title: 'Mother and Child', description: 'A tender moment between mother and child.', image: '/images/sketches/sketch4.webp', price: 'KES 16,000' },
    { title: 'Tree', description: 'A detailed sketch of a large tree.', image: '/images/sketches/sketch5.webp', price: 'KES 14,000' },
    { title: 'Architectural Drawing', description: 'A sketch of a building with intricate details.', image: '/images/sketches/sketch6.webp', price: 'KES 20,000' },
  ],
  'digital-art': [
    { title: 'Abstract Lights', description: 'Colorful digital art.', image: '/images/digital-art/digital1.webp', price: 'KES 30,000' },
    { title: 'Cyber City', description: 'A futuristic cyber city.', image: '/images/digital-art/digital2.webp', price: 'KES 35,000' },
    { title: 'Space Nebula', description: 'A stunning nebula in deep space.', image: '/images/digital-art/digital3.webp', price: 'KES 32,000' },
    { title: 'Fractal Design', description: 'A complex fractal design.', image: '/images/digital-art/digital4.webp', price: 'KES 28,000' },
    { title: 'Fantasy Landscape', description: 'A mystical landscape in a fantasy world.', image: '/images/digital-art/digital5.webp', price: 'KES 33,000' },
    { title: 'Neon Lights', description: 'Bright neon lights in the night.', image: '/images/digital-art/digital6.webp', price: 'KES 29,000' },
  ],
  // You can add more categories in the same format here
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
    <section className="category-page h-fit flex flex-col gap-8">

      <div className="w-full flex justify-center">
        <SplitWord word={slug} className='text-4xl md:text-[11.5rem] md:leading-[11.5rem]' />
      </div>

      <div className="w-full flex flex-col gap-6">
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
        
            <div className="w-full flex justify-end">
              <CustomButton text={"get this"} onClick={() => handleRequestQuote(item)}/>
            </div>
        
          </div>
        ))}
      </div>
      {isModalOpen && (
        <QuoteModal
          item={selectedItem}
          onClose={() => setModalOpen(false)}
        />
      )}
    </section>
  );
}
