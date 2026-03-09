"use client";
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  XIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ZoomInIcon } from
'lucide-react';
interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: 'food' | 'interior' | 'events';
}
const galleryImages: GalleryImage[] = [
{
  id: 1,
  src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop',
  alt: 'Restaurant interior',
  category: 'interior'
},
{
  id: 2,
  src: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=600&fit=crop',
  alt: 'Thakali set meal',
  category: 'food'
},
{
  id: 3,
  src: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&h=600&fit=crop',
  alt: 'Momos',
  category: 'food'
},
{
  id: 4,
  src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
  alt: 'Dining area',
  category: 'interior'
},
{
  id: 5,
  src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=600&fit=crop',
  alt: 'Food presentation',
  category: 'food'
},
{
  id: 6,
  src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=600&fit=crop',
  alt: 'Chef at work',
  category: 'events'
},
{
  id: 7,
  src: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&h=600&fit=crop',
  alt: 'Dessert plating',
  category: 'food'
},
{
  id: 8,
  src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&h=600&fit=crop',
  alt: 'Fresh ingredients',
  category: 'food'
},
{
  id: 9,
  src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop',
  alt: 'Pizza',
  category: 'food'
},
{
  id: 10,
  src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&h=600&fit=crop',
  alt: 'Breakfast',
  category: 'food'
},
{
  id: 11,
  src: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&h=600&fit=crop',
  alt: 'Bar area',
  category: 'interior'
},
{
  id: 12,
  src: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&h=600&fit=crop',
  alt: 'Private dining',
  category: 'interior'
},
{
  id: 13,
  src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=600&fit=crop',
  alt: 'Grilled meat',
  category: 'food'
},
{
  id: 14,
  src: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=800&h=600&fit=crop',
  alt: 'Chef preparing',
  category: 'events'
},
{
  id: 15,
  src: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&h=600&fit=crop',
  alt: 'Cocktails',
  category: 'food'
},
{
  id: 16,
  src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop',
  alt: 'Restaurant exterior',
  category: 'interior'
},
{
  id: 17,
  src: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&h=600&fit=crop',
  alt: 'Fish dish',
  category: 'food'
},
{
  id: 18,
  src: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&h=600&fit=crop',
  alt: 'Dessert',
  category: 'food'
}];

const categories = [
{
  id: 'all',
  label: 'All'
},
{
  id: 'food',
  label: 'Food'
},
{
  id: 'interior',
  label: 'Interior'
},
{
  id: 'events',
  label: 'Events'
}];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const filteredImages =
  activeCategory === 'all' ?
  galleryImages :
  galleryImages.filter((img) => img.category === activeCategory);
  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const goToPrevious = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      lightboxIndex === 0 ? filteredImages.length - 1 : lightboxIndex - 1
    );
  };
  const goToNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      lightboxIndex === filteredImages.length - 1 ? 0 : lightboxIndex + 1
    );
  };
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);
  return (
    <main className="w-full min-h-screen pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=600&fit=crop"
            alt="Gallery background"
            className="w-full h-full object-cover" />

          <div className="absolute inset-0 bg-gradient-to-b from-bg/95 via-bg/80 to-bg" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6
            }}>

            <h1 className="font-heading text-5xl md:text-6xl font-bold text-text-primary mb-4">
              Our Gallery
            </h1>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">
              A visual journey through our culinary creations, elegant spaces,
              and memorable moments
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 border-b border-border sticky top-20 z-30 bg-bg/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-2 flex-wrap">
            {categories.map((cat) =>
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all ${activeCategory === cat.id ? 'bg-gold text-bg' : 'bg-surface text-text-muted hover:text-text-primary'}`}>

                {cat.label}
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">

            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) =>
              <motion.div
                key={image.id}
                layout
                initial={{
                  opacity: 0,
                  scale: 0.9
                }}
                animate={{
                  opacity: 1,
                  scale: 1
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9
                }}
                transition={{
                  duration: 0.3
                }}
                className="break-inside-avoid group relative overflow-hidden rounded-xl cursor-pointer"
                onClick={() => openLightbox(index)}>

                  <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-110" />

                  <div className="absolute inset-0 bg-bg/0 group-hover:bg-bg/40 transition-colors duration-300 flex items-center justify-center">
                    <ZoomInIcon className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null &&
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          className="fixed inset-0 z-50 bg-bg/95 backdrop-blur-lg flex items-center justify-center"
          onClick={closeLightbox}>

            {/* Close button */}
            <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 text-text-muted hover:text-text-primary transition-colors z-10"
            aria-label="Close lightbox">

              <XIcon className="w-8 h-8" />
            </button>

            {/* Navigation */}
            <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 md:left-8 p-3 bg-surface/80 rounded-full text-text-primary hover:bg-surface transition-colors z-10"
            aria-label="Previous image">

              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 md:right-8 p-3 bg-surface/80 rounded-full text-text-primary hover:bg-surface transition-colors z-10"
            aria-label="Next image">

              <ChevronRightIcon className="w-6 h-6" />
            </button>

            {/* Image */}
            <motion.div
            key={lightboxIndex}
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            exit={{
              opacity: 0,
              scale: 0.9
            }}
            transition={{
              duration: 0.2
            }}
            className="max-w-5xl max-h-[85vh] mx-4"
            onClick={(e) => e.stopPropagation()}>

              <img
              src={filteredImages[lightboxIndex].src}
              alt={filteredImages[lightboxIndex].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg" />

              <p className="text-center text-text-muted mt-4">
                {filteredImages[lightboxIndex].alt}
              </p>
            </motion.div>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-text-muted">
              {lightboxIndex + 1} / {filteredImages.length}
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </main>);

}