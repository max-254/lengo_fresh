import React from 'react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  title: string;
  image: string;
  description: string;
  availability: string;
  packaging: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  image,
  description,
  availability,
  packaging,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="card group h-full"
    >
      <div className="relative overflow-hidden h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="space-y-2 text-sm text-gray-700">
          <div className="flex items-center justify-between">
            <span className="font-medium">Availability:</span>
            <span className="text-primary-600">{availability}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">Packaging:</span>
            <span>{packaging}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;