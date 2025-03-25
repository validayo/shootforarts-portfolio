import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import './lightbox-white.css';

const images = [
  { src: '/images/photo1.jpg', category: 'Urban' },
  { src: '/images/IMG_9754.JPG', category: 'Portraits' },
  { src: '/images/photo2.jpg', category: 'Urban' },
  { src: '/images/portrait1.jpg', category: 'Urban' },
  { src: '/images/IMG_9749.JPG', category: 'Portraits' },
  { src: '/images/urban1.jpg', category: 'BW' },
  { src: '/images/bw1.jpg', category: 'BW' },
  { src: '/images/IMG_9748.JPG', category: 'Portraits' },
  { src: '/images/IMG_9750.JPG', category: 'Portraits' },
  { src: '/images/IMG_9753.JPG', category: 'Portraits' },
];

const breakpointColumnsObj = {
    default: 5,  // 🟨 5 columns on large screens
    1536: 4,     // 4 columns on ~2K
    1280: 3,     // 3 columns on laptops
    1024: 2,     // tablets
    640: 1,      // mobile
  };
  

export default function GalleryLanding() {
  const [index, setIndex] = useState(-1);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const location = useLocation();

  const filteredImages = selectedCategory === 'All'
    ? images
    : images.filter((img) => img.category === selectedCategory);

  return (
    <div className="bg-white min-h-screen">
      {/* HEADER */}
      <header className="text-center py-6">
        <h1 className="text-3xl tracking-widest font-light text-gray-700">
          <span className="font-semibold">SHOOT FOR </span><em>ARTS</em>
        </h1>

        <nav className="mt-2 text-sm tracking-wide space-x-4">
          {[
            { path: '/', label: 'overview' },
            { path: '/about', label: 'about' },
            { path: '/contact', label: 'contact' },
          ].map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`transition-colors duration-200 ${
                location.pathname === path
                  ? 'text-[#d4a347]'
                  : 'text-black hover:text-[#d4a347]'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </header>

      {/* CATEGORY FILTER */}
      <div className="flex justify-center gap-4 mt-6 text-sm text-gray-600">
        {['All', 'Portraits', 'Urban', 'BW'].map((cat) => (
          <button
            key={cat}
            className={`uppercase tracking-wide border px-3 py-1 rounded-full transition ${
              selectedCategory === cat
                ? 'bg-black text-white'
                : 'hover:border-black'
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GALLERY */}
      <main className="max-w-screen-xl mx-auto px-2 sm:px-2 md:px-4 pt-6">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex gap-2"
          columnClassName="space-y-2"
        >
          {filteredImages.map(({ src }, i) => (
            <div
              key={i}
              className="relative group cursor-zoom-in aspect-[4/5]"
              onClick={() => setIndex(i)}
            >
              <img
  src={src}
  alt={`photo-${i}`}
  className="w-full h-auto object-cover 
    blur-sm scale-105 transition duration-500 ease-out 
    group-hover:brightness-75 group-hover:blur-0 group-hover:scale-100"
  loading="lazy"
  onLoad={(e) => {
    e.currentTarget.classList.remove('blur-sm', 'scale-105');
  }}
/>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white text-sm font-medium">
                Click to view
              </div>
            </div>
          ))}
        </Masonry>

        {/* LIGHTBOX */}
        <Lightbox
          open={index >= 0}
          close={() => setIndex(-1)}
          index={index}
          slides={filteredImages}
        />
      </main>
    </div>
  );
}
