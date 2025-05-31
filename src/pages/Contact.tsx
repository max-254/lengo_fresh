import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';

interface FormState {
  name: string;
  email: string;
  company: string;
  message: string;
  submitted: boolean;
}

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    message: '',
    submitted: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to your server here
    console.log('Form submitted:', formState);
    
    // Simulate form submission success
    setFormState(prev => ({ ...prev, submitted: true }));
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setFormState({
        name: '',
        email: '',
        company: '',
        message: '',
        submitted: false,
      });
    }, 5000);
  };

  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="Get in touch with our team to discuss your fresh produce needs"
        backgroundImage="https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Get In Touch"
            subtitle="Whether you're interested in our products, have questions about our services, or want to discuss potential partnerships, we're here to help."
          />
          
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/3"
            >
              <div className="bg-white rounded-xl shadow-md p-8">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Address</h4>
                      <p className="text-gray-600">
                        Lengo Fresh Ltd<br />
                        Mwea, Kirinyaga County<br />
                        Kenya
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Phone</h4>
                      <p className="text-gray-600">+254 700 000 000</p>
                      <p className="text-gray-600">+254 711 111 111</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600">info@lengofresh.com</p>
                      <p className="text-gray-600">sales@lengofresh.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-full mr-4">
                      <Clock className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Business Hours</h4>
                      <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:w-2/3"
            >
              <div className="bg-white rounded-xl shadow-md p-8">
                <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
                
                {formState.submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <h4 className="text-xl font-medium text-green-800 mb-2">Thank You!</h4>
                    <p className="text-green-600">
                      Your message has been received. We'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formState.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      ></textarea>
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        className="btn btn-primary inline-flex items-center"
                      >
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Location"
            subtitle="Visit our farm and packing facility in Mwea, Kirinyaga County"
          />
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {/* This would typically be a Google Map - using an image placeholder */}
            <img 
              src="https://images.pexels.com/photos/4218883/pexels-photo-4218883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Map of Lengo Fresh Location"
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Export Inquiries Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary-50 rounded-xl p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:w-2/3 lg:pr-12 mb-8 lg:mb-0"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Export Inquiries</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Are you interested in importing our premium Kenyan produce to your country? We have extensive experience with international logistics, customs requirements, and export documentation.
                </p>
                <p className="text-lg text-gray-700">
                  Our export team can provide detailed information about available products, seasonal variations, shipping options, and volume pricing. Contact us today to discuss how we can meet your specific needs.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:w-1/3"
              >
                <img 
                  src="https://images.pexels.com/photos/753331/pexels-photo-753331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Export Services"
                  className="rounded-xl shadow-md w-full h-auto"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our products and services"
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-semibold mb-3">What are your minimum order quantities?</h3>
                <p className="text-gray-600">
                  Minimum order quantities vary by product and destination. For most products, we require a minimum of 100kg for export orders, but we're happy to discuss your specific needs.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-semibold mb-3">How do you ensure product freshness during shipping?</h3>
                <p className="text-gray-600">
                  We utilize a comprehensive cold chain management system, including temperature-controlled storage and shipping containers. All products are carefully packed to maintain optimal freshness throughout transit.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-semibold mb-3">Do you offer private labeling?</h3>
                <p className="text-gray-600">
                  Yes, we offer private labeling services for retailers and distributors. We can customize packaging with your branding, product information, and required certifications.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-semibold mb-3">What certifications do your products have?</h3>
                <p className="text-gray-600">
                  Our products are Global GAP certified, ensuring they meet international standards for food safety, sustainable production methods, and worker welfare. We also hold organic certification for select products.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;