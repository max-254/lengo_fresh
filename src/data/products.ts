export interface Product {
  id: string;
  title: string;
  category: string;
  subcategory: string;
  image: string;
  description: string;
  availability: string;
  packaging: string;
}

export const products: Product[] = [
  // Vegetables - Fine Beans, Runner Beans, Mangetout
  {
    id: 'fine-beans',
    title: 'Fine Beans',
    category: 'vegetables',
    subcategory: 'beans',
    image: 'https://images.pexels.com/photos/257259/pexels-photo-257259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Premium tender fine beans, hand-picked for optimal freshness and quality.',
    availability: 'Year-round',
    packaging: '250g, 500g, 1kg boxes'
  },
  {
    id: 'runner-beans',
    title: 'Runner Beans',
    category: 'vegetables',
    subcategory: 'beans',
    image: 'https://images.pexels.com/photos/533342/pexels-photo-533342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Crisp, fresh runner beans grown in the fertile soils of Kirinyaga County.',
    availability: 'Year-round',
    packaging: '500g, 1kg packages'
  },
  {
    id: 'mangetout',
    title: 'Mangetout',
    category: 'vegetables',
    subcategory: 'beans',
    image: 'https://images.pexels.com/photos/539431/pexels-photo-539431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Sweet and tender mangetout peas, perfect for stir-fries and salads.',
    availability: 'Year-round',
    packaging: '200g, 400g packs'
  },
  
  // Vegetables - Baby Corn, Tenderstem Broccoli, Sugar Snaps
  {
    id: 'baby-corn',
    title: 'Baby Corn',
    category: 'vegetables',
    subcategory: 'corn',
    image: 'https://images.pexels.com/photos/5759/food-nature-yellow-corn.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Tender baby corn harvested early for the perfect sweet flavor and crisp texture.',
    availability: 'Year-round',
    packaging: '200g trays, bulk options available'
  },
  {
    id: 'tenderstem-broccoli',
    title: 'Tenderstem Broccoli',
    category: 'vegetables',
    subcategory: 'brassicas',
    image: 'https://images.pexels.com/photos/161514/brocoli-vegetables-salad-green-161514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Sweet, tender stems with delicate florets, grown with care in our Kenyan farms.',
    availability: 'Year-round',
    packaging: '200g, 400g packs'
  },
  {
    id: 'sugar-snaps',
    title: 'Sugar Snaps',
    category: 'vegetables',
    subcategory: 'beans',
    image: 'https://images.pexels.com/photos/8260760/pexels-photo-8260760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Crunchy, sweet sugar snap peas, perfect for snacking or cooking.',
    availability: 'Year-round',
    packaging: '250g, 500g packs'
  },
  
  // Vegetables - Chillies
  {
    id: 'serenade-chilli',
    title: 'Serenade Chilli',
    category: 'vegetables',
    subcategory: 'chillies',
    image: 'https://images.pexels.com/photos/4022864/pexels-photo-4022864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Vibrant, medium-heat chillies with excellent flavor profile.',
    availability: 'Year-round',
    packaging: '100g, 200g packs'
  },
  {
    id: 'scotch-bonnet',
    title: 'Scotch Bonnet',
    category: 'vegetables',
    subcategory: 'chillies',
    image: 'https://images.pexels.com/photos/248420/pexels-photo-248420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Extremely hot chillies with a distinctive fruity flavor, perfect for Caribbean cuisine.',
    availability: 'Year-round',
    packaging: '100g packs, bulk options available'
  },
  {
    id: 'jalapeno',
    title: 'Jalapeño',
    category: 'vegetables',
    subcategory: 'chillies',
    image: 'https://images.pexels.com/photos/5750/food-healthy-red-fruit.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Medium-heat jalapeños, perfect for Mexican dishes and stuffing.',
    availability: 'Year-round',
    packaging: '200g, 500g packs'
  },
  
  // Fruits/Veg
  {
    id: 'avocados',
    title: 'Avocados',
    category: 'fruits',
    subcategory: 'fruits',
    image: 'https://images.pexels.com/photos/2228553/pexels-photo-2228553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Creamy, nutritious Hass avocados grown in the highlands of Kenya.',
    availability: 'Year-round, peak season March-August',
    packaging: 'Single units, 4-pack, bulk crates'
  },
  {
    id: 'passion-fruits',
    title: 'Passion Fruits',
    category: 'fruits',
    subcategory: 'fruits',
    image: 'https://images.pexels.com/photos/2907428/pexels-photo-2907428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Aromatic passion fruits with the perfect balance of sweetness and acidity.',
    availability: 'Year-round',
    packaging: '500g, 1kg packs'
  },
  {
    id: 'garden-peas',
    title: 'Garden Peas',
    category: 'vegetables',
    subcategory: 'peas',
    image: 'https://images.pexels.com/photos/255469/pexels-photo-255469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Sweet garden peas, freshly picked at the perfect stage of ripeness.',
    availability: 'Year-round',
    packaging: '500g, 1kg packs, shelled or in pods'
  },
  
  // Greens & Roots
  {
    id: 'kale',
    title: 'Kale',
    category: 'vegetables',
    subcategory: 'greens',
    image: 'https://images.pexels.com/photos/1046359/pexels-photo-1046359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Nutrient-dense kale leaves, grown naturally without harmful pesticides.',
    availability: 'Year-round',
    packaging: '200g, 500g bunches'
  },
  {
    id: 'carrots',
    title: 'Carrots',
    category: 'vegetables',
    subcategory: 'roots',
    image: 'https://images.pexels.com/photos/1306559/pexels-photo-1306559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Sweet, crunchy carrots grown in the mineral-rich soils of Kirinyaga County.',
    availability: 'Year-round',
    packaging: '500g, 1kg, 2kg bags'
  },
  {
    id: 'coriander',
    title: 'Coriander',
    category: 'herbs',
    subcategory: 'herbs',
    image: 'https://images.pexels.com/photos/6316515/pexels-photo-6316515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Fragrant, fresh coriander (cilantro) with vibrant flavor and aroma.',
    availability: 'Year-round',
    packaging: '100g, 200g bunches'
  },
  
  // Herbs - Culinary
  {
    id: 'dill',
    title: 'Dill',
    category: 'herbs',
    subcategory: 'culinary',
    image: 'https://images.pexels.com/photos/4197439/pexels-photo-4197439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Aromatic dill with feathery leaves, perfect for seafood dishes and pickling.',
    availability: 'Year-round',
    packaging: '50g, 100g bunches'
  },
  {
    id: 'basil',
    title: 'Basil',
    category: 'herbs',
    subcategory: 'culinary',
    image: 'https://images.pexels.com/photos/977903/pexels-photo-977903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Fragrant basil with intense aroma, essential for Italian cuisine.',
    availability: 'Year-round',
    packaging: '50g, 100g bunches, potted plants'
  },
  {
    id: 'thyme',
    title: 'Thyme',
    category: 'herbs',
    subcategory: 'culinary',
    image: 'https://images.pexels.com/photos/918092/pexels-photo-918092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Aromatic thyme with earthy, slightly minty flavor that complements various dishes.',
    availability: 'Year-round',
    packaging: '50g, 100g bunches'
  },
  
  // Herbs - Fresh
  {
    id: 'rosemary',
    title: 'Rosemary',
    category: 'herbs',
    subcategory: 'fresh',
    image: 'https://images.pexels.com/photos/2215294/pexels-photo-2215294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Aromatic rosemary with woody stems and needle-like leaves, perfect for roasts and Mediterranean dishes.',
    availability: 'Year-round',
    packaging: '50g, 100g bunches, potted plants'
  },
  {
    id: 'mint',
    title: 'Mint',
    category: 'herbs',
    subcategory: 'fresh',
    image: 'https://images.pexels.com/photos/52518/jug-refreshment-mint-drink-52518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Fresh, cooling mint with a sweet, refreshing flavor, perfect for teas, desserts, and cocktails.',
    availability: 'Year-round',
    packaging: '50g, 100g bunches'
  },
  {
    id: 'parsley',
    title: 'Parsley',
    category: 'herbs',
    subcategory: 'fresh',
    image: 'https://images.pexels.com/photos/8354558/pexels-photo-8354558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Bright, fresh parsley with a clean flavor, used as both herb and garnish.',
    availability: 'Year-round',
    packaging: '50g, 100g, 200g bunches'
  }
];