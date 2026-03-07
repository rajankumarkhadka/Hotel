import React, { useRef, Children, memo } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRightIcon,
  StarIcon,
  ClockIcon,
  MapPinIcon,
  ChefHatIcon,
  UtensilsIcon,
  WineIcon,
  CakeIcon,
  FlameIcon,
  LeafIcon } from
'lucide-react';
import { Button } from '../components/ui/Button';
import { useCart } from '../context/CartContext';
import { menuItems } from '../data/menuData';
const fadeInUp = {
  initial: {
    opacity: 0,
    y: 30
  },
  animate: {
    opacity: 1,
    y: 0
  },
  transition: {
    duration: 0.6
  }
};
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
export function HomePage() {
  const { addItem } = useCart();
  const featuredItems = menuItems.filter((item) => item.isPopular).slice(0, 6);
  // Parallax refs
  const heroRef = useRef(null);
  const categoryRef = useRef(null);
  const aboutRef = useRef(null);
  const testimonialRef = useRef(null);
  const galleryRef = useRef(null);
  const ctaRef = useRef(null);
  // Hero parallax — Altripmart-style: background nearly fixed with zoom, text scrolls away fast
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });
  // Background barely moves (fixed feel) but zooms in subtly
  const heroImageY = useTransform(heroScrollProgress, [0, 1], ['0%', '-8%']);
  const heroImageScale = useTransform(heroScrollProgress, [0, 1], [1, 1.15]);
  const heroImageBrightness = useTransform(heroScrollProgress, [0, 1], [1, 0.4]);
  // Text scrolls away faster than normal — dramatic departure
  const heroTextY = useTransform(heroScrollProgress, [0, 1], [0, -200]);
  const heroTextOpacity = useTransform(heroScrollProgress, [0, 0.5], [1, 0]);
  const heroTextScale = useTransform(heroScrollProgress, [0, 0.6], [1, 0.92]);
  // Scroll indicator fades out quickly
  const scrollIndicatorOpacity = useTransform(
    heroScrollProgress,
    [0, 0.15],
    [1, 0]
  );
  // Overlay darkens as you scroll for clean transition
  const heroOverlayOpacity = useTransform(
    heroScrollProgress,
    [0.5, 1],
    [0, 0.6]
  );
  // Category parallax
  const { scrollYProgress: categoryScrollProgress } = useScroll({
    target: categoryRef,
    offset: ['start end', 'end start']
  });
  const categoryOddY = useTransform(categoryScrollProgress, [0, 1], [-20, 20]);
  const categoryEvenY = useTransform(categoryScrollProgress, [0, 1], [20, -20]);
  // About parallax
  const { scrollYProgress: aboutScrollProgress } = useScroll({
    target: aboutRef,
    offset: ['start end', 'end start']
  });
  const aboutImageY = useTransform(aboutScrollProgress, [0, 1], [80, -80]);
  const aboutBadgeY = useTransform(aboutScrollProgress, [0, 1], [40, -40]);
  // Testimonial parallax
  const { scrollYProgress: testimonialScrollProgress } = useScroll({
    target: testimonialRef,
    offset: ['start end', 'end start']
  });
  const testimonialY1 = useTransform(
    testimonialScrollProgress,
    [0, 1],
    [30, -30]
  );
  const testimonialY2 = useTransform(
    testimonialScrollProgress,
    [0, 1],
    [50, -50]
  );
  const testimonialY3 = useTransform(
    testimonialScrollProgress,
    [0, 1],
    [30, -30]
  );
  // Gallery parallax
  const { scrollYProgress: galleryScrollProgress } = useScroll({
    target: galleryRef,
    offset: ['start end', 'end start']
  });
  const galleryEvenY = useTransform(galleryScrollProgress, [0, 1], [40, -40]);
  const galleryOddY = useTransform(galleryScrollProgress, [0, 1], [20, -20]);
  // CTA parallax
  const { scrollYProgress: ctaScrollProgress } = useScroll({
    target: ctaRef,
    offset: ['start end', 'end start']
  });
  const ctaImageY = useTransform(ctaScrollProgress, [0, 1], ['0%', '-8%']);
  const ctaImageScale = useTransform(ctaScrollProgress, [0, 1], [1, 1.1]);
  const ctaTextY = useTransform(ctaScrollProgress, [0, 1], [0, 50]);
  const categories = [
  {
    icon: UtensilsIcon,
    name: 'Thakali Sets',
    description: 'Authentic Nepali meals',
    image:
    'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop'
  },
  {
    icon: FlameIcon,
    name: 'Momo & More',
    description: 'Beloved dumplings',
    image:
    'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&h=300&fit=crop'
  },
  {
    icon: ChefHatIcon,
    name: "Chef's Special",
    description: 'Signature creations',
    image:
    'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop'
  },
  {
    icon: WineIcon,
    name: 'Cocktails',
    description: 'Himalayan inspired',
    image:
    'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=300&fit=crop'
  },
  {
    icon: CakeIcon,
    name: 'Desserts',
    description: 'Sweet endings',
    image:
    'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop'
  },
  {
    icon: LeafIcon,
    name: 'Vegetarian',
    description: 'Plant-based delights',
    image:
    'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop'
  }];

  const testimonials = [
  {
    name: 'Sarah M.',
    rating: 5,
    text: 'The best Thakali food outside of Nepal! The ambiance is incredible and the service is impeccable.',
    avatar:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
  },
  {
    name: 'Raj K.',
    rating: 5,
    text: 'Authentic flavors that remind me of home. The Jimbu Thakali Set is a must-try!',
    avatar:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
  },
  {
    name: 'Emily L.',
    rating: 5,
    text: 'A hidden gem! The momos are perfectly crafted and the cocktails are creative and delicious.',
    avatar:
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
  }];

  const galleryImages = [
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1482049016gy-2d1ec7ab7445?w=400&h=400&fit=crop'];

  const testimonialYValues = [testimonialY1, testimonialY2, testimonialY3];
  return (
    <main className="w-full">
      {/* Hero Section — Altripmart-style sticky parallax */}
      <section
        ref={heroRef}
        className="relative h-screen overflow-hidden"
        style={{
          zIndex: 1
        }}>

        {/* Fixed-feel background with zoom */}
        <motion.div
          className="absolute inset-0 will-change-transform origin-center"
          style={{
            y: heroImageY,
            scale: heroImageScale
          }}>

          <motion.img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=1080&fit=crop"
            alt="Restaurant interior"
            className="w-full h-full object-cover scale-[1.3]"
            style={{
              filter: useTransform(
                heroImageBrightness,
                (v) => `brightness(${v})`
              )
            }} />

          <div className="absolute inset-0 bg-gradient-to-b from-bg/70 via-bg/40 to-bg/80" />
        </motion.div>

        {/* Extra overlay that darkens on scroll for clean section transition */}
        <motion.div
          className="absolute inset-0 bg-bg pointer-events-none"
          style={{
            opacity: heroOverlayOpacity
          }} />


        {/* Hero content — scrolls away dramatically */}
        <motion.div
          className="relative z-10 h-full flex items-center justify-center will-change-transform"
          style={{
            y: heroTextY,
            opacity: heroTextOpacity,
            scale: heroTextScale
          }}>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{
                opacity: 0,
                y: 40
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.8
              }}>

              <span className="inline-block px-4 py-2 bg-gold/20 text-gold text-sm font-medium rounded-full mb-6">
                Premium Nepali Fusion Cuisine
              </span>
              <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-text-primary mb-6">
                Thak Khola
                <span className="block text-gradient-gold">Kitchen</span>
              </h1>
              <p className="text-xl md:text-2xl text-text-muted max-w-2xl mx-auto mb-10">
                Experience the authentic flavors of the Himalayas with a modern
                twist. Where tradition meets innovation.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/menu">
                  <Button
                    size="lg"
                    rightIcon={<ArrowRightIcon className="w-5 h-5" />}>

                    View Menu
                  </Button>
                </Link>
                <Link to="/reservation">
                  <Button variant="outline" size="lg">
                    Book a Table
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator — fades out quickly */}
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            delay: 1,
            duration: 1
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          style={{
            opacity: scrollIndicatorOpacity
          }}>

          <div className="flex flex-col items-center gap-2 text-text-muted">
            <span className="text-sm">Scroll to explore</span>
            <motion.div
              animate={{
                y: [0, 8, 0]
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5
              }}
              className="w-6 h-10 border-2 border-text-muted rounded-full flex justify-center pt-2">

              <div className="w-1.5 h-1.5 bg-gold rounded-full" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Category Showcase — slides over the hero */}
      <section
        ref={categoryRef}
        className="py-24 bg-surface overflow-hidden relative"
        style={{
          zIndex: 2
        }}>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true
            }}
            variants={staggerContainer}
            className="text-center mb-16">

            <motion.span
              variants={fadeInUp}
              className="text-gold text-sm font-medium tracking-wider uppercase">

              Our Offerings
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-4xl md:text-5xl font-bold text-text-primary mt-3">

              Explore Our Categories
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true
            }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

            {categories.map((category, index) =>
            <motion.div
              key={category.name}
              variants={fadeInUp}
              style={{
                y: index % 2 === 0 ? categoryEvenY : categoryOddY
              }}
              whileHover={{
                y: -8
              }}
              className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer will-change-transform">

                <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-end p-4 text-center">
                  <category.icon className="w-8 h-8 text-gold mb-2" />
                  <h3 className="font-heading text-lg font-semibold text-text-primary">
                    {category.name}
                  </h3>
                  <p className="text-sm text-text-muted">
                    {category.description}
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Featured Menu */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true
            }}
            variants={staggerContainer}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">

            <div>
              <motion.span
                variants={fadeInUp}
                className="text-gold text-sm font-medium tracking-wider uppercase">

                From Our Kitchen
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="font-heading text-4xl md:text-5xl font-bold text-text-primary mt-3">

                Featured Dishes
              </motion.h2>
            </div>
            <motion.div variants={fadeInUp}>
              <Link to="/menu">
                <Button
                  variant="outline"
                  rightIcon={<ArrowRightIcon className="w-4 h-4" />}>

                  View Full Menu
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true
            }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {featuredItems.map((item) =>
            <motion.div
              key={item.id}
              variants={fadeInUp}
              className="group glass-light rounded-2xl overflow-hidden">

                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

                  <div className="absolute top-4 left-4 flex gap-2">
                    {item.isVegetarian &&
                  <span className="px-2 py-1 bg-green-500/90 text-white text-xs font-medium rounded-full">
                        Veg
                      </span>
                  }
                    {item.isSpicy &&
                  <span className="px-2 py-1 bg-red-500/90 text-white text-xs font-medium rounded-full">
                        Spicy
                      </span>
                  }
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-heading text-xl font-semibold text-text-primary">
                      {item.name}
                    </h3>
                    <span className="text-gold font-bold whitespace-nowrap">
                      Rs. {item.price}
                    </span>
                  </div>
                  <p className="text-text-muted text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  <Button
                  variant="ghost"
                  size="sm"
                  className="w-full"
                  onClick={() =>
                  addItem({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    image: item.image,
                    category: item.subcategory
                  })
                  }>

                    Add to Order
                  </Button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section ref={aboutRef} className="py-24 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{
                opacity: 0,
                x: -40
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.8
              }}
              className="relative">

              <motion.div
                className="aspect-[4/5] rounded-2xl overflow-hidden will-change-transform"
                style={{
                  y: aboutImageY
                }}>

                <img
                  src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=800&h=1000&fit=crop"
                  alt="Chef preparing food"
                  className="w-full h-full object-cover" />

              </motion.div>
              <motion.div
                className="absolute -bottom-8 -right-8 w-48 h-48 bg-gradient-to-br from-gold to-orange rounded-2xl flex items-center justify-center will-change-transform"
                style={{
                  y: aboutBadgeY
                }}>

                <div className="text-center text-bg">
                  <span className="block text-5xl font-heading font-bold">
                    15+
                  </span>
                  <span className="text-sm font-medium">
                    Years of Excellence
                  </span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 40
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.8
              }}>

              <span className="text-gold text-sm font-medium tracking-wider uppercase">
                Our Story
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-primary mt-3 mb-6">
                A Taste of the Himalayas
              </h2>
              <p className="text-text-muted text-lg leading-relaxed mb-6">
                Nestled in the heart of Kathmandu, Thak Khola Kitchen brings the
                authentic flavors of the Mustang region to your table. Our
                recipes have been passed down through generations, preserving
                the rich culinary heritage of the Thakali people.
              </p>
              <p className="text-text-muted text-lg leading-relaxed mb-8">
                Every dish tells a story of the mountains, crafted with locally
                sourced ingredients and prepared with techniques perfected over
                centuries. Experience the warmth of Nepali hospitality in every
                bite.
              </p>
              <div className="flex flex-wrap gap-8 mb-8">
                <div>
                  <span className="block text-3xl font-heading font-bold text-gold">
                    50+
                  </span>
                  <span className="text-text-muted">Signature Dishes</span>
                </div>
                <div>
                  <span className="block text-3xl font-heading font-bold text-gold">
                    10k+
                  </span>
                  <span className="text-text-muted">Happy Guests</span>
                </div>
                <div>
                  <span className="block text-3xl font-heading font-bold text-gold">
                    4.9
                  </span>
                  <span className="text-text-muted">Star Rating</span>
                </div>
              </div>
              <Link to="/about">
                <Button
                  variant="outline"
                  rightIcon={<ArrowRightIcon className="w-4 h-4" />}>

                  Learn More
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialRef} className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true
            }}
            variants={staggerContainer}
            className="text-center mb-16">

            <motion.span
              variants={fadeInUp}
              className="text-gold text-sm font-medium tracking-wider uppercase">

              Testimonials
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-4xl md:text-5xl font-bold text-text-primary mt-3">

              What Our Guests Say
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true
            }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8">

            {testimonials.map((testimonial, index) =>
            <motion.div
              key={testimonial.name}
              variants={fadeInUp}
              style={{
                y: testimonialYValues[index]
              }}
              className="glass-light rounded-2xl p-8 will-change-transform">

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) =>
                <StarIcon key={i} className="w-5 h-5 fill-gold text-gold" />
                )}
                </div>
                <p className="text-text-primary text-lg mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover" />

                  <span className="font-medium text-text-primary">
                    {testimonial.name}
                  </span>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section ref={galleryRef} className="py-24 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true
            }}
            variants={staggerContainer}
            className="text-center mb-16">

            <motion.span
              variants={fadeInUp}
              className="text-gold text-sm font-medium tracking-wider uppercase">

              Gallery
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-4xl md:text-5xl font-bold text-text-primary mt-3">

              Moments at Thak Khola
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true
            }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-4">

            {galleryImages.map((src, index) =>
            <motion.div
              key={index}
              variants={fadeInUp}
              style={{
                y: index % 2 === 0 ? galleryEvenY : galleryOddY
              }}
              whileHover={{
                scale: 1.05
              }}
              className="aspect-square rounded-xl overflow-hidden cursor-pointer will-change-transform">

                <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover" />

              </motion.div>
            )}
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            className="text-center mt-12">

            <Link to="/gallery">
              <Button
                variant="outline"
                rightIcon={<ArrowRightIcon className="w-4 h-4" />}>

                View Full Gallery
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Reservation CTA — same Altripmart-style parallax */}
      <section ref={ctaRef} className="py-24 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 will-change-transform origin-center"
          style={{
            y: ctaImageY,
            scale: ctaImageScale
          }}>

          <img
            src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=1920&h=800&fit=crop"
            alt="Restaurant ambiance"
            className="w-full h-full object-cover scale-[1.3]" />

          <div className="absolute inset-0 bg-bg/90" />
        </motion.div>

        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center will-change-transform"
          style={{
            y: ctaTextY
          }}>

          <motion.div
            initial={{
              opacity: 0,
              y: 40
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8
            }}>

            <span className="text-gold text-sm font-medium tracking-wider uppercase">
              Reserve Your Table
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mt-3 mb-6">
              An Unforgettable Dining Experience Awaits
            </h2>
            <p className="text-text-muted text-xl mb-10 max-w-2xl mx-auto">
              Join us for an evening of exquisite flavors, warm hospitality, and
              memories that last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <div className="flex items-center gap-3 text-text-muted">
                <ClockIcon className="w-5 h-5 text-gold" />
                <span>Open Daily 11AM - 11PM</span>
              </div>
              <div className="flex items-center gap-3 text-text-muted">
                <MapPinIcon className="w-5 h-5 text-gold" />
                <span>Thamel, Kathmandu</span>
              </div>
            </div>
            <Link to="/reservation">
              <Button
                size="lg"
                rightIcon={<ArrowRightIcon className="w-5 h-5" />}>

                Make a Reservation
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>);

}