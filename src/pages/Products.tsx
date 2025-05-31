import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Filter } from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import Newsletter from '../components/Newsletter';
import { products, Product } from '../data/products';

const categoryMap: Record<string, string> = {
  vegetables: 'Vegetables',
  fruits: 'Fruits',
  herbs: 'Herbs',
};

const subcategoryMap: Record<string, string> = {
  beans: 'Beans',
  corn: 'Corn',
  brassicas: 'Brassicas',
  chillies: 'Chillies',
  fruits: 'Fruits',
  peas: 'Peas',
  greens: 'Greens',
  roots: 'Roots',
  culinary: 'Culinary Herbs',
  fresh: 'Fresh Herbs',
  herbs: 'Herbs',
};

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const categories = [...new Set(products.map(p => p.category))];
  const subcategories = [...new Set(products.map(p => p.subcategory))];

  const filteredProducts = products.filter(product => {
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    const matchesSubcategory = !selectedSubcategory || product.subcategory === selectedSubcategory;
    return matchesCategory && matchesSubcategory;
  });

  const resetFilters = () => {
    setSelectedCategory(null);
    setSelectedSubcategory(null);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <>
      <Hero
        title="Our Product Catalog"
        subtitle="Explore our wide range of premium fresh produce grown in Kenya"
        backgroundImage="https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Fresh Produce Selection"
            subtitle="Discover our diverse range of vegetables, herbs, and fruits, all grown with care in the fertile soils of Kirinyaga County."
          />
          
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden mb-6">
            <button 
              onClick={toggleFilters}
              className="w-full btn bg-white border border-gray-300 text-gray-700 flex items-center justify-between"
            >
              <span className="flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                Filter Products
              </span>
              <ChevronDown className={`h-5 w-5 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters - Mobile Collapsible */}
            <motion.div 
              className={`lg:w-1/4 ${showFilters ? 'block' : 'hidden'} lg:block`}
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
            >
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Categories</h3>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <div key={category} className="flex items-center">
                        <input 
                          type="radio"
                          id={`category-${category}`}
                          name="category"
                          checked={selectedCategory === category}
                          onChange={() => setSelectedCategory(category)}
                          className="mr-2"
                        />
                        <label htmlFor={`category-${category}`} className="text-gray-700">
                          {categoryMap[category] || category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Subcategories</h3>
                  <div className="space-y-2">
                    {subcategories.map(subcategory => (
                      <div key={subcategory} className="flex items-center">
                        <input 
                          type="radio"
                          id={`subcategory-${subcategory}`}
                          name="subcategory"
                          checked={selectedSubcategory === subcategory}
                          onChange={() => setSelectedSubcategory(subcategory)}
                          className="mr-2"
                        />
                        <label htmlFor={`subcategory-${subcategory}`} className="text-gray-700">
                          {subcategoryMap[subcategory] || subcategory}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <button 
                  onClick={resetFilters}
                  className="w-full py-2 px-4 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            </motion.div>
            
            {/* Products Grid */}
            <div className="lg:w-3/4">
              <div className="mb-6 flex justify-between items-center">
                <p className="text-gray-600">
                  Showing {filteredProducts.length} of {products.length} products
                </p>
              </div>
              
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      title={product.title}
                      image={product.image}
                      description={product.description}
                      availability={product.availability}
                      packaging={product.packaging}
                    />
                  ))}
                </div>
              ) : (
                <div className="bg-gray-50 rounded-lg p-8 text-center">
                  <p className="text-gray-600 mb-4">No products match your selected filters.</p>
                  <button 
                    onClick={resetFilters}
                    className="btn btn-primary"
                  >
                    Show All Products
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Packaging Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Packaging Options"
            subtitle="We offer a variety of packaging solutions to meet your specific requirements and ensure product freshness."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <img 
                src="https://images.pexels.com/photos/264537/pexels-photo-264537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Retail Packaging"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Retail Packaging</h3>
              <p className="text-gray-600">
                Consumer-ready packaging in various sizes, designed for supermarket display with attractive branding and product information.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <img 
                src="https://images.pexels.com/photos/2889197/pexels-photo-2889197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Bulk Packaging"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Bulk Packaging</h3>
              <p className="text-gray-600">
                Larger quantity options for wholesalers and distributors, designed for efficient transportation while maintaining product quality.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <img 
                src="https://images.pexels.com/photos/5946081/pexels-photo-5946081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Custom Packaging"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Custom Packaging</h3>
              <p className="text-gray-600">
                Tailored packaging solutions to meet specific requirements, including private labeling options for retailers and brands.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Quality Standards"
            subtitle="We maintain rigorous quality control at every stage of production to ensure our products meet international standards."
          />
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2"
            >
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-primary-600">
                  <h3 className="text-xl font-semibold mb-2">Global GAP Certification</h3>
                  <p className="text-gray-600">
                    Our farming practices adhere to Global GAP standards, ensuring food safety, environmental sustainability, and worker welfare.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-primary-600">
                  <h3 className="text-xl font-semibold mb-2">Rigorous Selection</h3>
                  <p className="text-gray-600">
                    Each product undergoes careful inspection for size, color, shape, and overall quality before packaging.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-primary-600">
                  <h3 className="text-xl font-semibold mb-2">Cold Chain Management</h3>
                  <p className="text-gray-600">
                    Temperature-controlled storage and transportation ensure maximum freshness from harvest to delivery.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-primary-600">
                  <h3 className="text-xl font-semibold mb-2">Traceability</h3>
                  <p className="text-gray-600">
                    Full product traceability from farm to customer, allowing us to monitor quality at every stage.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2"
            >
              <img 
                src="https://images.pexels.com/photos/5945660/pexels-photo-5945660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Quality Control"
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </>
  );
};

export default Products;