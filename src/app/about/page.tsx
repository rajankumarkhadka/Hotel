"use client";

import { motion } from 'framer-motion';
import {
  ChefHatIcon,
  HeartIcon,
  LeafIcon,
  AwardIcon,
  UsersIcon,
  ClockIcon } from
'lucide-react';
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
export default function AboutPage() {
  const values = [
  {
    icon: HeartIcon,
    title: 'Passion',
    description:
    'Every dish is crafted with love and dedication to authentic flavors'
  },
  {
    icon: LeafIcon,
    title: 'Fresh Ingredients',
    description:
    'We source locally and use only the freshest seasonal produce'
  },
  {
    icon: AwardIcon,
    title: 'Excellence',
    description:
    'Committed to delivering exceptional dining experiences every time'
  },
  {
    icon: UsersIcon,
    title: 'Community',
    description: 'Building connections through the shared joy of great food'
  }];

  const team = [
  {
    name: 'Chef Pemba Sherpa',
    role: 'Executive Chef',
    image:
    'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=500&fit=crop',
    bio: 'With over 20 years of culinary experience, Chef Pemba brings authentic Thakali recipes from his hometown in Mustang.'
  },
  {
    name: 'Maya Gurung',
    role: 'Sous Chef',
    image:
    'https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=400&h=500&fit=crop',
    bio: 'Maya specializes in fusion cuisine, blending traditional Nepali flavors with modern cooking techniques.'
  },
  {
    name: 'Rajesh Thapa',
    role: 'Pastry Chef',
    image:
    'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=400&h=500&fit=crop',
    bio: 'Our dessert maestro creates sweet endings that honor both Nepali traditions and international influences.'
  }];

  const milestones = [
  {
    year: '2008',
    title: 'The Beginning',
    description: 'Started as a small family kitchen in Thamel'
  },
  {
    year: '2012',
    title: 'First Recognition',
    description: 'Awarded Best Nepali Restaurant by Kathmandu Post'
  },
  {
    year: '2016',
    title: 'Expansion',
    description: 'Opened our flagship location with expanded seating'
  },
  {
    year: '2020',
    title: 'Digital Era',
    description: 'Launched online ordering and delivery services'
  },
  {
    year: '2024',
    title: 'Today',
    description: 'Serving thousands of happy guests monthly'
  }];

  return (
    <main className="w-full min-h-screen pt-24">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1920&h=800&fit=crop"
            alt="Restaurant interior"
            className="w-full h-full object-cover" />

          <div className="absolute inset-0 bg-gradient-to-b from-bg/95 via-bg/80 to-bg" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            }}
            className="max-w-3xl">

            <span className="text-gold text-sm font-medium tracking-wider uppercase">
              Our Story
            </span>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mt-3 mb-6">
              A Journey Through
              <span className="block text-gradient-gold">
                Himalayan Flavors
              </span>
            </h1>
            <p className="text-xl text-text-muted leading-relaxed">
              From the ancient trade routes of Mustang to the heart of
              Kathmandu, Thak Khola Kitchen brings you an authentic taste of
              Nepal's rich culinary heritage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
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
              }}>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=400&h=533&fit=crop"
                      alt="Chef cooking"
                      className="w-full h-full object-cover" />

                  </div>
                  <div className="aspect-square rounded-2xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=400&fit=crop"
                      alt="Spices"
                      className="w-full h-full object-cover" />

                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-square rounded-2xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=400&fit=crop"
                      alt="Restaurant ambiance"
                      className="w-full h-full object-cover" />

                  </div>
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=533&fit=crop"
                      alt="Food presentation"
                      className="w-full h-full object-cover" />

                  </div>
                </div>
              </div>
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
                Since 2008
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-primary mt-3 mb-6">
                Where Tradition Meets Innovation
              </h2>
              <div className="space-y-6 text-text-muted text-lg leading-relaxed">
                <p>
                  Thak Khola Kitchen was born from a simple dream: to share the
                  extraordinary flavors of the Thakali people with the world.
                  Our founder, inspired by childhood memories of his
                  grandmother's kitchen in the remote valleys of Mustang, set
                  out to recreate those magical tastes in the heart of
                  Kathmandu.
                </p>
                <p>
                  The Thakali people, known for their hospitality along the
                  ancient salt trade routes, developed a unique cuisine that
                  blends Tibetan, Nepali, and Indian influences. Their
                  traditional "dal bhat" sets became legendary among travelers
                  for their nourishing warmth and complex flavors.
                </p>
                <p>
                  Today, we honor this heritage while embracing modern culinary
                  techniques. Every dish tells a story of the mountains—from the
                  aromatic jimbu herb that grows only in high altitudes to the
                  timur pepper that adds its distinctive tingle.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
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

              Our Philosophy
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-4xl md:text-5xl font-bold text-text-primary mt-3">

              What We Stand For
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true
            }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {values.map((value) =>
            <motion.div
              key={value.title}
              variants={fadeInUp}
              className="text-center p-8 glass-light rounded-2xl">

                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold to-orange flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-bg" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-text-muted">{value.description}</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-surface">
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

              Meet The Team
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-4xl md:text-5xl font-bold text-text-primary mt-3">

              The Culinary Artists
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

            {team.map((member) =>
            <motion.div
              key={member.name}
              variants={fadeInUp}
              className="group">

                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6">
                  <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />

                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-text-primary mb-1">
                  {member.name}
                </h3>
                <p className="text-gold font-medium mb-3">{member.role}</p>
                <p className="text-text-muted">{member.bio}</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
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

              Our Journey
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-4xl md:text-5xl font-bold text-text-primary mt-3">

              Milestones
            </motion.h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true
              }}
              variants={staggerContainer}
              className="space-y-12">

              {milestones.map((milestone, index) =>
              <motion.div
                key={milestone.year}
                variants={fadeInUp}
                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                  <div
                  className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>

                    <span className="text-4xl font-heading font-bold text-gold">
                      {milestone.year}
                    </span>
                    <h3 className="font-heading text-2xl font-semibold text-text-primary mt-2 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-text-muted">{milestone.description}</p>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-gold ring-4 ring-bg flex-shrink-0" />
                  <div className="flex-1" />
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
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
              }}>

              <span className="text-gold text-sm font-medium tracking-wider uppercase">
                The Experience
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-primary mt-3 mb-6">
                More Than Just a Meal
              </h2>
              <p className="text-text-muted text-lg leading-relaxed mb-8">
                At Thak Khola Kitchen, dining is an immersive journey. From the
                moment you step through our doors, you're transported to the
                serene valleys of Mustang. Our space is designed to evoke the
                warmth of a traditional Thakali home, with handcrafted wooden
                furnishings, brass accents, and the gentle glow of butter lamps.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <ChefHatIcon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">
                      Live Kitchen
                    </h4>
                    <p className="text-sm text-text-muted">
                      Watch our chefs craft your meal
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <ClockIcon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">
                      Private Dining
                    </h4>
                    <p className="text-sm text-text-muted">
                      Intimate spaces for special occasions
                    </p>
                  </div>
                </div>
              </div>
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
              }}
              className="relative">

              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop"
                  alt="Restaurant interior"
                  className="w-full h-full object-cover" />

              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-2xl overflow-hidden border-4 border-bg">
                <img
                  src="https://images.unsplash.com/photo-1551218808-94e220e084d2?w=200&h=200&fit=crop"
                  alt="Food detail"
                  className="w-full h-full object-cover" />

              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>);

}