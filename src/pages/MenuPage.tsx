import React, { useMemo, useState, Children } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SearchIcon,
  FilterIcon,
  PlusIcon,
  LeafIcon,
  FlameIcon,
  XIcon,
  ChevronDownIcon,
  ChevronUpIcon } from
'lucide-react';
import { Button } from '../components/ui/Button';
import { useCart } from '../context/CartContext';
import { menuItems, menuCategories, MenuItem } from '../data/menuData';
const fadeInUp = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0
  },
  exit: {
    opacity: 0,
    y: -20
  }
};
export function MenuPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(
    null
  );
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    vegetarian: false,
    spicy: false,
    popular: false
  });
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const { addItem } = useCart();
  const toggleCategoryExpand = (categoryId: string) => {
    setExpandedCategories((prev) =>
    prev.includes(categoryId) ?
    prev.filter((id) => id !== categoryId) :
    [...prev, categoryId]
    );
  };
  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
      !activeCategory || item.category === activeCategory;
      const matchesSubcategory =
      !activeSubcategory || item.subcategory === activeSubcategory;
      const matchesVegetarian = !filters.vegetarian || item.isVegetarian;
      const matchesSpicy = !filters.spicy || item.isSpicy;
      const matchesPopular = !filters.popular || item.isPopular;
      return (
        matchesSearch &&
        matchesCategory &&
        matchesSubcategory &&
        matchesVegetarian &&
        matchesSpicy &&
        matchesPopular);

    });
  }, [searchQuery, activeCategory, activeSubcategory, filters]);
  const groupedItems = useMemo(() => {
    const groups: Record<string, MenuItem[]> = {};
    filteredItems.forEach((item) => {
      if (!groups[item.subcategory]) {
        groups[item.subcategory] = [];
      }
      groups[item.subcategory].push(item);
    });
    return groups;
  }, [filteredItems]);
  const handleCategoryClick = (categoryId: string | null) => {
    setActiveCategory(categoryId);
    setActiveSubcategory(null);
  };
  const handleSubcategoryClick = (subcategory: string) => {
    setActiveSubcategory(activeSubcategory === subcategory ? null : subcategory);
  };
  const clearFilters = () => {
    setSearchQuery('');
    setActiveCategory(null);
    setActiveSubcategory(null);
    setFilters({
      vegetarian: false,
      spicy: false,
      popular: false
    });
  };
  const hasActiveFilters =
  searchQuery ||
  activeCategory ||
  activeSubcategory ||
  filters.vegetarian ||
  filters.spicy ||
  filters.popular;
  return (
    <main className="w-full min-h-screen pt-24 pb-16">
      {/* Hero */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=600&fit=crop"
            alt="Menu background"
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
              Our Menu
            </h1>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">
              Discover the authentic flavors of Nepal with our carefully curated
              selection of traditional and fusion dishes
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search and Filters */}
        <div className="sticky top-20 z-30 py-4 bg-bg/95 backdrop-blur-sm border-b border-border mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
              <input
                type="text"
                placeholder="Search dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-surface border border-border rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:border-gold transition-colors" />

            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl border transition-colors ${showFilters ? 'bg-gold/10 border-gold text-gold' : 'bg-surface border-border text-text-muted hover:text-text-primary'}`}>

              <FilterIcon className="w-5 h-5" />
              <span>Filters</span>
              {hasActiveFilters &&
              <span className="w-2 h-2 bg-gold rounded-full" />
              }
            </button>

            {hasActiveFilters &&
            <button
              onClick={clearFilters}
              className="flex items-center gap-2 px-4 py-3 rounded-xl bg-surface border border-border text-text-muted hover:text-text-primary transition-colors">

                <XIcon className="w-5 h-5" />
                <span>Clear</span>
              </button>
            }
          </div>

          {/* Filter Options */}
          <AnimatePresence>
            {showFilters &&
            <motion.div
              initial={{
                height: 0,
                opacity: 0
              }}
              animate={{
                height: 'auto',
                opacity: 1
              }}
              exit={{
                height: 0,
                opacity: 0
              }}
              className="overflow-hidden">

                <div className="flex flex-wrap gap-3 pt-4">
                  <button
                  onClick={() =>
                  setFilters((f) => ({
                    ...f,
                    vegetarian: !f.vegetarian
                  }))
                  }
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-colors ${filters.vegetarian ? 'bg-green-500/20 border-green-500 text-green-400' : 'bg-surface border-border text-text-muted hover:text-text-primary'}`}>

                    <LeafIcon className="w-4 h-4" />
                    Vegetarian
                  </button>
                  <button
                  onClick={() =>
                  setFilters((f) => ({
                    ...f,
                    spicy: !f.spicy
                  }))
                  }
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-colors ${filters.spicy ? 'bg-red-500/20 border-red-500 text-red-400' : 'bg-surface border-border text-text-muted hover:text-text-primary'}`}>

                    <FlameIcon className="w-4 h-4" />
                    Spicy
                  </button>
                  <button
                  onClick={() =>
                  setFilters((f) => ({
                    ...f,
                    popular: !f.popular
                  }))
                  }
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-colors ${filters.popular ? 'bg-gold/20 border-gold text-gold' : 'bg-surface border-border text-text-muted hover:text-text-primary'}`}>

                    ⭐ Popular
                  </button>
                </div>
              </motion.div>
            }
          </AnimatePresence>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-44 space-y-2">
              <button
                onClick={() => handleCategoryClick(null)}
                className={`w-full text-left px-4 py-3 rounded-xl transition-colors ${!activeCategory ? 'bg-gold/10 text-gold' : 'text-text-muted hover:text-text-primary hover:bg-surface'}`}>

                All Items
              </button>
              {menuCategories.map((category) =>
              <div key={category.id}>
                  <button
                  onClick={() => handleCategoryClick(category.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-colors ${activeCategory === category.id ? 'bg-gold/10 text-gold' : 'text-text-muted hover:text-text-primary hover:bg-surface'}`}>

                    {category.name}
                  </button>
                  {activeCategory === category.id &&
                <motion.div
                  initial={{
                    height: 0,
                    opacity: 0
                  }}
                  animate={{
                    height: 'auto',
                    opacity: 1
                  }}
                  className="ml-4 mt-1 space-y-1 overflow-hidden">

                      {category.subcategories.map((sub) =>
                  <button
                    key={sub}
                    onClick={() => handleSubcategoryClick(sub)}
                    className={`w-full text-left px-4 py-2 text-sm rounded-lg transition-colors ${activeSubcategory === sub ? 'bg-gold/10 text-gold' : 'text-text-muted hover:text-text-primary'}`}>

                          {sub}
                        </button>
                  )}
                    </motion.div>
                }
                </div>
              )}
            </div>
          </aside>

          {/* Mobile Category Accordion */}
          <div className="lg:hidden w-full mb-6">
            <div className="space-y-2">
              <button
                onClick={() => handleCategoryClick(null)}
                className={`w-full text-left px-4 py-3 rounded-xl transition-colors ${!activeCategory ? 'bg-gold/10 text-gold' : 'bg-surface text-text-muted'}`}>

                All Items
              </button>
              {menuCategories.map((category) =>
              <div
                key={category.id}
                className="bg-surface rounded-xl overflow-hidden">

                  <button
                  onClick={() => {
                    handleCategoryClick(category.id);
                    toggleCategoryExpand(category.id);
                  }}
                  className={`w-full flex items-center justify-between px-4 py-3 transition-colors ${activeCategory === category.id ? 'text-gold' : 'text-text-muted'}`}>

                    <span>{category.name}</span>
                    {expandedCategories.includes(category.id) ?
                  <ChevronUpIcon className="w-5 h-5" /> :

                  <ChevronDownIcon className="w-5 h-5" />
                  }
                  </button>
                  <AnimatePresence>
                    {expandedCategories.includes(category.id) &&
                  <motion.div
                    initial={{
                      height: 0
                    }}
                    animate={{
                      height: 'auto'
                    }}
                    exit={{
                      height: 0
                    }}
                    className="overflow-hidden">

                        <div className="px-4 pb-3 space-y-1">
                          {category.subcategories.map((sub) =>
                      <button
                        key={sub}
                        onClick={() => handleSubcategoryClick(sub)}
                        className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${activeSubcategory === sub ? 'bg-gold/10 text-gold' : 'text-text-muted hover:text-text-primary'}`}>

                              {sub}
                            </button>
                      )}
                        </div>
                      </motion.div>
                  }
                  </AnimatePresence>
                </div>
              )}
            </div>
          </div>

          {/* Menu Items Grid */}
          <div className="flex-1 min-w-0">
            {filteredItems.length === 0 ?
            <div className="text-center py-16">
                <p className="text-text-muted text-lg mb-4">
                  No items found matching your criteria
                </p>
                <Button variant="outline" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div> :

            <div className="space-y-12">
                {Object.entries(groupedItems).map(([subcategory, items]) =>
              <motion.div
                key={subcategory}
                initial="initial"
                animate="animate"
                variants={{
                  animate: {
                    transition: {
                      staggerChildren: 0.05
                    }
                  }
                }}>

                    <h2 className="font-heading text-2xl font-bold text-text-primary mb-6 pb-2 border-b border-border">
                      {subcategory}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                      {items.map((item) =>
                  <motion.div
                    key={item.id}
                    variants={fadeInUp}
                    className="group glass-light rounded-xl overflow-hidden flex flex-col">

                          <div className="relative aspect-[16/10] overflow-hidden">
                            <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

                            <div className="absolute top-3 left-3 flex gap-2">
                              {item.isPopular &&
                        <span className="px-2 py-1 bg-gold/90 text-bg text-xs font-medium rounded-full">
                                  Popular
                                </span>
                        }
                              {item.isVegetarian &&
                        <span className="px-2 py-1 bg-green-500/90 text-white text-xs font-medium rounded-full flex items-center gap-1">
                                  <LeafIcon className="w-3 h-3" /> Veg
                                </span>
                        }
                              {item.isSpicy &&
                        <span className="px-2 py-1 bg-red-500/90 text-white text-xs font-medium rounded-full flex items-center gap-1">
                                  <FlameIcon className="w-3 h-3" /> Spicy
                                </span>
                        }
                            </div>
                          </div>
                          <div className="p-4 flex-1 flex flex-col">
                            <div className="flex items-start justify-between gap-3 mb-2">
                              <h3 className="font-heading text-lg font-semibold text-text-primary leading-tight">
                                {item.name}
                              </h3>
                              <span className="text-gold font-bold whitespace-nowrap">
                                Rs. {item.price}
                              </span>
                            </div>
                            <p className="text-text-muted text-sm mb-4 flex-1 line-clamp-2">
                              {item.description}
                            </p>
                            <Button
                        variant="ghost"
                        size="sm"
                        className="w-full"
                        leftIcon={<PlusIcon className="w-4 h-4" />}
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
                    </div>
                  </motion.div>
              )}
              </div>
            }
          </div>
        </div>
      </div>

      {/* Floating Order Button */}
      <motion.div
        initial={{
          y: 100,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        className="fixed bottom-6 right-6 z-40 lg:hidden">

        <Button
          size="lg"
          className="shadow-2xl shadow-gold/30"
          onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
          }>

          Order Now
        </Button>
      </motion.div>
    </main>);

}