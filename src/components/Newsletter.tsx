import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your API
    // For demo purposes, we'll just simulate success
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <section className="bg-primary-800 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Our Harvest
          </h2>
          <p className="text-gray-200 mb-8">
            Subscribe to receive updates on seasonal availability, new produce, and exclusive wholesale offers.
          </p>
          
          {isSubmitted ? (
            <div className="bg-white bg-opacity-10 rounded-lg p-6 text-white">
              <p className="text-xl font-medium">Thank you for subscribing!</p>
              <p className="mt-2">You'll receive our next update in your inbox.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500"
                required
              />
              <button
                type="submit"
                className="btn bg-accent-600 hover:bg-accent-700 text-white flex items-center justify-center sm:w-auto"
              >
                Subscribe
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;