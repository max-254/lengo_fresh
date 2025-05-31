import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Truck, Clock, Leaf, UserCheck } from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import Newsletter from '../components/Newsletter';
import { products } from '../data/products';

const featuredProducts = products.slice(0, 3);

const Home: React.FC = () => {
  return (
    <>
      <Hero
        title="From Kenyan Farms To Global Tables"
        subtitle="Premium fresh produce grown with care in the fertile soils of Kirinyaga County"
        backgroundImage="https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        buttonText="Explore Our Products"
        buttonLink="/products"
      />

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Why Choose Lengo Fresh"
            subtitle="We take pride in delivering the highest quality produce through sustainable farming practices and rigorous quality control."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-md text-center"
            >
              <div className="flex justify-center mb-4">
                <Award className="h-12 w-12 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
              <p className="text-gray-600">
                Carefully selected produce meeting the highest international standards.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md text-center"
            >
              <div className="flex justify-center mb-4">
                <Truck className="h-12 w-12 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Delivery</h3>
              <p className="text-gray-600">
                Efficient logistics ensuring fresh produce reaches international markets promptly.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-md text-center"
            >
              <div className="flex justify-center mb-4">
                <Leaf className="h-12 w-12 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainable Farming</h3>
              <p className="text-gray-600">
                Environmentally friendly practices that respect our land and community.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-md text-center"
            >
              <div className="flex justify-center mb-4">
                <UserCheck className="h-12 w-12 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Trusted Partner</h3>
              <p className="text-gray-600">
                Building long-term relationships with distributors and retailers worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Intro Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded in the heart of Kenya's agricultural region, Lengo Fresh Ltd has grown from a small family farm to a leading exporter of premium fresh produce. Our journey began with a simple mission: to share the bounty of Kenya's fertile soil with the world.
              </p>
              <p className="text-gray-600 mb-8">
                Today, we work with a network of dedicated farmers across Kirinyaga County, maintaining strict quality control while supporting sustainable farming practices and local communities.
              </p>
              <Link to="/about" className="btn btn-primary inline-flex items-center">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2"
            >
              <img 
                src="https://images.pexels.com/photos/2334391/pexels-photo-2334391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Lengo Fresh Farm"
                className="rounded-xl shadow-lg w-full h-auto object-cover"
                style={{ maxHeight: '500px' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Featured Products"
            subtitle="Discover our premium selection of fresh Kenyan produce, known for exceptional quality and flavor."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
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
          
          <div className="text-center mt-12">
            <Link to="/products" className="btn btn-primary inline-flex items-center">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section 
        className="py-24 bg-cover bg-center relative"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'
        }}
      >
        <div className="absolute inset-0 bg-primary-900 bg-opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Source Premium Kenyan Produce?
            </h2>
            <p className="text-xl text-white mb-8">
              Connect with us to discuss wholesale opportunities, custom packaging, or export inquiries.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/exotic-packs" className="btn bg-accent-600 hover:bg-accent-700 text-white">
                Explore Exotic Packs
              </Link>
              <Link to="/contact" className="btn bg-white text-primary-800 hover:bg-gray-100">
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </>
  );
};

export default Home;