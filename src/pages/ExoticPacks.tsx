import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Package, Star, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ExoticPackCard from '../components/ExoticPackCard';
import Newsletter from '../components/Newsletter';
import { exoticPacks } from '../data/exoticPacks';

const ExoticPacks: React.FC = () => {
  return (
    <>
      <Hero
        title="Exotic Produce Packs"
        subtitle="Pre-packaged combinations designed for retailers and exporters"
        backgroundImage="https://images.pexels.com/photos/2111012/pexels-photo-2111012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Premium Combination Packs"
            subtitle="Our exotic packs combine complementary products in convenient packaging, perfect for retail display and consumer convenience."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {exoticPacks.map((pack) => (
              <ExoticPackCard
                key={pack.id}
                title={pack.title}
                image={pack.image}
                useCase={pack.useCase}
                details={pack.details}
                weight={pack.weight}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Benefits of Our Exotic Packs"
            subtitle="Why our pre-packaged combinations are the preferred choice for retailers and distributors worldwide"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-primary-100 p-4 rounded-full">
                  <Package className="h-10 w-10 text-primary-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Convenience</h3>
              <p className="text-gray-600 text-center">
                Ready-to-display packaging that saves time and reduces handling for retailers while offering consumers convenient combinations.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-primary-100 p-4 rounded-full">
                  <Star className="h-10 w-10 text-primary-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Premium Presentation</h3>
              <p className="text-gray-600 text-center">
                Attractive packaging that highlights product quality and freshness, enhancing retail appeal and commanding premium pricing.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-primary-100 p-4 rounded-full">
                  <Truck className="h-10 w-10 text-primary-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Extended Shelf Life</h3>
              <p className="text-gray-600 text-center">
                Our specialized packaging technology helps maintain product freshness longer, reducing waste and maximizing sales opportunities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Custom Packaging Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Custom Packaging Solutions</h2>
              <p className="text-gray-600 mb-6">
                Beyond our standard exotic packs, we offer custom packaging solutions tailored to your specific requirements.
              </p>
              <p className="text-gray-600 mb-8">
                Whether you need private labeling, custom product combinations, or specific packaging formats, our team can work with you to create the perfect solution for your market.
              </p>
              <Link to="/contact" className="btn btn-primary inline-flex items-center">
                Inquire About Custom Options
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
                src="https://images.pexels.com/photos/6308128/pexels-photo-6308128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Custom Packaging"
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section 
        className="py-24 bg-cover bg-center relative"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/1508666/pexels-photo-1508666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'
        }}
      >
        <div className="absolute inset-0 bg-primary-900 bg-opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Order Exotic Packs?
            </h2>
            <p className="text-xl text-white mb-8">
              Contact our team to discuss wholesale opportunities, pricing, and shipping options.
            </p>
            <Link to="/contact" className="btn bg-white text-primary-800 hover:bg-gray-100">
              Contact Our Sales Team
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </>
  );
};

export default ExoticPacks;