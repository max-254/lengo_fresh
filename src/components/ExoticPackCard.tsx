import React from 'react';
import { motion } from 'framer-motion';
import { Package } from 'lucide-react';

interface ExoticPackCardProps {
  title: string;
  image: string;
  useCase: string;
  details: string;
  weight: string;
}

const ExoticPackCard: React.FC<ExoticPackCardProps> = ({
  title,
  image,
  useCase,
  details,
  weight,
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/70 transition-all duration-300"></div>
        <div className="absolute bottom-0 left-0 p-5 w-full">
          <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
          <p className="text-gray-200 text-sm">{useCase}</p>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4">{details}</p>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center text-primary-600">
            <Package className="h-4 w-4 mr-2" />
            <span className="font-medium">Package Weight:</span>
          </div>
          <span>{weight}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ExoticPackCard;