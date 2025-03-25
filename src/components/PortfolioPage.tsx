import { useState } from 'react';

const categories = ['All', 'Portrait', 'Landscape', 'Urban'];

const allPhotos = [
  { id: 1, url: 'https://source.unsplash.com/600x400/?portrait', category: 'Portrait' },
  { id: 2, url: 'https://source.unsplash.com/600x400/?landscape', category: 'Landscape' },
  { id: 3, url: 'https://source.unsplash.com/600x400/?urban', category: 'Urban' },
  { id: 4, url: 'https://source.unsplash.com/600x400/?city', category: 'Urban' },
  { id: 5, url: 'https://source.unsplash.com/600x400/?mountains', category: 'Landscape' },
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPhotos =
    selectedCategory === 'All'
      ? allPhotos
      : allPhotos.filter(photo => photo.category === selectedCategory);

  return (
    <div className="p-4 min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6 text-center">My Portfolio</h1>

      <div className="flex justify-center mb-8">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="bg-gray-800 text-white px-4 py-2 rounded"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredPhotos.map((photo) => (
          <img
            key={photo.id}
            src={photo.url}
            alt=""
            className="w-full h-60 object-cover rounded shadow-lg hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
    </div>
  );
}
