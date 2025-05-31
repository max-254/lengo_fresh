import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Target, Award } from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import Newsletter from '../components/Newsletter';

const About: React.FC = () => {
  return (
    <>
      <Hero
        title="Our Story"
        subtitle="Learn about our journey, mission, and the people behind Lengo Fresh"
        backgroundImage="https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      {/* Company History Section */}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our History</h2>
              <p className="text-gray-600 mb-6">
                Lengo Fresh Ltd was founded in 2010 in the fertile region of Mwea, Kirinyaga County. What began as a modest family farm has grown into one of Kenya's leading exporters of premium fresh produce.
              </p>
              <p className="text-gray-600 mb-6">
                Our journey started when founder James Kamau noticed a gap in the market for high-quality Kenyan produce that met international standards. With a background in agriculture and a passion for sustainability, he established Lengo Fresh with a clear vision: to showcase the best of Kenyan farming while supporting local communities.
              </p>
              <p className="text-gray-600">
                Today, we work with over 200 smallholder farmers across the region, providing training, resources, and fair compensation while maintaining strict quality control to ensure our produce meets the highest global standards.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2"
            >
              <img 
                src="https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Lengo Fresh History"
                className="rounded-xl shadow-lg w-full h-auto object-cover"
                style={{ maxHeight: '500px' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Mission & Vision"
            subtitle="Guided by strong values and a clear purpose"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <div className="flex items-center mb-6">
                <Target className="h-10 w-10 text-primary-600 mr-4" />
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-gray-600 mb-4">
                To provide premium quality Kenyan fresh produce to global markets while promoting sustainable farming practices and supporting local communities.
              </p>
              <p className="text-gray-600">
                We are committed to excellence at every stage - from seed selection and cultivation to harvesting, packaging, and distribution - ensuring our customers receive the finest products while our farmers receive fair compensation for their work.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <div className="flex items-center mb-6">
                <Award className="h-10 w-10 text-primary-600 mr-4" />
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-gray-600 mb-4">
                To be the leading exporter of premium Kenyan fresh produce, recognized globally for quality, sustainability, and positive impact.
              </p>
              <p className="text-gray-600">
                We envision a future where Kenyan produce is celebrated worldwide for its exceptional quality, where our farmers thrive through sustainable practices, and where our operations contribute positively to both local communities and global food systems.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Farm Operations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Farm Operations</h2>
              <p className="text-gray-600 mb-6">
                Nestled in the fertile lands of Kirinyaga County, our farms benefit from Kenya's ideal growing conditions - consistent sunshine, reliable rainfall, and rich, volcanic soil.
              </p>
              <p className="text-gray-600 mb-6">
                We employ a combination of traditional knowledge and modern agricultural technologies to grow our produce sustainably. Our integrated pest management system minimizes chemical use, while our water conservation practices ensure responsible resource management.
              </p>
              <p className="text-gray-600">
                From planting to harvesting, every step is carefully monitored by our experienced agricultural team, ensuring that only the highest quality produce reaches our packing facility.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2"
            >
              <img 
                src="https://images.pexels.com/photos/2894291/pexels-photo-2894291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Lengo Fresh Farm Operations"
                className="rounded-xl shadow-lg w-full h-auto object-cover"
                style={{ maxHeight: '500px' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Location"
            subtitle="Located in the agricultural heartland of Kenya"
          />
          
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2"
            >
              <div className="bg-white p-6 rounded-xl shadow-md mb-6">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-primary-600 mr-3" />
                  <h3 className="text-xl font-semibold">Mwea, Kirinyaga County</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Our main farming operations and packing facility are located in Mwea, part of Kenya's fertile central highlands region.
                </p>
                <p className="text-gray-600">
                  This area is known for its rich soil, favorable climate, and agricultural tradition, making it the perfect location for growing premium quality produce year-round.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4">Why Kirinyaga County?</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    Rich volcanic soil with ideal nutrient composition
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    Consistent rainfall patterns and reliable water sources
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    Moderate temperatures throughout the year
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    Strong agricultural community with generations of farming knowledge
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    Strategic location with good access to transportation routes
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:w-1/2 h-[500px] rounded-xl overflow-hidden shadow-lg"
            >
              {/* This would typically be a Google Map - using an image placeholder */}
              <img 
                src="https://images.pexels.com/photos/6992/forest-trees-northwestisbest-exploress.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Lengo Fresh Location"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Leadership Team"
            subtitle="Meet the dedicated professionals behind Lengo Fresh"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <img 
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="James Kamau"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">James Kamau</h3>
                <p className="text-primary-600 font-medium mb-4">Founder & CEO</p>
                <p className="text-gray-600">
                  With over 20 years in agriculture, James brings expertise in sustainable farming and international trade to lead Lengo Fresh's vision.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <img 
                src="https://images.pexels.com/photos/3760583/pexels-photo-3760583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Sarah Njeri"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Sarah Njeri</h3>
                <p className="text-primary-600 font-medium mb-4">Operations Director</p>
                <p className="text-gray-600">
                  Sarah oversees daily operations, quality control, and logistics, ensuring seamless processes from farm to export.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <img 
                src="https://images.pexels.com/photos/3785424/pexels-photo-3785424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Daniel Omondi"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Daniel Omondi</h3>
                <p className="text-primary-600 font-medium mb-4">Agricultural Director</p>
                <p className="text-gray-600">
                  A specialist in sustainable farming, Daniel leads our agricultural team and farmer outreach programs.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </>
  );
};

export default About;