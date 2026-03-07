export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  subcategory: string;
  isPopular?: boolean;
  isVegetarian?: boolean;
  isSpicy?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  subcategories: string[];
}

export const menuCategories: MenuCategory[] = [
{
  id: 'main-course',
  name: 'Main Course',
  subcategories: [
  'Jimbu Thakali Set',
  'Dhido Set',
  'Blue Plate Menu',
  'Taste of Thak Khola',
  "Chef's Special"]

},
{
  id: 'popular',
  name: 'Popular',
  subcategories: ['Momo and Thukpa', 'Western Favorites']
},
{
  id: 'pizza-pasta',
  name: 'Pizza & Pasta',
  subcategories: ['Pizza', 'Pasta', 'Burger and Sandwiches']
},
{
  id: 'starters',
  name: 'Starters',
  subcategories: ['Appetizer', 'Soup and Salad']
},
{
  id: 'desserts',
  name: 'Desserts',
  subcategories: ['Home Made Desserts']
},
{
  id: 'cold-beverages',
  name: 'Cold Beverages',
  subcategories: [
  'Mocktails',
  'Smoothies',
  'Lassi',
  'Milkshakes',
  'Iced Coffee',
  'Frappe',
  'Ice Blended Coffee',
  'Non-Alcoholic']

},
{
  id: 'alcoholic',
  name: 'Alcoholic Drinks',
  subcategories: [
  'Cocktails',
  'Martini Cocktail',
  'Wine & Beer',
  'Alcoholic Beverage',
  'Shooters',
  'Bartender Recommendation']

},
{
  id: 'hot-beverages',
  name: 'Hot Beverages',
  subcategories: ['Hot Tea']
},
{
  id: 'extras',
  name: 'Extras',
  subcategories: ['Extra']
}];


export const menuItems: MenuItem[] = [
// Main Course - Jimbu Thakali Set
{
  id: 'jimbu-thakali-veg',
  name: 'Jimbu Thakali Set (Veg)',
  description:
  'Traditional Thakali meal with rice, dal, seasonal vegetables, pickle, and papad served on a brass plate',
  price: 650,
  image:
  'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop',
  category: 'main-course',
  subcategory: 'Jimbu Thakali Set',
  isVegetarian: true,
  isPopular: true
},
{
  id: 'jimbu-thakali-chicken',
  name: 'Jimbu Thakali Set (Chicken)',
  description:
  'Complete Thakali set with tender chicken curry, rice, dal, vegetables, and traditional accompaniments',
  price: 850,
  image:
  'https://images.unsplash.com/photo-1567337710282-00832b415979?w=400&h=300&fit=crop',
  category: 'main-course',
  subcategory: 'Jimbu Thakali Set',
  isPopular: true
},
{
  id: 'jimbu-thakali-mutton',
  name: 'Jimbu Thakali Set (Mutton)',
  description:
  'Premium Thakali experience with slow-cooked mutton curry and all traditional sides',
  price: 1050,
  image:
  'https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=400&h=300&fit=crop',
  category: 'main-course',
  subcategory: 'Jimbu Thakali Set',
  isSpicy: true
},
// Main Course - Dhido Set
{
  id: 'dhido-set-veg',
  name: 'Dhido Set (Vegetarian)',
  description:
  'Traditional buckwheat dhido with gundruk, seasonal vegetables, and authentic Nepali sides',
  price: 550,
  image:
  'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop',
  category: 'main-course',
  subcategory: 'Dhido Set',
  isVegetarian: true
},
{
  id: 'dhido-set-chicken',
  name: 'Dhido Set (Chicken)',
  description:
  'Hearty dhido meal with spiced chicken curry and traditional accompaniments',
  price: 750,
  image:
  'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=400&h=300&fit=crop',
  category: 'main-course',
  subcategory: 'Dhido Set'
},
// Main Course - Chef's Special
{
  id: 'chef-special-lamb',
  name: "Chef's Special Lamb Shank",
  description:
  'Slow-braised lamb shank in aromatic Himalayan spices, served with saffron rice',
  price: 1450,
  image:
  'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop',
  category: 'main-course',
  subcategory: "Chef's Special",
  isPopular: true
},
{
  id: 'chef-special-fish',
  name: 'Himalayan Trout',
  description:
  'Fresh mountain trout pan-seared with timur pepper and served with seasonal greens',
  price: 1250,
  image:
  'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop',
  category: 'main-course',
  subcategory: "Chef's Special"
},
// Popular - Momo and Thukpa
{
  id: 'chicken-momo',
  name: 'Chicken Momo (Steam)',
  description:
  'Juicy chicken dumplings steamed to perfection, served with spicy tomato achar',
  price: 350,
  image:
  'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&h=300&fit=crop',
  category: 'popular',
  subcategory: 'Momo and Thukpa',
  isPopular: true
},
{
  id: 'buff-momo',
  name: 'Buff Momo (Fried)',
  description: 'Crispy fried buffalo meat momos with signature jhol achar',
  price: 380,
  image:
  'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&h=300&fit=crop',
  category: 'popular',
  subcategory: 'Momo and Thukpa',
  isPopular: true,
  isSpicy: true
},
{
  id: 'veg-momo',
  name: 'Vegetable Momo',
  description: 'Fresh vegetable filled momos with aromatic herbs and spices',
  price: 280,
  image:
  'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=400&h=300&fit=crop',
  category: 'popular',
  subcategory: 'Momo and Thukpa',
  isVegetarian: true
},
{
  id: 'thukpa',
  name: 'Chicken Thukpa',
  description:
  'Hearty Tibetan noodle soup with tender chicken and fresh vegetables',
  price: 420,
  image:
  'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop',
  category: 'popular',
  subcategory: 'Momo and Thukpa',
  isPopular: true
},
// Pizza
{
  id: 'margherita-pizza',
  name: 'Margherita Pizza',
  description:
  'Classic Italian pizza with fresh mozzarella, tomato sauce, and basil',
  price: 650,
  image:
  'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop',
  category: 'pizza-pasta',
  subcategory: 'Pizza',
  isVegetarian: true
},
{
  id: 'nepali-fusion-pizza',
  name: 'Nepali Fusion Pizza',
  description:
  'Unique pizza topped with spiced chicken, timur, and local cheese',
  price: 850,
  image:
  'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop',
  category: 'pizza-pasta',
  subcategory: 'Pizza',
  isPopular: true,
  isSpicy: true
},
// Pasta
{
  id: 'carbonara',
  name: 'Spaghetti Carbonara',
  description: 'Creamy pasta with crispy bacon, parmesan, and black pepper',
  price: 580,
  image:
  'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&h=300&fit=crop',
  category: 'pizza-pasta',
  subcategory: 'Pasta'
},
{
  id: 'arrabiata',
  name: 'Penne Arrabiata',
  description: 'Spicy tomato sauce pasta with garlic and red chili flakes',
  price: 480,
  image:
  'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&h=300&fit=crop',
  category: 'pizza-pasta',
  subcategory: 'Pasta',
  isVegetarian: true,
  isSpicy: true
},
// Burgers
{
  id: 'classic-burger',
  name: 'Classic Beef Burger',
  description:
  'Juicy beef patty with lettuce, tomato, cheese, and special sauce',
  price: 520,
  image:
  'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
  category: 'pizza-pasta',
  subcategory: 'Burger and Sandwiches'
},
{
  id: 'chicken-burger',
  name: 'Grilled Chicken Burger',
  description: 'Tender grilled chicken breast with avocado and chipotle mayo',
  price: 480,
  image:
  'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=300&fit=crop',
  category: 'pizza-pasta',
  subcategory: 'Burger and Sandwiches',
  isPopular: true
},
// Starters - Appetizer
{
  id: 'sekuwa',
  name: 'Chicken Sekuwa',
  description: 'Smoky grilled chicken marinated in traditional Nepali spices',
  price: 450,
  image:
  'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop',
  category: 'starters',
  subcategory: 'Appetizer',
  isPopular: true,
  isSpicy: true
},
{
  id: 'choila',
  name: 'Buff Choila',
  description: 'Spiced grilled buffalo meat with mustard oil and fresh herbs',
  price: 420,
  image:
  'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400&h=300&fit=crop',
  category: 'starters',
  subcategory: 'Appetizer',
  isSpicy: true
},
{
  id: 'spring-rolls',
  name: 'Vegetable Spring Rolls',
  description:
  'Crispy rolls filled with fresh vegetables, served with sweet chili sauce',
  price: 280,
  image:
  'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop',
  category: 'starters',
  subcategory: 'Appetizer',
  isVegetarian: true
},
// Soup and Salad
{
  id: 'thukpa-soup',
  name: 'Clear Vegetable Soup',
  description: 'Light and healthy soup with fresh seasonal vegetables',
  price: 220,
  image:
  'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop',
  category: 'starters',
  subcategory: 'Soup and Salad',
  isVegetarian: true
},
{
  id: 'caesar-salad',
  name: 'Caesar Salad',
  description:
  'Crisp romaine lettuce with parmesan, croutons, and Caesar dressing',
  price: 380,
  image:
  'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=400&h=300&fit=crop',
  category: 'starters',
  subcategory: 'Soup and Salad',
  isVegetarian: true
},
// Desserts
{
  id: 'kheer',
  name: 'Rice Kheer',
  description:
  'Traditional Nepali rice pudding with cardamom, nuts, and saffron',
  price: 250,
  image:
  'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop',
  category: 'desserts',
  subcategory: 'Home Made Desserts',
  isVegetarian: true
},
{
  id: 'gulab-jamun',
  name: 'Gulab Jamun',
  description: 'Soft milk dumplings soaked in rose-flavored sugar syrup',
  price: 220,
  image:
  'https://images.unsplash.com/photo-1666190094762-2e6eb7f0e840?w=400&h=300&fit=crop',
  category: 'desserts',
  subcategory: 'Home Made Desserts',
  isVegetarian: true,
  isPopular: true
},
{
  id: 'chocolate-brownie',
  name: 'Chocolate Brownie',
  description: 'Warm chocolate brownie served with vanilla ice cream',
  price: 320,
  image:
  'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=400&h=300&fit=crop',
  category: 'desserts',
  subcategory: 'Home Made Desserts',
  isVegetarian: true
},
// Cold Beverages - Mocktails
{
  id: 'virgin-mojito',
  name: 'Virgin Mojito',
  description: 'Refreshing mint and lime mocktail with soda',
  price: 280,
  image:
  'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&h=300&fit=crop',
  category: 'cold-beverages',
  subcategory: 'Mocktails',
  isVegetarian: true
},
{
  id: 'blue-lagoon',
  name: 'Blue Lagoon',
  description: 'Blue curacao flavored mocktail with lemon and sprite',
  price: 300,
  image:
  'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=400&h=300&fit=crop',
  category: 'cold-beverages',
  subcategory: 'Mocktails',
  isVegetarian: true
},
// Smoothies
{
  id: 'mango-smoothie',
  name: 'Mango Smoothie',
  description: 'Fresh mango blended with yogurt and honey',
  price: 250,
  image:
  'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400&h=300&fit=crop',
  category: 'cold-beverages',
  subcategory: 'Smoothies',
  isVegetarian: true
},
{
  id: 'berry-blast',
  name: 'Berry Blast',
  description: 'Mixed berries smoothie with banana and almond milk',
  price: 280,
  image:
  'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=300&fit=crop',
  category: 'cold-beverages',
  subcategory: 'Smoothies',
  isVegetarian: true
},
// Lassi
{
  id: 'mango-lassi',
  name: 'Mango Lassi',
  description: 'Traditional yogurt drink blended with fresh mango',
  price: 200,
  image:
  'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=400&h=300&fit=crop',
  category: 'cold-beverages',
  subcategory: 'Lassi',
  isVegetarian: true,
  isPopular: true
},
{
  id: 'sweet-lassi',
  name: 'Sweet Lassi',
  description: 'Creamy yogurt drink with a touch of cardamom',
  price: 180,
  image:
  'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&h=300&fit=crop',
  category: 'cold-beverages',
  subcategory: 'Lassi',
  isVegetarian: true
},
// Alcoholic - Cocktails
{
  id: 'himalayan-mule',
  name: 'Himalayan Mule',
  description: 'Vodka with ginger beer, lime, and Himalayan herbs',
  price: 550,
  image:
  'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=300&fit=crop',
  category: 'alcoholic',
  subcategory: 'Cocktails',
  isPopular: true
},
{
  id: 'everest-sunrise',
  name: 'Everest Sunrise',
  description: 'Tequila, orange juice, and grenadine with a mountain view',
  price: 580,
  image:
  'https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=400&h=300&fit=crop',
  category: 'alcoholic',
  subcategory: 'Cocktails'
},
// Wine & Beer
{
  id: 'house-red-wine',
  name: 'House Red Wine',
  description: 'Premium red wine by the glass',
  price: 450,
  image:
  'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=300&fit=crop',
  category: 'alcoholic',
  subcategory: 'Wine & Beer'
},
{
  id: 'everest-beer',
  name: 'Everest Beer',
  description: 'Refreshing Nepali lager beer',
  price: 350,
  image:
  'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&h=300&fit=crop',
  category: 'alcoholic',
  subcategory: 'Wine & Beer',
  isPopular: true
},
// Hot Beverages
{
  id: 'masala-tea',
  name: 'Masala Chiya',
  description: 'Traditional Nepali spiced tea with milk',
  price: 120,
  image:
  'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&h=300&fit=crop',
  category: 'hot-beverages',
  subcategory: 'Hot Tea',
  isVegetarian: true,
  isPopular: true
},
{
  id: 'green-tea',
  name: 'Himalayan Green Tea',
  description: 'Organic green tea from the hills of Nepal',
  price: 150,
  image:
  'https://images.unsplash.com/photo-1556881286-fc6915169721?w=400&h=300&fit=crop',
  category: 'hot-beverages',
  subcategory: 'Hot Tea',
  isVegetarian: true
},
// Extras
{
  id: 'extra-rice',
  name: 'Extra Rice',
  description: 'Additional serving of steamed basmati rice',
  price: 80,
  image:
  'https://images.unsplash.com/photo-1516684732162-798a0062be99?w=400&h=300&fit=crop',
  category: 'extras',
  subcategory: 'Extra',
  isVegetarian: true
},
{
  id: 'extra-roti',
  name: 'Roti (2 pcs)',
  description: 'Fresh whole wheat flatbread',
  price: 60,
  image:
  'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop',
  category: 'extras',
  subcategory: 'Extra',
  isVegetarian: true
},
{
  id: 'papad',
  name: 'Papad',
  description: 'Crispy lentil crackers',
  price: 40,
  image:
  'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop',
  category: 'extras',
  subcategory: 'Extra',
  isVegetarian: true
}];